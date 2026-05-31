import React from "react";
import { Play } from "lucide-react";
import { motion } from "motion/react";

interface StartScreenProps {
  onStart: () => void;
  title?: string;
  description?: string;
}

export function StartScreen({ onStart, title = "Knowledge Quest", description = "Test your general knowledge with these 5 questions. Think fast, answer smart!" }: StartScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex flex-col items-center justify-center p-8 bg-white dark:bg-zinc-900 rounded-3xl shadow-xl w-full max-w-md mx-auto border border-zinc-100 dark:border-zinc-800"
    >
      <div className="w-20 h-20 mb-6 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-2xl flex items-center justify-center">
        <Play size={40} className="ml-2" />
      </div>
      <h1 className="text-3xl font-bold text-center mb-4 text-zinc-900 dark:text-zinc-50">
        {title}
      </h1>
      <p className="text-zinc-500 dark:text-zinc-400 text-center mb-8">
        {description}
      </p>
      <button
        onClick={onStart}
        className="w-full py-4 px-6 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold text-lg transition-colors flex items-center justify-center gap-2 group shadow-lg shadow-indigo-600/20"
      >
        <span>Start Quiz</span>
        <Play
          size={20}
          className="group-hover:translate-x-1 transition-transform"
        />
      </button>
    </motion.div>
  );
}
