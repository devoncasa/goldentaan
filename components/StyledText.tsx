import React from 'react';

interface StyledTextProps {
  text: string;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
}

const StyledText: React.FC<StyledTextProps> = ({ text, as: Component = 'span', className }) => {
  if (!text) {
    return null;
  }

  // Regex to match brand names or text wrapped in asterisks for italics.
  const regex = /(\*.*?\*|Golden Taan|โกลเด้น ตาล)/g;
  const parts = text.split(regex);

  const styledText = parts.map((part, index) => {
    if (!part) return null;

    if (part === "Golden Taan" || part === "โกลเด้น ตาล") {
      return <span key={index} className="brand-name">{part}</span>;
    }

    if (part.startsWith('*') && part.endsWith('*')) {
      // Remove the asterisks and wrap in <em> for italics
      return <em key={index}>{part.slice(1, -1)}</em>;
    }
    
    return part;
  });
  
  return React.createElement(Component, { className }, ...styledText);
};

export default StyledText;
