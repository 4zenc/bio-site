"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Copy, Check, Twitter, Instagram, Youtube, Mail } from "lucide-react";

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
    { label: "Email", value: "hi@kashifye.com", href: "mailto:hi@kashifye.com", icon: Mail },
    { label: "Instagram", value: "@kashifye", href: "https://instagram.com/kashifye", icon: Instagram },
    { label: "X / Twitter", value: "@kashifye", href: "https://x.com/kashifye", icon: Twitter },
    { label: "YouTube", value: "@kashifye", href: "https://youtube.com/@kashifye", icon: Youtube },
  ],
};

// --- Components ---

function TimeDisplay() {
  const [time, setTime] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          timeZone: DATA.timezone,
          hour: "numeric",
          minute: "2-digit",
          hour12: false,
        })
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!mounted) return <span className="text-neutral-500">...</span>;

  return (
    <div className="flex items-center gap-2 text-neutral-500">
      <span>{DATA.location}</span>
      <span className="text-neutral-700 select-none">/</span>
      <span className="tabular-nums w-[4ch] text-right">{time} UTC+5.30</span>
    </div>
  );
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
      className="ml-2 p-1.5 hover:bg-neutral-800 rounded-md transition-colors group-hover:opacity-100 opacity-0"
    >
      {copied ? <Check className="w-3.5 h-3.5 text-neutral-200" /> : <Copy className="w-3.5 h-3.5 text-neutral-500" />}
    </button>
  );
}

// --- Main Page ---

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.05 } },
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={container}
      className="space-y-10"
    >
      {/* 1. Header Info Row */}
      <motion.header variants={item} className="flex justify-between items-start text-[13px] font-medium tracking-tight leading-none">
        <div className="text-neutral-200">{DATA.name}</div>
        <TimeDisplay />
      </motion.header>

      {/* 2. Avatar & Role */}
      <motion.div variants={item} className="flex flex-col gap-5">
        <div className="w-[100px] h-[100px] relative rounded-full overflow-hidden bg-neutral-900 border border-neutral-800 shadow-2xl">
            {/* Make sure avatar.jpg is in public folder */}
             <Image 
               src="/avatar.jpg" 
               alt="Profile" 
               fill 
               className="object-cover grayscale hover:grayscale-0 transition-all duration-500" 
               priority
             />
        </div>
        <h1 className="text-xl font-medium text-neutral-200 leading-snug">{DATA.role}</h1>
      </motion.div>

      {/* 3. About Text */}
      <motion.div variants={item} className="space-y-3">
        <h2 className="text-[11px] font-semibold uppercase tracking-wider text-neutral-500">About</h2>
        <div className="space-y-4 text-neutral-400 text-[14px] leading-relaxed">
          {DATA.about.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </motion.div>

      {/* 4. CTA Card (Distinct Style) */}
      <motion.div variants={item}>
         <Link 
            href={DATA.cta.link}
            target="_blank"
            className="block group relative overflow-hidden p-5 rounded-xl bg-[#0F0F0F] hover:bg-[#141414] border border-neutral-800 transition-all duration-300"
         >
            <div className="space-y-3 relative z-10">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <h3 className="text-neutral-200 text-sm font-medium">{DATA.cta.title}</h3>
              </div>
              <p className="text-neutral-400 text-[13px] leading-relaxed max-w-[90%]">
                {DATA.cta.text}
              </p>
              <div className="flex items-center gap-2 text-[13px] font-medium text-white pt-1">
                {DATA.cta.button}
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
         </Link>
      </motion.div>

      {/* 5. Contact / Socials List */}
      <motion.div variants={item} className="space-y-3">
        <h2 className="text-[11px] font-semibold uppercase tracking-wider text-neutral-500">Contact</h2>
        <div className="flex flex-col border-t border-neutral-900">
          {DATA.socials.map((social) => (
            <div key={social.label} className="group flex items-center justify-between py-3 border-b border-neutral-900/50">
              <div className="flex items-center gap-3">
                <span className="text-neutral-500 text-[13px]">{social.label}</span>
              </div>
              
              <div className="flex items-center">
                <Link 
                  href={social.href} 
                  target="_blank"
                  className="text-neutral-300 hover:text-white text-[13px] transition-colors flex items-center gap-1"
                >
                  {social.value}
                </Link>
                {social.label === "Email" && <CopyButton text={social.value} />}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* 6. Footer */}
      <motion.footer variants={item} className="pt-6 flex justify-between text-[11px] text-neutral-600 uppercase tracking-wider font-medium">
        <span>Built by Kashif</span>
        <span>© {new Date().getFullYear()}</span>
      </motion.footer>
    </motion.div>
  );
}
