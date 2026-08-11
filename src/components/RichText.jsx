import Link from "next/link";

/**
 * Supported formats:
 *
 * 1. Plain string:
 * "This is normal text"
 *
 * 2. Single link:
 * {
 *   text: "Digital Compliance",
 *   link: "/services/digital-compliance",
 *   color: "text-orange-500"
 * }
 *
 * 3. Mixed content:
 * [
 *   "Uncover hidden exposures before they threaten ",
 *   {
 *     text: "regulatory compliance",
 *     link: "/services/digital-compliance",
 *     color: "text-orange-500"
 *   },
 *   " or erode customer trust."
 * ]
 */

export default function RichText({
  content,
  defaultLinkClass = "text-orange-500 hover:underline",
}) {
  // Handle empty values
  if (content === null || content === undefined || content === "") {
    return null;
  }

  /**
   * Render individual content item
   */
  const renderItem = (item, index) => {
    // Plain text
    if (typeof item === "string" || typeof item === "number") {
      return (
        <span key={`text-${index}`}>
          {item}
        </span>
      );
    }

    // Invalid value
    if (!item || typeof item !== "object") {
      return null;
    }

    // Link object
    if (item.link && item.text) {
      const linkClassName = item.color
        ? `${item.color} hover:underline`
        : defaultLinkClass;

      return (
        <Link
          key={`link-${index}-${item.link}`}
          href={item.link}
          className={`${linkClassName} transition-colors duration-200`}
        >
          {item.text}
        </Link>
      );
    }

    // Object containing only text
    if (item.text) {
      return (
        <span key={`text-${index}`}>
          {item.text}
        </span>
      );
    }

    return null;
  };

  // Plain string or number
  if (typeof content === "string" || typeof content === "number") {
    return <>{content}</>;
  }

  // Mixed content array
  if (Array.isArray(content)) {
    return (
      <>
        {content.map((item, index) =>
          renderItem(item, index)
        )}
      </>
    );
  }

  // Single object
  if (typeof content === "object") {
    return renderItem(content, 0);
  }

  return null;
}