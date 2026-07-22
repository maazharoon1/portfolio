"use client"
import React, { useState } from "react";
import { motion } from "motion/react";
import { CheckCircle, Send } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { toast } from "sonner";

const MailIcon = () => <span aria-hidden="true">✉️</span>;
const MapPinIcon = () => <span aria-hidden="true">📍</span>;
const ClockIcon = () => <span aria-hidden="true">⏰</span>;
const GithubIcon = () => <span aria-hidden="true">GH</span>;
const LinkedinIcon = () => <span aria-hidden="true">in</span>;
const TwitterIcon = () => <span aria-hidden="true">🐦</span>;
const InstagramIcon = () => <span aria-hidden="true">📷</span>;
const BehanceIcon = () => <span aria-hidden="true">Bē</span>;

const contactItems = [
  {
    icon: MailIcon,
    label: "Email",
    value: "maaz.ditechtic@gmail.com",
  },
  {
    icon: MapPinIcon,
    label: "Location",
    value: "Karachi, PK",
  },
  {
    icon: ClockIcon,
    label: "Availability",
    value: "Open for new projects",
  },
];

const socialLinks = [
  { icon: GithubIcon, label: "GitHub", url: "https://github.com/maazharoon1" },
  { icon: LinkedinIcon, label: "LinkedIn", url: "https://linkedin.com/in/maaz-haroon-b278372a0" },
  { icon: TwitterIcon, label: "Twitter", url: "https://twitter.com/maazharoon900" },
  { icon: InstagramIcon, label: "Instagram", url: "https://instagram.com/maazx_36" },
  { icon: BehanceIcon, label: "Behance", url: "https://behance.net/maazharoon8" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, easeOut: true },
  },
};

const staggerChildren = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
};

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

 console.log(response.ok)
   
    if (response.ok) {
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitted(true);
       setTimeout(() => setIsSubmitted(false), 800);

    } else {
      toast.error('Failed to send message. Please try again later.');
    }
  } catch (error) {
    console.error('Network error:', error);
    toast.error('Something went wrong. Please check your connection.');
  }

  setIsSubmitting(false);
};

  return (
    <section className="contact-section" aria-labelledby="contact-heading">
      <div className="decorative-blur blur-1" aria-hidden="true" />
      <div className="decorative-blur blur-2" aria-hidden="true" />
      <div className="decorative-blob blob-1" aria-hidden="true" />
      <div className="decorative-blob blob-2" aria-hidden="true" />

      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={staggerChildren}
        >
          <motion.div variants={fadeUp} className="badge">
            <span>📩</span>
            Contact Me
          </motion.div>
          <motion.h2 variants={fadeUp} id="contact-heading">
            Let&apos;s Build Something Amazing Together
          </motion.h2>
          <motion.p variants={fadeUp}>
            Have a project in mind or just want to say hello? I&apos;m always open to discussing new opportunities, collaborations, and creative ideas.
          </motion.p>
        </motion.div>

        <div className="grid-two">
          <motion.div
            className="info-column"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerChildren}
          >
            <motion.div variants={fadeUp} className="info-grid">
              {contactItems.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.article key={item.label} className="info-card" whileHover={{ y: -6 }} whileTap={{ scale: 0.98 }}>
                    <div className="card-icon">
                      <Icon />
                    </div>
                    <div>
                      <p className="card-label">{item.label}</p>
                      <p className="card-value">{item.value}</p>
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>
            <motion.div variants={fadeUp} className="social-panel">
              <p className="social-title">Connect with me</p>
              <div className="social-list">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" className="social-link" aria-label={link.label}>
                      <Icon />
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="form-column"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerChildren}
          >
            {/* form */}
            <div className="bg-linear-to-br from-white/60 to-white/80 backdrop-blur-2xl  flex justify-center rounded-2xl py-8 ">
        <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className=' '
                  >
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your name"
                      className="mt-2 focus:ring-2 focus:ring-purple-500/20 border-border/50"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                     required
                     placeholder="Enter your email"
                      className="mt-2 focus:ring-2 focus:ring-purple-500/20 border-border/50"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="Type your subject here..."
                    className="mt-2 focus:ring-2 focus:ring-purple-500/20 border-border/50"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Label htmlFor="message">Message</Label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Type your message here..."
                    rows={5}
                    className="mt-2 focus:ring-2 focus:ring-blue-500/20 focus:border-purple-500/50 resize-none w-full rounded-xl p-2"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    className="w-full bg-linear-to-r from-blue-600 to-purple-800 hover:from-blue-700 hover:to-purple-900 text-white font-semibold py-2.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    <motion.div
                      className="flex items-center justify-center gap-2"
                      animate={isSubmitting ? { x: [0, -5, 5, 0] } : {}}
                      transition={isSubmitting ? { repeat: Infinity, duration: 0.5 } : {}}
                    >
                      {isSubmitted ? (
                        <>
                          <CheckCircle className="w-4 h-4" />
                          Message Sent!
                        </>
                      ) : isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 1 }}
                            className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </motion.div>
                  </Button>
                </motion.div>
              </form>
              </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .contact-section {
          position: relative;
          padding: 88px 24px 96px;
          background: #f8fbff;
          overflow: hidden;
          color: #0f172a;
        }

        .container {
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
          z-index: 1;
        }

        .decorative-blur {
          position: absolute;
          border-radius: 999px;
          filter: blur(80px);
          opacity: 0.7;
        }

        .blur-1 {
          width: 260px;
          height: 260px;
          top: -40px;
          left: -40px;
          background: rgba(99, 102, 241, 0.18);
        }

        .blur-2 {
          width: 220px;
          height: 220px;
          bottom: 28px;
          right: 8px;
          background: rgba(59, 130, 246, 0.14);
        }

        .decorative-blob {
          position: absolute;
          border-radius: 50%;
          opacity: 0.7;
          animation: float 12s ease-in-out infinite;
        }

        .blob-1 {
          width: 180px;
          height: 180px;
          top: 240px;
          right: 80px;
          background: radial-gradient(circle, rgba(99,102,241,0.28), transparent 58%);
        }

        .blob-2 {
          width: 140px;
          height: 140px;
          bottom: 160px;
          left: 40px;
          background: radial-gradient(circle, rgba(59,130,246,0.24), transparent 58%);
        }

        .section-header {
          max-width: 760px;
          margin: 0 auto 56px;
          text-align: center;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 20px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.82);
          border: 1px solid rgba(99, 102, 241, 0.18);
          color: #334155;
          font-size: 0.95rem;
          font-weight: 600;
          backdrop-filter: blur(18px);
          box-shadow: 0 16px 40px rgba(15, 23, 42, 0.08);
          margin: 0 auto 20px;
        }

        .section-header h2 {
          margin: 0;
          font-size: clamp(2.3rem, 3.2vw, 3.6rem);
          line-height: 1.05;
          letter-spacing: -0.04em;
          color: #0f172a;
        }

        .section-header p {
          margin: 18px auto 0;
          max-width: 620px;
          color: #475569;
          font-size: 1.02rem;
          line-height: 1.85;
        }

        .grid-two {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 32px;
          align-items: start;
        }

        .info-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
        }

        .info-card {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 24px;
          border-radius: 32px;
          background: rgba(255, 255, 255, 0.82);
          border: 1px solid rgba(255, 255, 255, 0.9);
          box-shadow: 0 24px 80px rgba(15, 23, 42, 0.08);
          backdrop-filter: blur(20px);
          position: relative;
          overflow: hidden;
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .info-card::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1px;
          background: linear-gradient(135deg, rgba(99,102,241,0.35), rgba(59,130,246,0.25));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }

        .info-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 32px 90px rgba(15, 23, 42, 0.12);
        }

        .card-icon {
          width: 54px;
          height: 54px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.92);
          display: grid;
          place-items: center;
          color: #475569;
          box-shadow: inset 0 0 0 1px rgba(99, 102, 241, 0.12);
          transition: transform 0.35s ease, color 0.35s ease, background 0.35s ease;
        }

        .info-card:hover .card-icon {
          transform: translateY(-3px) rotate(-4deg);
          color: #2563eb;
          background: rgba(241, 245, 255, 0.98);
        }

        .card-label {
          margin: 0 0 8px;
          font-size: 0.95rem;
          color: #475569;
          font-weight: 600;
        }

        .card-value {
          margin: 0;
          font-size: 0.98rem;
          color: #0f172a;
          line-height: 1.6;
        }

        .social-panel {
          margin-top: 34px;
          padding: 26px 24px 22px;
          border-radius: 28px;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.94), rgba(248, 250, 255, 0.92));
          border: 1px solid rgba(255, 255, 255, 0.85);
          box-shadow: 0 30px 70px rgba(15, 23, 42, 0.06);
          backdrop-filter: blur(20px);
        }

        .social-title {
          margin: 0 0 16px;
          font-size: 1rem;
          color: #0f172a;
          font-weight: 700;
        }

        .social-list {
          display: grid;
          grid-template-columns: repeat(6, minmax(0, 1fr));
          gap: 14px;
        }

        .social-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 56px;
          height: 56px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.88);
          border: 1px solid rgba(148, 163, 184, 0.18);
          color: #475569;
          transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
        }

        .social-link:hover {
          transform: translateY(-4px) rotate(-4deg);
          box-shadow: 0 20px 40px rgba(99, 102, 241, 0.16);
          background: rgba(59, 130, 246, 0.08);
          color: #1d4ed8;
        }

        .form-card {
          position: relative;
          padding: 32px;
          border-radius: 36px;
          background: rgba(255, 255, 255, 0.95);
          border: 1px solid rgba(255, 255, 255, 0.95);
          box-shadow: 0 40px 90px rgba(15, 23, 42, 0.12);
          backdrop-filter: blur(24px);
          overflow: hidden;
        }

        .form-card::before {
          content: "";
          position: absolute;
          inset: 0;
          margin: 1px;
          border-radius: inherit;
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.32), rgba(59, 130, 246, 0.24));
          opacity: 0.45;
          pointer-events: none;
        }

        .form-card > * {
          position: relative;
          z-index: 1;
        }

        .form-alert {
          min-height: 30px;
          margin-bottom: 24px;
        }

        .toast {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 13px 18px;
          border-radius: 999px;
          font-size: 0.95rem;
          font-weight: 600;
          color: #0f172a;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(18px);
          border: 1px solid rgba(148, 163, 184, 0.18);
        }

        .toast-success {
          box-shadow: 0 18px 40px rgba(16, 185, 129, 0.14);
        }

        .toast-error {
          box-shadow: 0 18px 40px rgba(244, 63, 94, 0.14);
        }

        .field-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
        }

        .input-group {
          position: relative;
          display: flex;
          flex-direction: column;
          background: rgba(255, 255, 255, 0.88);
          border-radius: 22px;
          border: 1px solid rgba(148, 163, 184, 0.18);
          padding: 18px 18px 8px;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .input-group:focus-within {
          border-color: rgba(59, 130, 246, 0.55);
          box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.12);
        }

        .input-group input,
        .input-group textarea {
          width: 100%;
          border: none;
          outline: none;
          background: transparent;
          padding: 8px 0 4px;
          font-size: 1rem;
          color: #0f172a;
          line-height: 1.7;
          resize: none;
          font-family: inherit;
        }

        .input-group input::placeholder,
        .input-group textarea::placeholder {
          color: transparent;
        }

        .input-group label {
          position: absolute;
          top: 18px;
          left: 18px;
          font-size: 0.95rem;
          color: #64748b;
          pointer-events: none;
          transition: transform 0.25s ease, color 0.25s ease, font-size 0.25s ease;
          transform-origin: left top;
        }

        .input-group input:focus + label,
        .input-group textarea:focus + label,
        .input-group input:not(:placeholder-shown) + label,
        .input-group textarea:not(:placeholder-shown) + label {
          transform: translate(-4px, -18px) scale(0.86);
          color: #2563eb;
        }

        .textarea-group {
          padding-bottom: 14px;
        }

        .textarea-group textarea {
          min-height: 140px;
          max-height: 300px;
          padding-top: 24px;
        }

        .field-error {
          margin-top: 10px;
          font-size: 0.9rem;
          color: #ef4444;
        }

        .submit-button {
          margin-top: 18px;
          width: 100%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          min-height: 58px;
          padding: 0 24px;
          border-radius: 999px;
          border: none;
          color: #ffffff;
          background: linear-gradient(135deg, #4f46e5, #3b82f6);
          box-shadow: 0 18px 40px rgba(59, 130, 246, 0.28);
          font-size: 1rem;
          font-weight: 700;
          cursor: pointer;
          transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.35s ease;
          position: relative;
          overflow: hidden;
        }

        .submit-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 24px 46px rgba(59, 130, 246, 0.34);
        }

        .submit-button:disabled {
          cursor: not-allowed;
          opacity: 0.75;
          transform: none;
          box-shadow: 0 12px 28px rgba(59, 130, 246, 0.18);
        }

        .submit-button::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, rgba(255, 255, 255, 0.22), transparent 45%, rgba(255, 255, 255, 0.16));
          opacity: 0;
          transition: opacity 0.35s ease;
        }

        .submit-button:hover::before {
          opacity: 1;
        }

        .button-icon {
          width: 20px;
          height: 20px;
          transition: transform 0.35s ease;
        }

        .submit-button:hover .button-icon {
          transform: translateX(4px);
        }

        .button-spinner {
          width: 18px;
          height: 18px;
          border: 2px solid rgba(255, 255, 255, 0.55);
          border-top-color: rgba(255, 255, 255, 0.98);
          border-radius: 999px;
          animation: spin 0.9s linear infinite;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        @media (max-width: 980px) {
          .grid-two {
            grid-template-columns: 1fr;
          }

          .info-grid {
            grid-template-columns: 1fr;
          }

          .social-list {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        @media (max-width: 720px) {
          .contact-section {
            padding: 72px 18px 72px;
          }

          .section-header {
            margin-bottom: 44px;
          }

          .section-header p {
            font-size: 0.98rem;
          }

          .input-group {
            border-radius: 22px;
          }

          .field-grid {
            grid-template-columns: 1fr;
          }

          .social-list {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }
      `}</style>
    </section>
  );
};

export default ContactSection;
