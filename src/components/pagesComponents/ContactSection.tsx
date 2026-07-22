"use client"
import { type ChangeEvent, useState } from "react";
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
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 800);
      } else {
        toast.error("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Network error:", error);
      toast.error("Something went wrong. Please check your connection.");
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" className="relative overflow-hidden bg-slate-50/90 px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-24 h-64 w-64 rounded-full bg-violet-400/15 blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-slate-100 to-transparent" />

      <div className="mx-auto grid max-w-7xl md:max-w-none gap-10 xl:grid-cols-[0.95fr_1.05fr] items-start">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerChildren}
          className="space-y-8"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-3 rounded-full border border-blue-200/70 bg-blue-50/90 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm shadow-blue-100/70">
            <span>📩</span>
            Contact Me
          </motion.div>

          <motion.div variants={fadeUp} className="max-w-2xl md:max-w-none space-y-6">
            <h2 id="contact-heading" className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Let&apos;s Build Something Amazing Together
            </h2>
            <p className="text-base leading-8 text-slate-600 sm:text-lg">
              Have a project in mind or just want to say hello? I&apos;m always open to discussing new opportunities, collaborations, and creative ideas.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="grid gap-4 sm:grid-cols-2">
            {contactItems.map((item) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.label}
                  whileHover={{ y: -6 }}
                  whileTap={{ scale: 0.98 }}
                  className="group rounded-[2rem] border border-slate-200/80 bg-white/90 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] transition-transform duration-300"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-blue-50 text-2xl text-blue-600 shadow-sm shadow-blue-200/40">
                    <Icon />
                  </div>
                  <div className="mt-5 space-y-2">
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">{item.label}</p>
                    <p className="text-base font-medium text-slate-900">{item.value}</p>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>

       
        </motion.div>
           <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="xl:mt-15"
        >
    <div className="rounded-[2rem] border bg-white/95 border-slate-200/70  p-8 shadow-[0_40px_90px_rgba(15,23,42,0.12)] backdrop-blur-xl ">     

          <form onSubmit={handleSubmit} className="space-y-6 ">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your name"
                  className="mt-2 w-full rounded-3xl border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your email"
                  className="mt-2 w-full rounded-3xl border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                placeholder="Type your subject here..."
                className="mt-2 w-full rounded-3xl border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:ring-2 focus:ring-blue-500/20"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                placeholder="Type your message here..."
                rows={6}
                className="mt-2 w-full rounded-[1.5rem] border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              className="w-full rounded-full bg-linear-to-r from-blue-600 to-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition duration-300 hover:scale-[1.01] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
            >
              <div className="flex items-center justify-center gap-2">
                {isSubmitted ? (
                  <>
                    <CheckCircle className="h-4 w-4" />
                    Message Sent!
                  </>
                ) : isSubmitting ? (
                  <>
                    <span className="block h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </div>
            </Button>
          </form>

            </div>
             <motion.div variants={fadeUp} className="rounded-[2rem] border border-slate-200/80 bg-white/95 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl mt-10">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Connect with me</p>
            <div className="mt-5 flex flex-wrap gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-14 w-14 items-center justify-center rounded-3xl border border-slate-200 bg-white text-slate-700 transition hover:-translate-y-1 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
                    aria-label={link.label}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
};

export default ContactSection;
