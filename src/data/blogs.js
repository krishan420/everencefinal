import ReactMarkdown from 'react-markdown';
// src/utils/slugify.js
export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/['"]/g, "")          // remove quotes
    .replace(/[^a-z0-9]+/g, "-")   // replace non-alphanum with dashes
    .replace(/(^-|-$)/g, "");      // remove leading/trailing dash
}


export const blogs = [




];
