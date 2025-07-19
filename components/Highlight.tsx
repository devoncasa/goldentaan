
import React from 'react';

interface HighlightProps {
  text: string;
}

const Highlight: React.FC<HighlightProps> = ({ text }) => {
  if (!text) return null;

  // Regex to find "Golden TAAN" or "โกลเด้น ตาล" (case-insensitive for English)
  const brandRegex = /(Golden TAAN|โกลเด้น ตาล)/gi;
  const parts = text.split(brandRegex);

  return (
    <>
      {parts.map((part, index) =>
        brandRegex.test(part) ? (
          <span key={index} className="font-bold" style={{ color: '#B45309' }}>
            {part}
          </span>
        ) : (
          part
        )
      )}
    </>
  );
};

export default Highlight;
