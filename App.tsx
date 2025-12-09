import React, { useState, useEffect, useRef } from 'react';
import { CROP_DATA } from './data/crops';
import { Crop, Pest, Disease, Weed } from './types';
import { GoogleGenAI, LiveServerMessage, Modality } from "@google/genai";

// --- Audio Helpers for Gemini Live API ---

const MODEL_NAME = 'gemini-2.5-flash-native-audio-preview-09-2025';

function float32To16BitPCM(float32Arr: Float32Array): ArrayBuffer {
    const buffer = new ArrayBuffer(float32Arr.length * 2);
    const view = new DataView(buffer);
    for (let i = 0; i < float32Arr.length; i++) {
        let s = Math.max(-1, Math.min(1, float32Arr[i]));
        view.setInt16(i * 2, s < 0 ? s * 0x8000 : s * 0x7FFF, true);
    }
    return buffer;
}

function base64EncodeAudio(float32Arr: Float32Array): string {
    const pcm16 = float32To16BitPCM(float32Arr);
    let binary = '';
    const bytes = new Uint8Array(pcm16);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
}

function base64DecodeAudio(base64: string): Float32Array {
    const binaryString = atob(base64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    const int16 = new Int16Array(bytes.buffer);
    const float32 = new Float32Array(int16.length);
    for (let i = 0; i < int16.length; i++) {
        float32[i] = int16[i] / 32768.0;
    }
    return float32;
}

// --- Icons ---

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

const GrassIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
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

const SparklesIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
);

const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
);

// --- Child Components ---

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

const WeedAccordion: React.FC<{ weed: Weed }> = ({ weed }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full text-left p-4 bg-gray-50 hover:bg-gray-100 flex justify-between items-center transition-colors"
            >
                <span className="font-semibold text-gray-800">{weed.name}</span>
                <ChevronDownIcon className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen && (
                <div className="p-4 bg-white border-t border-gray-200">
                    <p className="text-gray-600 mb-4">{weed.description}</p>
                    
                    <div className="mb-4">
                        <h4 className="font-semibold text-green-700 mb-2">Controle Químico:</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                            {weed.controlMethods.chemical.map((method, i) => <li key={i}>{method}</li>)}
                        </ul>
                    </div>
                    
                    <div className="mb-4">
                        <h4 className="font-semibold text-lime-700 mb-2">Controle Orgânico / Biológico:</h4>
                         <ul className="list-disc list-inside text-gray-600 space-y-1">
                            {weed.controlMethods.organic.map((method, i) => <li key={i}>{method}</li>)}
                        </ul>
                    </div>

                    <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                        <h4 className="font-semibold text-blue-800 mb-2">Guia de Aplicação:</h4>
                        <p className="text-blue-700">{weed.applicationGuide}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

interface ChatMessage {
    role: 'user' | 'model';
    text: string;
}

const VoiceAssistant: React.FC<{ crop: Crop }> = ({ crop }) => {
    const [isActive, setIsActive] = useState(false);
    const [isConnecting, setIsConnecting] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [currentInput, setCurrentInput] = useState('');
    const [currentOutput, setCurrentOutput] = useState('');
    const [isChatOpen, setIsChatOpen] = useState(false);

    const inputAudioContextRef = useRef<AudioContext | null>(null);
    const outputAudioContextRef = useRef<AudioContext | null>(null);
    const mediaStreamRef = useRef<MediaStream | null>(null);
    const sessionRef = useRef<any>(null);
    const sourcesRef = useRef<Set<AudioBufferSourceNode>>(new Set());
    const nextStartTimeRef = useRef<number>(0);
    const chatContainerRef = useRef<HTMLDivElement>(null);

    // Auto-scroll chat
    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages, currentInput, currentOutput, isChatOpen]);

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            stopSession();
        };
    }, []);

    useEffect(() => {
        if (isActive) {
            stopSession();
        }
    }, [crop]);

    const stopSession = () => {
        if (mediaStreamRef.current) {
            mediaStreamRef.current.getTracks().forEach(track => track.stop());
            mediaStreamRef.current = null;
        }

        if (inputAudioContextRef.current) {
            inputAudioContextRef.current.close();
            inputAudioContextRef.current = null;
        }

        if (outputAudioContextRef.current) {
            outputAudioContextRef.current.close();
            outputAudioContextRef.current = null;
        }

        sourcesRef.current.forEach(source => source.stop());
        sourcesRef.current.clear();
        
        sessionRef.current = null;

        setIsActive(false);
        setIsConnecting(false);
        nextStartTimeRef.current = 0;
        // Don't close chat automatically if there was an error so user can see it,
        // but if stopped manually, maybe? Let's keep it open if it was open.
    };

    const startSession = async () => {
        setIsConnecting(true);
        setError(null);
        setIsChatOpen(true); // Open chat window immediately so user sees connection status

        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            
            // 1. Setup Audio Input
            // Relax constraints to avoid OverconstrainedError
            const stream = await navigator.mediaDevices.getUserMedia({ 
                audio: {
                    echoCancellation: true,
                    noiseSuppression: true,
                    autoGainControl: true
                } 
            });
            mediaStreamRef.current = stream;

            // We explicitly create a 16kHz context to resample the input if needed
            const inputAudioContext = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 16000 });
            
            if (inputAudioContext.state === 'suspended') {
                await inputAudioContext.resume();
            }
            inputAudioContextRef.current = inputAudioContext;
            
            const outputAudioContext = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
            outputAudioContextRef.current = outputAudioContext;

            const outputNode = outputAudioContext.createGain();
            outputNode.connect(outputAudioContext.destination);

            // 2. Connect to Live API
            const sessionPromise = ai.live.connect({
                model: MODEL_NAME,
                config: {
                    responseModalities: [Modality.AUDIO],
                    inputAudioTranscription: {},
                    outputAudioTranscription: {},
                    systemInstruction: `Você é um agrônomo especialista assistente (IA). O usuário está consultando a página da cultura: ${crop.name}.
                    
                    Dados técnicos da cultura:
                    ${JSON.stringify(crop)}

                    Responda como um assistente inteligente e prestativo. Seja objetivo nas respostas técnicas.`,
                },
                callbacks: {
                    onopen: () => {
                        console.log("Connection opened");
                        setIsConnecting(false);
                        setIsActive(true);
                        setMessages([{role: 'model', text: `Olá! Sou seu assistente para a cultura do ${crop.name}. Como posso ajudar?`}]);

                        // Start piping microphone to API
                        const source = inputAudioContext.createMediaStreamSource(stream);
                        const scriptProcessor = inputAudioContext.createScriptProcessor(4096, 1, 1);
                        
                        scriptProcessor.onaudioprocess = (e) => {
                            if (!sessionRef.current) return;
                            
                            const inputData = e.inputBuffer.getChannelData(0);
                            const base64Data = base64EncodeAudio(inputData);
                            
                            sessionPromise.then(session => {
                                session.sendRealtimeInput({
                                    media: {
                                        mimeType: 'audio/pcm;rate=16000',
                                        data: base64Data
                                    }
                                });
                            });
                        };

                        source.connect(scriptProcessor);
                        scriptProcessor.connect(inputAudioContext.destination);
                    },
                    onmessage: (message: LiveServerMessage) => {
                        // Handle Transcriptions
                        if (message.serverContent?.outputTranscription) {
                            setCurrentOutput(prev => prev + message.serverContent?.outputTranscription?.text);
                        }
                        if (message.serverContent?.inputTranscription) {
                            setCurrentInput(prev => prev + message.serverContent?.inputTranscription?.text);
                        }
                        
                        // Handle Turn Completion (Commit text to history)
                        if (message.serverContent?.turnComplete) {
                             setCurrentInput(prev => {
                                if (prev.trim()) {
                                    setMessages(m => [...m, {role: 'user', text: prev.trim()}]);
                                    return '';
                                }
                                return prev;
                             });

                             setCurrentOutput(prev => {
                                if (prev.trim()) {
                                    setMessages(m => [...m, {role: 'model', text: prev.trim()}]);
                                    return '';
                                }
                                return prev;
                             });
                        }

                        // Handle Audio
                        const base64Audio = message.serverContent?.modelTurn?.parts?.[0]?.inlineData?.data;
                        
                        if (base64Audio) {
                            const float32Data = base64DecodeAudio(base64Audio);
                            const buffer = outputAudioContext.createBuffer(1, float32Data.length, 24000);
                            buffer.getChannelData(0).set(float32Data);

                            const source = outputAudioContext.createBufferSource();
                            source.buffer = buffer;
                            source.connect(outputNode);

                            source.addEventListener('ended', () => {
                                sourcesRef.current.delete(source);
                            });

                            // Simple scheduling
                            const currentTime = outputAudioContext.currentTime;
                            if (nextStartTimeRef.current < currentTime) {
                                nextStartTimeRef.current = currentTime;
                            }
                            
                            source.start(nextStartTimeRef.current);
                            nextStartTimeRef.current += buffer.duration;
                            sourcesRef.current.add(source);
                        }

                        if (message.serverContent?.interrupted) {
                             sourcesRef.current.forEach(source => source.stop());
                             sourcesRef.current.clear();
                             nextStartTimeRef.current = 0;
                             // Also clear current output if interrupted
                             setCurrentOutput(''); 
                        }
                    },
                    onclose: () => {
                        console.log("Connection closed");
                        stopSession();
                    },
                    onerror: (e) => {
                        console.error("Session error", e);
                        setError("Erro na conexão com a IA. Tente novamente.");
                        stopSession();
                    }
                }
            });

            sessionRef.current = sessionPromise;

        } catch (err: any) {
            console.error(err);
            if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
                 setError("Acesso ao microfone negado. Por favor, permita o acesso no navegador.");
            } else if (err.name === 'OverconstrainedError') {
                 setError("Dispositivo de áudio não suporta a configuração solicitada.");
            } else {
                 setError(`Erro ao iniciar: ${err.message || 'Verifique sua conexão'}`);
            }
            setIsConnecting(false);
        }
    };

    const toggleSession = () => {
        if (isActive || isConnecting) {
            stopSession();
        } else {
            startSession();
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
            {/* Chat Window */}
            {isChatOpen && (
                <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 w-80 md:w-96 overflow-hidden flex flex-col mb-4 animate-fade-in transition-all" style={{height: '500px'}}>
                    {/* Header */}
                    <div className="bg-gradient-to-r from-indigo-600 to-purple-700 p-4 flex justify-between items-center text-white">
                        <div className="flex items-center gap-2">
                            <SparklesIcon className="w-5 h-5" />
                            <h3 className="font-bold">IA Agrônoma</h3>
                        </div>
                        <button onClick={() => { stopSession(); setIsChatOpen(false); }} className="hover:bg-white/20 p-1 rounded-full transition-colors">
                            <CloseIcon />
                        </button>
                    </div>
                    
                    {/* Messages Area */}
                    <div className="flex-1 p-4 overflow-y-auto bg-gray-50 space-y-4" ref={chatContainerRef}>
                        {messages.map((msg, idx) => (
                            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[80%] rounded-2xl p-3 text-sm ${
                                    msg.role === 'user' 
                                    ? 'bg-indigo-600 text-white rounded-br-none' 
                                    : 'bg-white text-gray-800 border border-gray-200 shadow-sm rounded-bl-none'
                                }`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        
                        {/* Real-time streaming output */}
                        {currentInput && (
                            <div className="flex justify-end">
                                <div className="max-w-[80%] bg-indigo-400 text-white/90 rounded-2xl rounded-br-none p-3 text-sm animate-pulse">
                                    {currentInput}...
                                </div>
                            </div>
                        )}
                        {currentOutput && (
                             <div className="flex justify-start">
                                <div className="max-w-[80%] bg-white text-gray-600 border border-gray-200 shadow-sm rounded-2xl rounded-bl-none p-3 text-sm">
                                    {currentOutput}
                                    <span className="inline-block w-1 h-3 ml-1 bg-gray-400 animate-blink">|</span>
                                </div>
                            </div>
                        )}
                        
                        {messages.length === 0 && !currentInput && !currentOutput && !error && (
                            <div className="text-center text-gray-400 text-sm mt-10">
                                <p>Conectando ao assistente...</p>
                            </div>
                        )}

                        {error && (
                            <div className="text-center p-4">
                                <p className="text-red-500 text-sm bg-red-50 p-2 rounded border border-red-100">{error}</p>
                            </div>
                        )}
                    </div>

                    {/* Footer Status */}
                    <div className="p-3 bg-white border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                         {isActive ? (
                             <span className="flex items-center gap-1 text-green-600 font-medium">
                                 <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                 Ouvindo... (Fale agora)
                             </span>
                         ) : isConnecting ? (
                            <span className="text-indigo-600">Conectando...</span>
                         ) : (
                            <span>Desconectado</span>
                         )}
                         <span>Gemini Live</span>
                    </div>
                </div>
            )}
            
            {!isChatOpen && error && (
                 <div className="bg-red-100 text-red-700 px-4 py-2 rounded-lg shadow-lg mb-2 text-sm max-w-xs">
                    {error}
                </div>
            )}

            <button
                onClick={toggleSession}
                className={`flex items-center justify-center gap-3 px-6 py-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 ${
                    isActive 
                    ? 'bg-red-500 text-white ring-4 ring-red-200' 
                    : isConnecting 
                        ? 'bg-gray-700 text-gray-300 cursor-wait'
                        : 'bg-gradient-to-r from-indigo-600 to-purple-700 text-white hover:shadow-indigo-500/50'
                }`}
                title={isActive ? "Parar assistente" : "Ativar Assistente IA"}
            >
                {isConnecting ? (
                     <>
                        <div className="w-5 h-5 border-2 border-white/50 border-t-white rounded-full animate-spin"></div>
                        <span className="font-semibold text-sm">Conectando...</span>
                     </>
                ) : isActive ? (
                    <>
                        <div className="w-3 h-3 bg-white rounded-full animate-ping absolute top-0 right-0 -mr-1 -mt-1"></div>
                        <span className="font-bold">Encerrar</span>
                    </>
                ) : (
                    <>
                        <SparklesIcon className="w-6 h-6 animate-pulse" />
                        <span className="font-bold text-lg">Assistente IA</span>
                    </>
                )}
            </button>
        </div>
    );
};


const CropDetails: React.FC<{ crop: Crop; onBack: () => void }> = ({ crop, onBack }) => {
    const [showOnlyOrganicPests, setShowOnlyOrganicPests] = useState(false);
    const [showOnlyOrganicDiseases, setShowOnlyOrganicDiseases] = useState(false);
    const [showOnlyOrganicWeeds, setShowOnlyOrganicWeeds] = useState(false);

    const filteredPests = showOnlyOrganicPests
        ? crop.pests.filter(pest => pest.controlMethods.organic.length > 0)
        : crop.pests;

    const filteredDiseases = showOnlyOrganicDiseases && crop.diseases
        ? crop.diseases.filter(disease => disease.controlMethods.organic.length > 0)
        : crop.diseases;

    const filteredWeeds = showOnlyOrganicWeeds && crop.weeds
        ? crop.weeds.filter(weed => weed.controlMethods.organic.length > 0)
        : crop.weeds;

    return (
        <>
            {/* Voice Assistant - AI Interface */}
            <VoiceAssistant crop={crop} />
            
            <div className="animate-fade-in relative">
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

                        {crop.weeds && crop.weeds.length > 0 && (
                            <div className="mt-8 pt-8 border-t border-gray-200">
                                <div className="flex items-center mb-2">
                                    <GrassIcon />
                                    <h2 className="text-lg font-semibold text-yellow-800 ml-4">Plantas Daninhas e Manejo</h2>
                                </div>

                                <div className="mb-4 ml-10">
                                    <label className="flex items-center space-x-2 text-gray-600 cursor-pointer hover:text-gray-800 transition-colors">
                                        <input
                                            type="checkbox"
                                            checked={showOnlyOrganicWeeds}
                                            onChange={() => setShowOnlyOrganicWeeds(prev => !prev)}
                                            className="h-5 w-5 text-green-600 rounded border-gray-300 focus:ring-green-500 focus:ring-offset-0"
                                        />
                                        <span>Mostrar apenas com controle orgânico/biológico</span>
                                    </label>
                                </div>
                                
                                <div className="space-y-3">
                                    {filteredWeeds && filteredWeeds.length > 0 ? (
                                        filteredWeeds.map(weed => <WeedAccordion key={weed.name} weed={weed} />)
                                    ) : (
                                        <p className="text-gray-500 ml-10 bg-gray-50 p-4 rounded-lg border">Nenhuma planta daninha encontrada com os filtros atuais.</p>
                                    )}
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </>
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
            @keyframes blink {
                0%, 100% { opacity: 1; }
                50% { opacity: 0; }
            }
            .animate-blink {
                animation: blink 1s infinite;
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