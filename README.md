# AI Career GPS

## Overview

AI Career GPS is an AI-powered career guidance platform that helps students and job seekers improve their resumes by comparing them against a target job description. The application provides personalized recommendations, identifies skill gaps, and generates a career roadmap to increase the chances of getting shortlisted for interviews.

---

## Problem Statement

Many students and job seekers submit resumes without knowing whether they meet the requirements of their target role. Traditional resume reviews often focus only on formatting and keywords, providing limited guidance on improving employability.

AI Career GPS addresses this challenge by using Artificial Intelligence to analyze resumes, compare them with job descriptions, and generate actionable career recommendations.

---

## Features

- Resume PDF Upload
- ATS Score Analysis
- Job Match Score
- Resume Summary
- Strengths Analysis
- Weaknesses Analysis
- Missing Skills Detection
- Resume Improvement Suggestions
- Personalized Project Recommendations
- Learning Roadmap
- AI-Generated Interview Questions
- Final Career Verdict
- Responsive User Interface

---

## How It Works

1. Upload your resume in PDF format.
2. Enter your target job role.
3. Paste the job description.
4. The backend extracts text from the resume.
5. Google Gemini AI compares the resume with the job description.
6. A detailed career analysis report is generated.

---

## Technology Stack

### Frontend

- React
- Vite
- Tailwind CSS
- React Router
- Axios
- Lucide React

### Backend

- Python
- FastAPI
- Uvicorn
- PyMuPDF
- python-dotenv

### AI Model

- Google Gemini 2.5 Flash

### Tools

- Git
- GitHub
- Visual Studio Code
- Postman

---

## Project Structure

```
AI_Careers_Roadmap/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── app/
│   ├── requirements.txt
│   └── .env
│
└── README.md
```

---

## Installation

### Clone the Repository

```bash
git clone https://github.com/Riyaz1829/AI_Careers_Roadmap.git
```

```bash
cd AI_Careers_Roadmap
```

---

## Backend Setup

```bash
cd backend
```

Create a virtual environment:

```bash
python -m venv venv
```

Activate it:

### Windows

```bash
venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Create a `.env` file:

```env
GEMINI_API_KEY=YOUR_API_KEY
```

Start the backend:

```bash
uvicorn app.main:app --reload
```

Backend URL:

```
http://127.0.0.1:8000
```

---

## Frontend Setup

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run the application:

```bash
npm run dev
```

Frontend URL:

```
http://localhost:5173
```

---

## API Endpoint

### POST

```
/analyze-resume
```

Request:

- Resume PDF
- Job Role
- Job Description

Response:

- ATS Score
- Job Match Score
- Resume Summary
- Strengths
- Weaknesses
- Missing Skills
- Resume Improvements
- Suggested Projects
- Learning Roadmap
- Interview Questions
- Final Career Verdict

---

## Future Improvements

- Resume PDF Report Download
- Resume Version Comparison
- Multiple Resume Support
- Company-specific Resume Analysis
- Resume History Dashboard
- Authentication and User Profiles

---

## Author

**Riyaz Shaik**

GitHub: https://github.com/Riyaz1829
