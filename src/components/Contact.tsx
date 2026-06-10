import { motion } from "framer-motion";
import { Phone, Mail, Linkedin, Github, MapPin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone size={24} />,
      label: "Teléfono",
      value: "+502 57886144",
      link: "tel:+50257886144",
    },
    {
      icon: <Mail size={24} />,
      label: "Email",
      value: "realdanii135@gmail.com",
      link: "mailto:realdanii135@gmail.com",
    },
    {
      icon: <MapPin size={24} />,
      label: "Ubicación",
      value: "Guatemala",
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: <Linkedin size={24} />,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/nestor-montenegro",
    },
    {
      icon: <Github size={24} />,
      label: "GitHub",
      url: "https://github.com/nestord23",
    },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="contacto" className="contact section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>¡Trabajemos juntos!</h2>
          <p className="contact-subtitle">
            Estoy disponible para nuevos proyectos y oportunidades
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>
              Información de contacto
            </h3>

            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                className="contact-item"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="contact-icon">{item.icon}</div>
                <div>
                  <div className="contact-item-label">
                    {item.label}
                  </div>
                  {item.link ? (
                    <a href={item.link}>
                      {item.value}
                    </a>
                  ) : (
                    <span className="contact-item-value">
                      {item.value}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}

            <div className="contact-social-section">
              <h4>
                Sígueme en redes
              </h4>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    title={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="contact-form-card"
          >
            <h3>
              ¿Tienes un proyecto en mente?
            </h3>
            <p>
              Me especializo en crear experiencias digitales excepcionales.
              Desde sitios web corporativos hasta aplicaciones interactivas,
              estoy aquí para convertir tus ideas en realidad.
            </p>

            <div className="contact-services">
              <h4>
                Servicios que ofrezco:
              </h4>
              <ul className="contact-services-list">
                <li>✨ Desarrollo Frontend (React, HTML5, CSS3)</li>
                <li>🎨 Diseño UX/UI</li>
                <li>🌐 Desarrollo WordPress</li>
                <li>📱 Diseño Responsivo</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
