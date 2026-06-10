import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="section-header"
    >
      <h2 className="gradient-text">{title}</h2>
      <div className="section-divider" />
      <p className="section-subtitle">{subtitle}</p>
    </motion.div>
  );
};

export default SectionHeader;
