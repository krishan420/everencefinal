"use client";

export const SafeImage = ({ src, alt = "icon-image", className, loading = "lazy", ...rest }) => {
  const fallback = "/small-logo.svg";
  return (
    <img
      src={src || fallback}
      alt={alt}
      className={className}
      onError={(e) => (e.currentTarget.src = fallback)}
      loading={loading}
      
      {...rest}
    />
  );
};

