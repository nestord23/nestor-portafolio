import { motion } from "framer-motion";
import { Palette, Terminal, Layout, Code2, GitBranch, Eye } from "lucide-react";
import SectionHeader from "./SectionHeader";

const About = () => {
  const stats = [
    { label: "Años de Experiencia", value: "+2" },
    { label: "Proyectos Completados", value: "+15" },
    { label: "Certificaciones", value: "5" },
  ];

  const skillCategories = [
    {
      title: "Lenguajes",
      icon: <Code2 size={18} />,
      skills: ["JavaScript ES6+", "TypeScript", "HTML5", "CSS3","C#"],
    },
    {
      title: "Frontend",
      icon: <Layout size={18} />,
      skills: ["React", "Angular (básico)", "Tailwind CSS", "Sass", "Bootstrap", "Redux", "Context API"],
    },
    {
      title: "Backend & APIs",
      icon: <Terminal size={18} />,
      skills: ["Node.js", "REST", "Fetch API", "Axios"],
    },
    {
      title: "Herramientas",
      icon: <GitBranch size={18} />,
      skills: ["Git", "GitHub", "Bitbucket", "Vite", "Webpack", "NPM", "Yarn", "Linux"],
    },
    {
      title: "Diseño",
      icon: <Palette size={18} />,
      skills: ["Responsive Design", "UX/UI", "Figma"],
    },
    {
      title: "Metodologías",
      icon: <Eye size={18} />,
      skills: ["Scrum", "Ágil"],
    },
  ];

  return (
    <section id="sobre-mi" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Sobre mí"
          subtitle="Desarrollador Web con experiencia en React, JavaScript y TypeScript. Estudiante de Ingeniería en Sistemas."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-12"
        >
          <div className="glass-panel rounded-lg p-8">
            <h3 className="text-xl font-sora font-bold mb-6 text-white/90">
              Desarrollador <span className="gradient-text">Web</span> enfocado en Frontend
            </h3>
            <div className="space-y-4 text-slate/70 text-sm leading-relaxed">
              <p>
                Desarrollo aplicaciones web utilizando <strong className="text-lime-neon">React</strong>, <strong className="text-lime-neon">JavaScript</strong> y <strong className="text-lime-neon">TypeScript</strong>. Construyo interfaces responsivas, integro APIs REST y creo componentes reutilizables. Estudiante de Ingeniería en Sistemas en la Universidad Mariano Gálvez de Guatemala.
              </p>
              <p>
                Trabajo bajo metodologías ágiles y gestiono el código con Git. También tengo experiencia en análisis de información, automatización de procesos y documentación técnica. Mi enfoque está en escribir código claro y colaborar de forma efectiva con equipos multidisciplinarios.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="glass-panel rounded-lg p-4 text-center">
              <div className="text-2xl font-mono font-bold text-neon">
                {stat.value}
              </div>
              <div className="text-xs text-slate/60 mt-1 font-mono">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              className="glow-border p-5 pt-6 pb-6 h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-neon">{category.icon}</span>
                <h4 className="font-mono text-sm text-white/80 tracking-wider uppercase">
                  {category.title}
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="terminal-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
