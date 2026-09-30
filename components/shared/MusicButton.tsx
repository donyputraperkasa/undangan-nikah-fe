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
                type="button"
                onClick={toggleMusic}
                aria-label={isPlaying ? "Jeda musik" : "Putar musik"}
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
                    bg-[#5B4B8A]
                    text-white
                    border-2
                    border-white
                    shadow-xl
                    shadow-[#5B4B8A]/30
                    transition-all
                    hover:scale-105
                    hover:bg-[#4B3D74]
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
