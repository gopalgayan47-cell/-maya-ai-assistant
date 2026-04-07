import React, { useState } from 'react';
import { Mic, MicOff, Sparkles } from 'lucide-react';

const App = () => {
  const [isActive, setIsActive] = useState(false);
  const [status, setStatus] = useState('Offline');

  const toggleMaya = () => {
    if (!isActive) {
      setIsActive(true);
      setStatus('Maya is listening...');
    } else {
      setIsActive(false);
      setStatus('Offline');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <div className={`w-48 h-48 rounded-full flex items-center justify-center border-4 ${isActive ? 'border-cyan-400 animate-pulse' : 'border-gray-700'}`}>
        <Sparkles size={64} className={isActive ? 'text-cyan-400' : 'text-gray-700'} />
      </div>
      <h1 className="mt-8 text-4xl font-bold tracking-tighter">MAYA AI</h1>
      <p className="mt-2 text-gray-400 font-mono">{status}</p>
      <button 
        onClick={toggleMaya}
        className={`mt-12 p-6 rounded-full transition-all ${isActive ? 'bg-red-500' : 'bg-cyan-500 hover:scale-110'}`}
      >
        {isActive ? <MicOff size={32} /> : <Mic size={32} />}
      </button>
    </div>
  );
};

export default App;

