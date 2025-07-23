
import React from 'react';
import { SOCIAL_LINKS, CERTIFICATION_ICONS } from '../constants';
import { useTranslations } from '../hooks/useTranslations';
import StyledText from './StyledText';

const Footer: React.FC = () => {
  const { t } = useTranslations();

  return (
    <footer className="bg-[#EAE8E3] text-[#3D2B1F]">
      <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-semibold text-[#A0522D]"><StyledText text={t('footer.brandName')} /></h3>
            <p className="mt-4 text-[#3D2B1F]/90 max-w-md">
              <StyledText text={t('footer.description')} />
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold tracking-wider uppercase text-[#A0522D]"><StyledText text={t('footer.quickLinksTitle')} /></h4>
            <ul className="mt-4 space-y-2">
              <li><a href="#home" className="text-[#3D2B1F] hover:text-[#556B2F] cursor-pointer"><StyledText text={t('footer.linkHome')} /></a></li>
              <li><a href="#legacy" className="text-[#3D2B1F] hover:text-[#556B2F] cursor-pointer"><StyledText text={t('footer.linkStory')} /></a></li>
              <li><a href="#products" className="text-[#3D2B1F] hover:text-[#556B2F] cursor-pointer"><StyledText text={t('footer.linkProducts')} /></a></li>
              <li><a href="#faq" className="text-[#3D2B1F] hover:text-[#556B2F] cursor-pointer"><StyledText text={t('footer.linkFaq')} /></a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold tracking-wider uppercase text-[#A0522D]"><StyledText text={t('footer.connectTitle')} /></h4>
            <div className="mt-4 flex space-x-6">
              {SOCIAL_LINKS.map(link => (
                <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="text-[#3D2B1F] hover:text-[#556B2F] text-2xl">
                  <span className="sr-only">{link.name}</span>
                  {link.icon}
                </a>
              ))}
            </div>
            <div className="mt-6">
                <h4 className="text-lg font-semibold tracking-wider uppercase text-[#A0522D]"><StyledText text={t('footer.certifiedTitle')} /></h4>
                <div className="flex space-x-4 mt-4">
                    {CERTIFICATION_ICONS.map(icon => (
                        <img key={icon.alt} src={icon.src} alt={icon.alt} className="h-12 w-12 rounded-full object-cover border-2 border-[#A0522D]" />
                    ))}
                </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-[#A0522D]/30 pt-8 text-center text-[#3D2B1F]/80">
          <p><StyledText text={t('footer.copyright')} /></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;