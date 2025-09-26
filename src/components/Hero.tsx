import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-js.jpg";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fade-in">
        <div className="inline-block mb-6 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
          <span className="text-primary font-medium text-sm">JavaScript Developer</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-js-accent to-primary bg-clip-text text-transparent leading-tight">
          Building Amazing
          <br />
          JavaScript Projects
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto">
          Explore my collection of modern web applications, interactive experiences,
          and innovative solutions built with JavaScript and cutting-edge technologies.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            variant="default"
            size="lg"
            onClick={scrollToProjects}
            className="px-8 py-6 text-lg font-semibold shadow-glow hover:shadow-hover transition-all duration-300 animate-glow-pulse"
          >
            View My Projects
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown
          className="w-6 h-6 text-primary cursor-pointer hover:text-js-accent transition-colors duration-300"
          onClick={scrollToProjects}
        />
      </div>
    </section>
  );
};

export default Hero;