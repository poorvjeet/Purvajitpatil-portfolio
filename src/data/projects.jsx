import { GoFoodieBanner, ChatNowBanner, SmartAgroBanner } from "../components/Banners";

export const PROJECTS = [
  { 
    title: "GoFoodie", 
    cat: "Food Tech",
    desc: "Responsive food ordering app with user auth, cart management, and RESTful APIs built for seamless cross-device experience.",
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    Banner: GoFoodieBanner,
    color: "#fb923c", 
    url: "https://github.com/poorvjeet" 
  },
  { 
    title: "Chat-Now", 
    cat: "Real-time App",
    desc: "Real-time messaging app for private and group conversations, built with WebSockets for instant delivery.",
    tags: ["React", "Socket.io", "Node.js", "MongoDB", "JWT"],
    Banner: ChatNowBanner,
    color: "#60a5fa", 
    url: "https://github.com/poorvjeet" 
  },
  { 
    title: "Smart Agro", 
    cat: "AgriTech · IoT",
    desc: "IoT-enabled agricultural monitoring system that provides farmers with real-time insights and automates essential processes.",
    tags: ["MERN", "IoT", "MongoDB", "React", "Node.js"],
    Banner: SmartAgroBanner,
    color: "#4ade80", 
    url: "https://github.com/poorvjeet" 
  },
];

