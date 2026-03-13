"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { FiExternalLink, FiGithub, FiArrowRight, FiCode, FiLayers, FiX, FiCpu, FiGlobe, FiDatabase, FiSmartphone } from "react-icons/fi";
import Image from "next/image";

interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    githubUrl: string;
    liveUrl: string;
    details: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: "Cartify",
        description:
            "Full-stack e-commerce platform with authentication, payment integration, and admin dashboard.",
        image: "/p1.png",
        technologies: [
            "Next.js 15",
            "React 19",
            "TypeScript",
            "MongoDB",
            "SSLCommerz",
            "Tailwind CSS",
            "Shadcn/ui",
        ],
        githubUrl: "https://github.com/samio11/Cartify_client",
        liveUrl: "https://cartify-client.vercel.app",
        details:
            "A comprehensive e-commerce solution featuring role-based routing with protected admin and customer dashboards. Implements server-side data fetching using Next.js cache tags for Incremental Static Regeneration (ISR). Built with reusable Shadcn/ui components and responsive mobile-first design. Features include user authentication with JWT stored in cookies, shopping cart and wishlist functionality, secure payment processing with SSLCommerz, product review system, order tracking, and a complete admin dashboard for inventory and order management. Utilizes React Context for state management and Lottie animations for enhanced UX.",
    },
    {
        id: 2,
        title: "MeetX",
        description:
            "Peer-to-peer video conferencing application with real-time communication.",
        image: "/s1.png",
        technologies: ["Next.js", "WebRTC", "Socket.io", "TypeScript"],
        githubUrl: "https://github.com/samio11/MeetX-Online-Vedio-Call",
        liveUrl: "https://meet-x-online-vedio-call.vercel.app",
        details:
            "A real-time video calling platform enabling seamless peer-to-peer communication. Features include instant video/audio calls, screen sharing capabilities, real-time chat during calls, room-based video conferencing, user presence indicators, and device controls for camera, microphone, and speaker switching. Built with WebRTC for efficient peer-to-peer connections and Socket.io for signaling and real-time messaging.",
    },
    {
        id: 3,
        title: "Tracksy",
        description:
            "Next-generation ride-sharing platform connecting riders with drivers seamlessly.",
        image: "/s2.png",
        technologies: [
            "Next.js 15",
            "TypeScript",
            "Tailwind CSS",
            "Shadcn/ui",
            "NextAuth.js",
            "SSLCommerz",
            "Mapbox",
            "React Hook Form",
            "Zod",
        ],
        githubUrl: "https://github.com/samio11/Tracksy_Client",
        liveUrl: "https://tracksy-client.vercel.app",
        details:
            "A comprehensive ride-sharing platform revolutionizing urban transportation. Features multi-role authentication (Riders, Drivers, Admins) with Google OAuth integration, real-time ride management with complete lifecycle tracking (Pending → Accepted → Started → Completed), secure SSLCommerz payment processing, two-way rating system between riders and drivers, vehicle management for drivers, and a powerful admin dashboard with user verification, payment analytics, and discount code distribution via OTP. Built with Next.js 15 App Router, featuring responsive design, server-side rendering with caching, and protected routes with JWT authorization. Implements comprehensive ride history, saved locations, scheduled rides, and multi-language support for global accessibility.",
    },
    {
        id: 4,
        title: "Samio AI",
        description:
            "AI-powered assistant application with natural language processing capabilities.",
        image: "/s3.png",
        technologies: ["Next.js", "TypeScript", "OpenAI API", "Tailwind CSS"],
        githubUrl: "https://github.com/samio11/Samio_AI_Client",
        liveUrl: "https://samio-ai-client.vercel.app",
        details:
            "An intelligent AI assistant leveraging advanced language models to provide conversational AI capabilities. Features include natural language understanding and generation, context-aware responses, multi-turn conversations with memory, code generation and explanation, customizable AI personalities, chat history and session management, and markdown rendering for formatted responses. Built with modern React patterns and optimized for performance.",
    },
    {
        id: 5,
        title: "Live Chat Socket.io",
        description:
            "Real-time messaging application with multiple rooms and user authentication.",
        image: "/p2.png",
        technologies: ["Next.js", "Node.js", "Socket.io", "Express", "MongoDB"],
        githubUrl: "https://github.com/samio11/Live_Chat_Socket_io_frontend",
        liveUrl: "https://live-chat-socket-io-frontend.vercel.app/",
        details:
            "A sophisticated real-time chat platform supporting multiple communication modes. Features include public and private chat rooms, direct messaging between users, real-time typing indicators, message history and search, file and image sharing, emoji reactions and rich text formatting, user online/offline status, notification system, and group chat management. Utilizes Socket.io for bidirectional event-based communication ensuring instant message delivery.",
    },
    {
        id: 6,
        title: "ZapTech",
        description:
            "Modern technology showcase and service platform with sleek UI/UX.",
        image: "/p3.png",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
        githubUrl: "https://github.com/samio11/ZapTech",
        liveUrl: "https://github.com/samio11/ZapTech",
        details:
            "A cutting-edge technology platform featuring modern design and smooth animations. Showcases tech products, services, and solutions with an emphasis on user experience. Features include responsive grid layouts for product displays, smooth page transitions and micro-interactions, service catalog with detailed descriptions, contact and inquiry forms, blog or news section for tech updates, animated hero sections and call-to-actions, and optimized performance with Next.js Image component. Built with Framer Motion for fluid animations and Tailwind CSS for rapid UI development.",
    },
];

function ProjectCard({ project, index, onOpen }: { project: Project; index: number; onOpen: (p: Project) => void }) {
    const [isHovered, setIsHovered] = useState(false);

    // Aesthetic Gradient Palettes for Placeholders
    const gradients = [
        "linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 100%)",
        "linear-gradient(135deg, #A18CD1 0%, #FBC2EB 100%)",
        "linear-gradient(135deg, #84FAB0 0%, #8FD3F4 100%)",
        "linear-gradient(135deg, #F093FB 0%, #F5576C 100%)",
        "linear-gradient(135deg, #5EE7DF 0%, #B490FF 100%)",
        "linear-gradient(135deg, #FCCB90 0%, #D57EEB 100%)",
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.8 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group cursor-pointer"
            onClick={() => onOpen(project)}
            style={{ position: "relative" }}
        >
            <div
                style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "24px",
                    overflow: "hidden",
                    transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column"
                }}
                className="group-hover:border-white/20 group-hover:bg-white/[0.04] group-hover:translate-y-[-10px]"
            >
                {/* Image / Placeholder Area */}
                <div style={{ height: "240px", width: "100%", position: "relative", overflow: "hidden" }}>
                    {/* Fallback Gradient Backdrop (Behind Image) */}
                    <div
                        style={{
                            position: "absolute",
                            inset: 0,
                            background: gradients[index % gradients.length],
                            opacity: 0.5,
                            filter: "blur(60px)",
                            zIndex: 0
                        }}
                    />

                    {/* Actual Project Image */}
                    <div style={{ position: "absolute", inset: 0, zIndex: 1 }}>
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        {/* Subtle dark overlay for better text contrast */}
                        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.6))" }} />
                    </div>

                    {/* Hover Content */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isHovered ? 1 : 0 }}
                        style={{
                            position: "absolute",
                            inset: 0,
                            background: "rgba(0,0,0,0.4)",
                            backdropFilter: "blur(8px)",
                            zIndex: 10,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column",
                            gap: "16px"
                        }}
                    >
                        <motion.div
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: isHovered ? 0 : 10, opacity: isHovered ? 1 : 0 }}
                            className="btn-primary"
                            style={{ padding: "12px 24px", boxShadow: "0 10px 20px rgba(0,0,0,0.3)" }}
                        >
                            View Details <FiArrowRight />
                        </motion.div>
                    </motion.div>
                </div>

                <div style={{ padding: "32px", flexGrow: 1, display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: "12px" }}>
                        <h3
                            style={{
                                fontSize: "1.4rem",
                                fontWeight: 700,
                                color: "#fff",
                                fontFamily: "var(--font-heading)",
                                letterSpacing: "-0.01em"
                            }}
                        >
                            {project.title}
                        </h3>
                        <div style={{ display: "flex", gap: "10px" }}>
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white text-white/40 transition-colors" onClick={(e) => e.stopPropagation()}>
                                <FiGithub size={18} />
                            </a>
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white text-white/40 transition-colors" onClick={(e) => e.stopPropagation()}>
                                <FiExternalLink size={18} />
                            </a>
                        </div>
                    </div>

                    <p style={{ color: "#888", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "24px" }}>
                        {project.description}
                    </p>

                    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "auto" }}>
                        {project.technologies.slice(0, 3).map(tech => (
                            <span
                                key={tech}
                                style={{
                                    fontSize: "0.7rem",
                                    color: "#555",
                                    background: "rgba(255,255,255,0.03)",
                                    padding: "4px 10px",
                                    borderRadius: "8px",
                                    border: "1px solid rgba(255,255,255,0.05)"
                                }}
                            >
                                {tech}
                            </span>
                        ))}
                        {project.technologies.length > 3 && (
                            <span style={{ fontSize: "0.7rem", color: "#333" }}>+{project.technologies.length - 3}</span>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    // Lock body scroll when modal is open
    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [selectedProject]);

    return (
        <section id="projects" className="section" style={{ position: "relative", zIndex: 1, background: "#000" }}>
            <div className="container-custom" ref={ref}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "80px" }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="section-label">
                            <FiCode size={14} /> Portfolio
                        </div>
                    </motion.div>

                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
                    >
                        Featured <span style={{ color: "#777" }}>Work</span>
                    </motion.h2>

                    <motion.div
                        style={{ width: "60px", height: "3px", background: "#fff", marginTop: "16px", borderRadius: "10px" }}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: 60 } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    />
                </div>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
                        gap: "32px",
                    }}
                    className="projects-grid"
                >
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                            onOpen={setSelectedProject}
                        />
                    ))}
                </div>

                <motion.div
                    style={{ marginTop: "80px", textAlign: "center" }}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.8 }}
                >
                    <p style={{ color: "#555", marginBottom: "24px" }}>Interested in deep detail?</p>
                    <a href="https://github.com/samio11" target="_blank" rel="noopener noreferrer" className="btn-outline">
                        Check more on GitHub <FiGithub />
                    </a>
                </motion.div>
            </div>

            {/* Project Deep-Dive Modal / Drawer */}
            <AnimatePresence>
                {selectedProject && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            style={{
                                position: "fixed",
                                inset: 0,
                                background: "rgba(0,0,0,0.8)",
                                backdropFilter: "blur(12px)",
                                zIndex: 10000,
                                cursor: "pointer"
                            }}
                        />

                        {/* Responsive Container */}
                        <div style={{
                            position: "fixed",
                            inset: 0,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            zIndex: 10001,
                            pointerEvents: "none",
                            padding: "20px"
                        }}>
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: window.innerWidth < 768 ? "100%" : 40,
                                    scale: window.innerWidth < 768 ? 1 : 0.95
                                }}
                                animate={{
                                    opacity: 1,
                                    y: window.innerWidth < 768 ? "0%" : 0,
                                    scale: 1
                                }}
                                exit={{
                                    opacity: 0,
                                    y: window.innerWidth < 768 ? "100%" : 40,
                                    scale: window.innerWidth < 768 ? 1 : 0.95
                                }}
                                transition={{ type: "spring", damping: 30, stiffness: 300, mass: 0.8 }}
                                style={{
                                    width: "100%",
                                    maxWidth: "960px",
                                    maxHeight: window.innerWidth < 768 ? "95vh" : "85vh",
                                    height: window.innerWidth < 768 ? "auto" : "auto",
                                    background: "rgba(10, 10, 10, 0.95)",
                                    backdropFilter: "blur(40px)",
                                    border: "1px solid rgba(255, 255, 255, 0.08)",
                                    borderRadius: window.innerWidth < 768 ? "32px 32px 0 0" : "32px",
                                    display: "flex",
                                    flexDirection: "column",
                                    overflow: "hidden",
                                    pointerEvents: "auto",
                                    alignSelf: window.innerWidth < 768 ? "flex-end" : "center",
                                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.8)",
                                    position: "relative"
                                }}
                            >
                                {/* Drag Handle (Mobile only) */}
                                {window.innerWidth < 768 && (
                                    <div style={{ width: "40px", height: "4px", background: "rgba(255,255,255,0.1)", borderRadius: "10px", margin: "12px auto 0" }} />
                                )}

                                {/* Modal Header */}
                                <div style={{
                                    padding: "32px 40px",
                                    borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center"
                                }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                                        <div style={{
                                            padding: "12px",
                                            borderRadius: "14px",
                                            background: "rgba(255, 255, 255, 0.03)",
                                            border: "1px solid rgba(255,255,255,0.05)",
                                            color: "#fff",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}>
                                            <FiCode size={22} />
                                        </div>
                                        <div style={{ display: "flex", flexDirection: "column" }}>
                                            <h2 style={{
                                                fontSize: "clamp(1.5rem, 4vw, 2.2rem)",
                                                fontWeight: 800,
                                                color: "#fff",
                                                fontFamily: "var(--font-heading)",
                                                letterSpacing: "-0.02em",
                                                margin: 0
                                            }}>
                                                {selectedProject.title}
                                            </h2>
                                            <span style={{ fontSize: "0.75rem", color: "#555", textTransform: "uppercase", letterSpacing: "1px", fontWeight: 700, marginTop: "4px" }}>Project Deep-Dive</span>
                                        </div>
                                    </div>
                                    <motion.button
                                        whileHover={{ scale: 1.1, background: "rgba(255, 255, 255, 0.08)" }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={() => setSelectedProject(null)}
                                        style={{
                                            width: "48px",
                                            height: "48px",
                                            borderRadius: "50%",
                                            border: "1px solid rgba(255,255,255,0.05)",
                                            background: "rgba(255,255,255,0.03)",
                                            color: "#888",
                                            cursor: "pointer",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            transition: "all 0.3s ease"
                                        }}
                                    >
                                        <FiX size={24} />
                                    </motion.button>
                                </div>

                                {/* Modal Body - Shared Scrollable Area */}
                                <div
                                    style={{
                                        padding: "40px",
                                        overflowY: "auto",
                                        flexGrow: 1,
                                        background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.01))"
                                    }}
                                    className="scrollbar-hide"
                                >
                                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "64px" }}>
                                        {/* Content Left */}
                                        <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
                                            <div>
                                                <h4 style={{
                                                    color: "#fff",
                                                    fontSize: "0.85rem",
                                                    fontWeight: 800,
                                                    marginBottom: "20px",
                                                    textTransform: "uppercase",
                                                    letterSpacing: "2px",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "12px",
                                                    opacity: 0.6
                                                }}>
                                                    <FiGlobe size={16} /> Overview
                                                </h4>
                                                <p style={{
                                                    color: "#999",
                                                    lineHeight: 1.9,
                                                    fontSize: "1.15rem",
                                                    fontFamily: "var(--font-sans)",
                                                    fontWeight: 400
                                                }}>
                                                    {selectedProject.details}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Content Right */}
                                        <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
                                            <div>
                                                <h4 style={{
                                                    color: "#fff",
                                                    fontSize: "0.85rem",
                                                    fontWeight: 800,
                                                    marginBottom: "24px",
                                                    textTransform: "uppercase",
                                                    letterSpacing: "2px",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "12px",
                                                    opacity: 0.6
                                                }}>
                                                    <FiCpu size={16} /> Technical Stack
                                                </h4>
                                                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                                                    {selectedProject.technologies.map((tech, i) => (
                                                        <motion.span
                                                            key={tech}
                                                            initial={{ opacity: 0, scale: 0.8 }}
                                                            animate={{ opacity: 1, scale: 1 }}
                                                            transition={{ delay: 0.1 + i * 0.05 }}
                                                            style={{
                                                                padding: "10px 18px",
                                                                background: "rgba(255, 255, 255, 0.03)",
                                                                border: "1px solid rgba(255, 255, 255, 0.08)",
                                                                borderRadius: "14px",
                                                                color: "#eee",
                                                                fontSize: "0.85rem",
                                                                fontWeight: 500,
                                                                backdropFilter: "blur(5px)"
                                                            }}
                                                        >
                                                            {tech}
                                                        </motion.span>
                                                    ))}
                                                </div>
                                            </div>

                                            <div style={{ marginTop: "auto" }}>
                                                <div style={{
                                                    display: "flex",
                                                    gap: "16px",
                                                    flexDirection: window.innerWidth < 480 ? "column" : "row"
                                                }}>
                                                    <a
                                                        href={selectedProject.liveUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="btn-primary"
                                                        style={{
                                                            flexGrow: 1,
                                                            justifyContent: "center",
                                                            padding: "18px 24px",
                                                            fontSize: "1rem"
                                                        }}
                                                    >
                                                        Live Experience <FiExternalLink />
                                                    </a>
                                                    <a
                                                        href={selectedProject.githubUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="btn-outline"
                                                        style={{
                                                            flexGrow: 1,
                                                            justifyContent: "center",
                                                            padding: "18px 24px",
                                                            fontSize: "1rem"
                                                        }}
                                                    >
                                                        Source Code <FiGithub />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </>
                )}
            </AnimatePresence>
        </section>
    );
}

