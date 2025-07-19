
import React from 'react';

interface FaqTableProps {
    intro: string;
    headerFeature: string;
    headerGoldenTaan: string;
    headerCommonSugar: string;
    row1Title: string;
    row1Taan: string;
    row1Common: string;
    row2Title: string;
    row2Taan: string;
    row2Common: string;
    row3Title: string;
    row3Taan: string;
    row3Common: string;
    row4Title: string;
    row4Taan: string;
    row4Common: string;
    row5Title: string;
    row5Taan: string;
    row5Common: string;
}

const FaqTable: React.FC<FaqTableProps> = (props) => {
    return (
        <div className="space-y-4">
            <p>{props.intro}</p>
            <div className="overflow-x-auto rounded-lg border border-stone-200">
                <table className="w-full min-w-[600px] text-sm text-left text-stone-600">
                    <thead className="text-xs text-stone-700 uppercase bg-stone-100">
                        <tr>
                            <th scope="col" className="px-4 py-3 font-semibold border-b border-r border-stone-200">{props.headerFeature}</th>
                            <th scope="col" className="px-4 py-3 font-semibold border-b border-r border-stone-200">{props.headerGoldenTaan}</th>
                            <th scope="col" className="px-4 py-3 font-semibold border-b border-stone-200">{props.headerCommonSugar}</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200">
                        <tr className="bg-white">
                            <td className="px-4 py-3 font-semibold text-stone-800 border-r">{props.row1Title}</td>
                            <td className="px-4 py-3 border-r">{props.row1Taan}</td>
                            <td className="px-4 py-3">{props.row1Common}</td>
                        </tr>
                        <tr className="bg-stone-50">
                            <td className="px-4 py-3 font-semibold text-stone-800 border-r">{props.row2Title}</td>
                            <td className="px-4 py-3 border-r">{props.row2Taan}</td>
                            <td className="px-4 py-3">{props.row2Common}</td>
                        </tr>
                        <tr className="bg-white">
                            <td className="px-4 py-3 font-semibold text-stone-800 border-r">{props.row3Title}</td>
                            <td className="px-4 py-3 border-r">{props.row3Taan}</td>
                            <td className="px-4 py-3">{props.row3Common}</td>
                        </tr>
                        <tr className="bg-stone-50">
                            <td className="px-4 py-3 font-semibold text-stone-800 border-r">{props.row4Title}</td>
                            <td className="px-4 py-3 border-r">{props.row4Taan}</td>
                            <td className="px-4 py-3">{props.row4Common}</td>
                        </tr>
                        <tr className="bg-white">
                            <td className="px-4 py-3 font-semibold text-stone-800 border-r">{props.row5Title}</td>
                            <td className="px-4 py-3 border-r">{props.row5Taan}</td>
                            <td className="px-4 py-3">{props.row5Common}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FaqTable;
