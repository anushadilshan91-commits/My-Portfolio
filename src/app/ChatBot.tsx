"use client";
import React, { useState } from "react";
import { FaComments, FaTimes } from "react-icons/fa";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Chatbot"
        className="w-14 h-14 rounded-full bg-teal-500 hover:bg-teal-400 text-slate-950 flex items-center justify-center text-xl shadow-xl transition-all duration-300 hover:scale-110"
      >
        {isOpen ? <FaTimes /> : <FaComments />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-18 right-0 w-80 sm:w-96 bg-[#161b22] border border-slate-800 rounded-xl shadow-2xl overflow-hidden flex flex-col h-96">
          {/* Header */}
          <div className="bg-[#0d1117] p-4 border-b border-slate-800 flex justify-between items-center">
            <h3 className="text-sm font-bold text-slate-100 font-mono">
              Assistant Bot
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-slate-200 text-sm"
            >
              <FaTimes />
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 text-xs">
            <div className="bg-slate-800/60 p-3 rounded-lg text-slate-300 max-w-[85%]">
              Hi! Feel free to ask any questions about my projects or experience.
            </div>
          </div>

          {/* Input Area */}
          <div className="p-3 border-t border-slate-800/80 bg-[#0d1117]">
            <input
              type="text"
              placeholder="Type a message..."
              className="w-full bg-[#161b22] text-xs text-slate-200 border border-slate-800 rounded px-3 py-2 focus:outline-none focus:border-teal-500"
            />
          </div>
        </div>
      )}
    </div>
  );
}