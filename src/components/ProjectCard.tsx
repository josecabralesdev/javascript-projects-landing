import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

const ProjectCard = ({ 
  title, 
  description, 
  technologies, 
  image, 
  demoUrl, 
  githubUrl, 
  featured = false 
}: ProjectCardProps) => {
  return (
    <Card className={`
      group relative overflow-hidden bg-gradient-card border-border/50 
      hover:border-primary/30 transition-all duration-500 hover:shadow-hover
      ${featured ? 'md:col-span-2 animate-glow-pulse' : ''}
    `}>
      {/* Project Image */}
      {image && (
        <div className="aspect-video overflow-hidden bg-secondary/20">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      )}
      
      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          {featured && (
            <span className="px-2 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full">
              Featured
            </span>
          )}
        </div>
        
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {description}
        </p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full 
                       border border-border/50 hover:border-primary/30 transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Actions */}
        <div className="flex gap-3">
          {demoUrl && (
            <Button 
              variant="default" 
              size="sm" 
              asChild
              className="flex-1 shadow-glow/50"
            >
              <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </a>
            </Button>
          )}
          
          {githubUrl && (
            <Button 
              variant="outline" 
              size="sm" 
              asChild
              className="flex-1 border-primary/30 hover:border-primary hover:bg-primary/10"
            >
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                Code
              </a>
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;