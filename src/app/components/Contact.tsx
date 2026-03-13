"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FiMail, FiMapPin, FiSend, FiGithub, FiLinkedin, FiPhone } from "react-icons/fi";

const contactInfo = [
    { icon: <FiMail />, label: "Email", value: "samiohasan6@gmail.com", href: "mailto:samiohasan6@gmail.com" },
    { icon: <FiMapPin />, label: "Location", value: "Dhaka, Bangladesh", href: "https://www.google.com/maps/place/House-47,Road-07+Nikunja-01/@23.7733572,90.3647715,12z/data=!4m10!1m2!2m1!1sNikunja-02,Road:-15,House:-13!3m6!1s0x3755c717b60dfb2f:0xe49d4dc8a4bbb6ce!8m2!3d23.8327685!4d90.4171918!15sCh1OaWt1bmphLTAyLFJvYWQ6LTE1LEhvdXNlOi0xM1ojIiFuaWt1bmphIDAyIHJvYWQgOi0gMTUgaG91c2UgOi0gMTOSARBjb3Jwb3JhdGVfb2ZmaWNlmgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVVExYjB4NWJUbDNSUkFC4AEA-gEECAAQHw!16s%2Fg%2F11kbbydwrl?entry=ttu&g_ep=EgoyMDI2MDMxMC4wIKXMDSoASAFQAw%3D%3D" },
    { icon: <FiPhone />, label: "Available for", value: "Collabration & Full-time", href: "#" },
];

export default function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", subject: "", message: "" });
                setTimeout(() => setStatus("idle"), 5000);
            } else {
                setStatus("error");
                setErrorMessage(result.error || "Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Submission error:", error);
            setStatus("error");
            setErrorMessage("Failed to send message. Please check your connection.");
        }
    };

    return (
        <section id="contact" className="section" style={{ position: "relative", zIndex: 1 }}>
            <div className="container-custom" ref={ref}>
                <motion.div
                    style={{ textAlign: "center", marginBottom: "16px" }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <div className="section-label" style={{ display: "inline-flex" }}>Contact</div>
                </motion.div>
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    Get In Touch
                </motion.h2>
                <motion.p
                    className="section-subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Have a question or want to work together?
                </motion.p>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "40px", alignItems: "start" }} className="contact-grid">
                    {/* Left */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <h3
                            style={{
                                fontFamily: "var(--font-space-grotesk)",
                                fontSize: "1.3rem",
                                fontWeight: 600,
                                marginBottom: "12px",
                                color: "#fff",
                            }}
                        >
                            Let&apos;s Build Something Together
                        </h3>
                        <p style={{ color: "#777", lineHeight: 1.7, marginBottom: "28px", fontSize: "0.95rem" }}>
                            I&apos;m open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                        </p>

                        <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "28px" }}>
                            {contactInfo.map((info, i) => (
                                <motion.a
                                    key={info.label}
                                    href={info.href}
                                    initial={{ opacity: 0, x: -15 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: 0.4 + i * 0.1 }}
                                    whileHover={{ x: 4, borderColor: "rgba(255,255,255,0.1)" }}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "14px",
                                        textDecoration: "none",
                                        color: "#eee",
                                        padding: "14px 18px",
                                        borderRadius: "12px",
                                        border: "1px solid rgba(255,255,255,0.04)",
                                        background: "rgba(255,255,255,0.02)",
                                        transition: "all 0.3s ease",
                                    }}
                                >
                                    <div
                                        style={{
                                            width: "40px",
                                            height: "40px",
                                            borderRadius: "10px",
                                            background: "rgba(255,255,255,0.04)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            color: "#888",
                                            fontSize: "1.1rem",
                                            flexShrink: 0,
                                        }}
                                    >
                                        {info.icon}
                                    </div>
                                    <div>
                                        <span style={{ display: "block", fontSize: "0.72rem", color: "#555", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "2px" }}>
                                            {info.label}
                                        </span>
                                        <span style={{ fontSize: "0.9rem", fontWeight: 500 }}>{info.value}</span>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        <div style={{ display: "flex", gap: "10px" }}>
                            <motion.a href="https://github.com/samio11" target="_blank" rel="noopener noreferrer" className="social-icon" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                                <FiGithub />
                            </motion.a>
                            <motion.a href="https://www.linkedin.com/in/samio-hasan/" target="_blank" rel="noopener noreferrer" className="social-icon" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                                <FiLinkedin />
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Right — Form */}
                    <motion.form
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="card"
                        style={{ padding: "36px" }}
                        onSubmit={handleSubmit}
                    >
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "14px" }} className="form-row">
                            <div>
                                <label style={{ display: "block", fontSize: "0.78rem", color: "#555", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "1.5px" }}>Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your name"
                                    style={{
                                        width: "100%",
                                        padding: "13px 16px",
                                        background: "rgba(255,255,255,0.02)",
                                        border: "1px solid rgba(255,255,255,0.06)",
                                        borderRadius: "10px",
                                        color: "#eee",
                                        fontSize: "0.9rem",
                                        outline: "none",
                                        transition: "border-color 0.3s",
                                        fontFamily: "inherit",
                                    }}
                                    onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)")}
                                    onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)")}
                                />
                            </div>
                            <div>
                                <label style={{ display: "block", fontSize: "0.78rem", color: "#555", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "1.5px" }}>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="your@email.com"
                                    style={{
                                        width: "100%",
                                        padding: "13px 16px",
                                        background: "rgba(255,255,255,0.02)",
                                        border: "1px solid rgba(255,255,255,0.06)",
                                        borderRadius: "10px",
                                        color: "#eee",
                                        fontSize: "0.9rem",
                                        outline: "none",
                                        transition: "border-color 0.3s",
                                        fontFamily: "inherit",
                                    }}
                                    onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)")}
                                    onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)")}
                                />
                            </div>
                        </div>

                        <div style={{ marginBottom: "14px" }}>
                            <label style={{ display: "block", fontSize: "0.78rem", color: "#555", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "1.5px" }}>Subject</label>
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Project Collaboration"
                                style={{
                                    width: "100%",
                                    padding: "13px 16px",
                                    background: "rgba(255,255,255,0.02)",
                                    border: "1px solid rgba(255,255,255,0.06)",
                                    borderRadius: "10px",
                                    color: "#eee",
                                    fontSize: "0.9rem",
                                    outline: "none",
                                    transition: "border-color 0.3s",
                                    fontFamily: "inherit",
                                }}
                                onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)")}
                                onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)")}
                            />
                        </div>

                        <div style={{ marginBottom: "24px" }}>
                            <label style={{ display: "block", fontSize: "0.78rem", color: "#555", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "1.5px" }}>Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                placeholder="Tell me about your project..."
                                style={{
                                    width: "100%",
                                    padding: "13px 16px",
                                    background: "rgba(255,255,255,0.02)",
                                    border: "1px solid rgba(255,255,255,0.06)",
                                    borderRadius: "10px",
                                    color: "#eee",
                                    fontSize: "0.9rem",
                                    outline: "none",
                                    transition: "border-color 0.3s",
                                    resize: "vertical",
                                    fontFamily: "inherit",
                                }}
                                onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)")}
                                onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)")}
                            />
                        </div>

                        <motion.button
                            type="submit"
                            className="btn-primary"
                            disabled={status === "loading"}
                            style={{ width: "100%", justifyContent: "center", padding: "14px", opacity: status === "loading" ? 0.7 : 1 }}
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                        >
                            {status === "loading" ? "Sending..." : "Send Message"} <FiSend />
                        </motion.button>

                        {status === "success" && (
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                style={{ color: "#4ade80", fontSize: "0.85rem", marginTop: "12px", textAlign: "center" }}
                            >
                                Message sent successfully! I'll get back to you soon.
                            </motion.p>
                        )}

                        {status === "error" && (
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                style={{ color: "#f87171", fontSize: "0.85rem", marginTop: "12px", textAlign: "center" }}
                            >
                                {errorMessage}
                            </motion.p>
                        )}
                    </motion.form>
                </div>
            </div>

        </section>
    );
}
