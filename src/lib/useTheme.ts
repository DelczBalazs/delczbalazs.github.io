import { useEffect, useRef, useState } from 'react';

type Theme = 'light' | 'dark' | 'system';
const STORAGE_KEY = 'theme';

function systemPrefersDark(): boolean {
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
}

let themeTimer: number | null = null;
function enableThemeTransition(root: HTMLElement, ms = 220) {
    root.classList.add('theme-transition');
    if (themeTimer) window.clearTimeout(themeTimer);
    themeTimer = window.setTimeout(() => {
        root.classList.remove('theme-transition');
        themeTimer = null;
    }, ms);
}

export function useTheme() {
    const [theme, setTheme] = useState<Theme>(() => {
        const stored = (typeof window !== 'undefined' &&
            localStorage.getItem(STORAGE_KEY)) as Theme | null;
        return stored ?? 'system';
    });

    const didMount = useRef(false);

    useEffect(() => {
        const root = document.documentElement;
        const isDark = theme === 'dark' || (theme === 'system' && systemPrefersDark());

        // Only animate after first paint (head script handled initial class)
        if (didMount.current) enableThemeTransition(root);
        else didMount.current = true;

        root.classList.toggle('dark', isDark);
        try {
            localStorage.setItem(STORAGE_KEY, theme);
        } catch {}
    }, [theme]);

    // React to OS changes when in "system" mode (animate too)
    useEffect(() => {
        if (theme !== 'system') return;
        const root = document.documentElement;
        const mql = window.matchMedia('(prefers-color-scheme: dark)');
        const onChange = () => {
            enableThemeTransition(root);
            root.classList.toggle('dark', mql.matches);
        };
        mql.addEventListener?.('change', onChange);
        return () => mql.removeEventListener?.('change', onChange);
    }, [theme]);

    return { theme, setTheme };
}
