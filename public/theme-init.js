(function () {
    try {
        var stored = localStorage.getItem('theme'); // 'light' | 'dark' | 'system' | null
        var prefers = window.matchMedia('(prefers-color-scheme: dark)').matches;
        var dark = stored ? (stored === 'dark' || (stored === 'system' && prefers)) : prefers;
        if (dark) document.documentElement.classList.add('dark');
    } catch (e) {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.classList.add('dark');
        }
    }
})();
