import { useTheme } from '../../lib/useTheme';
import { cn } from '../../utils/cn';
import { Moon, Sun, Monitor } from 'lucide-react';

type Props = { className?: string };

export default function DarkModeToggle({ className }: Props) {
    const { theme, setTheme } = useTheme();
    const btn =
        'h-8 w-8 rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-slate-900 text-slate-700 dark:text-slate-200 transition-colors';
    const activeBtn =
        'bg-[#69b7e42c] text-slate-900 shadow-sm hover:bg-[#69b7e42c]/80';

    return (
        <div
            className={cn(
                'inline-flex items-center gap-1 rounded-xl border border-black/10 bg-white/70 p-1 text-slate-700 backdrop-blur dark:border-white/10 dark:bg-black/30 dark:text-slate-200',
                className,
            )}
        >
            <button
                className={cn(btn, theme === 'light' && activeBtn)}
                aria-label="Use light theme"
                onClick={() => setTheme('light')}
                title="Light"
            >
                <Sun className="mx-auto h-5 w-5" />
            </button>
            <button
                className={cn(btn, theme === 'system' && activeBtn)}
                aria-label="Use system theme"
                onClick={() => setTheme('system')}
                title="System"
            >
                <Monitor className="mx-auto h-5 w-5" />
            </button>
            <button
                className={cn(btn, theme === 'dark' && activeBtn)}
                aria-label="Use dark theme"
                onClick={() => setTheme('dark')}
                title="Dark"
            >
                <Moon className="mx-auto h-5 w-5" />
            </button>
        </div>
    );
}
