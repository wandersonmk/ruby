import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import familyPhoto from "@/assets/tio rafa-20.jpg";

const Family = () => {
  return (
    <section id="familia" className="py-20 bg-gradient-to-br from-primary/5 via-white to-accent/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/20 mb-4"
            >
              <Heart className="w-8 h-8 text-secondary" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-3">
              Vida Pessoal
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-2 lg:order-1"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={familyPhoto}
                  alt="Ruby e Fernando Bergamini"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="order-1 lg:order-2 space-y-6"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-primary/10">
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-6">
                  Uma Parceria de Vida
                </h3>
                
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p className="text-lg">
                    Ruby é casada há <span className="font-semibold text-primary">3 anos</span> com{" "}
                    <span className="font-semibold text-primary">Fernando Bergamini</span>, 
                    empresário de 55 anos que atua no setor alimentício.
                  </p>
                  
                  <p className="text-lg">
                    Fernando é um <span className="font-semibold text-accent">apoiador fiel</span> de 
                    sua esposa, compartilhando os valores de dedicação, trabalho e compromisso 
                    com o bem-estar da comunidade.
                  </p>
                  
                  <p className="text-lg">
                    Juntos, representam uma família comprometida com o desenvolvimento de Salto 
                    e com o fortalecimento dos laços comunitários.
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t border-primary/20">
                  <div className="flex items-center gap-2 text-secondary">
                    <Heart className="w-5 h-5 fill-current" />
                    <span className="font-heading font-semibold">
                      Uma família comprometida com Salto
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Family;
