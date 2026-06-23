import React from 'react';

export default function MysticalEagle() {
  return (
    <div className="w-full h-screen bg-black overflow-hidden relative">
      {/* Main container with perspective */}
      <div className="w-full h-full relative flex items-center justify-center">
        
        {/* Background glow effect */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(circle, rgba(120,53,15,0.2) 0%, transparent 50%, black 100%)'
        }}></div>
        
        {/* Central mystical scene */}
        <div className="relative w-full max-w-4xl aspect-[3/4] flex flex-col items-center justify-between p-8">
          
          {/* Top eagle/phoenix with spread wings */}
          <div className="relative w-full h-1/2 flex items-start justify-center">
            {/* Eagle silhouette with glowing edges */}
            <div className="relative">
              {/* Glow effect behind eagle */}
              <div className="absolute inset-0 blur-3xl bg-amber-600/30 scale-150"></div>
              
              {/* Left wing */}
              <div className="absolute left-[-200px] top-0 w-64 h-80 opacity-70">
                <div className="w-full h-full bg-gradient-to-br from-amber-900/80 via-amber-800/60 to-amber-950/90 transform -skew-y-12 rotate-[-25deg] rounded-tl-full rounded-bl-full"
                     style={{
                       backgroundImage: 'repeating-linear-gradient(90deg, rgba(120,80,40,0.3) 0px, transparent 2px, transparent 8px, rgba(120,80,40,0.3) 10px)',
                       filter: 'drop-shadow(0 0 20px rgba(251,191,36,0.3))'
                     }}>
                  {/* Feather details */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-700/20 to-amber-900/40"></div>
                  {/* Wing tips glow */}
                  <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-amber-500/20 to-transparent blur-sm"></div>
                </div>
              </div>
              
              {/* Right wing */}
              <div className="absolute right-[-200px] top-0 w-64 h-80 opacity-70">
                <div className="w-full h-full bg-gradient-to-bl from-amber-900/80 via-amber-800/60 to-amber-950/90 transform skew-y-12 rotate-[25deg] rounded-tr-full rounded-br-full"
                     style={{
                       backgroundImage: 'repeating-linear-gradient(90deg, rgba(120,80,40,0.3) 0px, transparent 2px, transparent 8px, rgba(120,80,40,0.3) 10px)',
                       filter: 'drop-shadow(0 0 20px rgba(251,191,36,0.3))'
                     }}>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-700/20 to-amber-900/40"></div>
                  <div className="absolute top-0 right-0 w-full h-20 bg-gradient-to-b from-amber-500/20 to-transparent blur-sm"></div>
                </div>
              </div>
              
              {/* Eagle body and head */}
              <div className="relative z-10 w-48 h-64">
                {/* Head with glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-24">
                  <div className="w-full h-full bg-gradient-to-b from-amber-800/90 via-amber-900/80 to-amber-950/90 rounded-full"
                       style={{filter: 'drop-shadow(0 0 15px rgba(251,191,36,0.4))'}}>
                    {/* Beak highlight */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-3 h-4 bg-amber-400/60 blur-sm"></div>
                  </div>
                </div>
                
                {/* Neck and body */}
                <div className="absolute top-20 left-1/2 -translate-x-1/2 w-32 h-40 bg-gradient-to-b from-amber-900/80 via-amber-800/70 to-amber-950/85 rounded-b-3xl"
                     style={{
                       clipPath: 'polygon(30% 0%, 70% 0%, 85% 100%, 15% 100%)',
                       filter: 'drop-shadow(0 0 20px rgba(251,191,36,0.3))'
                     }}>
                  {/* Body texture */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-amber-700/20 to-amber-900/40"></div>
                </div>
                
                {/* Central glow emanating from body */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-amber-500/20 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>
          
          {/* Middle section with mystical elements */}
          <div className="relative w-full h-32 flex items-center justify-center">
            {/* Floating mystical orbs/particles */}
            <div className="absolute left-1/4 top-1/4 w-3 h-3 bg-amber-400/80 rounded-full blur-sm animate-pulse"></div>
            <div className="absolute left-1/3 top-1/2 w-2 h-2 bg-amber-300/60 rounded-full blur-sm animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute right-1/4 top-1/3 w-3 h-3 bg-amber-500/70 rounded-full blur-sm animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute right-1/3 top-2/3 w-2 h-2 bg-amber-400/50 rounded-full blur-sm animate-pulse" style={{animationDelay: '1.5s'}}></div>
            
            {/* Central beam of light */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-amber-400/40 via-amber-500/20 to-transparent blur-sm"></div>
          </div>
          
          {/* Bottom section - Glowing horizon/portal */}
          <div className="relative w-full h-1/3 flex items-end justify-center">
            {/* Horizon glow effect */}
            <div className="relative w-full h-24">
              {/* Blue glowing horizon line */}
              <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-cyan-500/60 via-blue-400/40 to-transparent blur-md"></div>
              <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-cyan-400/80 via-blue-300/50 to-transparent blur-sm"></div>
              <div className="absolute bottom-0 left-0 w-full h-3 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400"></div>
              
              {/* Reflection effect */}
              <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-cyan-900/40 to-transparent"></div>
              
              {/* Light rays from horizon */}
              <div className="absolute bottom-0 left-1/4 w-0.5 h-32 bg-gradient-to-t from-cyan-300/60 to-transparent blur-sm transform -skew-x-12"></div>
              <div className="absolute bottom-0 left-1/2 w-0.5 h-40 bg-gradient-to-t from-blue-300/70 to-transparent blur-sm"></div>
              <div className="absolute bottom-0 right-1/4 w-0.5 h-32 bg-gradient-to-t from-cyan-300/60 to-transparent blur-sm transform skew-x-12"></div>
            </div>
            
            {/* Mystical figure silhouette in center */}
            <div className="absolute bottom-24 left-1/2 -translate-x-1/2 w-16 h-20 opacity-60">
              <div className="w-full h-full bg-gradient-to-b from-red-900/70 via-red-800/80 to-red-950/90 rounded-t-full"
                   style={{
                     clipPath: 'polygon(40% 0%, 60% 0%, 70% 100%, 30% 100%)',
                     filter: 'drop-shadow(0 0 10px rgba(239,68,68,0.4))'
                   }}>
                {/* Glowing core */}
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-4 h-4 bg-red-400/60 rounded-full blur-sm"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Atmospheric particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-amber-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${5 + Math.random() * 10}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            ></div>
          ))}
        </div>
        
        {/* Vignette effect */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(circle, transparent 0%, transparent 40%, rgba(0,0,0,0.8) 100%)'
        }}></div>
      </div>
      
      {/* Global styles for animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0; }
          10% { opacity: 0.3; }
          50% { transform: translateY(-30px) translateX(10px); opacity: 0.6; }
          90% { opacity: 0.3; }
        }
      `}} />
    </div>
  );
}