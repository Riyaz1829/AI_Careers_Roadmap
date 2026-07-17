from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.routes import router as base_router
from app.api.upload import router as upload_router

app = FastAPI(
    title="AI Career GPS API",
    version="1.0.0",
    description="Backend API for AI Career GPS",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    expose_headers=["*"],
)

app.include_router(base_router)
app.include_router(upload_router)