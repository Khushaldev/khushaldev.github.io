
import React from 'react';

type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  location: string;
  achievements: string[];
};

const educations: EducationItem[] = [
  {
    degree: "B.Tech in Computer Science",
    institution: "Manav Rachna College of Engineering",
    period: "2014 - 2018",
    location: "Haryana, India",
    achievements: [
      "Graduated with distinction",
      "Participated in various hackathons and coding competitions",
      "Final year project on mobile app development with Flutter"
    ]
  }
];

export default function Education() {
  return (
    <section id="education" className="py-20">
      <div className="app-container">
        <p className="code-comment mb-2">// My educational background</p>
        <h2 className="section-heading">function education() {'{'}</h2>
        
        <div className="relative border-l-2 border-terminal-neon/30 ml-4 md:ml-8 pl-8 space-y-12">
          {educations.map((edu, index) => (
            <div key={index} className="relative">
              {/* Circle on timeline */}
              <div className="absolute -left-[3.35rem] -top-2 w-4 h-4 rounded-full bg-terminal-dark border-2 border-terminal-neon"></div>
              
              <div>
                <div className="mb-1">
                  <h3 className="text-xl font-bold text-terminal-neon inline">{edu.degree}</h3>
                  <span className="mx-2 text-gray-400">@</span>
                  <span className="text-white font-bold">{edu.institution}</span>
                </div>
                
                <div className="mb-4 text-sm text-gray-400 flex flex-wrap items-center gap-x-4">
                  <span>{edu.period}</span>
                  <span className="hidden md:inline">•</span>
                  <span>{edu.location}</span>
                </div>
                
                <ul className="list-disc space-y-2 mb-4 ml-5 text-gray-300">
                  {edu.achievements.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <p className="mt-10 text-right text-terminal-neon">{'};'}</p>
      </div>
    </section>
  );
}
