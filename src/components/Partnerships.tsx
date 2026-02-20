import { motion } from "framer-motion";
import { Building2, Landmark, Users, CheckCircle2, Heart, Building, Accessibility, PartyPopper, Briefcase } from "lucide-react";
import parceriaPolitica from "@/assets/parceria-politica.png";

const Partnerships = () => {
  const partners = [
    {
      name: "Ruby Moreira Bergamini",
      role: "Pré-candidata a Deputada Federal",
      party: "União Brasil",
      subtitle: "Ruby Bergamini",
      description:
        "Enfermeira dedicada e apaixonada por Salto. Com sua experiência em cuidado e responsabilidade profissional, busca ampliar seu impacto na sociedade levando seus valores para Brasília.",
      icon: Users,
      isMain: true,
      contributions: [
        { icon: Heart, text: "Foco em saúde e qualidade de vida da população" },
        { icon: Users, text: "Compromisso com cuidado e responsabilidade social" },
        { icon: Accessibility, text: "Defesa dos direitos das pessoas com deficiência" },
        { icon: Building2, text: "Trabalhando para trazer recursos federais para Salto" },
      ],
    },
    {
      name: "Carlão Pignatari",
      role: "Deputado Estadual SP",
      party: "União Brasil",
      subtitle: "4º Mandato",
      description:
        "Ex-Presidente da ALESP (2021/2023) e Ex-Prefeito de Votuporanga (2001/2008). Trabalhando pelo interior paulista com foco em desenvolvimento e recursos para as cidades.",
      icon: Landmark,
      contributions: [
        { icon: Building, text: "4º Mandato como Deputado Estadual" },
        { icon: Landmark, text: "Ex-Presidente da ALESP – 2021/2023" },
        { icon: Building2, text: "Ex-Prefeito de Votuporanga – 2001/2008" },
        { icon: Heart, text: "Trabalhando pelo interior paulista" },
      ],
    },
  ];

  return (
    <section id="parcerias" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            Força Política
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Parcerias que{" "}
            <span className="text-primary">Geram Resultados</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Trabalhando em parceria para captar recursos estaduais e federais para Salto, 
            com foco em desenvolvimento, infraestrutura e qualidade de vida.
          </p>
        </motion.div>

        {/* Main Photo Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="relative max-w-2xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-card border border-border">
              <img
                src={parceriaPolitica}
                alt="Ruby Moreira Bergamini e Carlão Pignatari - Trabalhando por Salto"
                className="w-full h-auto"
              />
            </div>
            
            {/* Caption */}
            <div className="mt-6 text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-3">
                <CheckCircle2 className="w-5 h-5 text-secondary" />
                <span className="font-heading font-bold text-primary">TRABALHANDO POR SALTO!</span>
              </div>
              <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
                Parceria focada em desenvolvimento, emendas parlamentares, infraestrutura e qualidade de vida 
                para a cidade de Salto-SP.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Partners Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`bg-card rounded-2xl p-6 shadow-card border transition-all duration-300 hover:-translate-y-2 ${
                partner.isMain 
                  ? "border-primary/50 shadow-lg ring-2 ring-primary/20" 
                  : "border-border hover:border-primary/30"
              }`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                    partner.isMain ? "bg-secondary/20" : "bg-primary/10"
                  }`}
                >
                  <partner.icon
                    className={`w-7 h-7 ${
                      partner.isMain ? "text-secondary" : "text-primary"
                    }`}
                  />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-foreground">
                    {partner.name}
                  </h3>
                  {partner.subtitle && (
                    <p className="text-xs text-secondary font-medium">
                      {partner.subtitle}
                    </p>
                  )}
                  <p className="text-sm text-muted-foreground">
                    {partner.role} • <span className="text-primary font-medium">{partner.party}</span>
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                {partner.description}
              </p>

              <div className="space-y-2">
                <p className="font-heading font-semibold text-xs text-foreground uppercase tracking-wide">
                  Atuação
                </p>
                <ul className="space-y-3">
                  {partner.contributions.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <div className="w-6 h-6 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <item.icon className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
            <div className="max-w-4xl mx-auto">
              <h3 className="font-heading font-bold text-xl md:text-2xl text-foreground mb-4 text-center">
                Resultados Concretos para Salto
              </h3>
              <p className="text-muted-foreground text-center leading-relaxed mb-6">
                A parceria entre deputado estadual e pré-candidata a deputada federal gera força política 
                para trazer recursos e desenvolvimento para Salto. Juntos, buscam impulsionar melhorias 
                em infraestrutura, saúde, emprego, cultura e desenvolvimento geral da cidade.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                {[
                  { label: "Infraestrutura", icon: Building },
                  { label: "Saúde", icon: Heart },
                  { label: "Cultura", icon: PartyPopper },
                  { label: "Emprego", icon: Briefcase },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center gap-2 p-4 rounded-xl bg-muted/50">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="font-heading font-semibold text-sm text-foreground">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Slogan */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-block bg-hero-gradient rounded-2xl px-8 py-6 shadow-lg">
            <p className="font-heading font-black text-2xl md:text-3xl text-primary-foreground">
              TRABALHANDO POR{" "}
              <span className="text-gradient-gold">SALTO!</span>
            </p>
            <p className="text-primary-foreground/70 text-sm mt-2">
              Posicionando Salto no caminho certo
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partnerships;
