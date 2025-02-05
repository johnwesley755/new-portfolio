import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import kcgImg from "../assets/kcg.jpg";
import internalImg from "../assets/internal.jpg";

gsap.registerPlugin(ScrollTrigger);

const achievementData = [
  {
    title: "Pitchathon Finalist",
    institution: "Vellore Institute of Technology, Chennai",
    description:
      "Demonstrated virtual try-on scalability to enhance customer experience in a 30-hour hackathon.",
    date: "10/2024",
    image: "https://pitchathon.co.in/challenge/assets/img/fullLogo.png",
  },
  {
    title: "Innothon ’24 Finalist",
    institution: "KCG College of Technology, Chennai",
    description:
      "Presented an AI-powered virtual try-on solution at a 30-hour hackathon.",
    date: "09/2024",
    image: kcgImg,
  },
  {
    title: "Conducted Internal Hackathon",
    institution: "St. Joseph's Institute of Technology, Chennai",
    description:
      "Organized and led an internal hackathon to foster innovation and problem-solving within the institution.",
    date: "10/2024",
    image: internalImg,
  },
];

const Achievement: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      },
    });

    tl.fromTo(
      containerRef.current?.children,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, stagger: 0.3, ease: "power3.out", duration: 1 }
    );
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-black px-6 py-16 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-40">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>
      {/* Floating Parallax Elements */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-blue-500 rounded-full opacity-30 blur-3xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
            }}
            animate={{
              y: [0, 20, 0],
              transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            }}
          />
        ))}
      </div>

      <div className="text-center z-10">
        <h2 className="text-5xl font-extrabold text-white drop-shadow-lg">
          🎖️ Achievements
        </h2>
        <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
          Recognitions and awards for my contributions in AI, tech innovation,
          and hackathons.
        </p>
      </div>

      <div
        ref={containerRef}
        className="relative mt-12 w-full max-w-5xl space-y-10"
      >
        {achievementData.map((achievement, index) => (
          <motion.div
            key={index}
            className="relative flex flex-col md:flex-row items-center gap-6 p-6 bg-gray-900/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-700 hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img
              src={achievement.image}
              alt={achievement.title}
              className="w-32 h-32 object-cover rounded-xl shadow-md border border-gray-800"
            />
            <div className="flex flex-col">
              <h3 className="text-2xl font-semibold text-white">
                {achievement.title}
              </h3>
              <p className="text-sm text-gray-400">{achievement.institution}</p>
              <p className="text-gray-300 mt-2">{achievement.description}</p>
              <p className="text-sm text-gray-500 mt-1">{achievement.date}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievement;
