import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import fundoImage from "@/assets/fundo.jpg";
import betinaPhoto from "@/assets/betina-drawing.jpg";
import almhaLogo from "@/assets/almha-logo.png";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const services = [
    {
      title: "Revisão e Elaboração de Currículo",
      description: "Otimize seu currículo para destacar suas competências e conquistas de forma estratégica e impactante."
    },
    {
      title: "Preparação para Entrevistas",
      description: "Desenvolva confiança e técnicas eficazes para se destacar em processos seletivos."
    },
    {
      title: "Coaching de Desenvolvimento de Carreira",
      description: "Defina e alcance seus objetivos profissionais com clareza e propósito."
    },
    {
      title: "Coaching Executivo",
      description: "Aprimore sua liderança e tome decisões estratégicas com maior assertividade."
    },
    {
      title: "Life Coaching",
      description: "Equilibre vida pessoal e profissional, alcançando plenitude e autenticidade."
    }
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      text: "O coaching com a Almha transformou minha carreira. Consegui clareza sobre meus objetivos e conquistei a promoção que tanto desejava!"
    },
    {
      name: "João Santos",
      text: "Excelente profissional! Me ajudou a preparar para entrevistas e hoje estou na empresa dos meus sonhos."
    },
    {
      name: "Ana Paula",
      text: "O processo de coaching me trouxe equilíbrio entre vida pessoal e profissional. Recomendo muito!"
    }
  ];

  return (
    <div className="min-h-screen bg-background font-abeezee">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img src={almhaLogo} alt="Almha Logo" className="h-10 w-10 rounded-full" />
              <h1 className="text-2xl font-semibold text-foreground font-lobster">Almha</h1>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8 font-lobster">
              <button onClick={() => scrollToSection("home")} className="text-foreground hover:text-primary transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection("bio")} className="text-foreground hover:text-primary transition-colors">
                Bio
              </button>
              <button onClick={() => scrollToSection("servicos")} className="text-foreground hover:text-primary transition-colors">
                Serviços
              </button>
              <button onClick={() => scrollToSection("contato")} className="text-foreground hover:text-primary transition-colors">
                Contato
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 flex flex-col gap-4 animate-fade-in font-lobster">
              <button onClick={() => scrollToSection("home")} className="text-foreground hover:text-primary transition-colors text-left">
                Home
              </button>
              <button onClick={() => scrollToSection("bio")} className="text-foreground hover:text-primary transition-colors text-left">
                Bio
              </button>
              <button onClick={() => scrollToSection("servicos")} className="text-foreground hover:text-primary transition-colors text-left">
                Serviços
              </button>
              <button onClick={() => scrollToSection("contato")} className="text-foreground hover:text-primary transition-colors text-left">
                Contato
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        id="home" 
        className="pt-24 pb-16 px-4 relative min-h-[600px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${fundoImage})` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-semibold text-white mb-8 font-lobster leading-tight">
              Conectando Propósito e Carreira com Equilíbrio e Autenticidade
            </h1>
            <Button 
              size="lg" 
              onClick={() => scrollToSection("contato")}
              className="bg-white text-primary hover:bg-white/90 shadow-lg text-lg px-8 py-6 h-auto"
            >
              Agende sua Sessão
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12 text-foreground font-lobster">Depoimentos</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold text-foreground">— {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section id="bio" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img 
                src={betinaPhoto} 
                alt="Betina - Coach e Mentora"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-3xl font-semibold mb-6 text-foreground font-lobster">Sobre Mim</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Acredito que o verdadeiro sucesso profissional não se resume apenas ao conhecimento técnico. Ele nasce da harmonia entre corpo, mente e espírito, criando um caminho de realização autêntica e profunda. Como facilitadora, acompanho profissionais em jornadas de transformação, integrando a espiritualidade e a carreira para alinhar propósito e talento.
                </p>
                <p>
                  Minha abordagem é holística e intuitiva, combinando minha experiência como headhunter com práticas de alinhamento energético, mindfulness e meditação. Utilizo também os ensinamentos da Antroposofia e Jung para desbloquear potenciais, explorar arquétipos e padrões de alma, e traçar caminhos personalizados que devolvem o protagonismo às pessoas em suas vidas e carreiras.
                </p>
                <p className="font-semibold text-foreground">
                  Se você está em um momento de transição ou busca maior clareza e direção, convido você a embarcar nessa jornada transformadora. Juntos, podemos criar uma carreira que não apenas reflete seu potencial, mas também resgata sua essência.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12 text-foreground font-lobster">Serviços</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-foreground font-lobster">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-semibold text-center mb-12 text-foreground font-lobster">Contato</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="animate-fade-in">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4 text-foreground font-lobster">Entre em Contato</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">WhatsApp / Telefone</p>
                    <a 
                      href="https://wa.me/5511945825717" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
                    >
                      <Phone size={20} />
                      <span className="text-lg">+55 11 94582-5717</span>
                    </a>
                  </div>
                  <div className="pt-4">
                    <Button 
                      className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                      asChild
                    >
                      <a 
                        href="https://wa.me/5511945825717?text=Olá! Gostaria de agendar uma sessão." 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Agendar pelo WhatsApp
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4 text-foreground font-lobster">Sessões Presenciais</h3>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Endereço</p>
                  <p className="text-foreground font-semibold mb-1">Casa Eterea</p>
                  <p className="text-muted-foreground">
                    R. Min. José Geraldo Rodrigues Alckmim, 2400<br />
                    CEP 04737-002<br />
                    São Paulo - SP
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/50 py-8 px-4 mt-16">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 Almha. Todos os direitos reservados.</p>
          <p className="mt-2 text-sm">Conectando Propósito e Carreira com Equilíbrio e Autenticidade</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
