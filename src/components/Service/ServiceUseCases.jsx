import RichText from "@/components/RichText";

export default function ServiceUseCases({ data }) {
  if (!data?.items?.length) return null;

  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          {data.title && (
            <h2 className="text-3xl md:text-4xl font-bold text-[#757373] mb-4">
              <RichText content={data.title} />
            </h2>
          )}

          {data.subtitle && (
            <div className="text-gray-600 text-base md:text-lg">
              <RichText content={data.subtitle} />
            </div>
          )}
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.items.map((item, index) => (
            <article
              key={`${item.title}-${index}`}
              className="bg-white border-2 border-orange-500 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* CARD HEADER */}
              <div className="bg-orange-500 text-white text-center font-semibold py-3 px-4">
                {item.title}
              </div>

              {/* CARD BODY */}
              <div
                className="
                  p-6
                  text-center
                  text-gray-800
                  text-sm
                  md:text-base
                  leading-relaxed

                  [&_a]:text-orange-500
                  [&_a]:font-semibold
                  [&_a]:underline
                  [&_a]:underline-offset-2
                  [&_a]:transition-colors
                  [&_a]:duration-200
                  hover:[&_a]:text-orange-600
                "
              >
                <RichText content={item.description} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}