

import React from 'react';
import Accordion from '../components/Accordion';
import StyledText from '../components/StyledText';
import PageSection from '../components/ParallaxSection';
import { useTranslations } from '../hooks/useTranslations';
import { FiArrowRight } from 'react-icons/fi';
import CommunityImpactCard from '../components/CommunityImpactCard';

interface AboutPageProps {
    backgrounds: string[];
}

const AboutPage: React.FC<AboutPageProps> = ({ backgrounds }) => {
    const { t } = useTranslations();

    const palmyraPalmAccordionItems = [
        { image: "https://i.postimg.cc/kXg20sL0/borassus-flabellifer-illustration.png", key: '1' },
        { image: "https://i.postimg.cc/8zQJtV5M/terroir-of-ratchaburi.jpg", key: '2' },
        { image: "https://i.postimg.cc/bNkTg4sV/tree-of-life-historical.jpg", key: '3' }
    ].map(item => ({...item, title: <StyledText text={t(`ourStory.palmyraPalm.items.${item.key}.title`)} />, content: <StyledText text={t(`ourStory.palmyraPalm.items.${item.key}.content`)} /> }));

    const harvestArtAccordionItems = [
        { image: "https://i.postimg.cc/0jWvM7Nn/farmer-climbing-palm-tree.jpg", key: '1' },
        { image: "https://i.postimg.cc/VLzJ7GzP/science-of-simmering.jpg", key: '2' },
        { image: "https://i.postimg.cc/prgQdYvV/nectar-to-crystal.jpg", key: '3' }
    ].map(item => ({ ...item, title: <StyledText text={t(`ourStory.harvestArt.items.${item.key}.title`)} />, content: <StyledText text={t(`ourStory.harvestArt.items.${item.key}.content`)} /> }));

    const commitmentAccordionItems = [
        { image: "https://i.postimg.cc/50tZ8Jp2/ecological-sustainability.jpg", key: '1' },
        { image: "https://i.postimg.cc/Wb7SgDkj/ratchaburi-farming-community.jpg", key: '2' },
        { image: "https://i.postimg.cc/XvjL1ZHy/purity-quality-assurance.jpg", key: '3' },
    ].map(item => ({ ...item, title: <StyledText text={t(`ourStory.commitment.items.${item.key}.title`)} />, content: <StyledText text={t(`ourStory.commitment.items.${item.key}.content`)} /> }));
    
    const AuthorBio = () => (
        <div className="mt-12 pt-6 border-t border-[#c39b6f]/20 text-center">
            <p className="text-sm italic text-[#2c2c2c]/80">
                <StyledText text={t('ourStory.authorBio')} />
            </p>
        </div>
    );

    return (
        <main>
            <PageSection id="legacy" bgImage={backgrounds[3]}>
                <div className="text-center mb-8">
                <img src="https://i.postimg.cc/T3YjD6gQ/golden-taan-legacy-intro.jpg" alt={t('ourStory.legacy.title')} className="w-full h-64 object-cover rounded-lg shadow-md border-2 border-[#c39b6f]" />
            </div>
            <div className="text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-[#2c2c2c] whitespace-pre-line leading-normal"><StyledText text={t('ourStory.legacy.title')} /></h2>
                <p className="mt-4 text-lg md:text-xl text-[#2c2c2c]"><StyledText text={t('ourStory.legacy.subtitle')} /></p>
            </div>
            
            <div className="mt-12 text-left space-y-8">
                <div>
                    <h3 className="text-2xl font-bold text-[#c39b6f] mb-3"><StyledText text={t('ourStory.legacy.rootsTitle')} /></h3>
                    <p className="text-[#2c2c2c] leading-relaxed"><StyledText text={t('ourStory.legacy.rootsText')} /></p>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-[#c39b6f] mb-3"><StyledText text={t('ourStory.legacy.harvestTitle')} /></h3>
                    <p className="text-[#2c2c2c] leading-relaxed"><StyledText text={t('ourStory.legacy.harvestText')} /></p>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-[#c39b6f] mb-3"><StyledText text={t('ourStory.legacy.promiseTitle')} /></h3>
                    <p className="text-[#2c2c2c] leading-relaxed"><StyledText text={t('ourStory.legacy.promiseText')} /></p>
                </div>
            </div>
            </PageSection>

            <PageSection id="palmyra-palm" bgImage={backgrounds[4]}>
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#2c2c2c]"><StyledText text={t('ourStory.palmyraPalm.title')} /></h2>
                    <p className="mt-4 text-lg md:text-xl text-[#2c2c2c]">
                        <StyledText text={t('ourStory.palmyraPalm.subtitle')} />
                    </p>
                    <div className="mt-8 mx-auto w-24 h-1 bg-[#c39b6f]/30 rounded-full" />
                </div>
                <Accordion items={palmyraPalmAccordionItems} defaultOpenIndex={0} />
            </PageSection>
            
            <PageSection id="harvest-art" bgImage={backgrounds[5]}>
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#2c2c2c]"><StyledText text={t('ourStory.harvestArt.title')} /></h2>
                    <p className="mt-4 text-lg md:text-xl text-[#2c2c2c]"><StyledText text={t('ourStory.harvestArt.subtitle')} /></p>
                </div>
                <Accordion items={harvestArtAccordionItems} defaultOpenIndex={0} />
            </PageSection>

            <PageSection id="commitment" bgImage={backgrounds[6]}>
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#2c2c2c]"><StyledText text={t('ourStory.commitment.title')} /></h2>
                    <p className="mt-4 text-lg md:text-xl text-[#2c2c2c]"><StyledText text={t('ourStory.commitment.subtitle')} /></p>
                </div>
                <Accordion items={commitmentAccordionItems} defaultOpenIndex={0} />
                <AuthorBio />
            </PageSection>
        </main>
    );
};

export default AboutPage;