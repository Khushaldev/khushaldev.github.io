
import React from 'react';

type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
};

type TechExperience = {
  name: string;
  years: number;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
};

const experiences: ExperienceItem[] = [
  {
    company: "TechMobile Inc.",
    role: "Senior Flutter Developer",
    period: "Jan 2022 - Present",
    location: "Remote",
    description: [
      "Led the development of enterprise mobile applications using Flutter",
      "Implemented complex UI designs and animations resulting in 30% better user engagement",
      "Optimized app performance and reduced load times by 40%",
      "Mentored junior developers and conducted code reviews"
    ],
    technologies: ["Flutter", "Firebase", "REST APIs", "CI/CD", "Git"]
  },
  {
    company: "CodeCraft Solutions",
    role: "Full-Stack Developer",
    period: "Mar 2020 - Dec 2021",
    location: "Hybrid",
    description: [
      "Developed and maintained web and mobile applications using React and Node.js",
      "Built RESTful APIs and implemented database solutions using PostgreSQL",
      "Collaborated with design and product teams to deliver user-centric features",
      "Helped migrate legacy systems to modern tech stack"
    ],
    technologies: ["React.js", "Node.js", "PostgreSQL", "AWS", "Docker"]
  },
  {
    company: "AppFusion Startups",
    role: "Mobile App Developer",
    period: "Jun 2018 - Feb 2020",
    location: "On-site",
    description: [
      "Created cross-platform mobile applications using React Native",
      "Integrated third-party services and payment gateways",
      "Worked with agile methodologies in a fast-paced startup environment",
      "Launched 5+ applications to both App Store and Google Play"
    ],
    technologies: ["React Native", "JavaScript", "RESTful APIs", "Redux"]
  }
];

// Add tech experience data
const techExperience: TechExperience[] = [
  { name: "Flutter", years: 4, level: "Expert" },
  { name: "React.js", years: 5, level: "Expert" },
  { name: "React Native", years: 4, level: "Advanced" },
  { name: "TypeScript", years: 3, level: "Advanced" },
  { name: "JavaScript", years: 6, level: "Expert" },
  { name: "Node.js", years: 4, level: "Advanced" },
  { name: "Firebase", years: 4, level: "Advanced" },
  { name: "Git", years: 5, level: "Advanced" },
  { name: "REST APIs", years: 5, level: "Expert" },
  { name: "PostgreSQL", years: 3, level: "Intermediate" }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="app-container">
        <p className="code-comment mb-2">// Places I've worked</p>
        <h2 className="section-heading">function workExperience() {'{'}</h2>
        
        <div className="relative border-l-2 border-terminal-neon/30 ml-4 md:ml-8 pl-8 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Circle on timeline */}
              <div className="absolute -left-[2.65rem] top-1.5 w-4 h-4 rounded-full bg-terminal-dark border-2 border-terminal-neon"></div>
              
              <div>
                <div className="mb-1">
                  <h3 className="text-xl font-bold text-terminal-neon inline">{exp.role}</h3>
                  <span className="mx-2 text-gray-400">@</span>
                  <span className="text-white font-bold">{exp.company}</span>
                </div>
                
                <div className="mb-4 text-sm text-gray-400 flex flex-wrap items-center gap-x-4">
                  <span>{exp.period}</span>
                  <span className="hidden md:inline">•</span>
                  <span>{exp.location}</span>
                </div>
                
                <ul className="list-disc space-y-2 mb-4 ml-5 text-gray-300">
                  {exp.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="skill-tag bg-terminal-dark text-terminal-purple border border-terminal-purple/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Years of experience with technologies */}
        <div className="mt-16">
          <p className="code-comment mb-2">// Years of experience</p>
          <h3 className="text-xl font-bold text-terminal-green mb-6">Technical Experience</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {techExperience.map((tech, index) => (
              <div key={index} className="bg-terminal-light/30 border border-terminal-neon/20 rounded-md p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-white">{tech.name}</span>
                  <span className="text-terminal-neon">{tech.years} {tech.years === 1 ? 'year' : 'years'}</span>
                </div>
                <div className="w-full bg-terminal-dark/50 h-2 rounded-full">
                  <div 
                    className="bg-terminal-neon h-2 rounded-full"
                    style={{
                      width: `${Math.min(100, (tech.years / 6) * 100)}%`,
                    }}
                  ></div>
                </div>
                <div className="text-right text-xs text-gray-400 mt-1">{tech.level}</div>
              </div>
            ))}
          </div>
        </div>
        
        <p className="mt-10 text-right text-terminal-neon">{'};'}</p>
      </div>
    </section>
  );
}
