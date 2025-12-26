"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Twitter, Youtube, ArrowUpRight, Github, Mail } from "lucide-react";

// --- Configuration ---
const PROFILE = {
  name: "Kashif Khan",
  handle: "@kashifye",
  bio: "Creator & Developer. Building digital experiences and sharing the journey.",
  avatar: "/avatar.jpg", // Make sure to add 'avatar.jpg' to your public folder
};

const LINKS = [
  {
    title: "X (Twitter)",
    url: "https://x.com/kashifye",
    icon: Twitter,
    color: "hover:text-blue-400",
  },
  {
    title: "YouTube",
    url: "https://youtube.com/@kashifye",
    icon: Youtube,
    color: "hover:text-red-500",
  },
  {
    title: "Instagram",
    url: "https://instagram.com/kashifye",
    icon: Instagram,
    color: "hover:text-pink-500",
  },
  {
    title: "GitHub",
    url: "https://github.com/kashifye",
    icon: Github,
    color: "hover:text-white",
  },
];

// --- Animation Variants ---
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <motion.div 
      initial="hidden" 
      animate="show" 
      variants={container} 
      className="flex flex-col items-center gap-8"
    >
      {/* Header Section */}
      <motion.div variants={item} className="text-center flex flex-col items-center gap-4">
        <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-neutral-800 shadow-xl">
           {/* Placeholder for when you don't have an image yet */}
           <div className="absolute inset-0 bg-neutral-800 flex items-center justify-center text-2xl font-bold text-neutral-500">
             KK
           </div>
           {/* Uncomment below when you add avatar.jpg to /public */}
           {/* <Image 
             src={PROFILE.avatar} 
             alt={PROFILE.name} 
             fill 
             className="object-cover"
             priority
           /> */}
        </div>
        
        <div className="space-y-2">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">{PROFILE.name}</h1>
          <p className="text-neutral-400 text-sm md:text-base max-w-xs mx-auto">
            {PROFILE.bio}
          </p>
        </div>
      </motion.div>

      {/* Links Section */}
      <motion.div variants={item} className="w-full grid gap-3">
        {LINKS.map((link) => (
          <Link
            key={link.title}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-4 bg-card hover:bg-cardHover border border-neutral-800 rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <div className="flex items-center gap-4">
              <link.icon className={`w-5 h-5 transition-colors ${link.color}`} />
              <span className="font-medium text-neutral-200">{link.title}</span>
            </div>
            <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-neutral-300 transition-colors" />
          </Link>
        ))}
      </motion.div>
      
      {/* Footer */}
      <motion.footer variants={item} className="mt-8 text-neutral-600 text-xs">
        © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
      </motion.footer>
    </motion.div>
  );
}