
import React from 'react';
import StyledText from './StyledText';

interface CommunityImpactCardProps {
  icon: string;
  title: string;
  text: string;
}

const CommunityImpactCard: React.FC<CommunityImpactCardProps> = ({ icon, title, text }) => {
  return (
    <div className="bg-[#556B2F]/5 p-6 rounded-lg text-center flex flex-col items-center border border-transparent hover:border-[#A0522D]/50 hover:shadow-md transition-all">
        <div className="text-5xl mb-4">{icon}</div>
        <h3 className="text-xl font-bold text-[#3D2B1F] mb-2"><StyledText text={title} /></h3>
        <p className="text-[#3D2B1F]/90 flex-grow"><StyledText text={text} /></p>
    </div>
  );
};

export default CommunityImpactCard;