import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Biography from "@/components/Biography";
import RubyStory from "@/components/RubyStory";
import Achievements from "@/components/Achievements";
import Partnerships from "@/components/Partnerships";
import InstagramFeed from "@/components/InstagramFeed";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Biography />
      <RubyStory />
      <Achievements />
      <Partnerships />
      <InstagramFeed />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
