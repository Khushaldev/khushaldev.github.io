
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

type NavItem = {
  id: string;
  label: string;
};

const navItems: NavItem[] = [
  { id: 'hello', label: '_hello' },
  // { id: 'about me', label: '_about' },
  { id: 'skills', label: '_skills' },
  { id: 'projects', label: '_work' },
  // { id: 'experience', label: '_experience' },
  { id: 'education', label: '_education' },
  { id: 'contact', label: '_contact' },
  { id: 'resume', label: '_resume' }

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
    if (id === 'resume') {
      const link = document.createElement('a');
      link.href = '/resume.pdf';
      link.download = 'Khushal_Resume.pdf';
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      return;
    }
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
          <span className="text-terminal-neon font-bold text-xl glow">Khushal</span>

          {/* Open for Work indicator in navigation */}
          <div className="inline-block relative group cursor-pointer">
            <div className="flex items-center gap-2  bg-terminal-green/10 px-2 py-1 rounded-full border border-terminal-green/30">
              <div className="h-2 w-2 bg-terminal-green rounded-full animate-pulse"></div>
              <span className="text-xs text-terminal-green font-semibold">Open for Work</span>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 mt-2  sm:max-w-md md:max-w-lg lg:w-max px-3 py-1 rounded bg-gray-800 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 break-words text-center">
              Immediate Joiner · Remote & Onsite Available
            </div>

          </div>
        </div>

        {/* Mobile menu button */}
        <button
          className="[@media(min-width:1005px)]:hidden flex items-center text-terminal-neon"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? 'close()' : 'menu()'}
        </button>

        {/* Desktop navigation */}
        <div className="hidden [@media(min-width:1005px)]:flex space-x-2">
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
        <div className="[@media(min-width:1005px)]:hidden bg-terminal-darker border-t border-terminal-neon/20">
          <div className="app-container py-2">

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
