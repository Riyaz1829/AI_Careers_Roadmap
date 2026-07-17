import {
  Gauge,
  Target,
  FileText,
  CircleCheckBig,
  CircleAlert,
  BadgeX,
  FilePenLine,
  FolderKanban,
  GraduationCap,
  MessageCircleQuestion,
  Award,
} from "lucide-react";

function ReportDashboard({ analysis }) {
  const SectionCard = ({
    title,
    items,
    icon: Icon,
    iconColor,
    badgeColor,
  }) => (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-center gap-3 mb-5">
        <div className={`p-2 rounded-lg ${iconColor}`}>
          <Icon size={22} className="text-white" />
        </div>

        <h2 className="text-xl font-bold text-slate-800">
          {title}
        </h2>
      </div>

      <div className="flex flex-wrap gap-3">
        {items.map((item, index) => (
          <span
            key={index}
            className={`px-4 py-2 rounded-full text-sm font-medium text-white ${badgeColor}`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <div className="space-y-8">

      {/* Score Cards */}

      <div className="grid lg:grid-cols-2 gap-6">

        <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-xl p-8">

          <div className="flex justify-between items-center">

            <div>

              <div className="flex items-center gap-2 text-blue-100">
                <Gauge size={22} />
                <span className="font-semibold">
                  ATS Score
                </span>
              </div>

              <h1 className="text-6xl font-bold mt-4">
                {analysis.ats_score}%
              </h1>

              <p className="mt-4 text-blue-100">
                Resume ATS Compatibility
              </p>

            </div>

            <Gauge size={70} />

          </div>

        </div>

        <div className="rounded-3xl bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-xl p-8">

          <div className="flex justify-between items-center">

            <div>

              <div className="flex items-center gap-2 text-green-100">
                <Target size={22} />
                <span className="font-semibold">
                  Job Match Score
                </span>
              </div>

              <h1 className="text-6xl font-bold mt-4">
                {analysis.job_match_score}%
              </h1>

              <p className="mt-4 text-green-100">
                Match with Target Job
              </p>

            </div>

            <Target size={70} />

          </div>

        </div>

      </div>

      {/* Resume Summary */}

      <div className="bg-white rounded-2xl shadow-lg p-7 hover:shadow-xl transition-all duration-300">

        <div className="flex items-center gap-3 mb-5">

          <div className="bg-indigo-600 p-2 rounded-lg">
            <FileText className="text-white" size={22} />
          </div>

          <h2 className="text-2xl font-bold text-slate-800">
            Resume Summary
          </h2>

        </div>

        <p className="text-gray-700 leading-8">
          {analysis.resume_summary}
        </p>

      </div>

      {/* Analysis Cards */}

      <div className="grid lg:grid-cols-2 gap-6">

        <SectionCard
          title="Strengths"
          items={analysis.strengths}
          icon={CircleCheckBig}
          iconColor="bg-green-600"
          badgeColor="bg-green-500"
        />

        <SectionCard
          title="Weaknesses"
          items={analysis.weaknesses}
          icon={CircleAlert}
          iconColor="bg-red-600"
          badgeColor="bg-red-500"
        />

        <SectionCard
          title="Missing Skills"
          items={analysis.missing_skills}
          icon={BadgeX}
          iconColor="bg-orange-600"
          badgeColor="bg-orange-500"
        />

        <SectionCard
          title="Resume Improvements"
          items={analysis.resume_improvements}
          icon={FilePenLine}
          iconColor="bg-blue-600"
          badgeColor="bg-blue-500"
        />

        <SectionCard
          title="Suggested Projects"
          items={analysis.suggested_projects}
          icon={FolderKanban}
          iconColor="bg-purple-600"
          badgeColor="bg-purple-500"
        />

        <SectionCard
          title="Learning Roadmap"
          items={analysis.learning_roadmap}
          icon={GraduationCap}
          iconColor="bg-indigo-600"
          badgeColor="bg-indigo-500"
        />

      </div>

      {/* Interview Questions */}

      <div className="bg-white rounded-2xl shadow-lg p-7 hover:shadow-xl transition-all duration-300">

        <div className="flex items-center gap-3 mb-5">

          <div className="bg-cyan-600 p-2 rounded-lg">
            <MessageCircleQuestion
              className="text-white"
              size={22}
            />
          </div>

          <h2 className="text-2xl font-bold text-slate-800">
            Interview Questions
          </h2>

        </div>

        <ol className="space-y-4 list-decimal ml-6">

          {analysis.interview_questions.map((question, index) => (

            <li
              key={index}
              className="text-gray-700 leading-7"
            >
              {question}
            </li>

          ))}

        </ol>

      </div>

      {/* Final Verdict */}

      <div className="rounded-3xl bg-gradient-to-r from-indigo-600 to-purple-700 text-white shadow-xl p-8">

        <div className="flex items-center gap-3 mb-5">

          <Award size={28} />

          <h2 className="text-3xl font-bold">
            Final Verdict
          </h2>

        </div>

        <p className="text-lg leading-8">
          {analysis.final_verdict}
        </p>

      </div>

    </div>
  );
}

export default ReportDashboard;