
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

type NavItem = {
  id: string;
  label: string;
};

const navItems: NavItem[] = [
  { id: 'hello', label: '_hello' },
  { id: 'projects', label: '_projects' },
  { id: 'skills', label: '_skills' },
  { id: 'experience', label: '_experience' },
  { id: 'education', label: '_education' },
  { id: 'contact', label: '_contact' }
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('hello');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      
      let current = '';
      sections.forEach((section) => {
        if (section) {
          const sectionTop = section.offsetTop;
          if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id') || '';
          }
        }
      });
      
      if (current && current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
      setActiveSection(id);
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-terminal-darker/80 backdrop-blur-md border-b border-terminal-neon/20">
      <div className="app-container flex justify-between items-center py-4">
        <div className="flex items-center gap-3">
          <span className="text-terminal-neon font-bold text-xl glow">K.dev</span>
          
          {/* Open for Work indicator in navigation */}
          <div className="hidden sm:flex items-center gap-2 bg-terminal-green/10 px-3 py-1 rounded-full border border-terminal-green/30">
            <div className="h-2 w-2 bg-terminal-green rounded-full animate-pulse"></div>
            <span className="text-xs text-terminal-green font-semibold">Open for Work</span>
          </div>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden flex items-center text-terminal-neon"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? 'close()' : 'menu()'}
        </button>
        
        {/* Desktop navigation */}
        <div className="hidden md:flex space-x-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={cn(
                'nav-item',
                activeSection === item.id && 'active'
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
      
      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-terminal-darker border-t border-terminal-neon/20">
          <div className="app-container py-2">
            {/* Mobile Open for Work indicator */}
            <div className="flex items-center gap-2 bg-terminal-green/10 px-3 py-2 mb-2 rounded-md border border-terminal-green/30">
              <div className="h-2 w-2 bg-terminal-green rounded-full animate-pulse"></div>
              <span className="text-sm text-terminal-green font-semibold">Open for Work</span>
            </div>
            
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  'block w-full text-left py-3 px-4',
                  activeSection === item.id ? 'text-terminal-neon' : 'text-white'
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
