import { GoFoodieBanner, ChatNowBanner, SmartAgroBanner } from "../components/Banners";

export const PROJECTS = [
  { 
    title: "Smart Agro", 
    cat: "AgriTech · IoT",
    desc: "Built end-to-end IoT monitoring system — sensor data flows to cloud and renders on React dashboard in under 2 seconds. Real-time insights for farmers with automated alerts.",
    tags: ["MERN", "IoT", "MongoDB", "React", "Node.js"],
    Banner: SmartAgroBanner,
    color: "#4ade80", 
    github: "https://github.com/poorvjeet/smart-agro",
    live: "https://smart-agro.vercel.app"
  },
  { 
    title: "GoFoodie", 
    cat: "Food Tech",
    desc: "Built from scratch — handles auth, real-time cart, and order flow without any UI library dependencies. Full-stack food ordering experience.",
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    Banner: GoFoodieBanner,
    color: "#fb923c", 
    github: "https://github.com/poorvjeet/gofoodie",
    live: "https://gofoodie.vercel.app"
  },
  { 
    title: "Chat-Now", 
    cat: "Real-time App",
    desc: "Real-time messaging with private rooms, group conversations, and instant delivery via WebSockets. Handles concurrent users with message persistence.",
    tags: ["React", "Socket.io", "Node.js", "MongoDB", "JWT"],
    Banner: ChatNowBanner,
    color: "#60a5fa", 
    github: "https://github.com/poorvjeet/chat-now",
    live: "https://chat-now.vercel.app"
  },
];

