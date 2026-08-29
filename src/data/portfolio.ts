import type { Project, SkillGroup, TimelineItem } from "../types";

export const personalDetails = {
  name: "William Bigley",
  role: "Software Developer",
  location: "Auckland, New Zealand",
  email: "Willbob938@gmail.com",
  githubUrl: "https://github.com/WillBigley",
  linkedinUrl: "https://www.linkedin.com/in/william-bigley-3361a330a/",
  cvUrl: "./William-Bigley-CV.pdf",
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Responsive Design",
      "UI/UX",
    ],
  },
  {
    title: "Integration and data",
    skills: [
      "REST APIs",
      "GraphQL",
      "SQL",
      "JSON",
      "Strapi CMS",
      "Magento",
      "Algolia",
    ],
  },
  {
    title: "Programming and systems",
    skills: [
      "Python",
      "Java",
      "C",
      "Linux",
      "Operating Systems",
      "Networking",
      "Cybersecurity Fundamentals",
    ],
  },
  {
    title: "Tools and practices",
    skills: [
      "Git",
      "GitHub",
      "Agile",
      "Scrum",
      "Kanban",
      "Testing",
      "Debugging",
      "Technical Documentation",
    ],
  },
  {
    title: "AI-assisted development",
    skills: [
      "ChatGPT",
      "GitHub Copilot",
      "Claude",
      "Prompt Engineering",
      "Code Review",
      "Output Validation",
    ],
  },
  {
    title: "Currently developing",
    skills: [
      "C#",
      ".NET",
      "Azure",
      "Docker",
      "CI/CD",
      "Cloud Engineering",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Shosha E-commerce Compliance Redevelopment",
    type: "Industry R&D project",
    description:
      "Contributed to the redevelopment of an established e-commerce platform to support new New Zealand regulatory requirements while improving usability, navigation and performance.",
    highlights: [
      "Built and maintained frontend functionality using React, TypeScript, JavaScript, HTML and CSS.",
      "Integrated frontend components with Magento, Strapi CMS, GraphQL and Algolia.",
      "Investigated and resolved issues in a large legacy codebase and development environment.",
      "Contributed to UI/UX improvements, testing, performance optimisation and technical documentation.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Magento",
      "Strapi",
      "GraphQL",
      "Tailwind CSS",
    ],
    featured: true,
  },
  {
    title: "Network Security Lab",
    type: "University project",
    description:
      "Practical networking and cybersecurity work involving device hardening, access control, firewall configuration, VPNs and switch security.",
    highlights: [
      "Configured secure device access using SSH and local authentication.",
      "Worked with ACLs, zone-based firewalls and site-to-site VPN concepts.",
      "Applied switch security, VLAN and port-security practices.",
    ],
    technologies: ["Cisco", "Networking", "Security", "VPN", "Access Control"],
    /* repositoryUrl:
      "https://github.com/YOUR-GITHUB-USERNAME/YOUR-NETWORK-SECURITY-REPOSITORY", */
  },
  {
    title: "xv6 Operating Systems Development",
    type: "University project",
    description:
      "Systems programming exercises involving operating-system internals, process management, virtual memory, file systems and synchronisation.",
    highlights: [
      "Implemented and debugged system calls in C.",
      "Worked with processes, pipes, memory pages and file-system concepts.",
      "Investigated low-level compilation and kernel integration issues.",
    ],
    technologies: ["C", "xv6", "Linux", "Operating Systems"],
    /* repositoryUrl:
      "https://github.com/YOUR-GITHUB-USERNAME/YOUR-XV6-REPOSITORY", */
  },
  {
    title: "Portfolio Website",
    type: "Personal project",
    description:
      "A responsive portfolio built with React, TypeScript and Vite, designed to present projects, skills and certifications to potential employers.",
    highlights: [
      "Built reusable, data-driven React components.",
      "Implemented dark mode, responsive navigation and accessible markup.",
      "Configured for static deployment through GitHub Pages.",
    ],
    technologies: ["React", "TypeScript", "Vite", "CSS", "GitHub Pages"],
    repositoryUrl:
      "https://github.com/WillBigley/PortfolioReact",
    liveUrl: "https://willbigley.github.io/PortfolioReact/",
  },
];

export const timeline: TimelineItem[] = [
  {
    date: "2025",
    title: "Bachelor of Computer Science",
    organisation: "Auckland University of Technology",
    description: "Major in Software and Cybersecurity.",
  },
  {
    date: "2025",
    title: "Network Security",
    organisation: "Cisco Networking Academy through AUT",
  },
  {
    date: "2024",
    title: "CCNAv7: Switching, Routing and Wireless Essentials",
    organisation: "Cisco Networking Academy",
  },
  {
    date: "2022",
    title: "CCNAv7: Introduction to Networks",
    organisation: "Cisco Networking Academy",
  },
];
