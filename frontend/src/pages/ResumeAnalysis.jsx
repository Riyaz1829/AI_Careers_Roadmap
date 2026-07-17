import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { uploadResume } from "../services/api";
import ReportDashboard from "../components/ReportDashboard";

function ResumeAnalysis() {
    const navigate = useNavigate();

    const [resume, setResume] = useState(null);
    const [jobRole, setJobRole] = useState("");
    const [jobDescription, setJobDescription] = useState("");

    const [loading, setLoading] = useState(false);
    const [loadingMessage, setLoadingMessage] = useState("");

    const [analysis, setAnalysis] = useState(null);
    const [error, setError] = useState("");

    const handleAnalyze = async () => {
        if (!resume) {
            alert("Please upload your resume.");
            return;
        }

        if (!jobRole.trim()) {
            alert("Please enter the target job role.");
            return;
        }

        if (!jobDescription.trim()) {
            alert("Please paste the job description.");
            return;
        }

        try {
            setLoading(true);
            setAnalysis(null);
            setError("");

            const response = await uploadResume(
                resume,
                jobRole,
                jobDescription
            );

            console.log("Backend Response:", response);

            const parsedAnalysis = JSON.parse(response.analysis);

            setAnalysis(parsedAnalysis);

            // Save latest report for Home Page Preview
            localStorage.setItem(
                "latestAnalysis",
                JSON.stringify(parsedAnalysis)
            );

        } catch (err) {
            console.error(err);

            if (err.response) {
                console.log(err.response.data);
            }

            setError(
                err.response?.data?.detail ||
                err.message ||
                "Something went wrong."
            );
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (!loading) return;

        const messages = [
            "📄 Reading your resume...",
            "🧠 Extracting skills...",
            "🎯 Matching with Job Description...",
            "📊 Calculating ATS Score...",
            "🤖 Generating AI Career Report..."
        ];

        let index = 0;

        setLoadingMessage(messages[0]);

        const interval = setInterval(() => {
            index++;

            if (index < messages.length) {
                setLoadingMessage(messages[index]);
            }
        }, 1500);

        return () => clearInterval(interval);

    }, [loading]);

    return (
        <div className="min-h-screen bg-slate-100 py-12 px-6">

            <div className="max-w-6xl mx-auto">

                {/* Back Button */}
                <button
                    onClick={() => navigate("/")}
                    className="mb-6 flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold"
                >
                    ← Back to Home
                </button>

                <div className="bg-white rounded-2xl shadow-xl p-8">

                    <h1 className="text-4xl font-bold text-slate-900">
                        AI Career GPS
                    </h1>

                    <p className="mt-3 text-gray-600">
                        Upload your resume, select your target role and paste the Job Description.
                        Our AI will compare your resume against the JD and generate a complete
                        ATS & Career Report.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 mt-10">

                        <div>
                            <label className="block font-semibold mb-2">
                                Upload Resume (PDF)
                            </label>

                            <input
                                type="file"
                                accept=".pdf"
                                onChange={(e) => setResume(e.target.files[0])}
                                className="w-full border rounded-lg p-3"
                            />

                            {resume && (
                                <p className="text-green-600 mt-2">
                                    ✅ {resume.name}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="block font-semibold mb-2">
                                Target Job Role
                            </label>

                            <input
                                type="text"
                                placeholder="Example: Software Engineer"
                                value={jobRole}
                                onChange={(e) => setJobRole(e.target.value)}
                                className="w-full border rounded-lg p-3"
                            />
                        </div>

                    </div>

                    <div className="mt-8">

                        <label className="block font-semibold mb-2">
                            Job Description
                        </label>

                        <textarea
                            rows="12"
                            value={jobDescription}
                            onChange={(e) => setJobDescription(e.target.value)}
                            placeholder="Paste complete Job Description..."
                            className="w-full border rounded-lg p-4 resize-none"
                        />

                    </div>

                    <button
                        onClick={handleAnalyze}
                        disabled={loading}
                        className="mt-8 px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 disabled:bg-gray-400"
                    >
                        {loading ? "🤖 AI Working..." : "Analyze Resume"}
                    </button>

                    {loading && (
                        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6 text-center animate-pulse">

                            <div className="text-5xl mb-4">
                                🤖
                            </div>

                            <h3 className="text-xl font-bold text-blue-700">
                                AI Career GPS
                            </h3>

                            <p className="mt-4 text-gray-700 text-lg">
                                {loadingMessage}
                            </p>

                            <div className="mt-6 h-2 bg-blue-100 rounded-full overflow-hidden">
                                <div className="h-full bg-blue-600 w-full animate-pulse"></div>
                            </div>

                        </div>
                    )}

                    {error && (
                        <div className="mt-8 bg-red-100 border border-red-300 rounded-lg p-4 text-red-700">
                            {error}
                        </div>
                    )}

                    {analysis && (
                        <div className="mt-10">
                            <h2 className="text-3xl font-bold mb-6">
                                AI Career Report
                            </h2>

                            <ReportDashboard analysis={analysis} />
                        </div>
                    )}

                </div>

            </div>

        </div>
    );
}

export default ResumeAnalysis;