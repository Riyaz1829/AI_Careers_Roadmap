from fastapi import APIRouter

router = APIRouter()


@router.get("/")
def home():
    return {
        "message": "Welcome to AI Career GPS API 🚀"
    }


@router.get("/health")
def health_check():
    return {
        "status": "healthy"
    }