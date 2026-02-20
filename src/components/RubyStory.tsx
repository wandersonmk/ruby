import { motion } from "framer-motion";
import { Heart, Briefcase, Target, Users, Building2, Shield } from "lucide-react";
import storyImage from "@/assets/tio rafa-36.jpg";

const RubyStory = () => {
  const storyHighlights = [
    {
      icon: Heart,
      title: "Propósito",
      description: "Servir às pessoas com fé e compromisso",
    },
    {
      icon: Briefcase,
      title: "Liderança",
      description: "Diretora Executiva da Berga Mais Alimentação",
    },
    {
      icon: Shield,
      title: "Experiência",
      description: "Enfermagem e Segurança do Trabalho",
    },
    {
      icon: Target,
      title: "Missão",
      description: "Fortalecer mulheres e defender vulneráveis",
    },
  ];

  return (
    <section id="historia" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            História • Revista Regional
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Uma Trajetória de{" "}
            <span className="text-primary">Propósito e Serviço</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Conheça a jornada empresarial e profissional que moldou a liderança e 
            os valores que Ruby leva para a vida pública.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Main Content with Photo and Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-2xl p-8 shadow-card border border-border mb-12"
          >
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
              {/* Photo Column */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="lg:col-span-2"
              >
                <div className="relative">
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src={storyImage}
                      alt="Ruby Moreira Bergamini - Trajetória Empresarial"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  {/* Decorative Elements */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary/20 rounded-2xl -z-10" />
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/10 rounded-2xl -z-10" />
                </div>
              </motion.div>

              {/* Text Column */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="lg:col-span-3"
              >
                <div className="space-y-5 text-muted-foreground text-base leading-relaxed">
                  <p>
                    <strong className="text-foreground text-lg">Ruby Bergamini</strong> é empresária, diretora executiva da 
                    Berga Mais Alimentação e uma liderança que construiu sua trajetória baseada em propósito, fé e 
                    compromisso com as pessoas. Sua história profissional é marcada por um princípio simples e profundo: <strong className="text-primary">servir</strong>.
                  </p>
                  
                  <p>
                    Com formação em Enfermagem e experiência como técnica em Segurança do Trabalho, Ruby desenvolveu 
                    uma visão humanizada de gestão, unindo sensibilidade, organização e responsabilidade. Sua vivência 
                    na área da saúde moldou uma liderança firme e atenta às necessidades das pessoas, característica 
                    que se tornou marca registrada da sua atuação empresarial.
                  </p>
                  
                  <p>
                    À frente da <strong className="text-secondary">Berga Mais Alimentação</strong>, empresa referência no setor de alimentação 
                    corporativa, Ruby consolidou um modelo de gestão baseado na qualidade, no cuidado com os 
                    colaboradores e na atenção aos detalhes. Seu olhar vai além da entrega de serviços: ela acredita 
                    na construção de ambientes mais humanos, organizados e comprometidos com o bem-estar coletivo.
                  </p>
                  
                  <p>
                    Ao longo de sua caminhada, Ruby enfrentou desafios que fortaleceram ainda mais sua missão de vida. 
                    Um dos momentos mais marcantes foi o grave acidente sofrido por seu pai, experiência que reafirmou 
                    seu propósito na área do cuidado e ampliou sua visão sobre a importância da saúde, da empatia e 
                    da <strong className="text-foreground">responsabilidade social</strong>.
                  </p>
                  
                  <p>
                    Casada com Fernando Bergamini e mãe de duas filhas, Ana Clara e Anna Isabella, Ruby acredita que 
                    conciliar família, empresa e missão pública é um exercício diário de organização, amor e prioridade. 
                    Para ela, crescimento profissional nunca deve significar abrir mão dos valores que sustentam o lar.
                  </p>
                  
                  <p>
                    Com atuação que ultrapassa o ambiente corporativo, Ruby também decidiu expandir sua contribuição 
                    para o campo público. Já foi candidata a vereadora e hoje é pré-candidata a deputada federal por 
                    São Paulo. Seu propósito é <strong className="text-secondary">fortalecer as mulheres</strong>, defender pessoas em situação de 
                    vulnerabilidade e lutar por uma saúde mais digna, acessível e eficiente.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Quote destacada */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 p-6 bg-primary/5 border-l-4 border-primary rounded-r-lg"
            >
              <p className="text-foreground font-medium text-lg italic text-center">
                "Ruby Bergamini representa uma liderança que une fé, trabalho, competência técnica e sensibilidade 
                humana. Seja na empresa, na saúde ou na vida pública, sua missão permanece a mesma: transformar 
                vidas por meio do cuidado, da organização e do compromisso com as pessoas."
              </p>
              <div className="mt-4 text-center">
                <span className="text-muted-foreground text-sm font-medium">
                  Baseado em matéria da <strong className="text-primary">Revista Regional</strong>
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {storyHighlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 rounded-xl bg-card border border-border hover:shadow-card transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-foreground text-sm mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-xs leading-tight">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RubyStory;