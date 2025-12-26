"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Copy, Check } from "lucide-react";

// --- Configuration ---
const DATA = {
  name: "Kashif Khan",
  location: "India",
  timezone: "Asia/Kolkata", 
  role: "Creator, Designer, and Builder.",
  about: [
    "I've spent years at the intersection of content, design, and strategy—telling stories that actually connect.",
    "I understand what makes people stop scrolling, and how to turn vision into visual presence. Whether it's through content, design, or positioning, I know how to craft narratives that resonate.",
  ],
  cta: {
    title: "For Brands & Creators:",
    text: "Apply to get access to opportunities and a network of high-profile founders.",
    button: "Become part of the network",
    link: "https://your-link-here.com",
  },
  socials: [
    { label: "Email", value: "hi@kashifye.com", href: "mailto:hi@kashifye.com", type: "copy" },
    { label: "Instagram", value: "@kashifye", href: "https://instagram.com/kashifye", type: "link" },
    { label: "X / Twitter", value: "@kashifye", href: "https://x.com/kashifye", type: "link" },
    { label: "YouTube", value: "@kashifye", href: "https://youtube.com/@kashifye", type: "link" },
  ],
};

// --- Components ---

function TimeDisplay() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          timeZone: DATA.timezone,
          hour: "numeric",
          minute: "2-digit",
          hour12: false,
        }) + " UTC+5:30" // Adjust label based on timezone
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return <span className="tabular-nums text-neutral-500">{time}</span>;
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="p-2 hover:bg-neutral-800 rounded-full transition-colors"
      title="Copy to clipboard"
    >
      {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4 text-neutral-500" />}
    </button>
  );
}

// --- Main Page ---

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={container}
      className="max-w-[480px] mx-auto w-full space-y-12 pb-20"
    >
      {/* 1. Header Info Row */}
      <motion.header variants={item} className="flex justify-between items-start text-xs font-medium uppercase tracking-wide text-neutral-500">
        <div className="flex flex-col gap-1">
          <span className="text-neutral-200">{DATA.name}</span>
          <span>{DATA.location}</span>
        </div>
        <TimeDisplay />
      </motion.header>

      {/* 2. Avatar & Role */}
      <motion.div variants={item} className="flex flex-col gap-6">
        <div className="w-24 h-24 relative rounded-full overflow-hidden bg-neutral-800">
             {/* Put your image in public/avatar.jpg */}
             <Image 
               src="/avatar.jpg" 
               alt="Profile" 
               fill 
               className="object-cover" 
               priority
             /> 
        </div>
        <h1 className="text-2xl font-medium text-neutral-200">{DATA.role}</h1>
      </motion.div>

      {/* 3. About Text */}
      <motion.div variants={item} className="space-y-4">
        <h2 className="text-xs font-medium uppercase tracking-wide text-neutral-500">About</h2>
        <div className="space-y-4 text-neutral-400 leading-relaxed text-[15px]">
          {DATA.about.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </motion.div>

      {/* 4. CTA Card (Videographers/Network) */}
      <motion.div variants={item} className="p-5 rounded-2xl bg-[#111] border border-neutral-800/50 space-y-4">
        <div className="space-y-1">
          <h3 className="text-neutral-200 font-medium flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            {DATA.cta.title}
          </h3>
          <p className="text-neutral-400 text-sm">{DATA.cta.text}</p>
        </div>
        <Link 
          href={DATA.cta.link}
          target="_blank"
          className="flex items-center justify-between w-full p-3 px-4 bg-neutral-200 hover:bg-white text-black rounded-xl text-sm font-medium transition-colors"
        >
          {DATA.cta.button}
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </motion.div>

      {/* 5. Contact / Socials List */}
      <motion.div variants={item} className="space-y-4">
        <h2 className="text-xs font-medium uppercase tracking-wide text-neutral-500">Contact</h2>
        <div className="divide-y divide-neutral-800/50">
          {DATA.socials.map((social) => (
            <div key={social.label} className="group flex items-center justify-between py-4">
              <span className="text-neutral-500 w-24 shrink-0">{social.label}</span>
              
              <div className="flex items-center gap-3 overflow-hidden">
                <Link 
                  href={social.href} 
                  target="_blank"
                  className="text-neutral-300 hover:text-white truncate transition-colors"
                >
                  {social.value}
                </Link>
                {social.type === "copy" && <CopyButton text={social.value} />}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* 6. Footer */}
      <motion.footer variants={item} className="pt-8 border-t border-neutral-900 flex justify-between text-xs text-neutral-600">
        <span>Built by Kashif</span>
        <span>© {new Date().getFullYear()}</span>
      </motion.footer>
    </motion.div>
  );
}
