
import React from 'react';
import StyledText from '../components/StyledText';
import PageSection from '../components/ParallaxSection';
import { useTranslations } from '../hooks/useTranslations';
import { FiMail, FiPhone, FiMapPin, FiCheck } from 'react-icons/fi';

interface ContactPageProps {
    backgrounds: string[];
}

const ContactPage: React.FC<ContactPageProps> = ({ backgrounds }) => {
    const { t } = useTranslations();
    
    return (
        <main>
            <PageSection id="partnership" bgImage={backgrounds[12]}>
                <div className="text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#2c2c2c]"><StyledText text={t('partnership.title')} /></h2>
                    <p className="mt-6 text-lg text-[#2c2c2c] max-w-2xl mx-auto"><StyledText text={t('partnership.content')} /></p>
                    <a href="#contact-form" className="mt-8 inline-block bg-[#a5a58d] text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-[#8f8f74] transition-colors cursor-pointer transform hover:scale-105 shadow-xl">
                        <StyledText text={t('partnership.button')} />
                    </a>
                </div>
                <div className="mt-12">
                    <h3 className="text-center text-xl font-semibold text-[#2c2c2c]"><StyledText text={t('partnership.formatsTitle')} /></h3>
                    <div className="mt-4 flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-[#2c2c2c]">
                        {t('partnership.formats').map((format: string) => (
                            <div key={format} className="flex items-center space-x-2">
                                <FiCheck className="text-[#a5a58d]"/>
                                <span><StyledText text={format} /></span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-[#c39b6f]/20 flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-[#2c2c2c]">
                    {t('partnership.badges').map((badge: any) => (
                        <div key={badge.text} className="flex items-center space-x-2">
                            <span className="text-2xl">{badge.icon}</span>
                            <span className="font-medium"><StyledText text={badge.text} /></span>
                        </div>
                    ))}
                </div>
            </PageSection>
            
            <PageSection id="contact" bgImage={backgrounds[13]}>
                <div className="text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#2c2c2c]"><StyledText text={t('contact.title')} /></h2>
                    <p className="mt-6 text-lg text-[#2c2c2c]"><StyledText text={t('contact.subtitle')} /></p>
                </div>
                <div id="contact-form" className="mt-16 grid md:grid-cols-2 gap-12 items-start">
                    <div className="space-y-6">
                        <div className="mb-6">
                            <img src="https://i.postimg.cc/P5gSz5gd/hero-section-background-0052.webp" alt={t('contact.title')} className="rounded-lg shadow-md w-full h-48 object-cover border-2 border-[#c39b6f]" />
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="bg-[#c39b6f]/10 p-3 rounded-full text-[#c39b6f] mt-1"><FiMapPin className="w-6 h-6"/></div>
                            <div>
                                <h3 className="text-xl font-bold text-[#2c2c2c]"><StyledText text={t('contact.addressTitle')} /></h3>
                                <p className="text-[#2c2c2c]"><StyledText text={t('contact.addressText')} /></p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="bg-[#c39b6f]/10 p-3 rounded-full text-[#c39b6f] mt-1"><FiPhone className="w-6 h-6"/></div>
                            <div>
                                <h3 className="text-xl font-bold text-[#2c2c2c]"><StyledText text={t('contact.phoneTitle')} /></h3>
                                <p className="text-[#2c2c2c]">
                                    <a href="tel:+66968615795" className="hover:underline hover:text-[#a5a58d]">+66 (0)96 861 5795</a>
                                </p>
                                <p className="text-sm text-[#2c2c2c]/80"><StyledText text={t('contact.phoneHours')} /></p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="bg-[#c39b6f]/10 p-3 rounded-full text-[#c39b6f] mt-1"><FiMail className="w-6 h-6"/></div>
                            <div>
                                <h3 className="text-xl font-bold text-[#2c2c2c]"><StyledText text={t('contact.emailTitle')} /></h3>
                                <p className="text-[#2c2c2c]">
                                    <a href={`mailto:${t('contact.emailLink')}`} className="hover:underline hover:text-[#a5a58d]"><StyledText text={t('contact.emailLink')} /></a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-[#c39b6f]">
                        <h3 className="text-2xl font-bold text-[#2c2c2c] mb-6"><StyledText text={t('contact.formTitle')} /></h3>
                        <form action={`mailto:${t('contact.emailLink')}`} method="post" encType="text/plain" className="space-y-5">
                            <input type="text" name="name" placeholder={t('contact.form.name')} required className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-[#c39b6f] focus:outline-none"/>
                            <input type="email" name="email" placeholder={t('contact.form.email')} required className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-[#c39b6f] focus:outline-none"/>
                            <input type="text" name="subject" placeholder={t('contact.form.subject')} required className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-[#c39b6f] focus:outline-none"/>
                            <textarea name="message" placeholder={t('contact.form.message')} rows={5} required className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-[#c39b6f] focus:outline-none"></textarea>
                            <button type="submit" className="w-full bg-[#a5a58d] text-white font-bold py-3 px-4 rounded-lg hover:bg-[#8f8f74] transition-colors text-lg"><StyledText text={t('contact.form.button')} /></button>
                        </form>
                    </div>
                </div>
                <div className="pt-8 mt-8 border-t border-[#c39b6f]/20">
                    <iframe 
                    src="https://maps.google.com/maps?q=Golden%20Taan%2C%2096%2F3%20Moo.2%2C%20T.%20Wanyai%2C%20A.%20Bang%20Phae%2C%20Ratchaburi%2070160%2C%20Thailand&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                    width="100%" 
                    height="350" 
                    style={{ border: 0 }} 
                    allowFullScreen={false}
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg shadow-md"
                    ></iframe>
                </div>
            </PageSection>
        </main>
    );
}

export default ContactPage;
