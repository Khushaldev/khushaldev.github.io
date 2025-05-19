
import React, { useEffect, useRef, useState } from 'react';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Building performant mobile apps and full-stack solutions.";
  const typingSpeed = 50; // milliseconds per character
  
  useEffect(() => {
    let currentIndex = 0;
    
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayText(prevText => prevText + fullText.charAt(currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);
    
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section id="hello" className="min-h-screen flex flex-col justify-center terminal-background">
      <div className="app-container py-20">
        <div className="mb-8">
          <p className="code-comment mb-4">// Hello, I'm</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-2 text-white">
            <span className="text-terminal-neon glow">Khushal</span>
          </h1>
          <h2 className="text-2xl md:text-3xl mb-6 text-terminal-purple glow-purple">
            &gt; Flutter & Full-Stack Developer
          </h2>
          <p className="text-xl mb-8">
            {displayText}
            <span className="inline-block w-2 h-5 bg-terminal-neon animate-cursor-blink ml-1"></span>
          </p>
          
          <div className="mt-12">
            <p className="code-comment mb-2">// Check out my work</p>
            <button 
              onClick={() => {
                const projectsSection = document.getElementById('projects');
                projectsSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3 bg-terminal-neon text-terminal-dark font-bold rounded hover:bg-opacity-80 transition-all shadow-lg shadow-terminal-neon/20"
            >
              View Projects_
            </button>
            <button 
              onClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="ml-4 px-6 py-3 bg-transparent border border-terminal-neon text-terminal-neon font-bold rounded hover:bg-terminal-neon/10 transition-all"
            >
              Contact Me_
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
