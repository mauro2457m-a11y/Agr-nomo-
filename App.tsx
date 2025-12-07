import React, { useState, useEffect } from 'react';
import { CROP_DATA } from './data/crops';
import { Crop, Pest, Disease } from './types';

// SVG Icon Components
const LeafIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const BackArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
    </svg>
);

const CalendarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
);

const FertilizerIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>
);


const BugIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11V7a2 2 0 00-2-2H7a2 2 0 00-2 2v4m14 0a2 2 0 012 2v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4a2 2 0 012-2m14 0h-2M5 11H3m2 0h2m10 0h2m-4 8v-4m-4 4v-4" />
    </svg>
);

const ShieldIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.944A12.02 12.02 0 0012 22a12.02 12.02 0 009-1.056c.343-.344.665-.72.945-1.124a11.955 11.955 0 01-8.618-15.04z" />
    </svg>
);

const ChevronDownIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${className}`} viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
);

const ScienceIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4 text-green-600/70 group-hover:text-green-700 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M19 14.5v5.25c0 .621-.504 1.125-1.125 1.125H6.125c-.621 0-1.125-.504-1.125-1.125V14.5m13.25 0h-1.5M4.75 14.5h-1.5a1.125 1.125 0 010-2.25h1.5a1.125 1.125 0 010 2.25z" />
    </svg>
);


// Child Components defined outside main component
const CropCard: React.FC<{ crop: Crop; onSelect: (crop: Crop) => void }> = ({ crop, onSelect }) => (
    <div
        className="group cursor-pointer rounded-lg border-2 border-dashed border-gray-300 bg-stone-50 p-4 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-green-600 hover:-translate-y-1"
        onClick={() => onSelect(crop)}
    >
        <div className="flex h-52 w-full flex-col items-center justify-center">
            <ScienceIcon />
            <h3 className="text-center text-2xl font-bold text-gray-700 tracking-wide">{crop.name}</h3>
        </div>
    </div>
);

const PestAccordion: React.FC<{ pest: Pest }> = ({ pest }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full text-left p-4 bg-gray-50 hover:bg-gray-100 flex justify-between items-center transition-colors"
            >
                <span className="font-semibold text-gray-800">{pest.name}</span>
                <ChevronDownIcon className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen && (
                <div className="p-4 bg-white border-t border-gray-200">
                    <p className="text-gray-600 mb-4">{pest.description}</p>
                    
                    <div className="mb-4">
                        <h4 className="font-semibold text-green-700 mb-2">Controle Químico:</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                            {pest.controlMethods.chemical.map((method, i) => <li key={i}>{method}</li>)}
                        </ul>
                    </div>
                    
                    <div className="mb-4">
                        <h4 className="font-semibold text-lime-700 mb-2">Controle Orgânico / Biológico:</h4>
                         <ul className="list-disc list-inside text-gray-600 space-y-1">
                            {pest.controlMethods.organic.map((method, i) => <li key={i}>{method}</li>)}
                        </ul>
                    </div>

                    <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                        <h4 className="font-semibold text-blue-800 mb-2">Guia de Aplicação:</h4>
                        <p className="text-blue-700">{pest.applicationGuide}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

const DiseaseAccordion: React.FC<{ disease: Disease }> = ({ disease }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full text-left p-4 bg-gray-50 hover:bg-gray-100 flex justify-between items-center transition-colors"
            >
                <span className="font-semibold text-gray-800">{disease.name}</span>
                <ChevronDownIcon className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen && (
                <div className="p-4 bg-white border-t border-gray-200">
                    <p className="text-gray-600 mb-4">{disease.description}</p>
                    
                    <div className="mb-4">
                        <h4 className="font-semibold text-green-700 mb-2">Controle Químico:</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                            {disease.controlMethods.chemical.map((method, i) => <li key={i}>{method}</li>)}
                        </ul>
                    </div>
                    
                    <div className="mb-4">
                        <h4 className="font-semibold text-lime-700 mb-2">Controle Orgânico / Biológico:</h4>
                         <ul className="list-disc list-inside text-gray-600 space-y-1">
                            {disease.controlMethods.organic.map((method, i) => <li key={i}>{method}</li>)}
                        </ul>
                    </div>

                    <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                        <h4 className="font-semibold text-blue-800 mb-2">Guia de Aplicação:</h4>
                        <p className="text-blue-700">{disease.applicationGuide}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

const CropDetails: React.FC<{ crop: Crop; onBack: () => void }> = ({ crop, onBack }) => {
    const [showOnlyOrganicPests, setShowOnlyOrganicPests] = useState(false);
    const [showOnlyOrganicDiseases, setShowOnlyOrganicDiseases] = useState(false);

    const filteredPests = showOnlyOrganicPests
        ? crop.pests.filter(pest => pest.controlMethods.organic.length > 0)
        : crop.pests;

    const filteredDiseases = showOnlyOrganicDiseases && crop.diseases
        ? crop.diseases.filter(disease => disease.controlMethods.organic.length > 0)
        : crop.diseases;

    return (
        <div className="animate-fade-in">
            <button
                onClick={onBack}
                className="mb-6 inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 font-semibold hover:bg-gray-50 transition-colors shadow-sm"
            >
                <BackArrowIcon />
                Voltar para Culturas
            </button>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative">
                    <img src={crop.imageUrl} alt={crop.name} className="w-full h-64 object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                        <h1 className="text-4xl font-bold text-white drop-shadow-lg">{crop.name}</h1>
                    </div>
                </div>
                <div className="p-6 md:p-8">
                    <div className="mb-8 flex items-start p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <CalendarIcon />
                        <div className="ml-4">
                            <h2 className="text-lg font-semibold text-blue-800">Época de Plantio</h2>
                            <p className="text-blue-700">{crop.plantingSeason}</p>
                        </div>
                    </div>

                    <div className="mb-8 flex items-start p-4 bg-amber-50 rounded-lg border border-amber-200">
                        <FertilizerIcon />
                        <div className="ml-4">
                            <h2 className="text-lg font-semibold text-amber-800">Adubação Recomendada</h2>
                            <div className="mt-2 space-y-2 text-amber-700">
                                <p><strong>Fertilizantes:</strong> {crop.fertilization.recommended_fertilizers}</p>
                                <p><strong>Dose e Época:</strong> {crop.fertilization.dosage_and_application}</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center mb-2">
                            <BugIcon />
                            <h2 className="text-lg font-semibold text-red-800 ml-4">Pragas Comuns e Manejo</h2>
                        </div>

                        <div className="mb-4 ml-10">
                            <label className="flex items-center space-x-2 text-gray-600 cursor-pointer hover:text-gray-800 transition-colors">
                                <input
                                    type="checkbox"
                                    checked={showOnlyOrganicPests}
                                    onChange={() => setShowOnlyOrganicPests(prev => !prev)}
                                    className="h-5 w-5 text-green-600 rounded border-gray-300 focus:ring-green-500 focus:ring-offset-0"
                                />
                                <span>Mostrar apenas com controle orgânico/biológico</span>
                            </label>
                        </div>

                        <div className="space-y-3">
                            {filteredPests.length > 0 ? (
                                filteredPests.map(pest => <PestAccordion key={pest.name} pest={pest} />)
                            ) : (
                                <p className="text-gray-500 ml-10 bg-gray-50 p-4 rounded-lg border">Nenhuma praga com controle orgânico/biológico encontrada para esta cultura.</p>
                            )}
                        </div>
                    </div>

                    <div className="mt-8 pt-8 border-t border-gray-200">
                         <div className="flex items-center mb-2">
                            <ShieldIcon />
                            <h2 className="text-lg font-semibold text-teal-800 ml-4">Doenças Comuns e Manejo</h2>
                        </div>

                        <div className="mb-4 ml-10">
                            <label className="flex items-center space-x-2 text-gray-600 cursor-pointer hover:text-gray-800 transition-colors">
                                <input
                                    type="checkbox"
                                    checked={showOnlyOrganicDiseases}
                                    onChange={() => setShowOnlyOrganicDiseases(prev => !prev)}
                                    className="h-5 w-5 text-green-600 rounded border-gray-300 focus:ring-green-500 focus:ring-offset-0"
                                />
                                <span>Mostrar apenas com controle orgânico/biológico</span>
                            </label>
                        </div>
                        
                        <div className="space-y-3">
                            {crop.diseases && crop.diseases.length > 0 ? (
                                filteredDiseases.length > 0 ? (
                                    filteredDiseases.map(disease => <DiseaseAccordion key={disease.name} disease={disease} />)
                                ) : (
                                    <p className="text-gray-500 ml-10 bg-gray-50 p-4 rounded-lg border">Nenhuma doença com controle orgânico/biológico encontrada para esta cultura.</p>
                                )
                            ) : (
                                <p className="text-gray-500 ml-10 bg-gray-50 p-4 rounded-lg border">Nenhuma doença comum cadastrada para esta cultura.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


const CropSelector: React.FC<{ onSelectCrop: (crop: Crop) => void }> = ({ onSelectCrop }) => {
    const [showAll, setShowAll] = useState(false);

    const featuredCropIds = ['feijao', 'batata', 'quiabo', 'couve', 'maracuja'];
    const orderedFeaturedCrops = featuredCropIds
        .map(id => CROP_DATA.find(c => c.id === id))
        .filter((c): c is Crop => c !== undefined);

    const cropsToDisplay = showAll ? CROP_DATA : orderedFeaturedCrops;

    return (
        <div className="text-center animate-fade-in">
            <header className="mb-12">
                <div className="flex justify-center items-center gap-4 mb-4">
                    <LeafIcon />
                    <h1 className="text-4xl md:text-5xl font-extrabold text-green-800 tracking-tight">
                        Guia do Agrônomo Moderno
                    </h1>
                </div>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    {showAll
                        ? 'Explore nosso guia completo para todas as culturas disponíveis.'
                        : 'Selecione uma cultura em destaque para ver o guia de manejo, ou explore todas as opções.'
                    }
                </p>
            </header>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {cropsToDisplay.map(crop => (
                    <CropCard key={crop.id} crop={crop} onSelect={onSelectCrop} />
                ))}
            </div>
            <div className="mt-16 text-center">
                <button
                    onClick={() => setShowAll(prev => !prev)}
                    className="px-8 py-3 bg-green-700 text-white font-semibold rounded-lg shadow-md hover:bg-green-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                    {showAll ? 'Mostrar Apenas Destaques' : 'Ver Todas as Culturas'}
                </button>
            </div>
        </div>
    );
};


export default function App() {
    const [selectedCrop, setSelectedCrop] = useState<Crop | null>(null);

    useEffect(() => {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fade-in {
                from { opacity: 0; transform: translateY(10px); }
                to { opacity: 1; transform: translateY(0); }
            }
            .animate-fade-in {
                animation: fade-in 0.5s ease-out forwards;
            }
        `;
        document.head.appendChild(style);
        return () => {
            document.head.removeChild(style);
        }
    }, []);

    const handleSelectCrop = (crop: Crop) => {
        setSelectedCrop(crop);
        window.scrollTo(0, 0);
    };

    const handleBack = () => {
        setSelectedCrop(null);
    };
    
    return (
        <div className="bg-gray-50 min-h-screen text-gray-900 font-sans">
            <main className="container mx-auto px-4 py-8 md:py-12">
                {selectedCrop ? (
                    <CropDetails crop={selectedCrop} onBack={handleBack} />
                ) : (
                    <CropSelector onSelectCrop={handleSelectCrop} />
                )}
            </main>
             <footer className="text-center py-6 mt-8 border-t border-gray-200">
                <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Guia do Agrônomo Moderno. Todos os direitos reservados.</p>
            </footer>
        </div>
    );
}