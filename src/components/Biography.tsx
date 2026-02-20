import { motion } from "framer-motion";
import { GraduationCap, Heart, Users, Briefcase } from "lucide-react";
import portraitImage from "@/assets/foto perfil.jpeg";

const Biography = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Formação",
      description: "Técnica em Segurança do Trabalho e Enfermeira",
    },
    {
      icon: Heart,
      title: "Família",
      description: "Mãe dedicada de Ana Clara e Anna Isabella",
    },
    {
      icon: Users,
      title: "Experiência",
      description: "Enfermeira do Trabalho com competência e sensibilidade",
    },
    {
      icon: Briefcase,
      title: "Pré-candidatura",
      description: "Deputada Federal comprometida com as pessoas",
    },
  ];

  return (
    <section id="biografia" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10">
              <img
                src={portraitImage}
                alt="Ruby Moreira Bergamini"
                className="w-full max-w-md mx-auto rounded-2xl shadow-card"
              />
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/20 rounded-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
              Biografia
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Conheça a{" "}
              <span className="text-primary">Ruby Moreira Bergamini</span>
            </h2>

            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed mb-8">
              <p>
                <strong className="text-foreground">Ruby Moreira Bergamini</strong> é uma mulher forte, 
                dedicada e apaixonada pela família. Nordestina de origem, construiu sua trajetória com base 
                no cuidado ao próximo, na responsabilidade profissional e no amor por suas filhas, 
                Ana Clara e Anna Isabella, suas maiores inspirações. Casada com Fernando Bergamini, 
                sempre buscou crescer por meio do estudo e do trabalho, formando-se Técnica em Segurança 
                do Trabalho e tornando-se enfermeira, atuando também como enfermeira do trabalho com 
                competência e sensibilidade.
              </p>
              <p>
                Ruby vive em Salto, no interior de São Paulo, cidade pela qual é profundamente apaixonada 
                e onde construiu seu lar. Movida pelo desejo de ampliar seu impacto na sociedade, deu 
                início à sua pré-candidatura na política como <strong className="text-secondary">Deputada Federal</strong>, 
                levando consigo seus valores de cuidado, responsabilidade e compromisso com as pessoas.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-foreground text-sm">
                      {item.title}
                    </p>
                    <p className="text-muted-foreground text-xs mt-0.5">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Biography;
