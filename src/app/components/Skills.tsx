"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
    SiReact,
    SiNextdotjs,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiTypescript,
    SiJavascript,
    SiDocker,
    SiFirebase,
    SiTailwindcss,
    SiGit,
    SiPython,
    SiHtml5,
    SiCss,
    SiPostgresql,
    SiRedux,
    SiPrisma,
    SiGraphql,
} from "react-icons/si";
import { ReactNode } from "react";

interface Skill {
    name: string;
    icon: ReactNode;
    color: string;
}

const row1: Skill[] = [
    { name: "React", icon: <SiReact />, color: "#61DAFB" },
    { name: "Next.js", icon: <SiNextdotjs />, color: "#ffffff" },
    { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
    { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
    { name: "Node.js", icon: <SiNodedotjs />, color: "#68A063" },
    { name: "Express", icon: <SiExpress />, color: "#ffffff" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
    { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
];

const row2: Skill[] = [
    { name: "Docker", icon: <SiDocker />, color: "#2496ED" },
    { name: "Git", icon: <SiGit />, color: "#F05032" },
    { name: "Python", icon: <SiPython />, color: "#3776AB" },
    { name: "HTML5", icon: <SiHtml5 />, color: "#E34F26" },
    { name: "CSS3", icon: <SiCss />, color: "#1572B6" },
    { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169E1" },
    { name: "Redux", icon: <SiRedux />, color: "#764ABC" },
    { name: "Prisma", icon: <SiPrisma />, color: "#ffffff" },
    { name: "GraphQL", icon: <SiGraphql />, color: "#E10098" },
];

function MarqueeRow({ skills, direction }: { skills: Skill[]; direction: "left" | "right" }) {
    // Duplicate to create seamless loop
    const doubled = [...skills, ...skills];

    return (
        <div className="marquee-container" style={{ marginBottom: "20px" }}>
            <div
                className={`marquee-track ${direction === "left" ? "marquee-track-left" : "marquee-track-right"}`}
            >
                {doubled.map((skill, i) => (
                    <div key={`${skill.name}-${i}`} className="skill-chip">
                        <span className="icon" style={{ color: skill.color }}>{skill.icon}</span>
                        <span className="name">{skill.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="skills" className="section" style={{ position: "relative", zIndex: 1 }}>
            <div ref={ref}>
                <div className="container-custom">
                    <motion.div
                        style={{ textAlign: "center", marginBottom: "16px" }}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="section-label" style={{ display: "inline-flex" }}>Skills</div>
                    </motion.div>
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Technologies I Work With
                    </motion.h2>
                    <motion.p
                        className="section-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        The tools and frameworks I use to bring ideas to life
                    </motion.p>
                </div>

                {/* Marquee rows — full width */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <MarqueeRow skills={row1} direction="left" />
                    <MarqueeRow skills={row2} direction="right" />
                </motion.div>
            </div>
        </section>
    );
}
