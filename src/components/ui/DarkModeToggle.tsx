import { useTheme } from '../../lib/useTheme';
import { cn } from '../../utils/cn';
import { Moon, Sun, Monitor } from 'lucide-react';

type Props = { className?: string };

export default function DarkModeToggle({ className }: Props) {
    const { theme, setTheme } = useTheme();
    const btn =
        'h-8 w-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-slate-900 cursor-pointer';

    return (
        <div
            className={cn(
                'inline-flex items-center gap-1 rounded-xl border border-black/10 bg-white/70 p-1 text-slate-700 backdrop-blur dark:border-white/10 dark:bg-black/30 dark:text-slate-200',
                className,
            )}
        >
            <button
                className={btn}
                aria-pressed={theme === 'light'}
                aria-label="Use light theme"
                onClick={() => setTheme('light')}
                title="Light"
            >
                <Sun className="mx-auto h-5 w-5" />
            </button>
            <button
                className={btn}
                aria-pressed={theme === 'system'}
                aria-label="Use system theme"
                onClick={() => setTheme('system')}
                title="System"
            >
                <Monitor className="mx-auto h-5 w-5" />
            </button>
            <button
                className={btn}
                aria-pressed={theme === 'dark'}
                aria-label="Use dark theme"
                onClick={() => setTheme('dark')}
                title="Dark"
            >
                <Moon className="mx-auto h-5 w-5" />
            </button>
        </div>
    );
}
