import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaCode,
  FaDatabase,
  FaCloud,
  FaBars,
  FaTimes,
  FaExternalLinkAlt,
  FaFilePdf
} from 'react-icons/fa';

import {
  SiLeetcode,
  SiReact,
  SiFlask,
  SiMysql,
  SiGooglecloud,
  SiJavascript
} from 'react-icons/si';


// =====================================================
// PROFILE DATA
// =====================================================

const PROFILE = {
  name: "Niranjan S Nayak",
  email: "niranjannayak1209@gmail.com",
  phone: "+91 6363526914",

  linkedin:
    "https://www.linkedin.com/in/niranjan-nayak-099b68262/",

  github:
    "https://github.com/NiranjanNayak2004",

  leetcode:
    "https://leetcode.com/u/Niranjan_S_Nayak_/",

  resume: "/resume.pdf",

  company:
    "https://www.sumanaetech.com/"
};


// =====================================================
// SOCIAL LINKS
// =====================================================

const SOCIALS = [
  {
    icon: <FaLinkedin />,
    href: PROFILE.linkedin,
    label: "LinkedIn"
  },
  {
    icon: <FaGithub />,
    href: PROFILE.github,
    label: "GitHub"
  },
  {
    icon: <SiLeetcode />,
    href: PROFILE.leetcode,
    label: "LeetCode"
  },
  {
    icon: <FaEnvelope />,
    href: `mailto:${PROFILE.email}`,
    label: "Email"
  }
];


// =====================================================
// PROJECTS
// =====================================================

const PROJECTS = [
  {
    title: "Study Material Distribution Platform",

    tech: [
      <SiReact />,
      <SiFlask />,
      <SiMysql />,
      <SiGooglecloud />
    ],

    desc:
      "Full-stack platform for academic resources with authentication, role-based access control, MySQL data modeling, Google Drive API integration, and cloud deployment.",

    tags: [
      "React",
      "Flask",
      "REST APIs",
      "MySQL",
      "Google Cloud"
    ],

    link: PROFILE.github,

    linkLabel: "View on GitHub"
  },

  {
    title: "Weather Forecasting Website",

    tech: [
      <SiJavascript />,
      <FaCloud />
    ],

    desc:
      "Responsive client-side weather application using the OpenWeather API with location validation, error handling, and optimized UI updates.",

    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "OpenWeather API"
    ],

    link: PROFILE.github,

    linkLabel: "View on GitHub"
  }
];


// =====================================================
// EXPERIENCE
// =====================================================

const EXPERIENCE = [
  {
    role: "Intern — BigQuery Database",

    company: "Sumana Embedded Technologies",

    companyLink: PROFILE.company,

    date: "May 18, 2025 – November 28, 2025",

    desc:
      "Worked on structured data analysis for an IoT data ingestion use case using Google BigQuery. Developed SQL queries involving joins, filtering, grouping, and aggregations. Performed data cleaning, validation, and consistency checks, optimized query performance, and generated insights for internal monitoring and reporting."
  }
];


// =====================================================
// NAVBAR
// =====================================================

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {

    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }

    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-dark-bg/70 backdrop-blur-md border-b border-white/10">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between h-16">

          {/* LOGO */}

          <motion.div
            initial={{
              opacity: 0,
              x: -20
            }}

            animate={{
              opacity: 1,
              x: 0
            }}

            className="text-2xl font-bold bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent cursor-pointer"

            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth"
              })
            }
          >
            NSN
          </motion.div>


          {/* DESKTOP NAV */}

          <div className="hidden md:block">

            <div className="ml-10 flex items-baseline space-x-8">

              {[
                'Skills',
                'Experience',
                'Projects',
                'Education',
                'Contact'
              ].map((item) => (

                <button
                  key={item}
                  onClick={() =>
                    scrollToSection(item.toLowerCase())
                  }

                  className="text-gray-300 hover:text-neon-cyan transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item}
                </button>

              ))}

            </div>

          </div>


          {/* MOBILE BUTTON */}

          <div className="md:hidden">

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >

              {isOpen
                ? <FaTimes size={24} />
                : <FaBars size={24} />
              }

            </button>

          </div>

        </div>

      </div>


      {/* MOBILE MENU */}

      <AnimatePresence>

        {isOpen && (

          <motion.div
            initial={{
              opacity: 0,
              height: 0
            }}

            animate={{
              opacity: 1,
              height: 'auto'
            }}

            exit={{
              opacity: 0,
              height: 0
            }}

            className="md:hidden bg-dark-card border-b border-white/10"
          >

            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">

              {[
                'Skills',
                'Experience',
                'Projects',
                'Education',
                'Contact'
              ].map((item) => (

                <button
                  key={item}

                  onClick={() =>
                    scrollToSection(item.toLowerCase())
                  }

                  className="text-gray-300 hover:text-neon-cyan block px-3 py-2 rounded-md text-base font-medium w-full text-left"
                >
                  {item}
                </button>

              ))}

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </nav>
  );
};


// =====================================================
// HERO
// =====================================================

const Hero = () => {

  return (

    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-dark-bg pt-16">

      {/* BACKGROUND GLOW */}

      <div className="absolute top-20 left-10 w-72 h-72 bg-neon-purple/20 rounded-full blur-[100px]" />

      <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[100px]" />


      <div className="max-w-7xl mx-auto px-4 z-10 text-center">

        <motion.h2
          initial={{
            opacity: 0,
            y: 20
          }}

          animate={{
            opacity: 1,
            y: 0
          }}

          transition={{
            delay: 0.2
          }}

          className="text-neon-cyan font-medium tracking-wider mb-4"
        >
          HELLO, I'M
        </motion.h2>


        <motion.h1
          initial={{
            scale: 0.9,
            opacity: 0
          }}

          animate={{
            scale: 1,
            opacity: 1
          }}

          className="text-5xl md:text-7xl font-bold text-white mb-6"
        >
          Niranjan S Nayak
        </motion.h1>


        {/* ANIMATED TITLE */}

        <div className="text-2xl md:text-3xl text-gray-400 mb-8 h-16">

          <TypeAnimation
            sequence={[
              'AI Engineer',
              2000,

              'AI / LLM Developer',
              2000,

              'Full Stack Developer',
              2000,

              'Python Developer',
              2000,

              'Data Enthusiast',
              2000
            ]}

            wrapper="span"

            speed={50}

            repeat={Infinity}

            className="text-transparent bg-clip-text bg-gradient-to-r from-neon-teal to-neon-purple font-semibold"
          />

        </div>


        {/* DESCRIPTION */}

        <motion.p
          initial={{
            opacity: 0
          }}

          animate={{
            opacity: 1
          }}

          transition={{
            delay: 0.5
          }}

          className="max-w-2xl mx-auto text-gray-400 mb-10 text-lg"
        >
          AI/LLM and full-stack developer focused on
          Python, JavaScript, RAG, REST APIs, and
          data-driven applications.
        </motion.p>


        {/* BUTTONS + SOCIAL */}

        <div className="flex flex-col items-center gap-6">

          <div className="flex flex-col sm:flex-row gap-4">

            {/* PROJECT BUTTON */}

            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 0 15px rgba(6, 182, 212, 0.5)"
              }}

              whileTap={{
                scale: 0.95
              }}

              onClick={() =>
                document
                  .getElementById('projects')
                  .scrollIntoView({
                    behavior: 'smooth'
                  })
              }

              className="px-8 py-3 bg-neon-cyan text-dark-bg font-bold rounded-full transition-all duration-300"
            >
              View My Work
            </motion.button>


            {/* RESUME BUTTON */}

            <motion.a
              href={PROFILE.resume}

              target="_blank"

              rel="noreferrer"

              whileHover={{
                scale: 1.05
              }}

              whileTap={{
                scale: 0.95
              }}

              className="px-8 py-3 border border-white/20 text-white font-bold rounded-full hover:border-neon-cyan hover:text-neon-cyan transition-all duration-300 flex items-center justify-center gap-2"
            >

              <FaFilePdf />

              View Resume

            </motion.a>

          </div>


          {/* SOCIAL ICONS */}

          <div className="flex gap-5">

            {SOCIALS.map((social, idx) => (

              <motion.a
                key={idx}

                href={social.href}

                target="_blank"

                rel="noreferrer"

                whileHover={{
                  y: -5,
                  color: "#06b6d4"
                }}

                className="text-gray-400 text-2xl transition-colors"

                title={social.label}
              >

                {social.icon}

              </motion.a>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
};


// =====================================================
// SKILL CARD
// =====================================================

const SkillCard = ({
  title,
  items,
  icon
}) => (

  <motion.div
    whileHover={{
      y: -5
    }}

    className="p-6 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-neon-cyan/50 transition-colors"
  >

    <div className="text-neon-cyan text-3xl mb-4">
      {icon}
    </div>


    <h3 className="text-xl font-bold text-white mb-3">
      {title}
    </h3>


    <div className="flex flex-wrap gap-2">

      {items.map((item, idx) => (

        <span
          key={idx}
          className="px-3 py-1 text-sm rounded-full bg-white/10 text-gray-300"
        >
          {item}
        </span>

      ))}

    </div>

  </motion.div>
);


// =====================================================
// SKILLS
// =====================================================

const Skills = () => (

  <section
    id="skills"
    className="py-20 bg-dark-bg"
  >

    <div className="max-w-7xl mx-auto px-4">

      <motion.h2
        initial={{
          opacity: 0
        }}

        whileInView={{
          opacity: 1
        }}

        className="text-4xl font-bold text-center text-white mb-16"
      >

        Technical

        <span className="text-neon-purple">
          {' '}Arsenal
        </span>

      </motion.h2>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <SkillCard
          title="Programming"
          icon={<FaCode />}
          items={[
            "Python",
            "JavaScript"
          ]}
        />


        <SkillCard
          title="AI / LLM"
          icon={<FaCloud />}
          items={[
            "LangChain",
            "RAG",
            "Prompt Engineering"
          ]}
        />


        <SkillCard
          title="Backend & Data"
          icon={<FaDatabase />}
          items={[
            "Flask",
            "REST APIs",
            "MySQL"
          ]}
        />


        <SkillCard
          title="Frontend & Tools"
          icon={<SiReact />}
          items={[
            "HTML",
            "CSS",
            "JavaScript",
            "Git",
            "GitHub",
            "Postman",
            "VS Code",
            "Figma"
          ]}
        />

      </div>

    </div>

  </section>
);


// =====================================================
// EXPERIENCE
// =====================================================

const Experience = () => (

  <section
    id="experience"
    className="py-20 bg-dark-bg relative"
  >

    <div className="max-w-4xl mx-auto px-4">

      <h2 className="text-4xl font-bold text-center text-white mb-16">

        Professional

        <span className="text-neon-teal">
          {' '}Journey
        </span>

      </h2>


      <div className="relative border-l-2 border-gray-700 ml-4 md:ml-0 md:pl-10 space-y-12">

        {EXPERIENCE.map((exp, idx) => (

          <motion.div
            key={idx}

            initial={{
              opacity: 0,
              x: -20
            }}

            whileInView={{
              opacity: 1,
              x: 0
            }}

            transition={{
              delay: 0.1
            }}

            className="relative pl-8 md:pl-0"
          >

            {/* TIMELINE DOT */}

            <span className="absolute -left-[41px] md:-left-[49px] top-0 flex h-8 w-8 items-center justify-center rounded-full bg-dark-bg ring-2 ring-neon-cyan">

              <div className="h-2.5 w-2.5 rounded-full bg-neon-cyan animate-pulse" />

            </span>


            <div className="bg-dark-card p-6 rounded-xl border border-white/10 shadow-lg hover:shadow-neon transition-all">

              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">

                <h3 className="text-xl font-bold text-white">
                  {exp.role}
                </h3>


                <span className="text-neon-cyan text-sm font-mono">
                  {exp.date}
                </span>

              </div>


              <a
                href={exp.companyLink}

                target="_blank"

                rel="noreferrer"

                className="inline-flex items-center gap-2 text-lg text-gray-400 hover:text-neon-cyan mb-4 transition-colors"
              >

                {exp.company}

                <FaExternalLinkAlt className="w-3 h-3" />

              </a>


              <p className="text-gray-300 leading-relaxed">
                {exp.desc}
              </p>

            </div>

          </motion.div>

        ))}

      </div>

    </div>

  </section>
);


// =====================================================
// PROJECTS
// =====================================================

const Projects = () => (

  <section
    id="projects"
    className="py-20 bg-dark-bg"
  >

    <div className="max-w-7xl mx-auto px-4">

      <h2 className="text-4xl font-bold text-center text-white mb-16">

        Featured

        <span className="text-neon-cyan">
          {' '}Projects
        </span>

      </h2>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {PROJECTS.map((project, idx) => (

          <motion.div
            key={idx}

            whileHover={{
              y: -10
            }}

            className="group relative overflow-hidden rounded-2xl bg-dark-card border border-white/10"
          >

            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 z-10" />


            <div className="relative z-20 p-8 h-full flex flex-col justify-end">

              {/* TECHNOLOGIES */}

              <div className="flex gap-3 mb-4 text-neon-teal text-2xl">

                {project.tech.map((icon, i) => (

                  <span key={i}>
                    {icon}
                  </span>

                ))}

              </div>


              {/* TITLE */}

              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors">

                {project.title}

              </h3>


              {/* DESCRIPTION */}

              <p className="text-gray-400 mb-6 line-clamp-3">
                {project.desc}
              </p>


              {/* TAGS */}

              <div className="flex flex-wrap gap-2 mb-6">

                {project.tags.map((tag, i) => (

                  <span
                    key={i}
                    className="text-xs font-mono px-2 py-1 rounded bg-white/10 text-gray-300"
                  >
                    {tag}
                  </span>

                ))}

              </div>


              {/* PROJECT LINK */}

              <a
                href={project.link}

                target="_blank"

                rel="noreferrer"

                className="inline-flex items-center text-neon-cyan font-semibold hover:underline"
              >

                {project.linkLabel}

                <FaExternalLinkAlt className="ml-2 w-3 h-3" />

              </a>

            </div>

          </motion.div>

        ))}

      </div>

    </div>

  </section>
);


// =====================================================
// EDUCATION
// =====================================================

const Education = () => (

  <section
    id="education"
    className="py-20 bg-dark-bg"
  >

    <div className="max-w-4xl mx-auto px-4">

      <h2 className="text-3xl font-bold text-center text-white mb-12">
        Education
      </h2>


      <div className="space-y-6">

        {/* B.E */}

        <div className="flex flex-col md:flex-row justify-between items-center p-6 bg-white/5 rounded-lg border border-white/5">

          <div>

            <h3 className="text-xl font-bold text-white">
              B.E. in Computer Science and Design
            </h3>

            <p className="text-gray-400">
              Canara Engineering College
            </p>

            <p className="text-gray-500 text-sm mt-1">
              Mangalore, Karnataka
            </p>

          </div>


          <div className="text-right mt-4 md:mt-0">

            <span className="block text-neon-purple font-bold">
              2022 - 2026
            </span>

            <span className="text-sm text-gray-500">
              CGPA: 8.27
            </span>

          </div>

        </div>


        {/* PU */}

        <div className="flex flex-col md:flex-row justify-between items-center p-6 bg-white/5 rounded-lg border border-white/5">

          <div>

            <h3 className="text-xl font-bold text-white">
              Class 11 and 12 (Science)
            </h3>

            <p className="text-gray-400">
              Himalaya PU College
            </p>

            <p className="text-gray-500 text-sm mt-1">
              Ankola, Karnataka
            </p>

          </div>


          <div className="text-right mt-4 md:mt-0">

            <span className="block text-neon-purple font-bold">
              2020 - 2022
            </span>

            <span className="text-sm text-gray-500">
              Percentage: 87.13%
            </span>

          </div>

        </div>

      </div>

    </div>

  </section>
);


// =====================================================
// FOOTER / CONTACT
// =====================================================

const Footer = () => (

  <footer
    id="contact"
    className="bg-black py-12 border-t border-white/10"
  >

    <div className="max-w-7xl mx-auto px-4 text-center">

      <h2 className="text-3xl font-bold text-white mb-8">
        Let's Connect
      </h2>


      {/* SOCIAL LINKS */}

      <div className="flex justify-center gap-8 mb-8">

        {SOCIALS.map((social, idx) => (

          <motion.a
            key={idx}

            href={social.href}

            target="_blank"

            rel="noreferrer"

            whileHover={{
              scale: 1.2,
              rotate: 5
            }}

            className="text-gray-400 hover:text-neon-cyan text-3xl transition-colors"

            title={social.label}
          >

            {social.icon}

          </motion.a>

        ))}

      </div>


      {/* EMAIL + PHONE */}

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-500 text-sm mb-6">

        <a
          href={`mailto:${PROFILE.email}`}
          className="hover:text-neon-cyan transition-colors"
        >
          {PROFILE.email}
        </a>


        <span className="hidden sm:inline">
          •
        </span>


        <a
          href={`tel:${PROFILE.phone.replace(/\s/g, '')}`}
          className="hover:text-neon-cyan transition-colors"
        >
          {PROFILE.phone}
        </a>

      </div>


      <p className="text-gray-500 text-sm">
        Copyright © 2026 Niranjan S Nayak.
        Built with React & Tailwind.
      </p>

    </div>

  </footer>
);


// =====================================================
// APP
// =====================================================

function App() {

  return (

    <div className="bg-dark-bg min-h-screen text-gray-200 selection:bg-neon-cyan selection:text-black">

      <Navbar />

      <Hero />

      <Skills />

      <Experience />

      <Projects />

      <Education />

      <Footer />

    </div>

  );
}


export default App;