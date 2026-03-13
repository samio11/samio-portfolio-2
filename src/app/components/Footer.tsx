"use client";

import { FiGithub, FiLinkedin, FiArrowUp } from "react-icons/fi";
import { motion } from "framer-motion";

const links = ["Home", "About", "Skills", "Projects", "Contact"];

export default function Footer() {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <footer
            style={{
                position: "relative",
                zIndex: 1,
                borderTop: "1px solid rgba(255,255,255,0.04)",
                background: "#000",
            }}
        >
            <div
                className="container-custom"
                style={{
                    padding: "36px 24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: "16px",
                }}
            >
                <p style={{ color: "#555", fontSize: "0.88rem" }}>
                    © 2025 Samio Hasan
                </p>

                <div style={{ display: "flex", gap: "20px" }}>
                    {links.map((link) => (
                        <a
                            key={link}
                            href={`#${link.toLowerCase()}`}
                            style={{
                                color: "#444",
                                textDecoration: "none",
                                fontSize: "0.82rem",
                                transition: "color 0.3s",
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = "#ccc")}
                            onMouseLeave={(e) => (e.currentTarget.style.color = "#444")}
                        >
                            {link}
                        </a>
                    ))}
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <a href="https://github.com/samio11" target="_blank" rel="noopener noreferrer" className="social-icon" style={{ width: "36px", height: "36px", fontSize: "0.95rem" }}>
                        <FiGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/samio-hasan/" target="_blank" rel="noopener noreferrer" className="social-icon" style={{ width: "36px", height: "36px", fontSize: "0.95rem" }}>
                        <FiLinkedin />
                    </a>
                    <motion.button
                        onClick={scrollToTop}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        style={{
                            width: "36px",
                            height: "36px",
                            borderRadius: "50%",
                            background: "#fff",
                            border: "none",
                            color: "#000",
                            fontSize: "1rem",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginLeft: "4px",
                        }}
                    >
                        <FiArrowUp />
                    </motion.button>
                </div>
            </div>
        </footer>
    );
}
