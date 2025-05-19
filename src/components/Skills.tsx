
import React from 'react';

type SkillCategory = {
  name: string;
  color: string;
  skills: string[];
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

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-terminal-darker">
      <div className="app-container">
        <p className="code-comment mb-2">// Technologies I work with</p>
        <h2 className="section-heading">const skills = {'{'}</h2>
        
        <div className="space-y-10">
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
        </div>
        
        <p className="text-terminal-neon">{'}'};</p>
      </div>
    </section>
  );
}
