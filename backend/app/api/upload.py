from fastapi import APIRouter, UploadFile, File, Form
import os
import shutil

from app.services.pdf_service import extract_text_from_pdf
from app.services.gemini_service import analyze_resume

router = APIRouter()

UPLOAD_FOLDER = "app/uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)


@router.post("/upload")
async def upload_resume(
    file: UploadFile = File(...),
    jobRole: str = Form(...),
    jobDescription: str = Form(...)
):
    # Save uploaded resume
    file_path = os.path.join(UPLOAD_FOLDER, file.filename)

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    # Extract resume text
    resume_text = extract_text_from_pdf(file_path)

    # Send all information to Gemini
    analysis = analyze_resume(
        resume_text=resume_text,
        job_role=jobRole,
        job_description=jobDescription,
    )

    return {
        "message": "Resume uploaded successfully!",
        "filename": file.filename,
        "jobRole": jobRole,
        "analysis": analysis,
    }