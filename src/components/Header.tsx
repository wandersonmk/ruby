import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      
      // Close mobile menu if open
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: "Início", href: "#inicio" },
    { label: "Biografia", href: "#biografia" },
    { label: "História", href: "#historia" },
    { label: "Conquistas", href: "#conquistas" },
    { label: "Parcerias", href: "#parcerias" },
    { label: "Instagram", href: "#instagram" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-primary/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3">
          {/* Logo retangular horizontal inspirado na bandeira do Brasil */}
          <div className="relative w-[63px] h-[44px] rounded-lg bg-accent flex items-center justify-center overflow-hidden shadow-md">
            {/* Losango amarelo - tamanho ajustado proporcionalmente */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[29px] h-[29px] bg-secondary transform rotate-45"></div>
            </div>
            {/* Círculo azul com RB - aumentado */}
            <div className="relative w-[24px] h-[24px] rounded-full bg-primary flex items-center justify-center z-10 shadow-sm">
              <span className="font-heading font-black text-white text-[10px] tracking-tighter">RB</span>
            </div>
          </div>
          <div className="hidden lg:block">
            <p className="font-heading font-bold text-primary-foreground text-sm leading-tight">
              RUBY
            </p>
            <p className="font-heading font-bold text-secondary text-xs">
              BERGAMINI
            </p>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className="text-primary-foreground/90 hover:text-secondary font-medium text-sm transition-colors duration-200 cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-primary-foreground"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-primary border-t border-primary-light/20"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className="text-primary-foreground/90 hover:text-secondary font-medium text-sm py-2 transition-colors duration-200 cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
