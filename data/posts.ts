// export interface BlogPost {
//   id: number;
//   title: string;
//   slug: string;
//   excerpt: string;
//   content: string;
//   image: string;
//   category: string;
//   author: string;
//   date: string;
//   readTime: string;
//   tags: string[];
// }

// export const posts: BlogPost[] = [
//   {
//     id: 1,
//     title: "Getting Started with Next.js 16",
//     slug: "nextjs-16-guide",
//     excerpt: "Learn the latest features of Next.js.",
//     content:
//       "Next.js is a React framework used for building production applications...",
//     image:
//       "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
//     category: "Web Development",
//     author: "John Doe",
//     date: "2026-06-01",
//     readTime: "5 min read",
//     tags: ["nextjs", "react", "typescript"],
//   },
// ];

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
}

const categories = [
  "Web Development",
  "Programming",
  "Artificial Intelligence",
  "Backend",
  "DevOps",
  "Career",
  "Database",
  "Cybersecurity",
];

const authors = [
  "John Doe",
  "Sarah Johnson",
  "Alex Smith",
  "Emily Davis",
  "Michael Brown",
  "Olivia Wilson",
];

const titles = [
  "Getting Started with Next.js",
  "Mastering TypeScript",
  "React Best Practices",
  "Introduction to AI",
  "Node.js API Development",
  "Remote Work Guide",
  "Tailwind CSS Tips",
  "Docker Essentials",
  "Interview Preparation",
  "MongoDB Fundamentals",
  "System Design Basics",
  "Building SaaS Products",
  "Authentication in Next.js",
  "GraphQL Explained",
  "Modern JavaScript Features",
  "Microservices Architecture",
  "Cloud Computing Basics",
  "Kubernetes Introduction",
  "CI/CD Pipeline Guide",
  "Cybersecurity Essentials",
  "Full Stack Development",
  "Frontend Performance",
  "Backend Optimization",
  "AI Tools for Developers",
  "Open Source Contribution",
  "Building REST APIs",
  "Git and GitHub Guide",
  "Web Accessibility",
  "SEO for Developers",
  "Scaling Web Applications",
];

export const posts: BlogPost[] = titles.map((title, index) => ({
  id: index + 1,
  title,
  slug: title
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, "")
    .replace(/\s+/g, "-"),

  excerpt: `Learn about ${title} with practical examples and modern development practices.`,

  content: `
    ${title} is an important topic for modern developers.
    
    In this article, we explore the fundamentals, best practices,
    real-world use cases, and advanced techniques.

    You'll learn industry-standard approaches, common mistakes,
    and tips used by professional developers.

    Whether you're a beginner or experienced engineer,
    this guide will help you improve your skills and
    stay updated with modern technology trends.
  `,

  image: `https://picsum.photos/seed/${index + 1}/1200/800`,

  category: categories[index % categories.length],

  author: authors[index % authors.length],

  date: `2026-${String((index % 12) + 1).padStart(
    2,
    "0"
  )}-${String((index % 28) + 1).padStart(2, "0")}`,

  readTime: `${(index % 8) + 3} min read`,

  tags: [
    categories[index % categories.length]
      .toLowerCase()
      .replace(/\s+/g, "-"),
    "technology",
    "development",
  ],
}));