"use client";

import { useEffect, useState } from "react";

const words = [
    "Coder",
    "Passionate Web Developer",
    "Tech Enthusiast",
];

export default function TypingText() {
    const [text, setText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = words[wordIndex];
        const typingSpeed = isDeleting ? 50 : 100;
        const pauseTime = 1200;

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setText(currentWord.slice(0, text.length + 1));

                if (text.length + 1 === currentWord.length) {
                    setTimeout(() => setIsDeleting(true), pauseTime);
                }
            } else {
                setText(currentWord.slice(0, text.length - 1));

                if (text.length - 1 === 0) {
                    setIsDeleting(false);
                    setWordIndex((prev) => (prev + 1) % words.length);
                }
            }
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [text, isDeleting, wordIndex]);

    return (
        <span className="inline-block min-w-[220px] sm:min-w-[320px] md:min-w-[420px]">
            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(56,189,248,0.45)]">
                {text}
            </span>
            <span className="ml-1 inline-block text-cyan-400 animate-caret drop-shadow-[0_0_10px_rgba(56,189,248,0.8)]">
                _
            </span>
        </span>
    );
}