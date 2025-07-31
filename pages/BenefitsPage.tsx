
import React from 'react';
import PageSection from '../components/ParallaxSection';
import Accordion from '../components/Accordion';
import StyledText from '../components/StyledText';
import { useTranslations } from '../hooks/useTranslations';

interface BenefitsPageProps {
    backgrounds: string[];
}

const BenefitsPage: React.FC<BenefitsPageProps> = ({ backgrounds }) => {
    const { t } = useTranslations();

    const healthBenefitsAccordionItems = [
        { image: "https://i.postimg.cc/J0P5zKcg/low-glycemic-index.jpg", key: '1' },
        { image: "https://i.postimg.cc/9M3g0x7r/rich-in-minerals.jpg", key: '2' },
        { image: "https://i.postimg.cc/44rY4M9W/natural-electrolytes.jpg", key: '3' },
        { image: "https://i.postimg.cc/pT3Y3g4J/clean-label-promise.jpg", key: '4' }
    ].map(item => ({ 
        ...item, 
        title: <StyledText text={t(`benefits.items.${item.key}.title`)} />, 
        content: <StyledText text={t(`benefits.items.${item.key}.content`)} /> 
    }));
    
    return (
        <main>
            <PageSection id="benefits" bgImage={backgrounds[9]}>
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#2c2c2c]"><StyledText text={t('benefitsPage.title')} /></h2>
                    <p className="mt-4 text-lg text-[#2c2c2c] max-w-2xl mx-auto"><StyledText text={t('benefitsPage.subtitle')} /></p>
                </div>
                <Accordion items={healthBenefitsAccordionItems} defaultOpenIndex={0} />
            </PageSection>
        </main>
    );
};

export default BenefitsPage;
