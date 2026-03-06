import { GH, LN } from "../components/Icons";

const GeeksforGeeksIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M21.45 14.315c-.143.28-.334.532-.565.745a3.691 3.691 0 0 1-1.104.695 4.51 4.51 0 0 1-3.116.078 3.62 3.62 0 0 1-1.09-.641L12 12.529l-3.575 2.663a3.616 3.616 0 0 1-1.09.641 4.507 4.507 0 0 1-3.116-.078 3.69 3.69 0 0 1-1.104-.695 3.12 3.12 0 0 1-.965-2.275 3.1 3.1 0 0 1 .898-2.208l.012-.012.013-.012 5.19-4.77a3.666 3.666 0 0 1 4.474 0l5.19 4.77c.012.008.012.012.013.012l.012.012a3.1 3.1 0 0 1 .898 2.208 3.126 3.126 0 0 1-.4 1.53z"/>
  </svg>
);

const LeetCodeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
  </svg>
);

export const PROFILES = [
  { 
    name: "GitHub", 
    handle: "@poorvjeet", 
    sub: "Open-source projects", 
    url: "https://github.com/poorvjeet", 
    accent: "rgba(255,255,255,.85)", 
    icon: <GH s={20}/> 
  },
  { 
    name: "LinkedIn", 
    handle: "Purvajit Patil", 
    sub: "Professional network", 
    url: "http://www.linkedin.com/in/purvajit-patil-2100b3241", 
    accent: "#60a5fa", 
    icon: <LN s={20}/> 
  },
  { 
    name: "GeeksforGeeks", 
    handle: "650+ Problems", 
    sub: "DSA & algo practice", 
    url: "https://auth.geeksforgeeks.org/user/poorvjeet01", 
    accent: "#4ade80",
    icon: <GeeksforGeeksIcon /> 
  },
  { 
    name: "LeetCode", 
    handle: "480+ · Rating 1908", 
    sub: "Algorithms & contests", 
    url: "https://leetcode.com/poorvjeet01", 
    accent: "#fb923c",
    icon: <LeetCodeIcon /> 
  },
];

