import { motion } from "framer-motion";
import { Vote, FileText, Trophy, TrendingUp } from "lucide-react";

const Achievements = () => {
  const stats = [
    {
      icon: Vote,
      value: "2.142",
      label: "Votos na 1ª Eleição",
      sublabel: "Mais votado da chapa",
    },
    {
      icon: TrendingUp,
      value: "2.852",
      label: "Votos na Reeleição",
      sublabel: "Crescimento de 33%",
    },
    {
      icon: FileText,
      value: "Recordista",
      label: "Em Proposituras",
      sublabel: "2 anos consecutivos",
    },
    {
      icon: Trophy,
      value: "#1",
      label: "Mais Votado",
      sublabel: "História de Salto",
    },
  ];

  return (
    <section id="conquistas" className="py-24 bg-hero-gradient relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-dark/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-secondary/20 text-secondary font-medium text-sm mb-4">
            Conquistas
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-4">
            Resultados que Falam por Si
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            Um vereador com pauta na Educação, mas com olhar para todas as áreas da cidade. 
            Seu diferencial é apresentar soluções aos problemas.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/10 hover:border-secondary/50 transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center mb-4 group-hover:bg-secondary/30 transition-colors">
                  <stat.icon className="w-7 h-7 text-secondary" />
                </div>
                <p className="font-heading font-black text-3xl md:text-4xl text-primary-foreground mb-1">
                  {stat.value}
                </p>
                <p className="font-heading font-semibold text-primary-foreground text-sm mb-1">
                  {stat.label}
                </p>
                <p className="text-primary-foreground/60 text-xs">
                  {stat.sublabel}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <blockquote className="text-xl md:text-2xl text-primary-foreground/80 italic max-w-3xl mx-auto">
            "Foi recordista por dois anos consecutivos na Câmara em números de 
            proposituras – documentos encaminhados à Prefeitura solicitando 
            melhorias para a cidade."
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
