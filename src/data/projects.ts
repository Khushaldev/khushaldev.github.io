
export type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  playStore?: string;
  appStore?: string;
  image?: string;
  stars?: number;
  features?: string[];
};

export const projects: Project[] = [
  {
    id: "flutter-commerce",
    title: "FlutterCommerce",
    description: "A feature-rich e-commerce application built with Flutter and Firebase. Includes authentication, product browsing, cart functionality, and payment integration.",
    technologies: ["Flutter", "Firebase", "Stripe"],
    github: "https://github.com/khushal/flutter-commerce",
    playStore: "https://play.google.com/store/apps",
    appStore: "https://apps.apple.com/app/apple-store",
    stars: 158,
    features: [
      "User authentication with Firebase Auth",
      "Real-time product inventory updates",
      "Shopping cart with local storage persistence",
      "Secure checkout with Stripe integration",
      "Order history and tracking",
      "Push notifications for order updates"
    ]
  },
  {
    id: "task-master",
    title: "TaskMaster Pro",
    description: "Productivity app with task management, reminders, and progress tracking. Features clean UI and offline functionality.",
    technologies: ["Flutter", "Hive", "Provider"],
    github: "https://github.com/khushal/task-master",
    playStore: "https://play.google.com/store/apps",
    stars: 92,
    features: [
      "Intuitive task organization with categories and priorities",
      "Customizable reminders and recurring tasks",
      "Progress tracking with visual charts",
      "Dark and light theme options",
      "Offline-first architecture with Hive database",
      "Data export and backup functionality"
    ]
  },
  {
    id: "health-hub-api",
    title: "HealthHub API",
    description: "RESTful API for health tracking applications. Handles user data, activity tracking, and nutritional information.",
    technologies: ["Node.js", "Express", "PostgreSQL", "Docker"],
    github: "https://github.com/khushal/health-hub-api",
    stars: 47,
    features: [
      "Comprehensive REST API for health tracking",
      "User authentication and authorization",
      "Activity and workout data storage",
      "Nutritional information database",
      "Dockerized deployment for easy scaling",
      "Extensive documentation with Swagger"
    ]
  },
  {
    id: "dev-connect",
    title: "DevConnect",
    description: "Social platform for developers to share projects and connect with peers. Includes authentication, profiles, posts, and comments.",
    technologies: ["Next.js", "Supabase", "Tailwind CSS"],
    github: "https://github.com/khushal/dev-connect",
    stars: 72,
    features: [
      "Developer profile creation and customization",
      "Project showcase with GitHub integration",
      "Social features including follows, likes, and comments",
      "Real-time notifications using Supabase",
      "Responsive design for all device sizes",
      "Markdown support for posts and comments"
    ]
  },
];
