'use client';

import { useEffect, useRef, ReactNode } from 'react';

interface ProjectScrollTrackProps {
    children: ReactNode;
}

export default function ProjectScrollTrack({ children }: ProjectScrollTrackProps) {
    const trackRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        let isDown = false;
        let startX = 0;
        let scrollL = 0;

        const onMouseDown = (e: MouseEvent) => {
            isDown = true;
            track.style.cursor = 'grabbing';
            startX = e.pageX - track.offsetLeft;
            scrollL = track.scrollLeft;
        };

        const onMouseLeave = () => {
            isDown = false;
            track.style.cursor = 'grab';
        };

        const onMouseUp = () => {
            isDown = false;
            track.style.cursor = 'grab';
        };

        const onMouseMove = (e: MouseEvent) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - track.offsetLeft;
            const walk = (x - startX) * 1.5;
            track.scrollLeft = scrollL - walk;
        };

        track.addEventListener('mousedown', onMouseDown);
        track.addEventListener('mouseleave', onMouseLeave);
        track.addEventListener('mouseup', onMouseUp);
        track.addEventListener('mousemove', onMouseMove);

        return () => {
            track.removeEventListener('mousedown', onMouseDown);
            track.removeEventListener('mouseleave', onMouseLeave);
            track.removeEventListener('mouseup', onMouseUp);
            track.removeEventListener('mousemove', onMouseMove);
        };
    }, []);

    return (
        <div className="proj-track" ref={trackRef}>
            {children}
        </div>
    );
}
