import { motion, type Variants } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, staggerChildren: 0.15 },
  },
};

const fadeUp = (distance: number, duration: number): Variants => ({
  hidden: { opacity: 0, y: distance },
  visible: { opacity: 1, y: 0, transition: { duration } },
});

const titleVariants = fadeUp(20, 0.45);
const subtitleVariants = fadeUp(12, 0.4);

const SectionHeader = ({ title, subtitle, className = "" }: SectionHeaderProps) => {
  return (
    <motion.div
      className={`text-center mb-16 ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      <motion.h2
        variants={titleVariants}
        className="text-3xl md:text-4xl font-sora font-bold mb-4 gradient-text"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={subtitleVariants}
          className="text-slate/60 max-w-2xl mx-auto font-mono text-sm"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionHeader;