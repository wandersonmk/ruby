import { useState } from "react";
import { Mail, Phone, User, MessageSquare, Send } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EmailModal = ({ isOpen, onClose }: EmailModalProps) => {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    interesse: "",
    mensagem: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const interesseOptions = [
    "Educação",
    "Saúde",
    "Infraestrutura",
    "Meio Ambiente",
    "Segurança",
    "Cultura e Lazer",
    "Assistência Social",
    "Esporte",
    "Outro"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulação de envio - aqui você pode integrar com um serviço de email
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Reset form
      setFormData({
        nome: "",
        telefone: "",
        interesse: "",
        mensagem: "",
      });
      
      alert("Mensagem enviada com sucesso! Retornaremos em breve.");
      onClose();
    } catch (error) {
      alert("Erro ao enviar mensagem. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md w-full">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <Mail className="text-primary" size={24} />
            Entre em Contato
          </DialogTitle>
          <DialogDescription>
            Envie sua mensagem diretamente para Ruby Moreira Bergamini. Responderemos em breve!
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="nome" className="flex items-center gap-2">
              <User size={16} />
              Nome Completo *
            </Label>
            <Input
              id="nome"
              type="text"
              placeholder="Digite seu nome completo"
              value={formData.nome}
              onChange={(e) => handleInputChange("nome", e.target.value)}
              required
              className="focus:ring-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="telefone" className="flex items-center gap-2">
              <Phone size={16} />
              Telefone *
            </Label>
            <Input
              id="telefone"
              type="tel"
              placeholder="(11) 99999-9999"
              value={formData.telefone}
              onChange={(e) => handleInputChange("telefone", e.target.value)}
              required
              className="focus:ring-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="interesse" className="flex items-center gap-2">
              <MessageSquare size={16} />
              Área de Interesse *
            </Label>
            <Select value={formData.interesse} onValueChange={(value) => handleInputChange("interesse", value)}>
              <SelectTrigger className="focus:ring-primary">
                <SelectValue placeholder="Selecione o assunto" />
              </SelectTrigger>
              <SelectContent>
                {interesseOptions.map((opcao) => (
                  <SelectItem key={opcao} value={opcao}>
                    {opcao}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="mensagem">
              Mensagem *
            </Label>
            <Textarea
              id="mensagem"
              placeholder="Descreva sua solicitação, sugestão ou dúvida..."
              value={formData.mensagem}
              onChange={(e) => handleInputChange("mensagem", e.target.value)}
              required
              rows={4}
              className="focus:ring-primary resize-none"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
              disabled={isSubmitting}
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-primary hover:bg-primary/90"
              disabled={isSubmitting || !formData.nome || !formData.telefone || !formData.interesse || !formData.mensagem}
            >
              {isSubmitting ? (
                "Enviando..."
              ) : (
                <>
                  <Send size={16} className="mr-2" />
                  Enviar
                </>
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EmailModal;