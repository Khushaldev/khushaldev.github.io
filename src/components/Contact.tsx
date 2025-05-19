
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-terminal-darker">
      <div className="app-container">
        <p className="code-comment mb-2">// Get in touch with me</p>
        <h2 className="section-heading">function contactMe() {'{'}</h2>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-terminal-dark border border-terminal-neon/20 rounded-lg p-8">
            <div className="mb-6">
              <p className="code-comment">// My contact information</p>
              <div className="text-left font-mono mt-4">
                <div className="mb-4">
                  <span className="text-terminal-purple">const</span> <span className="text-terminal-neon">email</span> <span className="text-white">=</span> <span className="text-terminal-green">"contact@khushal.dev"</span><span className="text-white">;</span>
                </div>
                <div className="mb-4">
                  <span className="text-terminal-purple">const</span> <span className="text-terminal-neon">github</span> <span className="text-white">=</span> <span className="text-terminal-green">"https://github.com/khushal"</span><span className="text-white">;</span>
                </div>
                <div className="mb-4">
                  <span className="text-terminal-purple">const</span> <span className="text-terminal-neon">linkedin</span> <span className="text-white">=</span> <span className="text-terminal-green">"https://linkedin.com/in/khushal"</span><span className="text-white">;</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row justify-center gap-4 mt-8">
              <a 
                href="mailto:contact@khushal.dev"
                className="inline-flex items-center justify-center px-6 py-3 bg-terminal-dark border border-terminal-neon text-terminal-neon rounded-md hover:bg-terminal-neon hover:text-terminal-dark transition-colors"
              >
                <Mail className="mr-2" size={18} />
                Email Me
              </a>
              <a 
                href="https://github.com/khushal"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-terminal-dark border border-gray-600 text-white rounded-md hover:bg-gray-800 transition-colors"
              >
                <Github className="mr-2" size={18} />
                GitHub
              </a>
              <a 
                href="https://linkedin.com/in/khushal"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-terminal-dark border border-blue-600 text-blue-400 rounded-md hover:bg-blue-900/20 transition-colors"
              >
                <Linkedin className="mr-2" size={18} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        
        <p className="mt-10 text-right text-terminal-neon">{'};'}</p>
      </div>
    </section>
  );
}
