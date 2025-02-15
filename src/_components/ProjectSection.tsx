import { useEffect, useRef } from "react";
import Draggable from "react-draggable";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import screenshotImg from "../assets/screenshot.png";
import vutoriaImg from "../assets/vutoria(1).png";
import sidegigImg from "../assets/side-gig.png";
import soulsborneImg from "../assets/soulsborne(1).png";
import gramPanchayatImg from "../assets/gram-web.png";
import nammaIsaiImg from "../assets/music-player.png";
import backgroundImage from "../assets/background.png"; // Add the background image path here

const projects = [
  {
    title: "AI-powered instant video generation",
    date: "Jan 2024",
    description:
      "AI-powered instant video generation with a simple prompt input. Optimized for all devices with a smooth and intuitive user experience.",
    technologies: ["Python", "Flask", "React", "Vite", "Tailwind CSS"],
    github: "https://github.com/johnwesley755/ai-shorts-video",
    image: screenshotImg,
  },
  {
    title: "Soulsborne Guide – Community Wiki for Soulslike Game",
    date: "Nov 2024",
    description:
      "Soulsborne is a platform I developed to help individuals conquer procrastination, sharpen their skills, and excel in personal and professional growth by embracing challenges and pushing through barriers, inspired by the spirit of Soulsborne games.",
    technologies: ["React", "Vite", "Tailwind CSS", "Firebase"],
    github: "https://github.com/johnwesley755/Soulsborne",
    demo: "https://soulsborne-261a4.web.app/",
    image: soulsborneImg,
  },
  {
    title: "Vutoria – AI-Driven Virtual Try-On Platform",
    date: "Oct 2024",
    description:
      "Created an e-commerce platform with a unique virtual try-on feature powered by AI diffusion models. Integrated with a responsive UI to offer users an immersive shopping experience.",
    technologies: ["React", "Tailwind CSS", "AI Diffusion Models"],
    github: "https://github.com/johnwesley755/vutoria-demo-store",
    demo: "https://vutoria-bb1e7.web.app/",
    image: vutoriaImg,
  },
  {
    title: "SideGig App – Freelance and Gig Worker Platform",
    date: "Sep 2024",
    description:
      "Designed and developed a platform for freelancers and gig workers to find and apply for jobs. Features included skill matching, secure messaging, customer feedback, and privacy options.",
    technologies: ["React", "Firebase", "CSS"],
    github: "https://github.com/johnwesley755/sidegig",
    demo: "https://side-gig-website.web.app/",
    image: sidegigImg,
  },
  {
    title: "Gram Panchayat Website",
    date: "Aug 2024",
    description:
      "Developed a community-focused website for managing ward details, applications for electricity and water connections, ward expenses, notifications, and user complaints. Incorporated Firebase for authentication and real-time data handling.",
    technologies: ["HTML", "CSS", "JavaScript", "Firebase"],
    github: "https://github.com/johnwesley755/gram-panchayat",
    image: gramPanchayatImg,
  },
  {
    title: "Namma Isai – A Music Player Web Application",
    date: "Jul 2024",
    description:
      "Designed and developed a fully functional music player with an intuitive interface, featuring play/pause functionality, volume control, progress tracking, and playlist management using local storage. Ensured a responsive design to provide seamless usability across devices.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/johnwesley755/namma-isai-music",
    image: nammaIsaiImg,
  },
];

const ProjectStack = () => {
  const stackRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      stackRef.current?.children,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, stagger: 0.2, ease: "power3.out", duration: 1.2 }
    );
  }, []);

  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-screen bg-white px-6 py-12"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-72 h-72 bg-blue-300 opacity-30 rounded-full blur-3xl top-10 left-20"></div>
        <div className="absolute w-60 h-60 bg-yellow-300 opacity-30 rounded-full blur-3xl bottom-10 right-20"></div>
      </div>

      <div className="text-center mb-12 max-w-3xl">
        <h2 className="text-5xl font-extrabold text-yellow-600">
          ✨ Featured Projects
        </h2>
        <p className="text-lg text-gray-700 mt-4">
          Explore my latest projects, blending AI, interactive platforms, and
          smooth UI/UX experiences.
        </p>
      </div>

      <div
        ref={stackRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 w-full max-w-6xl"
      >
        {projects.map((project, index) => (
          <Draggable key={index} bounds="parent">
            <div className="bg-white border rounded-xl shadow-lg p-6 cursor-grab transition-all hover:scale-105 hover:shadow-2xl hover:border-blue-400">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h3 className="text-xl font-extrabold mt-4 text-blue-600">
                {project.title}
              </h3>
              <p className="text-sm text-gray-800 mt-2">
                {project.description}
              </p>
              <div className="flex gap-4 mt-4">
                <a
                  href={project.github}
                  target="_blank"
                  className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg text-white hover:bg-gray-700 transition"
                >
                  <FaGithub /> GitHub
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-blue-500 text-white rounded-lg px-4 py-2  hover:text-blue-400 transition-colors"
                  >
                    <span className="mr-2">🌐</span> Demo
                  </a>
                )}
              </div>
            </div>
          </Draggable>
        ))}
      </div>
    </section>
  );
};

export default ProjectStack;
