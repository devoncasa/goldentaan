


import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMessageSquare, FiX } from 'react-icons/fi';
import { CHAT_OPTIONS } from '../constants';
import { useTranslations } from '../hooks/useTranslations';

const LiveChatButton: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useTranslations();

    const popoverVariants = {
        hidden: { opacity: 0, y: 20, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { staggerChildren: 0.1 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="fixed bottom-6 right-6 z-40">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={popoverVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="absolute bottom-20 right-0 bg-white rounded-lg shadow-2xl p-4 w-64 origin-bottom-right border border-gray-200"
                    >
                        <h3 className="font-bold text-center text-[#2c2c2c] mb-3">{t('liveChat.title')}</h3>
                        <div className="space-y-3">
                            {CHAT_OPTIONS.map(option => (
                                <motion.a
                                    key={option.name}
                                    href={option.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    variants={itemVariants}
                                    className="flex items-center p-3 space-x-3 rounded-lg hover:bg-[#c39b6f]/10 transition-colors"
                                >
                                    <span className="text-[#c39b6f]">{option.icon}</span>
                                    <span className="font-medium text-[#2c2c2c]">{option.name}</span>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="bg-[#a5a58d] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
            >
                {isOpen ? <FiX className="w-8 h-8"/> : <FiMessageSquare className="w-8 h-8" />}
            </motion.button>
        </div>
    );
};

export default LiveChatButton;