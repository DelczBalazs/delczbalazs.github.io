import { useEffect, useRef, useState } from 'react';
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import DarkModeToggle from './ui/DarkModeToggle';

const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'About me', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

function classNames(...classes: (string | false | null | undefined)[]): string {
    return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [activeSection, setActiveSection] = useState('#home');
    const lastScrollY = useRef(0);
    const HIDE_AFTER_SCROLL = 160;
    const TOP_BUFFER = 10;

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const handleScroll = () => {
            const currentY = window.scrollY;
            const scrollingDown = currentY > lastScrollY.current;
            const scrollingUp = currentY < lastScrollY.current;

            setIsScrolled(currentY > 0);

            if (scrollingDown && currentY > HIDE_AFTER_SCROLL) {
                setIsHidden(true);
            } else if (scrollingUp || currentY <= TOP_BUFFER) {
                setIsHidden(false);
            }

            lastScrollY.current = currentY;
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Disclosure
            as="nav"
            className={classNames(
                'sticky top-0 z-50 transition-all duration-300 backdrop-blur',
                isHidden
                    ? '-translate-y-full opacity-0 pointer-events-none'
                    : 'translate-y-0 opacity-100',
                isScrolled ? 'bg-gray-900/0' : 'bg-gray-900 shadow-md',
            )}
        >
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button*/}
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon
                                aria-hidden="true"
                                className="block size-6 group-data-open:hidden"
                            />
                            <XMarkIcon
                                aria-hidden="true"
                                className="hidden size-6 group-data-open:block"
                            />
                        </DisclosureButton>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch">
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        aria-current={activeSection === item.href ? 'page' : undefined}
                                        className={classNames(
                                            activeSection === item.href
                                                ? classNames(
                                                    isScrolled
                                                        ? 'bg-slate-900/10 text-slate-900'
                                                        : 'bg-white/10 text-white',
                                                    'dark:bg-gray-900 dark:text-white',
                                                )
                                                : classNames(
                                                    isScrolled
                                                        ? 'text-slate-900 hover:bg-slate-900/5 hover:text-slate-600'
                                                        : 'text-white hover:bg-white/10 hover:text-gray-200',
                                                    'dark:text-gray-300 dark:hover:bg-white/5 dark:hover:text-white',
                                                ),
                                            'rounded-md px-3 py-2 text-sm font-medium transition-colors',
                                        )}
                                        onClick={() => setActiveSection(item.href)}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>

                        </div>
                        <div className="flex shrink-0 items-center">
                            <DarkModeToggle className="ml-2" />
                        </div>
                    </div>
                </div>
            </div>

            <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3">
                    {navigation.map((item) => (
                        <DisclosureButton
                            id={item.name}
                            key={item.name}
                            as="a"
                            href={item.href}
                            aria-current={activeSection === item.href ? 'page' : undefined}
                            aria-label={item.name}
                            className={classNames(
                                activeSection === item.href
                                    ? classNames(
                                        isScrolled
                                            ? 'bg-slate-900/10 text-slate-900'
                                            : 'bg-white/10 text-white',
                                        'dark:bg-gray-900 dark:text-white',
                                    )
                                    : classNames(
                                        isScrolled
                                            ? 'text-slate-900 hover:bg-slate-900/10 hover:text-slate-600'
                                            : 'text-white hover:bg-white/10 hover:text-gray-200',
                                        'dark:text-gray-300 dark:hover:bg-white/5 dark:hover:text-white',
                                    ),
                                'block rounded-md px-3 py-2 text-base font-medium transition-colors',
                            )}
                            onClick={() => setActiveSection(item.href)}
                        >
                            {item.name}
                        </DisclosureButton>
                    ))}
                </div>
            </DisclosurePanel>
        </Disclosure>
    );
}

export default Navbar;