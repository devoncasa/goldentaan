

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import StyledText from '../components/StyledText';
import PageSection from '../components/ParallaxSection';
import { useTranslations } from '../hooks/useTranslations';
import { FiChevronDown } from 'react-icons/fi';

interface FaqPageProps {
    backgrounds: string[];
}

const FAQItem: React.FC<{ faqData: any; index: number }> = ({ faqData, index }) => {
    const [isOpen, setIsOpen] = useState(index === 0);

    return (
        <div className="border-b border-[#c39b6f]/20 py-4">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-left text-lg font-semibold text-[#2c2c2c]"
            >
                <StyledText as="span" text={faqData.question} />
                <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
                    <FiChevronDown />
                </motion.div>
            </button>
            <motion.div
                initial={false}
                animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0, marginTop: isOpen ? '1rem' : '0rem' }}
                className="overflow-hidden"
            >
                <div className="text-[#2c2c2c] leading-relaxed pt-4 whitespace-pre-line"><StyledText text={faqData.answer} /></div>
            </motion.div>
        </div>
    );
};

const FaqPage: React.FC<FaqPageProps> = ({ backgrounds }) => {
    const { t } = useTranslations();
    const translatedFaqs = Object.values(t('faq.items'));
    
    return (
        <main>
            <PageSection id="faq" bgImage={backgrounds[11]}>
                <h2 className="text-4xl md:text-5xl font-bold text-center text-[#2c2c2c]"><StyledText text={t('faq.title')} /></h2>
                <div className="mt-12">
                    {translatedFaqs.map((faq, index) => (
                        <FAQItem key={index} faqData={faq} index={index} />
                    ))}
                </div>
            </PageSection>
        </main>
    );
};

export default FaqPage;