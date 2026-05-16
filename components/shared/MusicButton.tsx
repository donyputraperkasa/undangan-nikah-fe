"use client";

import { Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function MusicButton() {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const handlePlayMusic = async () => {
            if (!audioRef.current) return;

            try {
                audioRef.current.volume = 0.5;

                await audioRef.current.play();

                setIsPlaying(true);
            } catch (error) {
                console.error("Music play error:", error);
            }
        };

        window.addEventListener("play-music", handlePlayMusic);

        return () => {
            window.removeEventListener(
                "play-music",
                handlePlayMusic
            );
        };
    }, []);

    const toggleMusic = async () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            await audioRef.current.play();
            setIsPlaying(true);
        }
    };

    return (
        <>
            <audio
                ref={audioRef}
                src="/music/Westlife - Beautiful in white.mp3"
                loop
            />

            <button
                onClick={toggleMusic}
                className="
                    fixed
                    bottom-6
                    right-6
                    z-50
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    bg-[#A67C52]
                    text-white
                    shadow-xl
                    transition-all
                    hover:scale-105
                "
            >
                {isPlaying ? (
                    <Pause size={22} />
                ) : (
                    <Play size={22} className="ml-1" />
                )}
            </button>
        </>
    );
}