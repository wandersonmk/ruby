import { motion } from "framer-motion";
import { Instagram, Play, X } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import videoFormacao from "@/assets/Minha-formação.mp4";
import videoHistoria from "@/assets/Minha-historia.mp4";
import videoInfancia from "@/assets/Minha-infancia.mp4";

const InstagramFeed = () => {
  const [selectedVideo, setSelectedVideo] = useState<{id: number; src: string; title: string; description: string} | null>(null);

  const videos = [
    { id: 1, src: videoInfancia, title: "Minha Infância", description: "Conheça a trajetória desde criança" },
    { id: 2, src: videoHistoria, title: "Minha História", description: "A jornada até a política" },
    { id: 3, src: videoFormacao, title: "Minha Formação", description: "Educação e preparo profissional" },
  ];

  const handleVideoClick = (video: typeof videos[0]) => {
    setSelectedVideo(video);
  };

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
            Conheça Henrique
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Assista aos vídeos e acompanhe as novidades no Instagram
          </p>
        </motion.div>

        {/* Videos Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto mb-20"
        >
          <h3 className="font-heading font-bold text-2xl md:text-3xl text-gray-900 dark:text-white mb-8 text-center">
            📹 Vídeos
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div 
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 dark:border-gray-700 cursor-pointer"
                  onClick={() => handleVideoClick(video)}
                >
                  <div className="relative aspect-video bg-black">
                    <video
                      src={video.src}
                      className="w-full h-full object-cover"
                      preload="metadata"
                    >
                      Seu navegador não suporta vídeos HTML5.
                    </video>
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 group-hover:bg-black/60 transition-colors">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                        <Play className="w-10 h-10 text-white ml-1" fill="currentColor" />
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-heading font-bold text-lg text-gray-900 dark:text-white mb-1">
                      {video.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {video.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Instagram CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto mb-16"
        >
          <h3 className="font-heading font-bold text-2xl md:text-3xl text-gray-900 dark:text-white mb-8 text-center flex items-center justify-center gap-2">
            <Instagram className="w-8 h-8 text-purple-600" />
            Acompanhe no Instagram
          </h3>
          <div className="text-center">
            <a
              href="https://www.instagram.com/henriquebalseiros/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <Instagram className="w-5 h-5" />
              Seguir @henriquebalseiros
            </a>
          </div>
        </motion.div>
      </div>

      {/* Video Modal */}
      <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
        <DialogContent className="max-w-5xl w-full p-0 bg-black border-0">
          <DialogTitle className="sr-only">
            {selectedVideo?.title || "Vídeo"}
          </DialogTitle>
          <button
            onClick={() => setSelectedVideo(null)}
            className="absolute right-4 top-4 z-50 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 transition-colors"
            aria-label="Fechar"
          >
            <X className="w-6 h-6" />
          </button>
          {selectedVideo && (
            <div className="relative w-full">
              <video
                src={selectedVideo.src}
                controls
                autoPlay
                className="w-full h-auto max-h-[85vh] object-contain"
              >
                Seu navegador não suporta vídeos HTML5.
              </video>
              <div className="bg-gradient-to-t from-black/80 to-transparent absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white font-heading font-bold text-2xl mb-2">
                  {selectedVideo.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {selectedVideo.description}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default InstagramFeed;
