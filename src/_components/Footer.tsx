import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      footerRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
          end: "bottom 20%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <footer className="relative bg-black text-white py-16 px-6" id="footer">
      {/* Footer Content */}
      <div
        ref={footerRef}
        className="relative z-10 max-w-5xl mx-auto text-center"
      >
        <h2 className="text-4xl font-extrabold tracking-wide text-white">
          Connect with Me 🚀
        </h2>
        <p className="text-lg text-gray-400 mt-3 max-w-2xl mx-auto">
          Feel free to reach out for collaborations, opportunities, or just a
          friendly chat.
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-8">
          {[
            {
              icon: <FaLinkedin />,
              link: "https://www.linkedin.com/in/john-wesley-6707ab258/",
            },
            { icon: <FaGithub />, link: "https://github.com/johnwesley755" },
            {
              icon: <FaTwitter />,
              link: "https://twitter.com/JohnWesley97513",
            },
            { icon: <FaEnvelope />, link: "mailto:johnwesley8113@gmail.com" },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-white p-3 bg-gray-900 rounded-full shadow-lg border border-gray-700 hover:shadow-purple-500/50 hover:scale-110 transition-all duration-300"
              whileHover={{ scale: 1.3, rotate: 5 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm mt-8">
          © {new Date().getFullYear()} John Wesley. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
