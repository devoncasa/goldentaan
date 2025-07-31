
import React from 'react';
import PageSection from '../components/ParallaxSection';
import FaqTable from '../components/FaqTable';
import StyledText from '../components/StyledText';
import { useTranslations } from '../hooks/useTranslations';

interface CompareSugarsPageProps {
    backgrounds: string[];
}

const CompareSugarsPage: React.FC<CompareSugarsPageProps> = ({ backgrounds }) => {
    const { t } = useTranslations();
    return (
        <main>
            <PageSection id="compare-sugars" bgImage={backgrounds[10]}>
                 <div className="text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#2c2c2c]"><StyledText text={t('compareSugars.title')} /></h2>
                    <p className="mt-4 text-lg text-[#2c2c2c] max-w-2xl mx-auto"><StyledText text={t('compareSugars.subtitle')} /></p>
                </div>
                <div className="mt-8">
                    <FaqTable />
                </div>
            </PageSection>
        </main>
    );
};

export default CompareSugarsPage;
