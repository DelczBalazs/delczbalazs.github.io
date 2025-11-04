import { motion } from "framer-motion";
import { WavyBackground } from "../ui/visuals/WavyBackground";

import { AnimatedTooltip } from "../ui/visuals/AnimatedTooltip";
import ColourfulText from "../ui/visuals/ColourfulText";

type TechItem = { id: number; name: string; designation: string; image: string };

const techItems: TechItem[] = [
    { id: 1, name: "Git", designation: "VCS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { id: 2, name: "TypeScript", designation: "Language", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { id: 3, name: "Java", designation: "Language", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    /* { id: 4,  name: "Python",        designation: "Language",   image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" }, */
    { id: 5, name: "React", designation: "Library", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { id: 6, name: "Angular", designation: "FE Framework", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
    { id: 7, name: "Tailwind CSS", designation: "CSS Framework", image: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
    /* { id: 8,  name: "Node.js",       designation: "Runtime",    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" }, */
    { id: 9, name: "Express.js", designation: "BE Framework", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { id: 10, name: "Spring", designation: "BE Framework", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
    { id: 11, name: "PostgreSQL", designation: "Database", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { id: 12, name: "MongoDB", designation: "Database", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" }
];

const Hero = () => {
    return (
        <section id="home" className="relative overflow-hidden bg-app text-app">
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
                    I'm a <ColourfulText>Full-Stack Developer</ColourfulText>.
                    <br />
                    Check out my skills:
                </motion.p>
                <div className="mt-12 flex w-full flex-wrap items-center justify-center gap-3 md:gap-0" aria-label="Technologies I use">
                    <AnimatedTooltip items={techItems} />
                </div>
            </WavyBackground>
        </section>
    );
}

export default Hero;

