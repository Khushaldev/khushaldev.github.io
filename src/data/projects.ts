
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
  tags?: string[]; // New field for project categories
};

export const projects: Project[] = [
  {
    id: "expense-tracker",
    title: "Expense tracker app",
    description: "",
    technologies: ["Flutter", "Firebase", "tflite_flutter"],
    github: "https://github.com/Khushaldev/expense-tracker",
    // playStore: "https://play.google.com/store/apps",
    // appStore: "https://apps.apple.com/app/apple-store",
    // stars: 158,
    features: [
      "Store Expenses in Firebase Firestore.",
      "User can add, edit, and delete expenses.",
      "Automatic expense categorization using tflite.",
      "Planning to add Expense AI agent to provide insights and suggestions."
    ],
    tags: ["Mobile App", "Expense", "Expense AI Agent"]
  },
];
