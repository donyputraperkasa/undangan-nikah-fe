"use client";

import { useEffect, useRef, useState } from "react";

export default function useMusic(audioSrc: string) {
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        audioRef.current = new Audio(audioSrc);

        if (audioRef.current) {
            audioRef.current.loop = true;
            audioRef.current.volume = 0.5;
        }

        return () => {
            audioRef.current?.pause();
        };
    }, [audioSrc]);

    const playMusic = async () => {
        if (!audioRef.current) return;

        await audioRef.current.play();
        setIsPlaying(true);
    };

    const pauseMusic = () => {
        if (!audioRef.current) return;

        audioRef.current.pause();
        setIsPlaying(false);
    };

    const toggleMusic = async () => {
        if (isPlaying) {
            pauseMusic();
        } else {
            await playMusic();
        }
    };

    return {
        isPlaying,
        playMusic,
        pauseMusic,
        toggleMusic,
    };
}
