
import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import OpenForWork from '@/components/OpenForWork';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';


const Index = () => {
  return (
    <div className="min-h-screen bg-terminal-dark text-white">
      <Navigation />
      <Hero />
      {/* <OpenForWork /> */}
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
