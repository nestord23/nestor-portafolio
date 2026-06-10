import { motion } from "framer-motion";
import { Palette,  Terminal,  Layout, } from "lucide-react";
import SectionHeader from "./SectionHeader";

const About = () => {
  const stats = [
    { label: "Años de Experiencia", value: "+2" },
    { label: "Proyectos Completados", value: "+15" },
    { label: "Tecnologías Dominadas", value: "+10" },
  ];

  const skillCategories = [
    {
      title: "Frontend",
      icon: <Layout size={20} />,
      skills: [
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "HTML5/CSS3", level: 95 },
        { name: "Tailwind/Sass", level: 85 },
      ]
    },
    {
      title: "Backend & Tools",
      icon: <Terminal size={20} />,
      skills: [
        { name: "Node.js", level: 70 },
        { name: "Git/GitHub", level: 85 },
        { name: "Vite/Webpack", level: 80 },
      ]
    },
    {
      title: "Diseño & UX",
      icon: <Palette size={20} />,
      skills: [
        { name: "Figma", level: 80 },
        { name: "Responsive Design", level: 95 },
        { name: "Accesibilidad", level: 85 },
        { name: "UI Animation", level: 75 },
      ]
    }
  ];

  return (
    <section id="sobre-mi" className="about section">
      <div className="about-bg-decoration" />
      
      <div className="container">
        <SectionHeader
          title="Sobre mí"
          subtitle="Más que código, construyo soluciones. Mi objetivo es fusionar la lógica técnica con un diseño excepcional."
        />

        <div className="about-grid">
          {/* Left Column: Narrative & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="about-heading">
              Desarrollador <span className="gradient-text">Full Stack</span> con pasión por el detalle
            </h3>
            
            <div className="about-text">
              <p>
                Mi viaje en el desarrollo web comenzó con la curiosidad de entender cómo funcionan las cosas en internet. Hoy, esa curiosidad se ha transformado en una carrera dedicada a crear aplicaciones web robustas, escalables y visualmente impactantes.
              </p>
              <p>
                Me especializo en el ecosistema de <strong>React</strong> y <strong>TypeScript</strong>, priorizando siempre la experiencia de usuario (UX) y la calidad del código. Creo firmemente que una gran interfaz no solo debe verse bien, sino sentirse instantánea e intuitiva.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className="gradient-text stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Skills Categories */}
          <div className="skills-categories">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + (catIndex * 0.1) }}
                viewport={{ once: true }}
                className="skill-category-card"
              >
                <div className="skill-category-header">
                  <div>{category.icon}</div>
                  <h4 className="skill-category-title">{category.title}</h4>
                </div>
                
                <div className="skill-badges">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-badge">
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
