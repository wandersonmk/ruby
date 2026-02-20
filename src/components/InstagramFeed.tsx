import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

const InstagramFeed = () => {
  return (
    <section id="instagram" className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-black text-4xl md:text-5xl text-gray-900 dark:text-white mb-4">
            Conheça Ruby
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Acompanhe a trajetória e as novidades no Instagram
          </p>
        </motion.div>

        {/* Instagram CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h3 className="font-heading font-bold text-2xl md:text-3xl text-gray-900 dark:text-white mb-8 text-center flex items-center justify-center gap-2">
            <Instagram className="w-8 h-8 text-purple-600" />
            Acompanhe no Instagram
          </h3>
          <div className="text-center">
            <a
              href="https://www.instagram.com/ruby.bergamini/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-lg rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <Instagram className="w-6 h-6" />
              Seguir @ruby.bergamini
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramFeed;
