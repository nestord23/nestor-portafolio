import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaReact, 
  FaJs, 
  FaCss3Alt, 
  FaHtml5, 
  FaNodeJs,
  FaChevronLeft, 
  FaChevronRight,
  FaExternalLinkAlt,
  FaGithub 
} from 'react-icons/fa';
import { 
  SiBlockchaindotcom, 
  SiWeb3Dotjs, 
  SiMongodb,
  SiFirebase,
  SiTypescript,
  SiVite
} from 'react-icons/si';

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const getTechIcon = (tech: string) => {
    const iconMap: Record<string, React.ReactElement> = {
      'React': <FaReact color="#61DAFB" />,
      'JavaScript': <FaJs color="#F7DF1E" />,
      'TypeScript': <SiTypescript color="#3178C6" />,
      'CSS3': <FaCss3Alt color="#1572B6" />,
      'HTML5': <FaHtml5 color="#E34F26" />,
      'Node.js': <FaNodeJs color="#339933" />,
      'MongoDB': <SiMongodb color="#47A248" />,
      'Firebase': <SiFirebase color="#FFCA28" />,
      'Blockchain': <SiBlockchaindotcom color="#F7931A" />,
      'Web3': <SiWeb3Dotjs color="#F16822" />,
      'NFT': <SiBlockchaindotcom color="#F7931A" />,
      'API': <FaJs color="#F7DF1E" />,
      'Cryptocurrency': <SiBlockchaindotcom color="#F7931A" />,
      'Local Storage': <FaJs color="#F7DF1E" />,
      'Finance': <FaJs color="#F7DF1E" />,
      'CRUD': <FaJs color="#F7DF1E" />,
      'WordPress': <FaHtml5 color="#21759B" />,
      'Vite': <SiVite color="#646CFF" />
    };
    return iconMap[tech] || <FaJs color="#F7DF1E" />;
  };

  const projects = [
    {
      id: 1,
      title: "Colección de NFTs",
      description: "Una innovadora colección de tokens no fungibles (NFTs) con diseños únicos y exclusivos. Proyecto desarrollado con tecnologías modernas de blockchain para crear experiencias digitales únicas.",
      tech: ["React", "JavaScript", "Blockchain", "Web3", "NFT"],
      githubUrl: "https://github.com/nestord23/new_nfts",
      image: "/proyecto-nft.jpg" // Placeholder, puedes agregar imagen real
    },
    {
      id: 2,
      title: "Cotización de Criptomonedas",
      description: "Aplicación web para consultar cotizaciones en tiempo real de criptomonedas. Interfaz moderna y responsiva que consume APIs para mostrar datos actualizados del mercado crypto.",
      tech: ["React", "JavaScript", "API", "CSS3", "Cryptocurrency"],
      githubUrl: "https://github.com/nestord23/Cotizacion-Criptos-React",
      image: "/proyecto-crypto.jpg"
    },
    {
      id: 3,
      title: "Control de Presupuesto",
      description: "Aplicación para gestión y control de presupuestos personales. Permite registrar ingresos, gastos y visualizar el balance financiero con gráficos interactivos y reportes detallados.",
      tech: ["React", "JavaScript", "CSS3", "Local Storage", "Finance"],
      githubUrl: "https://github.com/nestord23/proyecto-presupuesto",
      image: "/proyecto-budget.jpg"
    },
    {
      id: 4,
      title: "Administrador de Clientes",
      description: "Sistema de gestión de clientes con funcionalidades CRUD completas. Permite agregar, editar, eliminar y buscar clientes de manera eficiente con una interfaz intuitiva y moderna.",
      tech: ["React", "JavaScript", "CSS3", "Local Storage", "CRUD"],
      githubUrl: "https://github.com/nestord23/Administrador-de-Clientes-React",
      image: "/proyecto-clientes.jpg"
    },
    {
      id: 5,
      title: "El Señor de la Merced",
      description: "Aplicación web moderna desarrollada con React. Proyecto que demuestra habilidades en desarrollo frontend con una interfaz intuitiva y funcionalidades avanzadas.",
      tech: ["React", "JavaScript", "CSS3", "HTML5"],
      githubUrl: "https://github.com/nestord23/el-senor-de-la-merced",
      demoUrl:"https://elsenordelamerced.vercel.app/",
      image: "/proyecto-merced.jpg"
    },
    {
      id: 6,
      title: "Simsoms",
      description: "Aplicación web moderna desarrollada con React y TypeScript usando Vite. Proyecto que demuestra habilidades en desarrollo frontend con TypeScript, interfaces modernas y mejores prácticas de desarrollo.",
      tech: ["React", "TypeScript", "Vite", "CSS3"],
      githubUrl: "https://github.com/nestord23/simsoms",
      demoUrl: "https://simsoms-green.vercel.app",
      image: "/proyecto-simsoms.jpg"
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToProject = (index: number) => {
    setCurrentProject(index);
  };

  const currentProjectData = projects[currentProject];

  return (
    <section id="proyectos" className="projects section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="gradient-text">Proyectos</h2>
          <p style={{ textAlign: 'center', fontSize: '1.1rem', color: 'var(--text-light)', marginBottom: '3rem' }}>
            Mis proyectos destacados en React: blockchain, finanzas, criptomonedas y gestión de datos
          </p>
        </motion.div>

        <div className="project-carousel">
          <div className="carousel-container">
            <div className="carousel-wrapper">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentProject}
                  className="project-slide"
                  initial={{ opacity: 0, x: 100, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -100, scale: 0.95 }}
                  transition={{ 
                    duration: 0.6,
                    ease: [0.4, 0, 0.2, 1]
                  }}
                >
                  <div className="project-image-container">
                    <div className="project-image-overlay"></div>
                    <div className="project-image-placeholder">
                      <motion.div 
                        className="project-icon"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                      >
                        {getTechIcon(currentProjectData.tech[0])}
                      </motion.div>
                      <motion.div 
                        className="project-preview-text"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        {currentProjectData.title}
                      </motion.div>
                      <div className="project-number">
                        {String(currentProject + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                      </div>
                    </div>
                  </div>
                  
                  <div className="project-info">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <div className="project-category">Proyecto Destacado</div>
                      <h3 className="project-title">{currentProjectData.title}</h3>
                    </motion.div>
                    
                    <motion.p 
                      className="project-description"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {currentProjectData.description}
                    </motion.p>
                    
                    <motion.div 
                      className="project-tech"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <h4>
                        <span className="tech-label-icon">⚡</span>
                        Tecnologías Utilizadas
                      </h4>
                      <div className="tech-list">
                        {currentProjectData.tech.map((tech, index) => (
                          <motion.div 
                            key={index} 
                            className="tech-item"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 + index * 0.05 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                          >
                            <span className="tech-icon">{getTechIcon(tech)}</span>
                            <span className="tech-name">{tech}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="project-buttons"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <motion.a 
                        href={currentProjectData.demoUrl || currentProjectData.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-btn demo-btn"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <FaExternalLinkAlt />
                        <span>Ver Demo</span>
                      </motion.a>
                      <motion.a 
                        href={currentProjectData.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-btn code-btn"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <FaGithub />
                        <span>Código Fuente</span>
                      </motion.a>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Navigation Arrows */}
            <motion.button 
              className="carousel-btn prev-btn" 
              onClick={prevProject}
              aria-label="Proyecto anterior"
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaChevronLeft />
            </motion.button>
            <motion.button 
              className="carousel-btn next-btn" 
              onClick={nextProject}
              aria-label="Siguiente proyecto"
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaChevronRight />
            </motion.button>
          </div>
          
          {/* Dots Indicator */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <motion.button
                key={index}
                className={`dot ${index === currentProject ? 'active' : ''}`}
                onClick={() => goToProject(index)}
                aria-label={`Ir al proyecto ${index + 1}`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                animate={{
                  scale: index === currentProject ? 1.3 : 1,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;