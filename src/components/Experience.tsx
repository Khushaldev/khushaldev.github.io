
import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'


type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
};

// type TechExperience = {
//   name: string;
//   years: number;
//   level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
// };

const experiences: ExperienceItem[] = [
  {
    company: "Webreinvent tech pvt ltd",
    role: "Senior Flutter Developer",
    period: "May 2023 - Jan 2025",
    location: "Delhi, India",
    description: [
      "Maintained and enhanced <span style='color:rgba(88,166,255,1), '>[Toolstation App](https://play.google.com/store/apps/details?id=com.toolstation.mobile_app)</span>, collaborating with product managers and stakeholders to align features with business goals.",
      "Delivered key features in an Agile Jira team; documented workflows in Confluence to enhance cross-team collaboration.",
      "Integrated AI recommendations, Algolia, Bloomreach, SKU grouping, and GA4—boosting conversions by 20%.",
      "Fixed 40+ critical bugs via Datadog and Firebase Crashlytics, cutting crashes by 30%.",
      "Applied SOLID principles, TDD, and unit tests to ensure high-quality, maintainable code.",
      "Used Firebase A/B Testing & Remote Config to optimize UX and rollouts.",
      "Automated releases via CodeMagic CI/CD.",
      "Mentored junior developers and conducted code reviews"
    ],
    technologies: ["Flutter", "Firebase", "REST APIs", "CI/CD", "Git", "Jira", "Confluence"]
  },
  {
    company: "Flutter Developer",
    role: "Flutter Developer",
    period: "Mar 2021 - Apr 2023",
    location: "Remote",
    description: [
      "Built The Lit app using Amazon Rekognition API; 2,000+ downloads in first month via image caching optimization.",
      "Delivered Landable, a WebView real estate app, managing complete app lifecycle solo in a lean startup.",
      "Upgraded logistics app with geofencing attendance (+20% adoption) and migrated to MVC with GetX (30-40% faster loads).",
      "Designed and optimized backend APIs and SQL queries, including indexing, to improve data flow and enhance system performance."
    ],
    technologies: ["Flutter", "REST APIs", ".Net", "Microsoft sql", "Figma"]
  }
];

// // Add tech experience data
// const techExperience: TechExperience[] = [
//   { name: "Flutter", years: 4, level: "Expert" },
//   { name: "React.js", years: 5, level: "Expert" },
//   { name: "React Native", years: 4, level: "Advanced" },
//   { name: "TypeScript", years: 3, level: "Advanced" },
//   { name: "JavaScript", years: 6, level: "Expert" },
//   { name: "Node.js", years: 4, level: "Advanced" },
//   { name: "Firebase", years: 4, level: "Advanced" },
//   { name: "Git", years: 5, level: "Advanced" },
//   { name: "REST APIs", years: 5, level: "Expert" },
//   { name: "PostgreSQL", years: 3, level: "Intermediate" }
// ];

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="app-container">
        <p className="code-comment mb-2">// Places I've worked</p>
        <div className='flex items-center gap-2 mb-6'>
          <div className="h-2 w-2 bg-terminal-green rounded-full animate-pulse"></div>
          <h3 className="text-xl font-bold text-terminal-green">Work Experience</h3>
        </div>

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
                    <li key={i}><Markdown rehypePlugins={[rehypeRaw]}>{point}</Markdown></li>
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
        {/* <div className="mt-16">
          <p className="code-comment mb-2">// Years of experience</p>
          <div className='flex items-center gap-2 mb-6'>
            <div className="h-2 w-2 bg-terminal-green rounded-full animate-pulse"></div>
            <h3 className="text-xl font-bold text-terminal-green">Technical Experience</h3>
          </div>

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
        </div> */}

        {/* <p className="mt-10 text-right text-terminal-neon">{'};'}</p> */}
      </div>
    </section>
  );
}
