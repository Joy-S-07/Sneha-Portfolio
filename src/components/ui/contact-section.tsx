"use client";

import { TimelineContent } from "@/components/ui/timeline-animation";
import { useRef, useState } from "react";
import { Mail, Globe, Send, Loader2 } from "lucide-react";

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4" />
    <path d="M12 18h.01" />
  </svg>
);

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const fadeUpVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.2,
        duration: 0.7,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: 40,
      opacity: 0,
    },
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");
    setIsSuccess(false);

    const formData = new FormData(event.currentTarget);
    formData.append(
      "access_key",
      import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE"
    );

    try {
      const object = Object.fromEntries(formData as any);
      const json = JSON.stringify(object);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);
        (event.target as HTMLFormElement).reset();
      } else {
        setErrorMessage(
          result.message || "Something went wrong. Please try again."
        );
      }
    } catch (_err) {
      setErrorMessage(
        "Network error. Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactLinks = [
    {
      name: "Email",
      value: "snehabanikk@gmail.com",
      link: "mailto:snehabanikk@gmail.com",
      icon: <Mail className="w-5 h-5" />,
    },
    {
      name: "LinkedIn",
      value: "Sneha Banik",
      link: "https://www.linkedin.com/in/sneha-banik-ab2922346/",
      icon: <LinkedinIcon className="w-5 h-5" />,
    },
    {
      name: "GitHub",
      value: "SnehaBanik",
      link: "https://github.com/SnehaBanik",
      icon: <GithubIcon className="w-5 h-5" />,
    },
    {
      name: "Portfolio",
      value: "Your Domain URL",
      link: "#",
      icon: <Globe className="w-5 h-5" />,
    },
  ];

  return (
    <section
      className="py-24 md:py-32 px-6 bg-[#050505] border-t border-white/5 relative overflow-hidden"
      id="contact"
    >
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C3E41D]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full relative z-10" ref={sectionRef}>
        <div className="flex flex-col items-center gap-16 w-full max-w-6xl mx-auto">
          {/* Section Header */}
          <TimelineContent
            as="div"
            animationNum={0}
            timelineRef={sectionRef}
            customVariants={fadeUpVariants}
            className="text-center w-full"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-4 tracking-tight">
              Let's{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C3E41D] to-white font-bold">
                Connect
              </span>
            </h2>
            <p className="text-neutral-400 text-base md:text-lg max-w-2xl mx-auto">
              Have a project in mind, a question, or just want to say hi? I'd
              love to hear from you.
            </p>
          </TimelineContent>

          {/* Contact Content */}
          <TimelineContent
            as="div"
            animationNum={1}
            timelineRef={sectionRef}
            customVariants={fadeUpVariants}
            className="w-full"
          >
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
              {/* Left Column: Contact Info */}
              <div className="lg:col-span-2 flex flex-col gap-6">
                <div className="bg-[#0f0f0f] border border-white/10 rounded-3xl p-8 h-full">
                  <h3 className="text-xl font-semibold text-white mb-8">
                    Contact Information
                  </h3>

                  <div className="flex flex-col gap-6">
                    {contactLinks.map((item, i) => (
                      <a
                        key={i}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 p-3 -m-3 rounded-xl transition-all duration-300 hover:bg-white/5"
                      >
                        <div className="flex items-center justify-center size-12 rounded-full bg-white/5 border border-white/10 text-neutral-400 group-hover:text-[#C3E41D] group-hover:border-[#C3E41D]/30 transition-colors duration-300">
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-sm text-neutral-500 font-medium mb-0.5">
                            {item.name}
                          </p>
                          <p className="text-base text-neutral-200 group-hover:text-white transition-colors duration-300 break-all">
                            {item.value}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Contact Form */}
              <div className="lg:col-span-3">
                <div className="bg-[#0f0f0f] border border-white/10 rounded-3xl p-8 relative overflow-hidden h-full">
                  <h3 className="text-xl font-semibold text-white mb-8">
                    Send a Message
                  </h3>

                  <form onSubmit={onSubmit} className="flex flex-col gap-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="contact-name"
                          className="text-sm font-medium text-neutral-400 ml-1"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="contact-name"
                          required
                          placeholder="John Doe"
                          className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#C3E41D]/50 focus:border-transparent transition-all"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="contact-email"
                          className="text-sm font-medium text-neutral-400 ml-1"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="contact-email"
                          required
                          placeholder="john@example.com"
                          className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#C3E41D]/50 focus:border-transparent transition-all"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="contact-subject"
                        className="text-sm font-medium text-neutral-400 ml-1"
                      >
                        Subject (Optional)
                      </label>
                      <input
                        type="text"
                        name="subject"
                        id="contact-subject"
                        placeholder="What is this regarding?"
                        className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#C3E41D]/50 focus:border-transparent transition-all"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="contact-message"
                        className="text-sm font-medium text-neutral-400 ml-1"
                      >
                        Message
                      </label>
                      <textarea
                        name="message"
                        id="contact-message"
                        required
                        rows={5}
                        placeholder="Your message here..."
                        className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#C3E41D]/50 focus:border-transparent transition-all resize-none"
                      />
                    </div>

                    <div className="mt-2 flex items-center justify-between">
                      <div className="flex-1">
                        {isSuccess && (
                          <p className="text-[#C3E41D] text-sm font-medium">
                            Message sent successfully!
                          </p>
                        )}
                        {errorMessage && (
                          <p className="text-red-400 text-sm font-medium">
                            {errorMessage}
                          </p>
                        )}
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group flex items-center justify-center gap-2 bg-white text-black hover:bg-[#C3E41D] px-6 py-3 rounded-xl font-semibold transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </TimelineContent>
        </div>
      </div>
    </section>
  );
}
