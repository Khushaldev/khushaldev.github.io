
import React from 'react';
import { Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '@/data/projects';

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="app-container">
        <p className="code-comment mb-2">// Check out my recent work</p>
        <h2 className="section-heading">const projects = [</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="text-xl font-bold mb-3 text-terminal-green glow-green">{project.title}</h3>
              
              {project.stars && (
                <div className="flex items-center mb-3">
                  <span className="mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-400">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-yellow-400">{project.stars}</span>
                </div>
              )}
              
              <p className="mb-4 text-gray-300">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="skill-tag bg-terminal-dark text-terminal-neon border border-terminal-neon/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-3">
                <Link 
                  to={`/project/${project.id}`}
                  className="inline-flex items-center px-4 py-2 bg-terminal-neon/20 text-terminal-neon rounded border border-terminal-neon/30 hover:bg-terminal-neon/30 transition-colors"
                >
                  View Details
                </Link>
                
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-terminal-dark text-white rounded border border-gray-700 hover:bg-gray-800 transition-colors"
                  >
                    <Github size={16} className="mr-2" />
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-right mt-3">
          <p className="text-terminal-neon">];</p>
        </div>
      </div>
    </section>
  );
}
