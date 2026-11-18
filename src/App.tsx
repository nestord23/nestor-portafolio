import { lazy, Suspense, useEffect } from "react";
import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";
import Header from "./components/layout/Header";
import ScrollToTop from "./components/layout/ScrollToTop";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";

// Solo el fondo 3D se carga de forma diferida. Las secciones deben estar
// presentes desde el primer render para que los enlaces #ancla funcionen.
const ShaderBackground = lazy(
  () => import("./components/effects/ShaderBackground"),
);

const scrollToHash = () => {
  const id = decodeURIComponent(window.location.hash.slice(1));
  if (!id) return;

  document.getElementById(id)?.scrollIntoView({ behavior: "auto" });
};

const App = () => {
  useEffect(() => {
    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);

    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <MotionConfig reducedMotion="user">
        <Suspense fallback={null}>
          <ShaderBackground />
        </Suspense>
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </MotionConfig>
    </LazyMotion>
  );
};

export default App;
