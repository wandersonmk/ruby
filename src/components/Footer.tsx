import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contato" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                <span className="font-heading font-bold text-primary text-xl">HB</span>
              </div>
              <div>
                <p className="font-heading font-bold text-lg">
                  HENRIQUE BALSEIROS
                </p>
                <p className="text-secondary text-sm font-medium">
                  Vereador de Salto-SP
                </p>
              </div>
            </div>
            <p className="text-primary-foreground/70 max-w-md leading-relaxed">
              Vereador com foco em Educação e olhar para todas as áreas da cidade. 
              Trabalhando por Salto com compromisso e dedicação para trazer soluções 
              reais aos problemas da população.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">
              Navegação
            </h4>
            <ul className="space-y-3">
              {["Início", "Biografia", "Conquistas", "Parcerias", "Contato"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-primary-foreground/70 text-sm">
                <MapPin size={18} className="text-secondary flex-shrink-0" />
                Salto, São Paulo - Brasil
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/70 text-sm">
                <Mail size={18} className="text-secondary flex-shrink-0" />
                contato@henriquebalseiros.com.br
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/70 text-sm">
                <Phone size={18} className="text-secondary flex-shrink-0" />
                <a href="https://wa.me/5511997589990" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                  (11) 99758-9990
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.instagram.com/henriquebalseiros/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-all"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://wa.me/5511997589990"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-all"
                aria-label="WhatsApp"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/50 text-sm text-center sm:text-left">
            © 2025 Henrique Balseiros. Todos os direitos reservados.
          </p>
          <p className="text-primary-foreground/50 text-xs">
            Partido Liberal (PL) • Vereador de Salto-SP
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
