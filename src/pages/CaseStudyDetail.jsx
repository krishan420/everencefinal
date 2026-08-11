import caseStudies from "../data/caseStudies.json";

export default function CaseStudyDetail({ slug }) {
  const study = Array.isArray(caseStudies)
    ? caseStudies.find(cs => cs.slug === slug)
    : null;

  const caseFlow = Array.isArray(study?.caseFlow)
    ? study.caseFlow
    : [];

  const categoryWiseCaseStudy = Array.isArray(study?.categoryWiseCaseStudy)
    ? study.categoryWiseCaseStudy
    : [];

  const scopeOfWork = Array.isArray(study?.scopeOfWork)
    ? study.scopeOfWork
    : [];

  if (!study) {
    return (
      <div className="py-20 text-center text-gray-600">
        Case study not found
      </div>
    );
  }

  return (
    <main className="bg-white">

      {/* ================= TOP VIDEO BANNER ================= */}
      {study.bannerVideo && (
        <section className="relative h-[220px] sm:h-[280px] md:h-[340px] lg:h-[420px] flex items-center justify-center overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            src={study.bannerVideo}
          />
          <div className="absolute inset-0 bg-white/90" />

          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-700">
              {study.title}
            </h1>
            <p className="mt-4 text-gray-600">
              {study.industry}
            </p>
          </div>
        </section>
      )}

      {/* ================= TOP COVER IMAGE ================= */}
      {study.topImage && (
        <section className="max-w-6xl mx-auto px-6 -mt-16 relative z-20">
          <img
            src={study.topImage}
            alt={study.title}
            className="w-full h-[300px] object-cover rounded-2xl shadow-xl"
          />
        </section>
      )}

      {/* ================= CASE FLOW ================= */}
      {caseFlow.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 py-20 space-y-20">
          {caseFlow.map((block, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start"
            >
              <div className="bg-red-50 border-l-4 border-red-500 p-8 rounded-xl h-full">
                <h3 className="text-xl font-bold text-red-700 mb-3">
                  Problem {index + 1}
                </h3>
                <h4 className="font-semibold mb-3">
                  {block.problemTitle}
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  {block.problemDescription}
                </p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-8 rounded-xl h-full">
                <h3 className="text-xl font-bold text-green-700 mb-3">
                  Solution {index + 1}
                </h3>
                <h4 className="font-semibold mb-3">
                  {block.solutionTitle}
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  {block.solutionDescription}
                </p>
              </div>
            </div>
          ))}
        </section>
      )}

      {/* ================= CATEGORY WISE CASE STUDY ================= */}
      {categoryWiseCaseStudy.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 pb-24 pt-14 space-y-20">
          {categoryWiseCaseStudy.map((item, index) => (
            <div key={index}>
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
                {item.category}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="bg-red-50 border-l-4 border-red-500 p-8 rounded-xl">
                  <h3 className="text-xl font-bold text-red-700 mb-4">
                    Problem
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {item.problem}
                  </p>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 p-8 rounded-xl">
                  <h3 className="text-xl font-bold text-green-700 mb-4">
                    Solution
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {item.solution}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </section>
      )}

      {/* ================= CHERRY + SCOPE ================= */}
      {(study.cherryDescription || scopeOfWork.length > 0) && (
        <section className="max-w-6xl mx-auto px-6 pb-24">
          <div className="bg-white shadow-xl rounded-2xl p-10 space-y-6">

            {study.cherryDescription && (
              <>
                <h2 className="text-2xl font-bold">
                  Cherry on the Cake
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {study.cherryDescription}
                </p>
              </>
            )}

            {scopeOfWork.length > 0 && (
              <>
                <h2 className="text-2xl font-bold">
                  Scope of Work
                </h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {scopeOfWork.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </>
            )}

          </div>
        </section>
      )}

    </main>
  );
}
