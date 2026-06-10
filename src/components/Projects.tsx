import { motion } from "framer-motion";
import {
  FaReact,
  FaJs,
  FaCss3Alt,
  FaHtml5,
  FaNodeJs,
  FaExternalLinkAlt,
  FaGithub,
} from "react-icons/fa";
import SectionHeader from "./SectionHeader";
import {
  SiBlockchaindotcom,
  SiWeb3Dotjs,
  SiMongodb,
  SiFirebase,
  SiTypescript,
  SiVite,
} from "react-icons/si";

const Projects = () => {
  const getTechIcon = (tech: string) => {
    const iconMap: Record<string, React.ReactElement> = {
      React: <FaReact color="#61DAFB" />,
      JavaScript: <FaJs color="#F7DF1E" />,
      TypeScript: <SiTypescript color="#3178C6" />,
      CSS3: <FaCss3Alt color="#1572B6" />,
      HTML5: <FaHtml5 color="#E34F26" />,
      "Node.js": <FaNodeJs color="#339933" />,
      MongoDB: <SiMongodb color="#47A248" />,
      Firebase: <SiFirebase color="#FFCA28" />,
      Blockchain: <SiBlockchaindotcom color="#F7931A" />,
      Web3: <SiWeb3Dotjs color="#F16822" />,
      NFT: <SiBlockchaindotcom color="#F7931A" />,
      API: <FaJs color="#F7DF1E" />,
      Cryptocurrency: <SiBlockchaindotcom color="#F7931A" />,
      "Local Storage": <FaJs color="#F7DF1E" />,
      Finance: <FaJs color="#F7DF1E" />,
      CRUD: <FaJs color="#F7DF1E" />,
      WordPress: <FaHtml5 color="#21759B" />,
      Vite: <SiVite color="#646CFF" />,
    };
    return iconMap[tech] || <FaJs color="#F7DF1E" />;
  };

  const projects = [
    {
      id: 1,
      title: "Hack Chat",
      description:
        "Chat en tiempo real con WebSockets, implementado en backend y frontend, para comunicación instantánea entre usuarios.",
      tech: ["React", "WebSockets", "Node.js"],
      githubUrl: "https://github.com/nestord23/chat_FE",
      image: "/proyecto-nft.jpg",
      featured: false,
    },
    {
      id: 2,
      title: "book-picker",
      description:
        "Aplicacion Web para almacenar Lecturas y Realizar Clasificacion de lecturas y Eligir Proximas lecturas",
      tech: ["Astro", "Javascript", "CSS3", "Node.js"],
      githubUrl: "https://github.com/nestord23/book-picker-fe",
      image: "/proyecto-crypto.jpg",
      featured: false,
    },
    {
      id: 3,
      title: "Control de Presupuesto",
      description:
        "Aplicación para gestión y control de presupuestos personales. Permite registrar ingresos, gastos y visualizar el balance financiero.",
      tech: ["React", "Local Storage", "Finance"],
      githubUrl: "https://github.com/nestord23/proyecto-presupuesto",
      image: "/proyecto-budget.jpg",
      featured: false,
    },
    {
      id: 4,
      title: "Administrador de Clientes",
      description:
        "Sistema de gestión de clientes con funcionalidades CRUD completas. Permite agregar, editar, eliminar y buscar clientes de manera eficiente.",
      tech: ["React", "CRUD", "Local Storage"],
      githubUrl: "https://github.com/nestord23/Administrador-de-Clientes-React",
      image: "/proyecto-clientes.jpg",
      featured: false,
    },
    {
      id: 5,
      title: "El Señor de la Merced",
      description:
        "Aplicación web moderna desarrollada con React. Proyecto que demuestra habilidades en desarrollo frontend con una interfaz intuitiva.",
      tech: ["React", "HTML5", "CSS3"],
      githubUrl: "https://github.com/nestord23/el-senor-de-la-merced",
      demoUrl: "https://elsenordelamerced.vercel.app/",
      image: "/proyecto-merced.jpg",
      featured: true,
    },
    {
      id: 6,
      title: "Simsoms",
      description:
        "Aplicación web moderna desarrollada con React y TypeScript usando Vite. Proyecto que demuestra habilidades en desarrollo frontend con TypeScript.",
      tech: ["React", "TypeScript", "Vite"],
      githubUrl: "https://github.com/nestord23/simsoms",
      demoUrl: "https://simsoms-green.vercel.app",
      image: "/proyecto-simsoms.jpg",
      featured: true,
    },
  ];

  return (
    <section
      id="proyectos"
      className="projects section"
    >
      <div className="container">
        <SectionHeader
          title="Proyectos Destacados"
          subtitle="Una selección de mis trabajos más recientes, enfocados en React, Blockchain y experiencias de usuario modernas."
        />

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="project-card"
            >
              {/* Project Header/Image Area */}
              <div className="project-card-header">
                <div className="project-card-overlay" />

                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="project-card-icon"
                >
                  {getTechIcon(project.tech[0])}
                </motion.div>

                {project.featured && (
                  <div className="project-featured-badge">
                    Destacado
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="project-card-body">
                <h3 className="project-card-title">
                  {project.title}
                </h3>

                <p className="project-card-description">
                  {project.description}
                </p>

                <div className="project-tech-list">
                  {project.tech.map((t, i) => (
                    <span key={i} className="project-tech-tag">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="project-actions">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn-demo"
                    >
                      <FaExternalLinkAlt size={14} /> Demo
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn-code"
                  >
                    <FaGithub size={16} /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
