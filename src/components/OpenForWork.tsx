
import React from 'react';
import { Button } from './ui/button';
import { Briefcase, Download } from 'lucide-react';

export default function OpenForWork() {
  return (
    <section className="py-6 bg-terminal-light/50 border-y border-terminal-neon/20">
      <div className="app-container flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center space-x-4">
          <div className="h-3 w-3 bg-terminal-green rounded-full animate-pulse"></div>
          <div>
            <p className="text-terminal-green font-bold">OPEN FOR WORK</p>
            <p className="text-sm text-gray-300">Immediate Joiner | Available for Remote & Onsite</p>
          </div>
        </div>
        
        <Button variant="outline" className="border-terminal-neon text-terminal-neon hover:bg-terminal-neon/10">
          <Download className="mr-2" size={16} />
          <a href="/resume.pdf" download="Khushal_Resume.pdf">Download Resume</a>
        </Button>
      </div>
    </section>
  );
}
