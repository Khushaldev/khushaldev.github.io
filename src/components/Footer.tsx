
import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const lastUpdated = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <footer className="py-6 border-t border-terminal-neon/20 bg-terminal-darker">
      <div className="app-container">
        <p className="text-center text-sm md:text-base font-mono">
          <span className="text-terminal-comment">&gt; </span>
          <span>Built with ❤️ by Khushal | Last updated: {lastUpdated}</span>
        </p>
        <p className="text-center text-xs text-terminal-comment mt-2">
          © {currentYear} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
