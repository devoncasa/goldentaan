import React, { useEffect, useRef, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale, Title, RadarController, PointElement, LineElement, RadialLinearScale, Filler, type ChartOptions } from 'chart.js';
import { Doughnut, Bar, Radar } from 'react-chartjs-2';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslations } from '../hooks/useTranslations';
import StyledText from './StyledText';

ChartJS.register(ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale, Title, RadarController, PointElement, LineElement, RadialLinearScale, Filler);

const AnimatedCounter: React.FC<{ target: number; prefix?: string; suffix?: string; isVisible: boolean; }> = ({ target, prefix = '', suffix = '', isVisible }) => {
    const [displayValue, setDisplayValue] = useState(`${prefix}0${suffix}`);
    const countRef = useRef<number>(0);

    useEffect(() => {
        if (isVisible) {
            const duration = 1500;
            const stepTime = 20;
            const steps = duration / stepTime;
            const increment = target / steps;

            const step = () => {
                countRef.current += increment;
                if (countRef.current < target) {
                    setDisplayValue(prefix + Math.ceil(countRef.current).toLocaleString() + suffix);
                    setTimeout(step, stepTime);
                } else {
                    setDisplayValue(prefix + target.toLocaleString() + suffix);
                }
            };
            step();
        } else {
             countRef.current = 0;
             setDisplayValue(`${prefix}0${suffix}`);
        }
    }, [isVisible, target, prefix, suffix]);

    return <span>{displayValue}</span>;
};

interface JourneyInfographicProps {
  bgImage?: string;
}

const JourneyInfographic: React.FC<JourneyInfographicProps> = ({ bgImage }) => {
    const { t } = useTranslations();
    const targetRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ['start start', 'end end']
    });

    const [isCountersVisible, setIsCountersVisible] = useState(false);
    useEffect(() => {
        return scrollYProgress.on("change", (latest) => {
            if (latest > 0.05 && !isCountersVisible) {
                setIsCountersVisible(true);
            }
        });
    }, [scrollYProgress, isCountersVisible]);

    const opacities = [
        useTransform(scrollYProgress, [0.00, 0.04, 0.12, 0.16], [0, 1, 1, 0]), // Section 1
        useTransform(scrollYProgress, [0.16, 0.20, 0.28, 0.32], [0, 1, 1, 0]), // Section 2
        useTransform(scrollYProgress, [0.32, 0.36, 0.44, 0.48], [0, 1, 1, 0]), // Section 3
        useTransform(scrollYProgress, [0.48, 0.52, 0.60, 0.64], [0, 1, 1, 0]), // Section 4
        useTransform(scrollYProgress, [0.64, 0.68, 0.76, 0.80], [0, 1, 1, 0]), // Section 5
        useTransform(scrollYProgress, [0.80, 0.84, 0.96, 1.00], [0, 1, 1, 0])  // Section 6
    ];

    const cleanLabelData = {
        labels: t('infographic.authenticity.chartLabels'),
        datasets: [{ data: [70, 30], backgroundColor: ['#556B2F', '#EEEEEE'], borderColor: '#FFFFFF', borderWidth: 4 }]
    };
    const cleanLabelOptions: ChartOptions<'doughnut'> = {
        responsive: true, maintainAspectRatio: false, cutout: '70%', plugins: { legend: { display: false }, tooltip: { enabled: false } }
    };
    
    const mineralData = {
        labels: t('infographic.difference.chartYAxisLabels'),
        datasets: [
            { label: t('infographic.difference.chartLabelTaan'), data: [1030, 31, 2.6, 0.3], backgroundColor: '#556B2F', borderRadius: 6 },
            { label: t('infographic.difference.chartLabelRefined'), data: [2, 0, 0.1, 0], backgroundColor: '#A0522D', borderRadius: 6 }
        ]
    };
    const mineralOptions: ChartOptions<'bar'> = {
        indexAxis: 'y', responsive: true, maintainAspectRatio: false,
        scales: { x: { beginAtZero: true, grid: { color: '#f0f0f0' }, ticks: { color: '#3D2B1F' } }, y: { grid: { display: false }, ticks: { color: '#3D2B1F' } } },
        plugins: { legend: { position: 'bottom', labels: { color: '#3D2B1F' } }, title: { display: true, text: t('infographic.difference.chartTitle'), font: { size: 16, family: "'Inter', sans-serif" }, padding: { top: 10, bottom: 20 }, color: '#3D2B1F' } }
    };

    const sustainabilityData = {
        labels: t('infographic.sustainability.chartRadarLabels'),
        datasets: [
            { label: t('infographic.sustainability.chartLabelTaan'), data: [9, 9, 10, 8, 7], backgroundColor: 'rgba(85, 107, 47, 0.2)', borderColor: '#556B2F', pointBackgroundColor: '#556B2F'},
            { label: t('infographic.sustainability.chartLabelSugarcane'), data: [3, 2, 3, 4, 3], backgroundColor: 'rgba(160, 82, 45, 0.2)', borderColor: '#A0522D', pointBackgroundColor: '#A0522D'}
        ]
    };
    const sustainabilityOptions: ChartOptions<'radar'> = {
        responsive: true, maintainAspectRatio: false,
        scales: { r: { beginAtZero: true, max: 10, pointLabels: { font: { size: 12, family: "'Inter', sans-serif" }, color: '#3D2B1F' }, ticks: { display: false } } },
        plugins: { legend: { position: 'bottom', labels: { color: '#3D2B1F' } }, title: { display: true, text: t('infographic.sustainability.chartTitle'), font: { size: 16, family: "'Inter', sans-serif" }, padding: { top: 10, bottom: 20 }, color: '#3D2B1F' } }
    };
    
    const sections = [
        <section id="global-shift">
            <div className="content-card text-center p-6 md:p-8 bg-[#FDFBF5]/80 backdrop-blur-sm rounded-xl shadow-lg border-2 border-[#A0522D]">
                <h2 className="text-2xl md:text-3xl font-bold text-[#3D2B1F] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}><StyledText text={t('infographic.authenticity.title')} /></h2>
                <p className="text-[#3D2B1F]/80 mb-8 max-w-2xl mx-auto"><StyledText text={t('infographic.authenticity.subtitle')} /></p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="text-center border-r-0 md:border-r-2 border-dashed border-[#556B2F] pr-0 md:pr-8">
                        <p className="text-[#3D2B1F]/70 text-lg mb-2"><StyledText text={t('infographic.authenticity.marketSize')} /></p>
                        <div className="text-6xl md:text-8xl font-black text-[#556B2F]">
                            <AnimatedCounter target={55} prefix="$" suffix="B" isVisible={isCountersVisible} />
                        </div>
                        <p className="text-[#3D2B1F]/70 text-lg mt-2"><StyledText text={t('infographic.authenticity.marketSizeSuffix')} /></p>
                        <p className="text-sm text-[#3D2B1F]/60 mt-2"><StyledText text={t('infographic.authenticity.sourceMordor')} /></p>
                    </div>
                    <div className="text-center">
                        <p className="text-[#3D2B1F]/80 mb-4 text-lg"><AnimatedCounter target={70} suffix="% " isVisible={isCountersVisible}/><StyledText text={t('infographic.authenticity.consumerChoice')} /></p>
                        <div className="chart-container h-[250px] md:h-[300px]">
                            <Doughnut data={cleanLabelData} options={cleanLabelOptions} />
                        </div>
                        <p className="text-sm text-[#3D2B1F]/60 mt-2"><StyledText text={t('infographic.authenticity.sourceMckinsey')} /></p>
                    </div>
                </div>
            </div>
        </section>,
        <section id="nutritional-advantage">
            <div className="content-card p-6 md:p-8 bg-[#FDFBF5]/80 backdrop-blur-sm rounded-xl shadow-lg border-2 border-[#A0522D]">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-[#3D2B1F] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}><StyledText text={t('infographic.difference.title')} /></h2>
                <p className="text-[#3D2B1F]/80 mb-8 max-w-2xl mx-auto text-center"><StyledText text={t('infographic.difference.subtitle')} /></p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="chart-container h-[400px] md:h-[450px]">
                        <Bar data={mineralData} options={mineralOptions} />
                    </div>
                    <div className="text-center">
                        <h3 className="font-bold text-xl text-[#3D2B1F] mb-2"><StyledText text={t('infographic.difference.giTitle')} /></h3>
                        <p className="text-[#3D2B1F]/80 mb-4"><StyledText text={t('infographic.difference.giSubtitle')} /></p>
                        <div className="flex justify-center items-end gap-8">
                            <div className="text-center">
                                <p className="text-5xl font-black text-[#A0522D]"><AnimatedCounter target={65} isVisible={isCountersVisible} /></p>
                                <p className="font-bold mt-2"><StyledText text={t('infographic.difference.giRefined')} /></p>
                            </div>
                            <div className="text-center">
                                <p className="text-5xl font-black text-[#556B2F]"><AnimatedCounter target={35} isVisible={isCountersVisible} /></p>
                                <p className="font-bold mt-2"><StyledText text={t('infographic.difference.giTaan')} /></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>,
        <section id="processing-comparison">
            <div className="content-card p-6 md:p-8 bg-[#FDFBF5]/80 backdrop-blur-sm rounded-xl shadow-lg border-2 border-[#A0522D]">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-[#3D2B1F] mb-8" style={{ fontFamily: "'Playfair Display', serif" }}><StyledText text={t('infographic.process.title')} /></h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-xl font-bold text-center text-[#3D2B1F] mb-4"><StyledText text={t('infographic.process.taanTitle')} /></h3>
                        <div className="space-y-4">
                            <div className="p-4 bg-[#556B2F]/10 rounded-lg">
                                <p className="font-bold"><StyledText text={t('infographic.process.taanStep1Title')} /></p>
                                <p className="text-sm text-[#3D2B1F]"><StyledText text={t('infographic.process.taanStep1Desc')} /></p>
                            </div>
                            <div className="text-center text-2xl text-gray-400">↓</div>
                            <div className="p-4 bg-[#556B2F]/10 rounded-lg">
                                <p className="font-bold"><StyledText text={t('infographic.process.taanStep2Title')} /></p>
                                <p className="text-sm text-[#3D2B1F]"><StyledText text={t('infographic.process.taanStep2Desc')} /></p>
                            </div>
                            <div className="text-center text-2xl text-gray-400">↓</div>
                            <div className="p-4 bg-[#556B2F]/10 rounded-lg">
                                <p className="font-bold"><StyledText text={t('infographic.process.taanStep3Title')} /></p>
                                <p className="text-sm text-[#3D2B1F]"><StyledText text={t('infographic.process.taanStep3Desc')} /></p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-center text-gray-600 mb-4"><StyledText text={t('infographic.process.refinedTitle')} /></h3>
                        <div className="space-y-4">
                            <div className="p-4 bg-[#A0522D]/10 rounded-lg">
                                <p className="font-bold"><StyledText text={t('infographic.process.refinedStep1Title')} /></p>
                                <p className="text-sm text-[#3D2B1F]"><StyledText text={t('infographic.process.refinedStep1Desc')} /></p>
                            </div>
                            <div className="text-center text-2xl text-gray-400">↓</div>
                            <div className="p-4 bg-[#A0522D]/10 rounded-lg">
                                <p className="font-bold"><StyledText text={t('infographic.process.refinedStep2Title')} /></p>
                                <p className="text-sm text-[#3D2B1F]"><StyledText text={t('infographic.process.refinedStep2Desc')} /></p>
                            </div>
                            <div className="text-center text-2xl text-gray-400">↓</div>
                            <div className="p-4 bg-[#A0522D]/10 rounded-lg">
                                <p className="font-bold"><StyledText text={t('infographic.process.refinedStep3Title')} /></p>
                                <p className="text-sm text-[#3D2B1F]"><StyledText text={t('infographic.process.refinedStep3Desc')} /></p>
                            </div>
                            <div className="text-center text-2xl text-gray-400">↓</div>
                            <div className="p-4 bg-[#A0522D]/10 rounded-lg">
                                <p className="font-bold"><StyledText text={t('infographic.process.refinedStep4Title')} /></p>
                                <p className="text-sm text-[#3D2B1F]"><StyledText text={t('infographic.process.refinedStep4Desc')} /></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>,
        <section id="sustainability">
            <div className="content-card text-center p-6 md:p-8 bg-[#FDFBF5]/80 backdrop-blur-sm rounded-xl shadow-lg border-2 border-[#A0522D]">
                <h2 className="text-2xl md:text-3xl font-bold text-[#3D2B1F] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}><StyledText text={t('infographic.sustainability.title')} /></h2>
                <p className="text-[#3D2B1F]/80 mb-8 max-w-2xl mx-auto"><StyledText text={t('infographic.sustainability.subtitle')} /></p>
                <div className="chart-container h-[400px] md:h-[450px]">
                    <Radar data={sustainabilityData} options={sustainabilityOptions}/>
                </div>
            </div>
        </section>,
        <section id="local-impact">
            <div className="content-card text-center p-6 md:p-8 bg-[#FDFBF5]/80 backdrop-blur-sm rounded-xl shadow-lg border-2 border-[#A0522D]">
                <h2 className="text-2xl md:text-3xl font-bold text-[#3D2B1F] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}><StyledText text={t('infographic.community.title')} /></h2>
                <p className="text-[#3D2B1F]/80 mb-10 max-w-2xl mx-auto"><StyledText text={t('infographic.community.subtitle')} /></p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="flex flex-col items-center p-4 bg-[#556B2F]/10 rounded-xl">
                        <span className="text-5xl mb-3">🌳</span>
                        <p className="text-[#3D2B1F]"><StyledText text={t('infographic.community.card1_line1')} /></p>
                        <p className="text-3xl font-black text-[#556B2F]"><AnimatedCounter target={40} suffix="+" isVisible={isCountersVisible}/></p>
                        <p className="text-[#3D2B1F]"><StyledText text={t('infographic.community.card1_line2')} /></p>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-[#A0522D]/10 rounded-xl">
                        <span className="text-5xl mb-3">👨‍👩‍👧‍👦</span>
                        <p className="text-[#3D2B1F]"><StyledText text={t('infographic.community.card2_line1')} /></p>
                        <p className="text-3xl font-black text-[#A0522D]"><AnimatedCounter target={2000} isVisible={isCountersVisible} /></p>
                        <p className="text-[#3D2B1F]"><StyledText text={t('infographic.community.card2_line2')} /></p>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-[#556B2F]/10 rounded-xl">
                        <span className="text-5xl mb-3">💰</span>
                        <p className="text-[#3D2B1F]"><StyledText text={t('infographic.community.card3_line1')} /></p>
                        <p className="text-3xl font-black text-[#556B2F]"><AnimatedCounter target={25} prefix="$" suffix="M" isVisible={isCountersVisible}/></p>
                        <p className="text-[#3D2B1F]"><StyledText text={t('infographic.community.card3_line2')} /></p>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-[#A0522D]/10 rounded-xl">
                        <span className="text-5xl mb-3">📈</span>
                        <p className="text-[#3D2B1F]"><StyledText text={t('infographic.community.card4_line1')} /></p>
                        <p className="text-3xl font-black text-[#A0522D]"><AnimatedCounter target={15} suffix="%" isVisible={isCountersVisible}/></p>
                        <p className="text-[#3D2B1F]"><StyledText text={t('infographic.community.card4_line2')} /></p>
                    </div>
                </div>
            </div>
        </section>,
        <section id="cultural-legacy">
            <div className="content-card p-6 md:p-8 bg-[#FDFBF5]/80 backdrop-blur-sm rounded-xl shadow-lg border-2 border-[#A0522D]">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-[#3D2B1F] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}><StyledText text={t('infographic.legacy.title')} /></h2>
                <div className="relative mt-8">
                    <div className="absolute left-1/2 h-full w-1 bg-[#3D2B1F]/30 -translate-x-1/2 hidden md:block"></div>
                    <div className="space-y-12">
                        {[1, 2, 3, 4].map((item, index) => (
                            <div key={item} className={`relative md:flex items-center w-full ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                                <div className="w-full md:w-1/2 mb-4 md:mb-0">
                                    <div className={`p-4 rounded-lg shadow-md inline-block max-w-sm ${index % 2 !== 0 ? 'md:ml-auto' : 'md:mr-auto'} ${
                                        ['bg-[#556B2F]/10', 'bg-[#A0522D]/10', 'bg-[#556B2F]/10', 'bg-[#A0522D]/10'][index]
                                    }`}>
                                        <p className={`font-bold ${['text-[#556B2F]', 'text-[#A0522D]', 'text-[#556B2F]', 'text-[#A0522D]'][index]}`}><StyledText text={t(`infographic.legacy.item${item}_title`)} /></p>
                                        <p className="text-sm text-[#3D2B1F]"><StyledText text={t(`infographic.legacy.item${item}_desc`)} /></p>
                                    </div>
                                </div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-4 border-white shadow-lg z-10 hidden md:flex items-center justify-center" style={{backgroundColor: ['#556B2F', '#A0522D', '#556B2F', '#A0522D'][index]}}></div>
                                <div className="hidden md:block w-1/2"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    ];
    
    return (
        <section 
            ref={targetRef}
            id="journey-infographic"
            className="relative h-[700vh]"
        >
            {bgImage && <div className="section-bg-container" style={{ backgroundImage: `url(${bgImage})` }} />}
            <style>{`
                .chart-container {
                    position: relative;
                    width: 100%;
                    max-width: 500px;
                    margin-left: auto;
                    margin-right: auto;
                    height: 300px;
                    max-height: 400px;
                }
                @media (min-width: 768px) {
                    .chart-container {
                        height: 350px;
                    }
                }
            `}</style>
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <div
                    className="absolute inset-0 z-0 bg-white/20"
                >
                </div>

                <main className="relative z-10 w-full h-full flex flex-col items-center text-[#3D2B1F]">
                    <div className="container mx-auto flex flex-col h-full">
                        <header className="text-center pt-16 mb-6 px-4 shrink-0">
                            <img src="https://i.postimg.cc/mrQKP5dZ/taan-logo-small.webp" alt="Golden Taan Logo" className="mx-auto h-16 mb-4"/>
                            <h1 className="text-4xl md:text-6xl font-black text-[#3D2B1F] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}><StyledText text={t('infographic.title')} /></h1>
                            <p className="text-lg md:text-xl text-[#3D2B1F]/80 max-w-3xl mx-auto"><StyledText text={t('infographic.subtitle')} /></p>
                        </header>

                        <div className="relative flex-grow w-full flex items-center justify-center">
                            {sections.map((sectionContent, index) => (
                                <motion.div
                                    key={index}
                                    style={{ opacity: opacities[index] }}
                                    className="absolute inset-0 flex items-center justify-center p-4 md:p-8"
                                >
                                    {sectionContent}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        </section>
    );
};

export default JourneyInfographic;