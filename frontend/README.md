# AI Career GPS - Frontend

## Overview

The frontend of AI Career GPS is built using React and Vite to provide an intuitive interface for resume analysis. It allows users to upload their resume, specify a target job role, and paste a job description. The application communicates with the FastAPI backend to generate an AI-powered career analysis report.

## Features

- Resume PDF upload
- Target job role input
- Job description input
- AI-generated ATS score
- Job match score
- Resume summary
- Strengths and weaknesses analysis
- Missing skills identification
- Resume improvement suggestions
- Suggested project ideas
- Personalized learning roadmap
- Interview question recommendations
- Responsive user interface

## Technologies Used

- React
- Vite
- Tailwind CSS
- React Router
- Axios
- Lucide React

## Installation

```bash
npm install
```

## Run the Application

```bash
npm run dev
```

The frontend will be available at:

```
http://localhost:5173
```

## Backend Connection

The application communicates with the FastAPI backend running on:

```
http://127.0.0.1:8000
```

Update the backend URL in `src/services/api.js` if required.

## Purpose

The frontend focuses on providing a clean and interactive experience while presenting AI-generated career insights in a structured dashboard.