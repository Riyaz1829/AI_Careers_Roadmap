import { Link } from "react-router-dom";

function Hero() {
  const latestAnalysis = JSON.parse(
    localStorage.getItem("latestAnalysis") || "null"
  );

  const resumeScore = latestAnalysis?.ats_score ?? 88;
  const skillMatch = latestAnalysis?.job_match_score ?? 76;
  const missingSkills = latestAnalysis?.missing_skills?.length ?? 5;

  return (
    <section className="min-h-[90vh] bg-slate-100 flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div>
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
            🚀 AI-Powered Career Assistant
          </span>

          <h1 className="mt-6 text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight">
            Land Your
            <span className="text-blue-600"> Dream Job </span>
            with AI
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Upload your resume, compare it with any job description, identify
            missing skills, receive a personalized roadmap, and prepare for
            interviews—all in one intelligent platform.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/analyze">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition">
                Analyze Resume
              </button>
            </Link>

            <button className="border border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition">
              View Demo
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-slate-900">
              AI Analysis Preview
            </h3>

            <div className="mt-6 space-y-4">
              <div className="flex justify-between">
                <span>Resume Score</span>
                <span className="font-bold text-green-600">
                  {resumeScore}%
                </span>
              </div>

              <div className="flex justify-between">
                <span>Skill Match</span>
                <span className="font-bold text-blue-600">
                  {skillMatch}%
                </span>
              </div>

              <div className="flex justify-between">
                <span>Missing Skills</span>
                <span className="font-bold text-red-500">
                  {missingSkills}
                </span>
              </div>

              <div className="mt-6 h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-600 rounded-full transition-all duration-700"
                  style={{ width: `${resumeScore}%` }}
                ></div>
              </div>

              <p className="mt-4 text-gray-600 text-sm">
                {latestAnalysis
                  ? "Showing your latest AI resume analysis."
                  : "Analyze your resume to see personalized ATS insights here."}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;