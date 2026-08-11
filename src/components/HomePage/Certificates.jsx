const certificates = [
  {
    name: "ISO 9001",
    logo: "/courseImages/cert1.png",
  },
  {
    name: "MSME",
    logo: "/courseImages/cert3.png",
  },
  {
    name: "LEAD AUDITOR ISO 27001",
    logo: "/courseImages/cert5.png",
  },
  {
    name: "ISO/IEC 27037:2012",
    logo: "/courseImages/certification.png",
  },
  {
    name: "ISO/IEC 17025",
    logo: "/courseImages/ISO-logo@2x.png",
  },
];

export default function Certifications() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#757373]">
            Certifications & Accreditations
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            Our work is backed by recognised certifications and industry
            accreditations that reflect our commitment to forensic accuracy,
            operational integrity, and global compliance standards.
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {certificates.map((item, index) => (
            <div
              key={index}
              className="
                group
                bg-white
                rounded-2xl
                border
                border-slate-100
                shadow-sm
                transition-all
                duration-300
                hover:shadow-xl
                hover:shadow-orange-200/60
                hover:ring-1
                hover:ring-orange-200
                overflow-hidden
                h-[160px]
                hover:h-[200px]
              "
            >
              <div className="h-full flex flex-col items-center justify-center gap-3 px-6">
                
                {/* Icon */}
                <img
                  src={item.logo}
                  alt={item.name}
                  className="max-h-20 w-auto object-contain"
                />

                {/* Title (revealed on hover) */}
                <h3
                  className="
                    text-sm
                    font-semibold
                    text-slate-700
                    text-center
                    opacity-0
                    translate-y-3
                    transition-all
                    duration-300
                    group-hover:opacity-100
                    group-hover:translate-y-0
                  "
                >
                  {item.name}
                </h3>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
