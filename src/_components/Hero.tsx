// Hero.tsx
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";
import BackgroundIcons from "../_components/BackgroundIcons";
import heroImg from '../assets/john-2.png';
const Hero = () => {
  const container = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Text animation
      gsap.from(textRef.current?.children || [], {
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power4.out",
      });

      // Button animation
      gsap.from(buttonRef.current, {
        scale: 0,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: "elastic.out(1, 0.5)",
      });

      // Hero image floating animation
      const floatTl = gsap.timeline({ repeat: -1, yoyo: true });
      floatTl.to(heroImageRef.current, {
        y: 20,
        duration: 3,
        ease: "power1.inOut",
      });

      // Parallax effect
      if (parallaxRef.current) {
        gsap.to(parallaxRef.current, {
          yPercent: -20,
          ease: "none",
          scrollTrigger: {
            trigger: container.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // Mouse parallax
      container.current?.addEventListener("mousemove", (e) => {
        if (!container.current) return;

        const { clientX, clientY } = e;
        const { width, height, left, top } =
          container.current.getBoundingClientRect();

        gsap.to(heroImageRef.current, {
          x: (clientX - left - width / 2) * 0.1,
          y: (clientY - top - height / 2) * 0.1,
          duration: 0.5,
        });

        gsap.to(parallaxRef.current, {
          x: (clientX - left - width / 2) * 0.05,
          y: (clientY - top - height / 2) * 0.05,
          duration: 0.5,
        });
      });
    },
    { scope: container }
  );

  return (
    <section
      id="hero"
      ref={container}
      className="relative h-screen flex items-center justify-center overflow-hidden isolate bg-black/100"
    >
      {/* Enhanced Background Layers */}
      <div ref={parallaxRef} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsla(258,80%,60%,0.2)_0%,transparent_70%)]" />
        <BackgroundIcons />
      </div>

      {/* Responsive Particles - Reduced number on mobile */}
      <div className="absolute inset-0 z-0 opacity-40">
        {[
          ...Array(
            typeof window !== "undefined" && window.innerWidth < 768 ? 30 : 50
          ),
        ].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>

      {/* Content Container with responsive adjustments */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-12">
        {/* Text Content */}
        <div className="text-center lg:text-left lg:w-1/2 space-y-4 md:space-y-8 px-4">
          <div ref={textRef} className="space-y-4 md:space-y-8 max-md:mt-28">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight md:leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 animate-gradient">
                Creative Developer
              </span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl font-medium text-gray-300/90 max-w-2xl leading-relaxed">
              Transforming ideas into{" "}
              <span className="text-purple-300">digital reality</span> with
              modern web technologies
            </p>
          </div>

          <button
            ref={buttonRef}
            className="relative z-20 w-fit mt-4 md:mt-8 flex items-center justify-center mx-auto lg:mx-0 gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-normal cursor-pointer"
            onClick={() =>
              window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
            }
          >
            <ArrowDownCircleIcon className="h-7 w-7 sm:h-9 sm:w-9 animate-bounce" />
            <span>Explore My Work</span>

            {/* Subtle Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-30 blur-xl rounded-full"></div>
          </button>
        </div>

        {/* Hero Image Section with responsive adjustments */}
        <div
          ref={heroImageRef}
          className="relative lg:w-1/2 mt-8 md:mt-12 lg:mt-0 transform perspective-1000 max-md:mb-40 md:max-md:mb-60 w-full max-w-md md:max-w-xl mx-auto"
        >
          <div className="relative w-full mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-600/30 rounded-3xl blur-2xl -z-10" />

            <div className="relative rounded-3xl overflow-hidden border-2 border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl p-1 shadow-2xl">
              <img
                src={heroImg}
                alt="Developer"
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Smaller on mobile */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2">
        <div className="w-px h-12 md:h-16 bg-gradient-to-t from-blue-400 to-transparent relative">
          <div className="absolute top-0 w-2 h-2 bg-blue-400 rounded-full animate-scroll-bounce" />
        </div>
        <span className="text-xs md:text-sm font-medium text-gray-300 animate-pulse">
          Scroll Down
        </span>
      </div>
    </section>
  );
};

export default Hero;