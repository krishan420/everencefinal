import { Helmet } from "react-helmet-async";

export default function SEO({ seo }) {
  if (!seo) return null;

  return (
    <Helmet>
      <title>{seo.metaTitle}</title>
      <meta name="description" content={seo.metaDescription} />
      <meta name="keywords" content={seo.metaKeywords} />
      <link rel="canonical" href={seo.canonicalTag} />

      {seo.schema && (
        <script type="application/ld+json">
          {JSON.stringify(
            {
              "@context": "https://schema.org",
              ...seo.schema
            },
            null,
            2
          )}
        </script>
      )}
    </Helmet>
  );
}
