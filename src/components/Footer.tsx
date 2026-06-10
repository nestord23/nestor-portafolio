import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="footer-content"
        >
          <span>© {currentYear} Néstor Montenegro. Hecho con</span>
          <Heart
            size={16}
            className="footer-heart-icon"
            fill="var(--primary-mint)"
          />
          <span>y mucho café ☕</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="footer-subtitle"
        >
          Desarrollando experiencias digitales excepcionales
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
