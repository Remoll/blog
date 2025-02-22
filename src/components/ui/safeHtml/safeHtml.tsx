import React from "react";
import sanitizeHtml from "sanitize-html";

interface SafeHtmlProps {
  html: string;
}

const SafeHtml = ({ html }: SafeHtmlProps) => {
  const cleanHtml = sanitizeHtml(html);
  return <div dangerouslySetInnerHTML={{ __html: cleanHtml }} />;
};

export default SafeHtml;
