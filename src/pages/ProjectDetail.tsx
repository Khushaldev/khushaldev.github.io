
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Github } from 'lucide-react';
import { projects } from '@/data/projects';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-terminal-dark text-white flex flex-col">
        <Navigation />
        <div className="flex-1 flex items-center justify-center flex-col gap-6">
          <h1 className="text-2xl text-terminal-neon">Project not found</h1>
          <Button asChild>
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft size={16} />
              Back to Home
            </Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-terminal-dark text-white flex flex-col">
      <Navigation />
      
      <main className="flex-1 py-12">
        <div className="app-container">
          <div className="mb-8">
            <Link 
              to="/#projects" 
              className="inline-flex items-center text-terminal-neon hover:underline"
            >
              <ArrowLeft className="mr-2" size={16} />
              Back to projects
            </Link>
          </div>

          <div className="bg-terminal-light border border-terminal-neon/30 rounded-lg p-8">
            <h1 className="text-3xl font-bold mb-3 text-terminal-green glow-green">{project.title}</h1>
            
            {project.stars && (
              <div className="flex items-center mb-6">
                <span className="mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-yellow-400">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-yellow-400">{project.stars}</span>
              </div>
            )}
            
            <p className="text-lg mb-8 text-gray-300">{project.description}</p>
            
            <div className="mb-8">
              <h2 className="text-xl text-terminal-neon mb-4">Technologies</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="skill-tag bg-terminal-dark text-terminal-neon border border-terminal-neon/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl text-terminal-neon mb-4">Key Features</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                {project.features?.map((feature, index) => (
                  <li key={index}>{feature}</li>
                )) || (
                  <>
                    <li>Clean and intuitive user interface</li>
                    <li>Optimized performance for smooth user experience</li>
                    <li>Comprehensive error handling and data validation</li>
                  </>
                )}
              </ul>
            </div>
            
            <div className="flex flex-wrap gap-3 mt-8">
              {project.github && (
                <a 
                  href={project.github} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-terminal-dark text-white rounded border border-gray-700 hover:bg-gray-800 transition-colors"
                >
                  <Github size={16} className="mr-2" />
                  View on GitHub
                </a>
              )}
              
              {project.playStore && (
                <a 
                  href={project.playStore} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800 transition-colors"
                >
                  Play Store
                </a>
              )}
              
              {project.appStore && (
                <a 
                  href={project.appStore} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                >
                  App Store
                </a>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
