import React, { useEffect } from 'react';
import { useTranslations } from '../hooks/useTranslations';

const MetaTagManager: React.FC = () => {
    const { t, language } = useTranslations();

    useEffect(() => {
        if (!t) return;

        // Manage Title
        const title = t('meta.title');
        if (title) {
            document.title = title;
        }
        
        // Manage Description
        const description = t('meta.description');
        const descElement = document.querySelector('meta[name="description"]');
        if (descElement && description) {
            descElement.setAttribute('content', description);
        }

        // Manage lang attribute on <html>
        const htmlElement = document.documentElement;
        if(htmlElement && htmlElement.lang !== language) {
            htmlElement.lang = language;
        }

    }, [t, language]);

    return null; // This component does not render anything
}
export default MetaTagManager;
