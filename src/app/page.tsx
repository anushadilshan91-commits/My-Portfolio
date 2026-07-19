import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-slate-100 font-sans selection:bg-teal-500 selection:text-slate-950">
      
      {/* Navigation Header */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#0d1117]/80 border-b border-slate-800/60">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-md font-mono font-bold black-teal-400">~/portfolio</span>
          <div className="flex gap-6 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-teal-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-teal-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-teal-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-6 py-16 space-y-24">
        
        {/* Intro Section */}
        <section id="about" className="space-y-4 pt-8">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-100">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">Anusha</span>.
          </h1>
          <p className="text-md text-slate-400 max-w-2xl leading-relaxed">
            I am a cybersecurity student and software developer. I design systems focused on data privacy, local encryption utility development, and clean UI components.
          </p>
          <div className="flex gap-4 pt-2">
            <a href="#projects" className="px-4 py-2 bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold rounded text-xs transition-colors">
              Explore Work
            </a>
            <a href="#contact" className="px-4 py-2 border border-slate-700 hover:border-slate-500 text-slate-300 font-medium rounded text-xs transition-colors">
              Get in Touch
            </a>
          </div>
        </section>

        {/* Projects Grid (Minimal Cards) */}
        <section id="projects" className="space-y-6">
          <h2 className="text-xl font-bold text-slate-200 tracking-tight flex items-center gap-2">
            <span className="text-teal-400">01.</span> Projects & Work
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Card 1 */}
            <div className="bg-[#161b22] border border-slate-800/80 hover:border-teal-500/40 p-6 rounded-lg transition-all hover:shadow-lg hover:shadow-teal-950/20 group">
              <span className="text-xs font-mono text-teal-400 bg-teal-950/40 px-2 py-1 rounded border border-teal-900/30">Security</span>
              <h3 className="text-lg font-bold text-slate-100 mt-3 group-hover:text-teal-300 transition-colors">File Encryption Vault</h3>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                A Python-based utility utilizing symmetric cryptography primitives to secure local directories with a master passkey framework.
              </p>
              <div className="mt-4 pt-2 text-xs font-mono text-slate-500">
                <span>Python • Cryptography</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#161b22] border border-slate-800/80 hover:border-teal-500/40 p-6 rounded-lg transition-all hover:shadow-lg hover:shadow-teal-950/20 group">
              <span className="text-xs font-mono text-teal-400 bg-teal-950/40 px-2 py-1 rounded border border-teal-900/30">System Logic</span>
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
        <section id="contact" className="border-t border-slate-800/60 pt-16 text-center space-y-4">
          <h2 className="text-xl font-bold text-slate-100">Let's Connect</h2>
          <p className="text-sm text-slate-400 max-w-sm mx-auto">
            Open to discussing security engineering, network defense, or technical software build collaborations.
          </p>
          <div className="pt-4 flex justify-center gap-6 text-xs font-mono">
            <a href="mailto:your-email@gmail.com" className="text-teal-400 hover:text-teal-300">Email</a>
            <a href="https://github.com" target="_blank" className="text-teal-400 hover:text-teal-300">GitHub</a>
            <a href="https://linkedin.com" target="_blank" className="text-teal-400 hover:text-teal-300">LinkedIn</a>
          </div>
        </section>

      </main>
    </div>
  );
}