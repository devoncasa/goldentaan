
import React from 'react';
import { useTranslations } from '../hooks/useTranslations';
import StyledText from './StyledText';

const FaqTable: React.FC = () => {
    const { t } = useTranslations();

    return (
        <div className="space-y-4">
            <p><StyledText text={t('compareSugars.table.intro')} /></p>
            <div className="overflow-x-auto rounded-lg border border-[#A0522D]/20">
                <table className="w-full min-w-[600px] text-sm text-left text-[#3D2B1F]">
                    <thead className="text-xs text-[#3D2B1F] uppercase bg-[#A0522D]/10">
                        <tr>
                            <th scope="col" className="px-4 py-3 font-semibold border-b border-r border-[#A0522D]/20"><StyledText text={t('compareSugars.table.headerFeature')} /></th>
                            <th scope="col" className="px-4 py-3 font-semibold border-b border-r border-[#A0522D]/20"><StyledText text={t('compareSugars.table.headerGoldenTaan')} /></th>
                            <th scope="col" className="px-4 py-3 font-semibold border-b border-[#A0522D]/20"><StyledText text={t('compareSugars.table.headerCommonSugar')} /></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-[#A0522D]/20">
                        <tr className="bg-[#FDFBF5]/50">
                            <td className="px-4 py-3 font-semibold text-[#3D2B1F] border-r"><StyledText text={t('compareSugars.table.row1Title')} /></td>
                            <td className="px-4 py-3 border-r"><StyledText text={t('compareSugars.table.row1Taan')} /></td>
                            <td className="px-4 py-3"><StyledText text={t('compareSugars.table.row1Common')} /></td>
                        </tr>
                        <tr className="bg-[#A0522D]/5">
                            <td className="px-4 py-3 font-semibold text-[#3D2B1F] border-r"><StyledText text={t('compareSugars.table.row2Title')} /></td>
                            <td className="px-4 py-3 border-r"><StyledText text={t('compareSugars.table.row2Taan')} /></td>
                            <td className="px-4 py-3"><StyledText text={t('compareSugars.table.row2Common')} /></td>
                        </tr>
                        <tr className="bg-[#FDFBF5]/50">
                            <td className="px-4 py-3 font-semibold text-[#3D2B1F] border-r"><StyledText text={t('compareSugars.table.row3Title')} /></td>
                            <td className="px-4 py-3 border-r"><StyledText text={t('compareSugars.table.row3Taan')} /></td>
                            <td className="px-4 py-3"><StyledText text={t('compareSugars.table.row3Common')} /></td>
                        </tr>
                        <tr className="bg-[#A0522D]/5">
                            <td className="px-4 py-3 font-semibold text-[#3D2B1F] border-r"><StyledText text={t('compareSugars.table.row4Title')} /></td>
                            <td className="px-4 py-3 border-r"><StyledText text={t('compareSugars.table.row4Taan')} /></td>
                            <td className="px-4 py-3"><StyledText text={t('compareSugars.table.row4Common')} /></td>
                        </tr>
                        <tr className="bg-[#FDFBF5]/50">
                            <td className="px-4 py-3 font-semibold text-[#3D2B1F] border-r"><StyledText text={t('compareSugars.table.row5Title')} /></td>
                            <td className="px-4 py-3 border-r"><StyledText text={t('compareSugars.table.row5Taan')} /></td>
                            <td className="px-4 py-3"><StyledText text={t('compareSugars.table.row5Common')} /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FaqTable;