import { 
  people01, 
  people02, 
  people03,
  facebook, 
  instagram, 
  linkedin,
  twitter,
  ai, 
  security, 
  innovation,
  airbnb,
  dropbox,
  binance,
  coinbase
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "solutions",
    title: "Solutions",
  },
  // {
  //   id: "about",
  //   title: "About Us",
  // },
  {
    id: "contact",
    title: "Contact",
  },
];

export const solutions = [
  {
    id: "solution-1",
    icon: innovation,
    title: "Innovative Approach",
    content:
      "We build cutting-edge software solutions that harness the power of AI and emerging technologies.",
  },
  {
    id: "solution-2",
    icon: security,
    title: "Enterprise-Grade Security",
    content:
      "Security is at the core of everything we do, ensuring safe and scalable systems for our clients.",
  },
  {
    id: "solution-3",
    icon: ai,
    title: "AI-Driven Solutions",
    content:
      "From automation to intelligent insights, we leverage AI to help businesses grow faster and smarter.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "What sets this team apart is their deep understanding of Agentic AI and orchestration frameworks. They're not just using AI — they're shaping how it will be built.",
    name: "Dr. Aakash Verma",
    title: "AI Researcher & Consultant",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Their work on Retrieval-Augmented Generation (RAG) blew me away. They're clearly aligned with where AI is heading — context-aware, dynamic, and real-time.",
    name: "Maya Singh",
    title: "Co-founder, Applied AI Studio",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "You rarely see early teams so fluent in open-source LLM stacks, agents, and vector pipelines. Their focus on solving real-world problems with smart, modular AI is refreshing.",
    name: "Rahul Sharma",
    title: "Tech Evangelist, AI Community India",
    img: people03,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Team Expertise",
    value: "50+ Years Combined",
  },
  {
    id: "stats-2",
    title: "Products In Progress",
    value: "3 AI-Driven Platforms",
  },
  {
    id: "stats-3",
    title: "AI Capabilities",
    value: "GenAI, NLP, AgenticAI, RAG",
  },
];



export const footerLinks = [
  {
    title: "Company",
    links: [
      {
        name: "About Us",
        link: "/about",
      },
      {
        name: "Our Team",
        link: "/team",
      },
      {
        name: "Careers",
        link: "/careers",
      },
      {
        name: "Privacy Policy",
        link: "/privacy-policy",
      },
      {
        name: "Terms & Conditions",
        link: "/terms",
      },
    ],
  },
  {
    title: "Solutions",
    links: [
      {
        name: "AI & Automation",
        link: "/solutions/ai",
      },
      {
        name: "Web Development",
        link: "/solutions/web",
      },
      {
        name: "Data Engineering",
        link: "/solutions/data",
      },
      {
        name: "Cloud Infrastructure",
        link: "/solutions/cloud",
      },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        name: "Blog",
        link: "/blog",
      },
      {
        name: "Case Studies",
        link: "/case-studies",
      },
      {
        name: "Whitepapers",
        link: "/whitepapers",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/yourcompany",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/yourcompany",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/yourcompany",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/company/yourcompany",
  },
];

export const clients = [
  // {
  //   id: "client-1",
  //   logo: airbnb,
  // },
  // {
  //   id: "client-2",
  //   logo: dropbox,
  // },
  // {
  //   id: "client-3",
  //   logo: binance,
  // },
  // {
  //   id: "client-4",
  //   logo: coinbase,
  // },
];
