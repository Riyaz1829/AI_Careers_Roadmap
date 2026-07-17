import os
import time

from dotenv import load_dotenv
from google import genai
from google.genai.errors import APIError

load_dotenv()

client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

MODELS = [
    "gemini-flash-latest",
    "gemini-3.1-flash-lite",
]


def analyze_resume(
    resume_text: str,
    job_role: str,
    job_description: str,
):
    prompt = f"""
You are an Elite ATS Resume Reviewer, Career Coach, Hiring Manager and Technical Interviewer.

Compare the candidate's resume against the target job.

TARGET JOB ROLE:
{job_role}

JOB DESCRIPTION:
{job_description}

CANDIDATE RESUME:
{resume_text}

Return ONLY valid JSON.

Do not include markdown.
Do not include explanations.
Do not wrap the JSON inside triple backticks.

Use exactly this structure:

{{
  "resume_summary": "string",
  "ats_score": 85,
  "job_match_score": 78,
  "strengths": [
    "string"
  ],
  "weaknesses": [
    "string"
  ],
  "missing_skills": [
    "string"
  ],
  "keyword_analysis": [
    "string"
  ],
  "resume_improvements": [
    "string"
  ],
  "suggested_projects": [
    "string"
  ],
  "learning_roadmap": [
    "string"
  ],
  "interview_questions": [
    "string"
  ],
  "final_verdict": "string"
}}
"""

    last_error = None

    for model in MODELS:
        for attempt in range(3):
            try:
                print(f"Trying model: {model} (Attempt {attempt + 1})")

                response = client.models.generate_content(
                    model=model,
                    contents=prompt,
                )

                return response.text

            except APIError as e:
                last_error = e

                if getattr(e, "status_code", None) in (
                    429,
                    500,
                    502,
                    503,
                    504,
                ):
                    time.sleep(2)
                    continue

                break

            except Exception as e:
                last_error = e
                break

    return f"""{{
  "error":"Gemini API unavailable",
  "details":"{last_error}"
}}"""