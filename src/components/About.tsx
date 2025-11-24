import { motion } from "framer-motion";
import { Palette,  Terminal,  Layout, } from "lucide-react";

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
    <section id="sobre-mi" className="about section" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background decorative elements */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '-5%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, rgba(0,0,0,0) 70%)',
        borderRadius: '50%',
        zIndex: -1
      }} />
      
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ marginBottom: '4rem', textAlign: 'center' }}
        >
          <h2 className="gradient-text" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Sobre mí</h2>
          <div style={{ width: '60px', height: '4px', background: 'var(--primary-purple)', margin: '0 auto', borderRadius: '2px' }}></div>
          <p style={{ maxWidth: '700px', margin: '1.5rem auto 0', color: 'var(--text-light-secondary)', fontSize: '1.1rem' }}>
            Más que código, construyo soluciones. Mi objetivo es fusionar la lógica técnica con un diseño excepcional.
          </p>
        </motion.div>

        <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem' }}>
          {/* Left Column: Narrative & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--text-light)' }}>
              Desarrollador <span className="gradient-text">Full Stack</span> con pasión por el detalle
            </h3>
            
            <div className="about-text" style={{ color: 'var(--text-light-secondary)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '2rem' }}>
              <p style={{ marginBottom: '1rem' }}>
                Mi viaje en el desarrollo web comenzó con la curiosidad de entender cómo funcionan las cosas en internet. Hoy, esa curiosidad se ha transformado en una carrera dedicada a crear aplicaciones web robustas, escalables y visualmente impactantes.
              </p>
              <p>
                Me especializo en el ecosistema de <strong>React</strong> y <strong>TypeScript</strong>, priorizando siempre la experiencia de usuario (UX) y la calidad del código. Creo firmemente que una gran interfaz no solo debe verse bien, sino sentirse instantánea e intuitiva.
              </p>
            </div>

            {/* Stats Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginTop: '2rem' }}>
              {stats.map((stat, index) => (
                <div key={index} style={{ 
                  background: 'rgba(255,255,255,0.03)', 
                  padding: '1.5rem 1rem', 
                  borderRadius: '12px', 
                  textAlign: 'center',
                  border: '1px solid rgba(139, 92, 246, 0.1)'
                }}>
                  <div className="gradient-text" style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '0.5rem' }}>{stat.value}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.2' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Skills Categories */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + (catIndex * 0.1) }}
                viewport={{ once: true }}
                style={{
                  background: 'rgba(30, 30, 63, 0.4)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '16px',
                  padding: '1.5rem',
                  border: '1px solid rgba(139, 92, 246, 0.1)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.2rem' }}>
                  <div style={{ color: 'var(--primary-purple-light)' }}>{category.icon}</div>
                  <h4 style={{ fontSize: '1.2rem', color: 'var(--text-light)', margin: 0 }}>{category.title}</h4>
                </div>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      style={{
                        background: 'rgba(139, 92, 246, 0.1)',
                        color: 'var(--text-light)',
                        padding: '0.4rem 1rem',
                        borderRadius: '20px',
                        fontSize: '0.9rem',
                        border: '1px solid rgba(139, 92, 246, 0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}
                    >
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
