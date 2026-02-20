import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
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

  // Map link names to section IDs
  const linkMap: { [key: string]: string } = {
    "Início": "inicio",
    "Biografia": "biografia", 
    "História": "historia",
    "Conquistas": "conquistas",
    "Parcerias": "parcerias",
    "Contato": "contato"
  };

  return (
    <footer id="contato" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-start gap-4 mb-4">
              {/* Logo retangular horizontal inspirado na bandeira do Brasil */}
              <div className="relative w-[63px] h-[44px] rounded-lg bg-accent flex items-center justify-center overflow-hidden shadow-md flex-shrink-0">
                {/* Losango amarelo - tamanho ajustado proporcionalmente */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[29px] h-[29px] bg-secondary transform rotate-45"></div>
                </div>
                {/* Círculo azul com RB - aumentado */}
                <div className="relative w-[24px] h-[24px] rounded-full bg-primary-light flex items-center justify-center z-10 shadow-sm">
                  <span className="font-heading font-black text-white text-[10px] tracking-tighter">RB</span>
                </div>
              </div>
              <div>
                <p className="font-heading font-bold text-lg leading-tight mb-1">
                  RUBY MOREIRA BERGAMINI
                </p>
                <p className="text-secondary text-sm font-medium">
                  Pré-candidata a Deputada Federal
                </p>
              </div>
            </div>
            <p className="text-primary-foreground/70 max-w-md leading-relaxed">
              Enfermeira dedicada e pré-candidata a Deputada Federal por Salto. 
              Trabalhando com cuidado, responsabilidade e compromisso com as pessoas 
              para ampliar seu impacto na sociedade.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">
              Navegação
            </h4>
            <ul className="space-y-3">
              {["Início", "Biografia", "História", "Conquistas", "Parcerias", "Contato"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${linkMap[link]}`}
                      onClick={(e) => handleSmoothScroll(e, `#${linkMap[link]}`)}
                      className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm cursor-pointer"
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
                contato@rubybergamini.com.br
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/70 text-sm">
                <Phone size={18} className="text-secondary flex-shrink-0" />
                <a href="https://wa.me/55119333749444" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                  (11) 93337-49444
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.instagram.com/ruby.bergamini/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-all"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://wa.me/55119333749444"
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
            © 2025 Ruby Moreira Bergamini. Todos os direitos reservados.
          </p>
          <p className="text-primary-foreground/50 text-xs">
            União Brasil • Pré-candidata a Deputada Federal
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
