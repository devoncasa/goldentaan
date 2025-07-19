
import React from 'react';
import { createPortal } from 'react-dom';

interface JsonLdScriptProps {
  schema: object;
}

const JsonLdScript: React.FC<JsonLdScriptProps> = ({ schema }) => {
  if (typeof window === 'undefined') {
    return null;
  }
  
  // Use a portal to render the script tag directly into the document head
  return createPortal(
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />,
    document.head
  );
};

export default JsonLdScript;
