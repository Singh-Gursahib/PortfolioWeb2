'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            className="theme-toggle"
            id="themeToggle"
            aria-label="Toggle theme"
            onClick={toggleTheme}
        >
            <span className="toggle-icon" id="themeIcon">
                {theme === 'light' ? (
                    <Sun size={15} strokeWidth={2.2} />
                ) : (
                    <Moon size={15} strokeWidth={2.2} />
                )}
            </span>
            <span className="toggle-track"></span>
            <span className="toggle-label">Theme</span>
        </button>
    );
}
