"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: "1",
    text: "Hello! I'm here to help you learn more about Flaneur Collective. How can I assist you today?",
    sender: "bot",
    timestamp: new Date(),
  },
];

const BOT_RESPONSES: { [key: string]: string } = {
  hello: "Hello! Welcome to Flaneur Collective. We create brand identities, content systems, and creative direction for modern brands. What would you like to know?",
  hi: "Hi there! I'm here to help you learn about our creative services. What interests you most?",
  services: "We offer:\n• Brand Systems (naming, identity, visual architecture)\n• Content Engine (photography, film, motion, editorial)\n• AI-Augmented Production\n• Creator & Social Growth\n\nWhich area interests you?",
  pricing: "We partner with a select number of clients each quarter. For pricing and availability, please reach out via email or WhatsApp. Would you like our contact information?",
  contact: "You can reach us at:\n• Email: support@estatebali.app\n• WhatsApp: +1 (742) 379-8954\n\nWould you like to start a conversation?",
  work: "We work with founders, lifestyle brands, and creative teams. Our portfolio includes brand launches, creator campaigns, and AI-driven motion projects. Would you like to see examples?",
  process: "Our process:\n1. Discover - We listen to your vision\n2. Direct - Concepts and production plans\n3. Deliver - Polished identities and content\n\nReady to get started?",
  default: "That's interesting! I'd love to help you learn more about Flaneur Collective. You can ask me about our services, process, or how to get in touch. What would you like to know?",
};

export default function AIChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase().trim();

    // Check for keywords
    if (lowerMessage.includes("hello") || lowerMessage.includes("hi")) {
      return BOT_RESPONSES.hello;
    }
    if (
      lowerMessage.includes("service") ||
      lowerMessage.includes("what do you do") ||
      lowerMessage.includes("offer")
    ) {
      return BOT_RESPONSES.services;
    }
    if (
      lowerMessage.includes("price") ||
      lowerMessage.includes("cost") ||
      lowerMessage.includes("how much")
    ) {
      return BOT_RESPONSES.pricing;
    }
    if (
      lowerMessage.includes("contact") ||
      lowerMessage.includes("email") ||
      lowerMessage.includes("reach") ||
      lowerMessage.includes("phone")
    ) {
      return BOT_RESPONSES.contact;
    }
    if (
      lowerMessage.includes("work") ||
      lowerMessage.includes("portfolio") ||
      lowerMessage.includes("project")
    ) {
      return BOT_RESPONSES.work;
    }
    if (
      lowerMessage.includes("process") ||
      lowerMessage.includes("how") ||
      lowerMessage.includes("step")
    ) {
      return BOT_RESPONSES.process;
    }

    return BOT_RESPONSES.default;
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue.trim(),
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(userMessage.text),
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-charcoal text-cream rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
          aria-label="Open chat"
        >
          <svg
            className="w-6 h-6 transition-transform group-hover:scale-110"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 h-[600px] bg-cream border border-charcoal/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-charcoal text-cream px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-ochre rounded-full flex items-center justify-center">
                <span className="text-charcoal font-medium text-sm">AI</span>
              </div>
              <div>
                <h3 className="font-medium text-sm">Flaneur Assistant</h3>
                <p className="text-xs text-cream/60">We're here to help</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-cream/60 hover:text-cream transition-colors p-1"
              aria-label="Close chat"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 bg-cream">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                    message.sender === "user"
                      ? "bg-charcoal text-cream"
                      : "bg-charcoal/5 text-charcoal"
                  }`}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-line">
                    {message.text}
                  </p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-charcoal/5 text-charcoal rounded-2xl px-4 py-2">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-charcoal/40 rounded-full animate-bounce" />
                    <span
                      className="w-2 h-2 bg-charcoal/40 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    />
                    <span
                      className="w-2 h-2 bg-charcoal/40 rounded-full animate-bounce"
                      style={{ animationDelay: "0.4s" }}
                    />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={handleSend}
            className="border-t border-charcoal/10 p-4 bg-cream"
          >
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border border-charcoal/20 rounded-full focus:outline-none focus:border-charcoal/40 text-sm text-charcoal placeholder:text-charcoal/40"
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isTyping}
                className="w-10 h-10 bg-charcoal text-cream rounded-full hover:bg-charcoal/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                aria-label="Send message"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

