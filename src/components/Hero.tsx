import { motion } from "framer-motion";
import heroBackground from "@/assets/salto-city.jpg";
import rubyPhoto from "@/assets/tio rafa-56.jpg";

const Hero = () => {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const headerHeight = 80; // Height of fixed header
      const targetPosition = targetElement.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

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

      {/* Floating Shapes - Cores da Bandeira - Mais suaves */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-[32rem] h-[32rem] bg-primary-light/8 rounded-full blur-3xl" />
        <div className="absolute top-2/3 left-1/3 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Texto Principal */}
          <div className="text-center lg:text-left order-2 lg:order-1 space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-heading font-black leading-tight"
            >
              <span className="block text-5xl md:text-6xl lg:text-7xl text-white drop-shadow-lg mb-2">RUBY</span>
              <span className="block text-4xl md:text-5xl lg:text-6xl text-accent drop-shadow-lg">BERGAMINI</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-3"
            >
              <p className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-white leading-tight">
                Por uma Salto mais<br />
                <span className="text-secondary">humana e eficiente</span>
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-base md:text-lg text-primary-foreground/90 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Enfermeira e empresária comprometida com uma gestão transparente, humana e responsável.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-4"
            >
              <a
                href="#historia"
                onClick={(e) => handleSmoothScroll(e, "#historia")}
                className="inline-flex items-center justify-center px-10 py-4 rounded-xl bg-secondary text-secondary-foreground font-heading font-bold text-base shadow-xl hover:bg-secondary-light transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                Conheça a História
              </a>
              <a
                href="#conquistas"
                onClick={(e) => handleSmoothScroll(e, "#conquistas")}
                className="inline-flex items-center justify-center px-10 py-4 rounded-xl bg-transparent text-white font-heading font-semibold text-base border-2 border-white/40 backdrop-blur-sm hover:bg-white/10 hover:border-white/60 transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                Ver Conquistas
              </a>
            </motion.div>
          </div>

          {/* Foto Ruby */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 lg:order-2 flex flex-col items-center gap-6"
          >
            <div className="relative group">
              {/* Frame decorativo - mais sutil */}
              <div className="absolute -inset-2 bg-gradient-to-br from-accent/10 via-secondary/10 to-primary/10 rounded-3xl blur-md opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
              
              {/* Foto */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[22rem] lg:h-[22rem] rounded-3xl overflow-hidden shadow-2xl border border-white/20">
                <img 
                  src={rubyPhoto} 
                  alt="Ruby Bergamini" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              
              {/* Elementos decorativos sutis */}
              <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-secondary/30 rounded-2xl blur-sm -z-10"></div>
              <div className="absolute -top-2 -left-2 w-12 h-12 bg-accent/20 rounded-2xl blur-sm -z-10"></div>
            </div>
            
            {/* Badges abaixo da foto */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col items-center gap-3"
            >
              <span className="inline-block px-5 py-2.5 rounded-full bg-accent/90 text-accent-foreground font-semibold text-sm backdrop-blur-sm shadow-lg">
                Pré-candidata a Deputada Federal
              </span>
              <span className="inline-block px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-bold text-sm shadow-lg">
                União Brasil
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:block"
        >
          <motion.a
            href="#biografia"
            onClick={(e) => handleSmoothScroll(e, "#biografia")}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-primary-foreground/50 hover:text-accent transition-colors cursor-pointer group"
          >
            <span className="text-xs font-medium uppercase tracking-wider">Rolar para baixo</span>
            <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-1 group-hover:border-accent/50 transition-colors">
              <div className="w-1 h-2 bg-primary-foreground/50 rounded-full group-hover:bg-accent/70 transition-colors"></div>
            </div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
