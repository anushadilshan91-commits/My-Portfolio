"use client";
import React from 'react';
import Image from 'next/image';
import { FaLinkedinIn, FaWhatsapp, FaGithub, FaEnvelope, FaDownload } from "react-icons/fa";

// Typewriter Animation
function Typewriter({ text, speed = 450, pause = 1500 }: { text: string; speed?: number; pause?: number }) {
  const [displayedText, setDisplayedText] = React.useState("");
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    let timer: NodeJS.Timeout;

    if (!isDeleting && displayedText.length < text.length) {
      timer = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, speed);
    } else if (!isDeleting && displayedText.length === text.length) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, pause);
    } else if (isDeleting && displayedText.length > 0) {
      timer = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length - 1));
      }, speed / 2);
    } else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, text, speed, pause]);

  return (
    <span className="inline-flex items-center">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">
        {displayedText}
      </span>
      {/* Blinking Cursor */}
      <span className="w-[3px] h-[0.8em] bg-teal-400 ml-1 animate-pulse"></span>
    </span>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-slate-100 font-sans selection:bg-teal-500 selection:text-slate-950">
      
      {/* Navigation Header */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#0d1117]/80 border-b border-slate-800/60">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-md font-mono font-bold text-teal-400">Anusha Dilshan</span>
          <div className="flex gap-6 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-teal-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-teal-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-teal-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-6">
        
        {/* Full-Screen Hero Section */}
        <section 
          id="hero" 
          className="min-h-[calc(100vh-4rem)] flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 py-12"
        >
          {/* Profile Picture Container with Orbiting Buttons */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 flex-shrink-0">
            
            {/* Glow backdrop */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-teal-500/40 to-emerald-500/40 blur-md"></div>

            {/* Circular Image Wrapper */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-slate-700/80 bg-[#161b22] shadow-2xl">
              <Image
                src="/anusha.jpg"
                alt="Anusha Dilshan"
                fill
                sizes="(max-width: 768px) 256px, 320px"
                className="object-cover"
                style={{ objectPosition: 'center top' }}
                priority
              />
            </div>

            {/* Orbiting Button 1: About */}
            <a
              href="#about"
              className="absolute -top-2 -right-1 z-10 px-3 py-1.5 bg-[#161b22]/60 backdrop-blur-md border border-teal-500/50 hover:border-teal-400 text-teal-400 text-xs font-mono rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:border-teal-300 hover:shadow-[0_0_40px_rgba(45,212,191,0.6)]"
            >
              About
            </a>

            {/* Orbiting Button 2: Projects */}
            <a
              href="#projects"
              className="absolute top-1/2 -left-16 -translate-y-1/2 z-10 px-3 py-1.5 bg-[#161b22]/60 backdrop-blur-md border border-teal-500/50 hover:border-teal-400 text-teal-400 text-xs font-mono rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:border-teal-300 hover:shadow-[0_0_40px_rgba(45,212,191,0.6)]"
            >
              Projects
            </a>

            {/* Orbiting Button 3: Contact */}
            <a
              href="#contact"
              className="absolute -bottom-2 -right-1 z-10 px-3 py-1.5 bg-[#161b22]/60 backdrop-blur-md border border-teal-500/50 hover:border-teal-400 text-teal-400 text-xs font-mono rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:border-teal-300 hover:shadow-[0_0_40px_rgba(45,212,191,0.6)]"
            >
              Contact
            </a>

          </div>

          {/* Text Content & Bio */}
          <div className="space-y-5 max-w-xl text-left">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-100">
              Hi, I'm <Typewriter text="Anusha..." speed={450} />
            </h1>
            
            <p className="text-base text-slate-300 font-normal leading-relaxed">
              I am a cybersecurity student and software developer. I design systems focused on data privacy, local encryption utility development, and clean UI components.
            </p>
            
            <div className="flex gap-4 pt-2">
              <a
                href="/CV.pdf"
                download="Anusha_Dilshan_CV.pdf"
                className="px-5 py-2.5 bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold rounded text-xs transition-colors shadow-lg shadow-teal-950/40"
                >
                  <span>Download CV</span>
                </a>
              <a 
                href="#projects" 
                className="px-5 py-2.5 bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold rounded text-xs transition-colors shadow-lg shadow-teal-950/40"
              >
                Explore Work
              </a>
              <a 
                href="#contact" 
                className="px-5 py-2.5 border border-slate-700 hover:border-slate-500 text-slate-300 font-medium rounded text-xs transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>

        </section>

        {/* About Section */}
        <section id="about" className="py-20 space-y-6 border-t border-slate-800/60">
          <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-2">
            About Me 
          </h2>
          <div className="bg-[#161b22] border border-slate-800/80 p-6 rounded-xl space-y-4 text-slate-300 leading-relaxed text-sm">
            <p>
              I'm currently pursuing a{" "}
              <strong className="text-slate-100 font-semibold">
                BSc (Hons) in Cyber Security
              </strong>{" "}
              while actively refining my offensive and defensive security skills
              through hands-on platforms like{" "}
              <strong className="text-slate-100 font-semibold">
                Hack The Box
              </strong>{" "}
              and{" "}
              <strong className="text-slate-100 font-semibold">
                TryHackMe
              </strong>
              . I care about the complete lifecycle of secure software: from
              threat modeling and underlying cryptography to system hardening and
              resilient architecture.
            </p>
            <p>
              Beyond security testing, I build full-stack utilities and secure
              backend logic using{" "}
              <strong className="text-slate-100 font-semibold">Python</strong>{" "}
              and{" "}
              <strong className="text-slate-100 font-semibold">Java</strong>,
              alongside modern web interfaces powered by{" "}
              <strong className="text-slate-100 font-semibold">Next.js</strong>
              —aiming to bridge the gap between robust cybersecurity engineering
              and clean user experiences.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 space-y-8 border-t border-slate-800/60">
          <h2 className="text-xl font-bold text-slate-200 tracking-tight flex items-center gap-2">
            Projects & Work
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-[#161b22] border border-slate-800/80 hover:border-teal-500/40 p-6 rounded-xl transition-all hover:shadow-lg hover:shadow-teal-950/20 group">
              <span className="text-xs font-mono text-teal-400 bg-teal-950/40 px-2.5 py-1 rounded border border-teal-900/30">Security</span>
              <h3 className="text-lg font-bold text-slate-100 mt-3 group-hover:text-teal-300 transition-colors">File Encryption Vault</h3>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                A Python-based utility utilizing symmetric cryptography primitives to secure local directories with a master passkey framework.
              </p>
              <div className="mt-4 pt-2 text-xs font-mono text-slate-500">
                <span>Python • Cryptography</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#161b22] border border-slate-800/80 hover:border-teal-500/40 p-6 rounded-xl transition-all hover:shadow-lg hover:shadow-teal-950/20 group">
              <span className="text-xs font-mono text-teal-400 bg-teal-950/40 px-2.5 py-1 rounded border border-teal-900/30">System Logic</span>
              <h3 className="text-lg font-bold text-slate-100 mt-3 group-hover:text-teal-300 transition-colors">Hotel Management System</h3>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                An application architecture designed to organize administrative shifts, track transaction logs, and manage active states.
              </p>
              <div className="mt-4 pt-2 text-xs font-mono text-slate-500">
                <span>Java • Core Logic</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Footer */}
        <section id="contact" className="border-t border-slate-800/60 py-20 text-center space-y-6">
          <h2 className="text-2xl font-bold text-slate-100">Let's Connect</h2>
          <p className="text-sm text-slate-400 max-w-sm mx-auto">
            Open to discussing security engineering, network defense, or technical software build collaborations.
          </p>

          {/* Glowing Icon Buttons */}
          <div className="flex justify-center gap-5 pt-2">
            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/anusha-dilshan-926234331/" 
              target="_blank" 
              rel="noreferrer" 
              aria-label="LinkedIn"
              className="w-12 h-12 shrink-0 aspect-square rounded-full border border-slate-700/80 bg-[#161b22] text-slate-300 inline-flex items-center justify-center text-lg transition-all duration-300 hover:border-teal-400 hover:shadow-[0_0_40px_rgba(45,212,191,0.6)]"
            >
              <FaLinkedinIn />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/anushadilshan91-commits"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="w-12 h-12 rounded-full border border-slate-700/80 bg-[#161b22] text-slate-300 flex items-center justify-center text-xl transition-all duration-300 hover:border-teal-400 hover:text-teal-400 hover:scale-110 hover:shadow-[0_0_25px_rgba(45,212,191,0.6)]"
            >
              <FaGithub />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/94704039395"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="w-12 h-12 rounded-full border border-slate-700/80 bg-[#161b22] text-slate-300 flex items-center justify-center text-xl transition-all duration-300 hover:border-emerald-400 hover:text-emerald-400 hover:scale-110 hover:shadow-[0_0_25px_rgba(52,211,153,0.6)]"
            >
              <FaWhatsapp />
            </a>

            {/* Envelope */}
            <a
              href="mailto:anushadilshan91@gmail.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Email"
              className="w-12 h-12 rounded-full border border-slate-700/80 bg-[#161b22] text-slate-300 flex items-center justify-center text-lg transition-all duration-300 hover:border-teal-400 hover:text-teal-400 hover:scale-110 hover:shadow-[0_0_25px_rgba(45,212,191,0.6)]"
            >
              <FaEnvelope />
            </a>
          </div>
        </section>

      </main>
    </div>
  );
}