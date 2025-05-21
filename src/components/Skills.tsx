
import React from 'react';

type SkillCategory = {
  name: string;
  color: string;
  skills: string[];
};

type TechExperience = {
  name: string;
  years: number;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
};

const skillCategories: SkillCategory[] = [
  {
    name: "Mobile",
    color: "text-terminal-neon",
    skills: ["Flutter", "Dart", "Android", "iOS", "React Native", "SwiftUI"]
  },
  {
    name: "Backend",
    color: "text-terminal-green",
    skills: ["Node.js", "Express", "Firebase", "Supabase", "PostgreSQL", "MongoDB", "REST API", "GraphQL"]
  },
  {
    name: "Frontend",
    color: "text-terminal-purple",
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS", "Redux"]
  },
  {
    name: "DevOps",
    color: "text-terminal-yellow",
    skills: ["Git", "GitHub Actions", "Docker", "CI/CD", "AWS", "Firebase", "Vercel"]
  },
  {
    name: "Tools",
    color: "text-terminal-orange",
    skills: ["VS Code", "Android Studio", "Xcode", "Figma", "Jira", "Postman"]
  }
];

// Add tech experience data
const techExperience: TechExperience[] = [
  { name: "Flutter", years: 4, level: "Expert" },
  { name: "Kotlin", years: 2, level: "Intermediate" },
  { name: "Swift", years: 1, level: "Beginner" },
  { name: "React Native", years: 2, level: "Intermediate" },
  { name: "React.js", years: 3, level: "Intermediate" },
  { name: "TypeScript", years: 3, level: "Intermediate" },
  { name: "JavaScript", years: 3, level: "Intermediate" },
  { name: "Node.js", years: 2, level: "Intermediate" },
  { name: "Go-lang", years: 1, level: "Beginner" },
  { name: "Firebase", years: 4, level: "Advanced" },
  { name: "Git", years: 3, level: "Intermediate" },
  { name: "REST APIs", years: 4, level: "Expert" },
  { name: "PostgreSQL", years: 2, level: "Intermediate" }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-terminal-darker">
      <div className="app-container">
        <p className="code-comment mb-2">// Technologies I work with</p>
        <div className='flex items-center gap-2 mb-6'>
          <div className="h-2 w-2 bg-terminal-green rounded-full animate-pulse"></div>
          <h3 className="text-xl font-bold text-terminal-green">Skills</h3>
        </div>
        {/* <h2 className="section-heading">const skills = {'{'}</h2> */}

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

        {/* <div className="space-y-10">
          {skillCategories.map((category, index) => (
            <div key={index} className="mb-8">
              <h3 className={`text-xl font-bold mb-4 ${category.color}`}>
                {category.name}: [
              </h3>
              
              <div className="flex flex-wrap gap-3 ml-4 md:ml-8">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="skill-tag bg-terminal-light text-white border border-gray-700 hover:border-terminal-neon/50 transition-all"
                  >
                    {skill}
                  </div>
                ))}
              </div>
              
              <div className="text-right">
                <p className={category.color}>],</p>
              </div>
            </div>
          ))}
        </div> */}

      </div>
    </section>
  );
}
