import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroBackground from "@/assets/salto-city.jpg";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-overlay-gradient" />

      {/* Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary-light/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary font-medium text-sm backdrop-blur-sm border border-secondary/30">
            Vereador de Salto-SP • PL
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-heading font-black text-4xl md:text-6xl lg:text-7xl text-primary-foreground mb-4"
        >
          HENRIQUE
          <br />
          <span className="text-gradient-gold">BALSEIROS</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl lg:text-3xl font-heading font-bold text-primary-foreground/90 mb-8"
        >
          TRABALHANDO POR SALTO!
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg text-primary-foreground/70 max-w-2xl mx-auto mb-12"
        >
          Vereador mais votado da história de Salto com foco em Educação e soluções 
          para todas as áreas da cidade
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#biografia"
            className="inline-flex items-center justify-center px-8 py-2.5 rounded-lg bg-secondary text-secondary-foreground font-heading font-bold text-lg shadow-gold hover:bg-secondary-light transition-all duration-300 hover:scale-105"
          >
            Conheça a História
          </a>
          <a
            href="#conquistas"
            className="inline-flex items-center justify-center px-8 py-2.5 rounded-lg bg-primary-foreground/10 text-primary-foreground font-heading font-semibold text-lg backdrop-blur-sm border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all duration-300"
          >
            Ver Conquistas
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#biografia"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-primary-foreground/50 hover:text-secondary transition-colors"
          >
            <span className="text-xs font-medium">Rolar para baixo</span>
            <ChevronDown size={24} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
