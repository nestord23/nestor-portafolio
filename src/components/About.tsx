import { motion } from "framer-motion";
import { Code, Palette, Globe, Smartphone } from "lucide-react";

const About = () => {
  const skills = [
    { icon: <Code size={24} />, name: "React", color: "#61DAFB" },
    { icon: <Globe size={24} />, name: "HTML5", color: "#E34F26" },
    { icon: <Palette size={24} />, name: "CSS3", color: "#1572B6" },
    { icon: <Code size={24} />, name: "JavaScript", color: "#F7DF1E" },
    { icon: <Globe size={24} />, name: "WordPress", color: "#21759B" },
    { icon: <Palette size={24} />, name: "UX/UI", color: "#FF61F6" },
    { icon: <Smartphone size={24} />, name: "Responsive", color: "#38B2AC" },
    { icon: <Code size={24} />, name: "TypeScript", color: "#3178C6" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="sobre-mi" className="about section" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background decorative elements */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '-10%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(109, 40, 217, 0.15) 0%, rgba(0,0,0,0) 70%)',
        borderRadius: '50%',
        zIndex: -1
      }} />
      
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ marginBottom: '3rem', textAlign: 'center' }}
        >
          <h2 className="gradient-text" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Sobre mí</h2>
          <div style={{ width: '60px', height: '4px', background: 'var(--primary-purple)', margin: '0 auto', borderRadius: '2px' }}></div>
        </motion.div>

        <div className="about-content" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--text-light)' }}>
              Creando experiencias digitales <span className="gradient-text">memorables</span>
            </h3>
            <p className="about-text" style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', color: 'var(--text-light-secondary)' }}>
              Soy un Desarrollador Frontend apasionado por transformar ideas en realidad a través del código. 
              Me especializo en construir interfaces modernas que no solo se ven increíbles, sino que también 
              funcionan a la perfección en cualquier dispositivo.
            </p>
            <p className="about-text" style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-light-secondary)' }}>
              Mi enfoque combina la precisión técnica con la sensibilidad del diseño, asegurando que cada 
              proyecto sea intuitivo, rápido y accesible. Siempre estoy buscando aprender nuevas tecnologías 
              para llevar mis habilidades al siguiente nivel.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="skills-grid"
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', 
              gap: '1.5rem' 
            }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="skill-item"
                whileHover={{ 
                  y: -5, 
                  scale: 1.05,
                  borderColor: skill.color,
                  boxShadow: `0 4px 20px ${skill.color}40`
                }}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  borderRadius: '16px',
                  padding: '1.5rem 1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.8rem',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  cursor: 'default',
                  transition: 'all 0.3s ease'
                }}
              >
                <div
                  style={{
                    color: skill.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    filter: `drop-shadow(0 0 8px ${skill.color}60)`
                  }}
                >
                  {skill.icon}
                </div>
                <span style={{ fontSize: '0.9rem', fontWeight: '500', color: 'var(--text-light)' }}>{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
