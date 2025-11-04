import { motion } from "framer-motion";
import { WavyBackground } from "../ui/visuals/WavyBackground";

const Hero = () => {
    return (
        <section className="relative overflow-hidden bg-app text-app">
            <WavyBackground
                containerClassName="relative overflow-hidden items-start justify-start bg-app text-app"
                backgroundFill="transparent"
                className="mx-auto max-w-7xl px-6 py-28 sm:py-36"
            >
                <motion.h1
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="text-balance text-4xl font-bold tracking-tight sm:text-6xl"
                >
                    Hi, my name is Balázs Délczeg.
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: 0.05 }}
                    className="mt-6 max-w-2xl text-lg"
                >
                    I'm a Full-Stack Developer.
                    <br />
                    Check out my skills:
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
                    className="mt-10 flex gap-4"
                >
                    <a href="#projects" className="rounded-xl bg-[rgb(var(--accent))] px-5 py-3 font-semibold text-white shadow">
                        View Projects
                    </a>
                    <a href="/cv.pdf" className="rounded-xl border border-black/10 bg-card px-5 py-3 font-semibold text-app shadow-sm dark:border-white/10">
                        Download CV
                    </a>
                </motion.div>
            </WavyBackground>
        </section>
    );
}

export default Hero;
