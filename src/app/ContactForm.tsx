"use client";
import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // Simulate sending process
    setTimeout(() => {
      setStatus('sent');
      setFormData({ name: '', email: '', message: '' });

      // Reset button state after 3 seconds
      setTimeout(() => setStatus('idle'), 3000);
    }, 800);
  };

  return (
    <div className="bg-[#0b0e14] border border-slate-800/80 p-6 md:p-8 rounded-xl max-w-xl mx-auto shadow-2xl">
      <form onSubmit={handleSubmit} className="space-y-5 text-left font-mono text-xs">
        {/* Name Field */}
        <div className="space-y-2">
          <label className="block text-slate-400 font-semibold tracking-wider uppercase">Name</label>
          <input
            type="text"
            placeholder="Your name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-[#111622] border border-slate-800 text-slate-200 placeholder-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-500/80 transition-colors"
            required
          />
        </div>

        {/* Email Field */}
        <div className="space-y-2">
          <label className="block text-slate-400 font-semibold tracking-wider uppercase">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-[#111622] border border-slate-800 text-slate-200 placeholder-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-500/80 transition-colors"
            required
          />
        </div>

        {/* Message Field */}
        <div className="space-y-2">
          <label className="block text-slate-400 font-semibold tracking-wider uppercase">Message</label>
          <textarea
            rows={4}
            placeholder="What would you like to talk about?"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full bg-[#111622] border border-slate-800 text-slate-200 placeholder-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-500/80 transition-colors resize-none"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status !== 'idle'}
          className="w-full bg-[#f6a050] hover:bg-[#e08f43] text-slate-950 font-bold py-3.5 px-6 rounded-lg text-sm tracking-wide transition-all duration-200 shadow-md active:scale-[0.99] disabled:opacity-70"
        >
          {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Message Sent!' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}