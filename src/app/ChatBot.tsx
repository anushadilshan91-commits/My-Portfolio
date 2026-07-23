"use client";
import React, { useState, useRef, useEffect } from 'react';
import { FaComments, FaTimes, FaPaperPlane } from 'react-icons/fa';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! How can I help you today?", sender: "bot" }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input;
    setMessages((prev) => [...prev, { text: userMsg, sender: "user" }]);
    setInput("");

    // Simulated Bot Response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: "Thanks for reaching out! I will respond as soon as possible.", sender: "bot" }
      ]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Pop-up Chat Window */}
      {isOpen && (
        <div className="mb-4 w-80 md:w-96 bg-[#111622] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[400px] animate-in fade-in slide-in-from-bottom-5">
          {/* Header */}
          <div className="bg-[#161b22] px-4 py-3 border-b border-slate-800 flex justify-between items-center">
            <span className="text-sm font-semibold text-slate-100 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              Assistant
            </span>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-slate-200 text-sm"
            >
              <FaTimes />
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 text-xs">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-xl leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-[#f6a050] text-slate-950 font-medium rounded-br-none'
                      : 'bg-[#1c2230] text-slate-200 border border-slate-800 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input */}
          <form onSubmit={handleSend} className="p-3 border-t border-slate-800/80 bg-[#161b22] flex gap-2">
            <input
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-[#0b0e14] text-xs text-slate-200 border border-slate-800 rounded-lg px-3 py-2 focus:outline-none focus:border-amber-500/80"
            />
            <button
              type="submit"
              className="bg-[#f6a050] hover:bg-[#e08f43] text-slate-950 p-2.5 rounded-lg transition-colors flex items-center justify-center"
            >
              <FaPaperPlane className="text-xs" />
            </button>
          </form>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-[#f6a050] hover:bg-[#e08f43] text-slate-950 rounded-full flex items-center justify-center text-xl shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
        aria-label="Toggle Chat"
      >
        {isOpen ? <FaTimes /> : <FaComments />}
      </button>
    </div>
  );
}