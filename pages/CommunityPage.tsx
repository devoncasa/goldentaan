
import React from 'react';
import StyledText from '../components/StyledText';
import PageSection from '../components/ParallaxSection';
import { useTranslations } from '../hooks/useTranslations';
import CommunityImpactCard from '../components/CommunityImpactCard';

interface CommunityPageProps {
    backgrounds: string[];
}

const CommunityPage: React.FC<CommunityPageProps> = ({ backgrounds }) => {
    const { t } = useTranslations();

    const AuthorBio = () => (
        <div className="mt-12 pt-6 border-t border-[#c39b6f]/20 text-center">
            <p className="text-sm italic text-[#2c2c2c]/80">
                <StyledText text={t('ourStory.authorBio')} />
            </p>
        </div>
    );
    
    return (
        <main>
            <PageSection id="community" bgImage={backgrounds[7]}>
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#2c2c2c]"><StyledText text={t('ourStory.communityImpact.title')} /></h2>
                    <p className="mt-4 text-lg md:text-xl text-[#2c2c2c] max-w-3xl mx-auto">
                        <StyledText text={t('ourStory.communityImpact.subtitle')} />
                    </p>
                </div>
                <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {t('ourStory.communityImpact.items').map((item: any, index: number) => (
                        <CommunityImpactCard
                            key={index}
                            icon={item.icon}
                            title={item.title}
                            text={item.text}
                        />
                    ))}
                </div>
                <AuthorBio />
            </PageSection>
        </main>
    );
};

export default CommunityPage;
