import React, { useState, useEffect, useRef, useMemo } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import heroImage from "../../assets/hero-image.png"

// Inline Button component
const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className = "", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

// BlurText animation component
interface BlurTextProps {
  text: string;
  delay?: number;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom";
  className?: string;
  style?: React.CSSProperties;
}

const BlurText: React.FC<BlurTextProps> = ({
  text,
  delay = 50,
  animateBy = "words",
  direction = "top",
  className = "",
  style,
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const segments = useMemo(() => {
    return animateBy === "words" ? text.split(" ") : text.split("");
  }, [text, animateBy]);

  return (
    <p ref={ref} className={`inline-flex flex-wrap ${className}`} style={style}>
      {segments.map((segment, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            filter: inView ? "blur(0px)" : "blur(10px)",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : `translateY(${direction === "top" ? "-20px" : "20px"})`,
            transition: `all 0.5s ease-out ${i * delay}ms`,
          }}
        >
          {segment}
          {animateBy === "words" && i < segments.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </p>
  );
};

// Looping Typewriter effect component
interface TypewriterProps {
  texts: string[];
  typingDelay?: number;
  deletingDelay?: number;
  pauseDelay?: number;
  className?: string;
}

const TypewriterText: React.FC<TypewriterProps> = ({
  texts,
  typingDelay = 50,
  deletingDelay = 30,
  pauseDelay = 2000,
  className = ""
}) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    // Start typing after a short initial delay to let BlurText finish
    const initialDelay = setTimeout(() => setStarted(true), 800);
    return () => clearTimeout(initialDelay);
  }, []);

  useEffect(() => {
    if (!started) return;

    const fullText = texts[currentIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText.length === fullText.length) {
          setTimeout(() => setIsDeleting(true), pauseDelay);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    };

    const speed = isDeleting ? deletingDelay : typingDelay;
    const timer = setTimeout(handleTyping, currentText.length === fullText.length ? pauseDelay : speed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentIndex, texts, started, typingDelay, deletingDelay, pauseDelay]);

  return (
    <span className={className}>
      {currentText}
      <span className="inline-block w-[3px] h-[1em] bg-[#C3E41D] ml-1 align-middle animate-pulse"></span>
    </span>
  );
};

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  // Track which section is currently in view
  useEffect(() => {
    const sectionIds = ["home", "about", "education", "skills", "projects", "experience", "achievements", "contact"];

    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.3 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  const menuItems = [
    { label: "HOME", href: "#home", id: "home" },
    { label: "ABOUT", href: "#about", id: "about" },
    { label: "EDUCATION", href: "#education", id: "education" },
    { label: "SKILLS", href: "#skills", id: "skills" },
    { label: "PROJECTS", href: "#projects", id: "projects" },
    { label: "EXPERIENCE", href: "#experience", id: "experience" },
    { label: "ACHIEVEMENTS", href: "#achievements", id: "achievements" },
    { label: "CONTACT", href: "#contact", id: "contact" },
  ];

  return (
    <div
      className="min-h-screen text-white transition-colors bg-black"
    >
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-5 bg-black/40 backdrop-blur-md border-b border-white/10 transition-all duration-300">
        <nav className="flex items-center justify-between max-w-screen-2xl mx-auto">

          {/* Signature */}
          <div className="text-4xl text-white" style={{ fontFamily: "'Brush Script MT', 'Lucida Handwriting', cursive" }}>
            SB
          </div>

          {/* Desktop Navbar */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="relative text-sm font-bold tracking-widest transition-colors duration-300 group"
                  style={{ color: isActive ? "#C3E41D" : "white" }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "#C3E41D"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = isActive ? "#C3E41D" : "white"; }}
                >
                  {item.label}
                  <span
                    className="absolute -bottom-1 left-0 h-0.5 bg-[#C3E41D] transition-all duration-300"
                    style={{ width: isActive ? "100%" : "0%" }}
                  ></span>
                </a>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden relative">
            <button
              ref={buttonRef}
              type="button"
              className="p-2 transition-colors duration-300 z-50 text-neutral-400 hover:text-white"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-8 h-8 transition-colors duration-300" strokeWidth={2} />
              ) : (
                <Menu className="w-8 h-8 transition-colors duration-300" strokeWidth={2} />
              )}
            </button>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
              <div
                ref={menuRef}
                className="absolute top-full right-0 w-[200px] border border-neutral-800 shadow-2xl mt-2 p-4 rounded-lg z-[100] bg-black"
              >
                {menuItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block text-lg font-bold tracking-tight py-2 px-2 cursor-pointer transition-colors duration-300"
                      style={{ color: isActive ? "#C3E41D" : "white" }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = "#C3E41D"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = isActive ? "#C3E41D" : "white"; }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </div>
            )}
          </div>

        </nav>
      </header>

      {/* Hero Section */}
      <main id="home" className="relative min-h-screen flex items-center overflow-hidden pt-24 md:pt-0">

        {/* Background Image with Gradient Fade */}
        <div className="absolute top-0 right-0 w-full md:w-[60%] lg:w-[55%] h-full z-0">
          {/* Fade from black on the left side to blend the image edge into the background */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10 hidden md:block" />

          {/* Bottom fade for mobile and general smoothness */}
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent z-10 md:hidden" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent z-10 hidden md:block" />

          <img
            src={heroImage}
            alt="Sneha Banik"
            className="w-full h-full object-cover object-center grayscale scale-[1.5] translate-y-4 md:translate-y-40 brightness-110 opacity-100"
          />
        </div>

        {/* Content Container */}
        <div className="relative z-20 w-full max-w-screen-2xl mx-auto px-6 lg:px-12">
          <div className="max-w-xl md:max-w-2xl lg:max-w-3xl">
            <div className="mb-6">
              <BlurText
                text="SNEHA-BANIK"
                delay={100}
                animateBy="letters"
                direction="top"
                className="font-bold text-5xl sm:text-7xl md:text-[90px] lg:text-[110px] xl:text-[120px] leading-[0.8] tracking-tighter uppercase whitespace-nowrap"
                style={{ color: "#C3E41D", fontFamily: "'Fira Code', monospace" }}
              />
            </div>

            <div className="flex flex-col gap-4">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#C3E41D] min-h-[40px] md:min-h-[48px]">
                <TypewriterText
                  texts={[
                    "Aspiring UI/UX Designer",
                    "Aspiring Web Developer",
                    "B.Tech ECE Student",
                    "Student Chapter Core Team Member"
                  ]}
                  typingDelay={60}
                  deletingDelay={40}
                  pauseDelay={2000}
                />
              </div>
              <p className="text-neutral-300 text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose font-medium max-w-lg">
                Passionate about crafting responsive, intuitive, and modern user experiences. Always eager to learn, innovate, and blend creativity with technology.
              </p>
            </div>
          </div>
        </div>

        {/* Scroll for more arrow */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce z-50 opacity-70">
          <span className="text-xs tracking-widest uppercase mb-2 font-medium text-white/70">Scroll</span>
          <ChevronDown className="w-6 h-6 text-white/70" />
        </div>
      </main>
    </div>
  );
}
