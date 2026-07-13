"use client";

import { useEffect, useRef, useState } from "react";

export default function useScrollAnimation() {
    const ref = useRef<HTMLDivElement | null>(null);

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.2,
            }
        );

        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, []);

    return {
        ref,
        isVisible,
    };
}
