import { useState, useEffect, useRef, useMemo } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const isScrolling = useRef(false);

  const sections = useMemo(() => [
    { id: "inicio", name: "Inicio" },
    { id: "sobre-mi", name: "Sobre mí" },
    { id: "proyectos", name: "Proyectos" },
    { id: "experiencia", name: "Experiencia" },
    { id: "contacto", name: "Contacto" },
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Fase 1: Detección de sección activa por scroll
      if (!isScrolling.current) {
        const scrollPosition = window.scrollY + 100;

        for (const section of sections) {
          const element = document.getElementById(section.id);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            if (
              scrollPosition >= offsetTop &&
              scrollPosition < offsetTop + offsetHeight
            ) {
              setActiveSection(section.id);
              break;
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Llamada inicial
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (sectionId: string) => {
    // Fase 2: Actualizar estado visual inmediatamente
    setActiveSection(sectionId);

    // Fase 3: Ejecutar transición suave
    isScrolling.current = true;
    const element = document.getElementById(sectionId);
    if (element) {
      const headerElement = document.querySelector('.header') as HTMLElement;
      const headerHeight = headerElement?.offsetHeight || 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      // Fase 4: Resetear flag después del scroll
      setTimeout(() => {
        isScrolling.current = false;
      }, 1000);
    }
  };

  return (
    <motion.header
      className={`header ${isScrolled ? "scrolled" : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="container">
        <nav className="nav">
          <div className="logo gradient-text">
            <img
              src="/IconoPagina.png"
              alt="Néstor Montenegro"
            />
          </div>

          {/* Desktop Navigation */}
          <ul className="nav-links desktop-nav">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className={activeSection === section.id ? "active" : ""}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(section.id);
                  }}
                >
                  {section.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
