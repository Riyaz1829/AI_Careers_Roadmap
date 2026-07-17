function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-slate-900">
          Why Choose AI Career GPS?
        </h2>

        <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
          Everything you need to bridge the gap between your current skills and
          your dream job.
        </p>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-slate-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition">
            <div className="text-5xl">📄</div>

            <h3 className="mt-6 text-2xl font-bold">
              Resume Analysis
            </h3>

            <p className="mt-3 text-gray-600">
              Upload your resume and receive detailed AI-powered insights about
              your strengths, weaknesses, and missing skills.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition">
            <div className="text-5xl">🎯</div>

            <h3 className="mt-6 text-2xl font-bold">
              Skill Gap Detection
            </h3>

            <p className="mt-3 text-gray-600">
              Compare your resume with any job description and instantly
              identify the skills you need to learn.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-slate-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition">
            <div className="text-5xl">🚀</div>

            <h3 className="mt-6 text-2xl font-bold">
              Personalized Roadmap
            </h3>

            <p className="mt-3 text-gray-600">
              Get an AI-generated learning roadmap with recommended courses,
              projects, and interview preparation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;