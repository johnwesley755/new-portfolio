import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiFirebase,
  SiNextdotjs,
  SiVite,
} from "react-icons/si";

interface Skill {
  name: string;
  icon: JSX.Element;
  gradient: string;
}

interface SkillCategory {
  category: string;
  description: string;
  skills: Skill[];
}

const skillsData: SkillCategory[] = [
  {
    category: "Programming Languages",
    description:
      "I am proficient in modern programming languages that allow me to write clean, efficient, and maintainable code.",
    skills: [
      {
        name: "Python",
        icon: <FaPython />,
        gradient: "from-indigo-400 to-indigo-500",
      },
      { name: "C", icon: <FaJava />, gradient: "from-blue-400 to-blue-500" },
      {
        name: "JavaScript",
        icon: <FaJava />,
        gradient: "from-yellow-400 to-orange-500",
      },
      {
        name: "HTML",
        icon: <FaHtml5 />,
        gradient: "from-red-400 to-orange-500",
      },
      {
        name: "CSS",
        icon: <FaCss3Alt />,
        gradient: "from-blue-400 to-blue-600",
      },
    ],
  },
  {
    category: "Frontend Development",
    description:
      "I build engaging and responsive user interfaces using modern frontend libraries and frameworks.",
    skills: [
      {
        name: "React.js",
        icon: <FaReact />,
        gradient: "from-indigo-400 to-indigo-500",
      },
      {
        name: "Next.js",
        icon: <SiNextdotjs />,
        gradient: "from-gray-800 to-gray-900",
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss />,
        gradient: "from-teal-400 to-indigo-500",
      },
      {
        name: "Material UI",
        icon: <FaReact />,
        gradient: "from-violet-400 to-indigo-500",
      },
      {
        name: "ShadCN",
        icon: <FaReact />,
        gradient: "from-pink-400 to-violet-500",
      },
    ],
  },
  {
    category: "Backend Development",
    description:
      "I design and develop reliable server-side solutions and database integrations.",
    skills: [
      {
        name: "Firebase",
        icon: <SiFirebase />,
        gradient: "from-yellow-400 to-orange-500",
      },
      {
        name: "Node.js",
        icon: <FaNodeJs />,
        gradient: "from-green-400 to-green-600",
      },
    ],
  },
  {
    category: "Frameworks",
    description:
      "Frameworks that help speed up development and maintain code efficiency.",
    skills: [
      {
        name: "Express.js",
        icon: <SiExpress />,
        gradient: "from-gray-500 to-gray-600",
      },
      {
        name: "Next.js",
        icon: <SiNextdotjs />,
        gradient: "from-gray-800 to-gray-900",
      },
    ],
  },
  {
    category: "Design & Prototyping",
    description:
      "I use tools that help in designing, prototyping, and bringing creative ideas to life.",
    skills: [
      {
        name: "Figma",
        icon: <FaFigma />,
        gradient: "from-violet-400 to-pink-500",
      },
      {
        name: "Framer Motion",
        icon: <FaReact />,
        gradient: "from-indigo-400 to-violet-500",
      },
    ],
  },
  {
    category: "Tools & Platforms",
    description:
      "Tools that I use for collaboration, development, and deployment of projects.",
    skills: [
      {
        name: "Git",
        icon: <FaGitAlt />,
        gradient: "from-orange-400 to-red-500",
      },
      {
        name: "GitHub",
        icon: <FaGithub />,
        gradient: "from-gray-600 to-gray-800",
      },
      {
        name: "Vite",
        icon: <SiVite />,
        gradient: "from-purple-400 to-indigo-500",
      },
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <section className="relative bg-black text-white py-12 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-40">
        {[...Array(50)].map((_, i) => (
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
      <div className="container mx-auto px-4 md:px-12 text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-500">
          My Tech Stack
        </h2>
        <p className="mt-2 text-gray-400 text-base md:text-lg">
          Explore the tools, frameworks, and technologies I specialize in to
          create impactful solutions.
        </p>
      </div>

      <div className="container mx-auto px-4 grid gap-12 md:gap-14 lg:gap-16 grid-cols-1 lg:grid-cols-2">
        {skillsData.map((category, index) => (
          <div key={index} className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-500 mb-4">
              {category.category}
            </h3>
            <p className="text-gray-400 text-sm md:text-base mb-6">
              {category.description}
            </p>
            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
              {category.skills.map((skill, idx) => (
                <div
                  key={idx}
                  className={`relative bg-gradient-to-r ${skill.gradient} p-1 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105`}
                >
                  <div className="flex flex-col items-center justify-center h-24 w-24 md:h-28 md:w-28 bg-black rounded-lg">
                    <div className="text-3xl md:text-4xl mb-2 text-gray-300">
                      {skill.icon}
                    </div>
                    <p className="text-white text-xs md:text-sm font-medium">
                      {skill.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
