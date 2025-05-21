
import React, { useEffect, useRef, useState } from 'react';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Building performant mobile apps and full-stack solutions.";
  const typingSpeed = 50; // milliseconds per character

  useEffect(() => {
    setDisplayText('');
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        const nextChar = fullText.charAt(currentIndex);
        setDisplayText(prevText => prevText + nextChar);
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section id="hello" className="min-h-screen flex items-center justify-center terminal-background">
      <div className="lg:w-2/4 md:w-2/3 w-4/5 py-20">
        <div className="mb-8">
          <p className="code-comment mb-4">// Hello, I'm</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-2 text-white">
            <span className="text-terminal-neon glow">Khushal</span>
          </h1>
          <h2 className="text-2xl md:text-3xl mb-6 text-terminal-purple glow-purple">
            Flutter & Full-Stack Developer
          </h2>
          <p className="text-xl mb-8">
            {displayText}
            <span className="inline-block w-2 h-5 bg-terminal-neon animate-cursor-blink ml-1"></span>
          </p>

          <p className="code-comment mb-2 mt-12">// Check out my work</p>
          <div className=" flex flex-col md:flex-row md:items-start">
            <button
              onClick={() => {
                const projectsSection = document.getElementById('projects');
                projectsSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-sm font-bold mr-0 md:mr-4 mb-4 px-4 py-2.5 bg-terminal-neon text-terminal-dark rounded hover:bg-opacity-80 transition-all shadow-lg shadow-terminal-neon/20"
            >
              View Projects
            </button>
            <button
              onClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-sm mb-4 px-4 py-2.5 bg-transparent border border-terminal-neon text-terminal-neon font-bold rounded hover:bg-terminal-neon/10 transition-all"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
