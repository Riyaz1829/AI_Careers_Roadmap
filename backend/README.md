# AI Career GPS - Backend

## Overview

The backend of AI Career GPS is developed using FastAPI and integrates Google's Gemini AI model to analyze resumes against a target job description. It extracts text from uploaded PDF resumes, performs AI-driven analysis, and returns structured career recommendations.

## Features

- Resume PDF processing
- Resume text extraction
- ATS score calculation
- Job match analysis
- Skill gap identification
- Resume improvement recommendations
- Project recommendations
- Personalized learning roadmap
- Interview question generation
- Structured JSON API response

## Technologies Used

- FastAPI
- Python
- Google Gemini API
- PyMuPDF
- Uvicorn
- python-dotenv

## Installation

Create a virtual environment:

```bash
python -m venv .venv
```

Activate the environment:

Windows

```bash
.venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

## Environment Variables

Create a `.env` file in the backend directory.

```
GEMINI_API_KEY=YOUR_API_KEY
```

## Run the Server

```bash
uvicorn main:app --reload
```

The backend will start at:

```
http://127.0.0.1:8000
```

## API Endpoint

### POST `/analyze-resume`

#### Request

Form Data

- file (PDF)
- jobRole
- jobDescription

#### Response

Returns a structured JSON response containing:

- Resume summary
- ATS score
- Job match score
- Strengths
- Weaknesses
- Missing skills
- Resume improvement suggestions
- Suggested projects
- Learning roadmap
- Interview questions
- Final career verdict

## Purpose

The backend serves as the AI processing engine of the application by extracting resume content, interacting with Gemini AI, and delivering comprehensive career guidance through REST APIs.