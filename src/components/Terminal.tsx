"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface CommandRecord {
  command: string;
  output: string | React.ReactNode;
}

export function Terminal() {
  const [history, setHistory] = useState<CommandRecord[]>([
    {
      command: "",
      output: "Welcome to ACPOS (Abizar Chifari Putra Operating System) v1.0.0\nType 'help' to see available commands.",
    },
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim();
    if (!cmd) return;

    let output: string | React.ReactNode = "";
    const args = cmd.split(" ");
    const mainCmd = args[0].toLowerCase();

    switch (mainCmd) {
      case "help":
        output = "Available commands:\n  help    - Show this message\n  whoami  - Display current user info\n  clear   - Clear terminal output\n  date    - Display current date and time\n  echo    - Print arguments\n  ls      - List contents";
        break;
      case "whoami":
        output = "Abizar Al Chifari Putra\nRole: Fullstack Developer\nTitle: Chairman of ACPTeam Development";
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      case "date":
        output = new Date().toString();
        break;
      case "echo":
        output = args.slice(1).join(" ");
        break;
      case "ls":
        output = "portfolio/\nprojects/\nskills/\nabout/\ncontact/\nsecret.txt";
        break;
      case "cat":
        if (args[1] === "secret.txt") {
          output = "Linux is the best! Stay curious, keep coding.";
        } else {
          output = `cat: ${args[1] || ""}: No such file or directory`;
        }
        break;
      case "sudo":
        output = "Nice try! This incident will be reported.";
        break;
      default:
        output = `Command not found: ${mainCmd}`;
    }

    setHistory((prev) => [...prev, { command: cmd, output }]);
    setInput("");
  };

  return (
    <div 
      className="bg-[#0c0c0c] border border-white/20 rounded-lg shadow-2xl overflow-hidden font-pixel text-lg sm:text-xl tracking-wider w-full max-w-4xl mx-auto h-[60vh] sm:h-[70vh] flex flex-col"
      onClick={() => inputRef.current?.focus()}
    >
      {/* Terminal Header */}
      <div className="bg-[#1e1e1e] px-4 py-2 flex items-center border-b border-white/10">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="mx-auto text-foreground/50 text-xs text-center flex-1 pr-8">
          guest@acp-portfolio:~
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-4 flex-1 overflow-y-auto">
        {history.map((record, index) => (
          <div key={index} className="mb-4">
            {record.command && (
              <div className="flex items-center text-neon-blue">
                <span className="mr-2">guest@acp-portfolio:~$</span>
                <span>{record.command}</span>
              </div>
            )}
            {record.output && (
              <div className="text-foreground/80 whitespace-pre-wrap mt-1">
                {record.output}
              </div>
            )}
          </div>
        ))}

        <form onSubmit={handleCommand} className="flex items-center text-neon-blue mt-2">
          <span className="mr-2">guest@acp-portfolio:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent outline-none text-foreground border-none focus:ring-0 p-0"
            autoFocus
            autoComplete="off"
            spellCheck="false"
          />
        </form>
        <div ref={bottomRef} />
      </div>
    </div>
  );
}
