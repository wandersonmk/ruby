import { motion } from "framer-motion";
import { GraduationCap, Heart, Users, TreePine } from "lucide-react";
import portraitImage from "@/assets/foto perfil.png";

const Biography = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Educação Física",
      description: "Licenciatura e Bacharelado pela CEUNSP em Itu",
    },
    {
      icon: Heart,
      title: "Paixão pelo Esporte",
      description: "Encontrou no esporte a oportunidade de fazer faculdade",
    },
    {
      icon: Users,
      title: "Experiência",
      description: "Atuou na área escolar e academias da região",
    },
    {
      icon: TreePine,
      title: "Cidade em Ação",
      description: "Projeto social de revitalização e plantio de árvores",
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
                alt="Henrique Balseiros"
                className="w-full max-w-md mx-auto rounded-2xl shadow-card"
              />
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/20 rounded-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
            </div>

            {/* Birth Info Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-4 left-0 lg:left-auto lg:-right-8 bg-card rounded-xl shadow-card p-4 border border-border"
            >
              <p className="text-sm text-muted-foreground">Nascido em</p>
              <p className="font-heading font-bold text-primary text-lg">01/05/1994</p>
              <p className="text-xs text-secondary font-medium">Dia do Trabalho</p>
            </motion.div>
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
              Conheça o{" "}
              <span className="text-primary">Professor Henrique</span>
            </h2>

            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed mb-8">
              <p>
                <strong className="text-foreground">Henrique Balseiros</strong>, 31 anos, 
                é formado em Licenciatura e Bacharelado em Educação Física pela faculdade 
                CEUNSP em Itu. Filho de Eulina e Henrique, irmão de Rafael.
              </p>
              <p>
                Começou sua vida com o sonho de ser jogador de futebol como qualquer garoto. 
                Não conseguiu, mas encontrou no esporte a oportunidade de fazer a faculdade. 
                Atuou dois anos na área escolar e alguns anos em academias na região.
              </p>
              <p>
                É autor do projeto social <strong className="text-secondary">Cidade em Ação</strong>, 
                um programa comprometido com ações de cidadania e responsabilidade social, 
                focado na revitalização de espaços públicos abandonados e plantio de árvores.
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
