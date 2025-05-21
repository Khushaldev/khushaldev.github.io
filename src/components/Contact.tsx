
import React from 'react';
import { Linkedin } from './ui/icons';
import { Github, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-terminal-darker">
      <div className="app-container">
        <p className="code-comment mb-2">// Get in touch with me</p>
        <div className='flex items-center gap-2 mb-6'>
          <div className="h-2 w-2 bg-terminal-green rounded-full animate-pulse"></div>
          <h3 className="text-xl font-bold text-terminal-green">Contact me</h3>
        </div>

        <div className=" mx-auto">
          <div className="bg-terminal-dark border border-terminal-neon/20 rounded-lg p-8">
            <div className="mb-6">
              <p className="code-comment">// My contact information</p>
              <div className="text-left font-mono mt-4">
                <div className="mb-4 break-words">
                  <span className="text-terminal-purple">const</span> <span className="text-terminal-neon">email</span> <span className="text-white">=</span> <span className="text-terminal-green">"khushalwork2025@gmail.com"</span><span className="text-white">;</span>
                </div>
                <div className="mb-4 break-words">
                  <span className="text-terminal-purple">const</span> <span className="text-terminal-neon">github</span> <span className="text-white">=</span> <span className="text-terminal-green">"https://github.com/khushaldev"</span><span className="text-white">;</span>
                </div>
                <div className="mb-4 break-words">
                  <span className="text-terminal-purple">const</span> <span className="text-terminal-neon">linkedin</span> <span className="text-white">=</span> <span className="text-terminal-green">"https://linkedin.com/in/khushal-yadav-dev"</span><span className="text-white">;</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-center gap-4 mt-8">
              <a
                href="mailto:khushalwork2025@gmail.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-terminal-dark border border-terminal-neon text-terminal-neon rounded-md hover:bg-terminal-neon hover:text-terminal-dark transition-colors truncate"
              >
                <Mail className="mr-2 flex-shrink-0" size={18} />
                <span className="truncate">Email Me</span>
              </a>
              <a
                href="https://github.com/khushaldev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-terminal-dark border border-gray-600 text-white rounded-md hover:bg-gray-800 transition-colors truncate"
              >
                <Github className="mr-2 flex-shrink-0" size={18} />
                <span className="truncate">GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/khushal-yadav-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-terminal-dark border border-blue-600 text-blue-400 rounded-md hover:bg-blue-900/20 transition-colors truncate"
              >
                {/* <Linkedin className="mr-2 flex-shrink-0" size={18} /> */}
                <Linkedin className="mr-2 " size={18} />
                <span className="truncate">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
