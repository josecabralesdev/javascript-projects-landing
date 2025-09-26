import { title } from "process";
import ProjectCard from "./ProjectCard";

const ProjectsShowcase = () => {
  // Sample projects - replace with your actual projects
  const projects = [
    {
      title: "2048 Game",
      description: "A complete implementation of the popular 2048 puzzle game using HTML, CSS, and JavaScript.",
      technologies: ["Html", "CSS", "JavaScript"],
      demoUrl: "https://josecabralesdev.github.io/javascript-projects/2048-game.html",
      githubUrl: "https://github.com/josecabralesdev/javascript-projects/blob/main/2048-game.html",
    },
    {
      title: "Image Editor",
      description: "A powerful and user-friendly image editor built with HTML, CSS, and JavaScript. This web-based tool allows you to enhance your photos with various adjustments, filters, and transformations - all in your browser without needing to upload images to any server.",
      technologies: ["Html", "CSS", "JavaScript"],
      demoUrl: "https://josecabralesdev.github.io/javascript-projects/image-editor.html",
      githubUrl: "https://github.com/josecabralesdev/javascript-projects/blob/main/image-editor.html",
      featured: true
    },
    {
      title: "Formulario con Validaciones",
      description: "Un formulario web completo con validaciones en tiempo real usando HTML, CSS y JavaScript. Este proyecto demuestra técnicas modernas de validación de formularios con retroalimentación visual inmediata.",
      technologies: ["Html", "CSS", "JavaScript"],
      demoUrl: "https://josecabralesdev.github.io/javascript-projects/validation-form.html",
      githubUrl: "https://github.com/josecabralesdev/javascript-projects/blob/main/validation-form.html"
    },
    {
      title: "Real-Time Currency Converter",
      description: "A responsive web application that converts currencies using real-time exchange rates from [exchangerate-api.com](https://exchangerate-api.com).",
      technologies: ["Html", "CSS", "JavaScript", "ExchangeRate-API"],
      demoUrl: "https://josecabralesdev.github.io/javascript-projects/currency-converter.html",
      githubUrl: "https://github.com/josecabralesdev/javascript-projects/blob/main/currency-converter.html",
      featured: true
    },
    {
      title: "3D Tetris Game",
      description: "A modern, visually appealing 3D Tetris game built with HTML, CSS, and JavaScript. This implementation features smooth animations, responsive design, and all the classic Tetris gameplay elements.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      demoUrl: "https://josecabralesdev.github.io/javascript-projects/3d-tetris.html",
      githubUrl: "https://github.com/josecabralesdev/javascript-projects/blob/main/3d-tetris.html",
      featured: true
    },
    {
      title: "🔐 Password Generator",
      description: "A modern, responsive password generator built with HTML, CSS, and JavaScript. This tool helps you create secure passwords with customizable options for length and character types.",
      technologies: ["Html", "CSS", "JavaScript"],
      demoUrl: "https://josecabralesdev.github.io/javascript-projects/password-generator.html",
      githubUrl: "https://github.com/josecabralesdev/javascript-projects/blob/main/password-generator.html"
    },
    {
      title: "Minesweeper Game",
      description: "A classic Minesweeper game implemented using HTML, CSS, and JavaScript. This game features a visually appealing interface, smooth animations, and a simple yet challenging gameplay mechanic.",
      technologies: ["Html", "CSS", "JavaScript"],
      demoUrl: "https://josecabralesdev.github.io/javascript-projects/minesweeper-game.html",
      githubUrl: "https://github.com/josecabralesdev/javascript-projects/blob/main/minesweeper-game.html",
      featured: true
    },
    {
      title: "Arkanoid Game",
      description: "A classic arcade game implemented using HTML, CSS, and JavaScript. This game features a retro-inspired visual style, smooth animations, and a simple yet addictive gameplay mechanic.",
      technologies: ["Html", "CSS", "JavaScript"],
      demoUrl: "https://josecabralesdev.github.io/javascript-projects/arkanoid-game.html",
      githubUrl: "https://github.com/josecabralesdev/javascript-projects/blob/main/arkanoid-game.html",
      featured: true
    },
    {
      title: "Aim and Shoot Game",
      description: "A fun, interactive browser-based shooting game where players aim and click on moving targets to score points. Built with HTML, CSS, and JavaScript.",
      technologies: ["Html", "CSS", "JavaScript"],
      demoUrl: "https://josecabralesdev.github.io/javascript-projects/aim-shoot-game.html",
      githubUrl: "https://github.com/josecabralesdev/javascript-projects/blob/main/aim-shoot-game.html",
    },
    {
      title: "JavaScript Performance Comparison Tool",
      description: "A web-based tool that allows users to compare the execution performance of different JavaScript code snippets in real-time.",
      technologies: ["Html", "CSS", "JavaScript"],
      demoUrl: "https://josecabralesdev.github.io/javascript-projects/js-performance-comparison.html",
      githubUrl: "https://github.com/josecabralesdev/javascript-projects/blob/main/js-performance-comparison.html"
    },
    {
      title: "AI Background Remover with Remove.bg API",
      description: "A web application that removes image backgrounds using artificial intelligence powered by the Remove.bg API. Simply upload an image and get a background-free version in seconds.",
      technologies: ["Html", "CSS", "JavaScript", "Remove.bg API"],
      demoUrl: "https://josecabralesdev.github.io/javascript-projects/ai-background-remover.html",
      githubUrl: "https://github.com/josecabralesdev/javascript-projects/blob/main/ai-background-remover.html",
      featured: true
    },
    {
      title: "Juego del Ahorcado (Hangman Game)",
      description: "A classic Hangman game implemented with HTML, CSS, and JavaScript. This project features a responsive design, interactive gameplay, and a visually appealing interface with a hangman drawing that appears as you make incorrect guesses.",
      technologies: ["Html", "CSS", "JavaScript"],
      demoUrl: "https://josecabralesdev.github.io/javascript-projects/hangman-game.html",
      githubUrl: "https://github.com/josecabralesdev/javascript-projects/blob/main/hangman-game.html"
    },
    {
      title: "MonkeyType - Typing Speed Test",
      description: "A responsive typing speed test application inspired by MonkeyType, built with HTML, CSS, and JavaScript. Test your typing speed and accuracy with real-time feedback.",
      technologies: ["Html", "CSS", "JavaScript"],
      demoUrl: "https://josecabralesdev.github.io/javascript-projects/monkeytype-game.html",
      githubUrl: "https://github.com/josecabralesdev/javascript-projects/blob/main/monkeytype-game.html",
      featured: true
    },
    {
      title: "Rich Text Editor (WYSIWYG)",
      description: "A fully functional, modern rich text editor built with HTML, CSS, and JavaScript. This WYSIWYG (What You See Is What You Get) editor provides essential text formatting tools in a clean, responsive interface.",
      technologies: ["Html", "CSS", "JavaScript"],
      demoUrl: "https://josecabralesdev.github.io/javascript-projects/rich-text-editor.html",
      githubUrl: "https://github.com/josecabralesdev/javascript-projects/blob/main/rich-text-editor.html"
    },
    {
      title: "Snake Game",
      description: "A classic Snake game implementation using HTML, CSS, and JavaScript with a modern, responsive design.",
      technologies: ["Html", "CSS", "JavaScript"],
      demoUrl: "https://josecabralesdev.github.io/javascript-projects/snake-game.html",
      githubUrl: "https://github.com/josecabralesdev/javascript-projects/blob/main/snake-game.html"
    },
    {
      title: "YouTube Video Loader Web Component",
      description: "A high-performance, lightweight web component for loading YouTube videos on demand to improve page performance and user experience.",
      technologies: ["Html", "CSS", "JavaScript"],
      demoUrl: "https://josecabralesdev.github.io/javascript-projects/yt-video-loader-web-component.html",
      githubUrl: "https://github.com/josecabralesdev/javascript-projects/blob/main/yt-video-loader-web-component.html",
      featured: true
    },
    {
      title: "Image Optimizer (Squoosh Clone)",
      description: "A web-based image compression tool that allows you to reduce image file sizes without compromising quality. Built with HTML, CSS, and JavaScript - no server required!",
      technologies: ["Html", "CSS", "JavaScript"],
      demoUrl: "https://josecabralesdev.github.io/javascript-projects/image-optimizer.html",
      githubUrl: "https://github.com/josecabralesdev/javascript-projects/blob/main/image-optimizer.html",
      featured: true
    },
    {
      title: "Trello-like Board (No Dependencies)",
      description: "A fully functional Trello-like board built with pure HTML, CSS, and JavaScript - no external libraries or frameworks required!",
      technologies: ["Html", "CSS", "JavaScript"],
      demoUrl: "https://josecabralesdev.github.io/javascript-projects/trello-clone.html",
      githubUrl: "https://github.com/josecabralesdev/javascript-projects/blob/main/trello-clone.html"
    },
    {
      title: "Voice Recognition App",
      description: "A modern web-based voice recognition application that converts speech to text in real-time using the Web Speech API. This app allows users to speak naturally and see their words transcribed instantly with a beautiful, responsive interface.",
      technologies: ["Html", "CSS", "JavaScript", "Web Speech API"],
      demoUrl: "https://josecabralesdev.github.io/javascript-projects/voice-recognition-app.html",
      githubUrl: "https://github.com/josecabralesdev/javascript-projects/blob/main/voice-recognition-app.html"
    },
    {
      title: "Relative Time Web Component",
      description: "A reusable web component that displays relative time (e.g., '2 minutes ago', '3 days ago') with automatic real-time updates.",
      technologies: ["Html", "CSS", "JavaScript"],
      demoUrl: "https://josecabralesdev.github.io/javascript-projects/relative-time-web-component.html",
      githubUrl: "https://github.com/josecabralesdev/javascript-projects/blob/main/relative-time-web-component.html"
    },
    {
      title: "Bitcoin Portfolio Tracker",
      description: "A responsive web application for tracking your Bitcoin investments with real-time market data visualization.",
      technologies: ["Html", "CSS", "JavaScript", "Bitcoin API"],
      demoUrl: "https://josecabralesdev.github.io/javascript-projects/bitcoin-portfolio-tracker.html",
      githubUrl: "https://github.com/josecabralesdev/javascript-projects/blob/main/bitcoin-portfolio-tracker.html",
      featured: true
    },
    {
      title: "Modern Video Player",
      description: "A sleek, responsive HTML5 video player built with pure HTML, CSS, and JavaScript. This project demonstrates a fully functional video player with all essential controls and a modern UI design.",
      technologies: ["Html", "CSS", "JavaScript"],
      demoUrl: "https://josecabralesdev.github.io/javascript-projects/modern-video-player.html",
      githubUrl: "https://github.com/josecabralesdev/javascript-projects/blob/main/modern-video-player.html"
    },
    {
      title: "🎉 Confetti Celebration Effect",
      description: "A beautiful, interactive confetti celebration effect created with pure HTML, CSS, and JavaScript. Perfect for celebrations, achievements, or just for fun!",
      technologies: ["Html", "CSS", "JavaScript"],
      demoUrl: "https://josecabralesdev.github.io/javascript-projects/confetti-celebration-effect.html",
      githubUrl: "https://github.com/josecabralesdev/javascript-projects/blob/main/confetti-celebration-effect.html",
      featured: true
    },
    {
      title: "Canvas Paint Application",
      description: "A fully functional paint application built with HTML5 Canvas, CSS, and JavaScript. This web-based drawing tool allows users to create digital artwork with various brushes, colors, and tools.",
      technologies: ["Html", "CSS", "JavaScript"],
      demoUrl: "https://josecabralesdev.github.io/javascript-projects/canvas-paint-app.html",
      githubUrl: "https://github.com/josecabralesdev/javascript-projects/blob/main/canvas-paint-app.html"
    },
    {
      title: "Flappy Bird Clone",
      description: "A complete implementation of the classic Flappy Bird game using HTML, CSS, and JavaScript. This project features all the core mechanics of the original game with a modern, responsive design.",
      technologies: ["Html", "CSS", "JavaScript"],
      demoUrl: "https://josecabralesdev.github.io/javascript-projects/flappy-bird-clone.html",
      githubUrl: "https://github.com/josecabralesdev/javascript-projects/blob/main/flappy-bird-clone.html"
    },
    {
      title: "Modern Text Editor",
      description: "A feature-rich, browser-based text editor built with HTML, CSS, and JavaScript. This editor provides a clean, intuitive interface for creating and formatting text documents directly in your browser.",
      technologies: ["Html", "CSS", "JavaScript"],
      demoUrl: "https://josecabralesdev.github.io/javascript-projects/text-editor-app.html",
      githubUrl: "https://github.com/josecabralesdev/javascript-projects/blob/main/text-editor-app.html"
    },
    {
      title: "Weather Forecast App",
      description: "A responsive weather application that displays current weather conditions and a 5-day forecast using data from the WeatherAPI service.",
      technologies: ["Html", "CSS", "JavaScript", "WeatherAPI"],
      demoUrl: "https://josecabralesdev.github.io/javascript-projects/weather-app.html",
      githubUrl: "https://github.com/josecabralesdev/javascript-projects/blob/main/weather-app.html"
    },
    {
      title: "Beautiful Image Slider",
      description: "A responsive, feature-rich image slider built with HTML, CSS, and JavaScript. This slider includes auto-play functionality, manual controls, keyboard navigation, and touch support.",
      technologies: ["Html", "CSS", "JavaScript"],
      demoUrl: "https://josecabralesdev.github.io/javascript-projects/image-slider.html",
      githubUrl: "https://github.com/josecabralesdev/javascript-projects/blob/main/image-slider.html"
    },
    {
      title: "CSS Animation Generator",
      description: "A user-friendly web application that allows you to create and customize CSS animations visually. Generate beautiful animations with just a few clicks and get the CSS code instantly!",
      technologies: ["Html", "CSS", "JavaScript"],
      demoUrl: "https://josecabralesdev.github.io/javascript-projects/css-animation-generator.html",
      githubUrl: "https://github.com/josecabralesdev/javascript-projects/blob/main/css-animation-generator.html"
    },
    {
      title: "📋 Lista de Tareas (To-Do List)",
      description: "Una aplicación de lista de tareas moderna y responsiva creada con HTML, CSS y JavaScript. Permite agregar, completar, eliminar y filtrar tareas con un diseño atractivo y funcionalidad completa.",
      technologies: ["Html", "CSS", "JavaScript"],
      demoUrl: "https://josecabralesdev.github.io/javascript-projects/to-do-list.html",
      githubUrl: "https://github.com/josecabralesdev/javascript-projects/blob/main/to-do-list.html"
    },
    {
      title: "Meme Generator",
      description: "A fun and interactive web application that allows users to create custom memes by uploading images and adding top/bottom text. Built with HTML, CSS, and JavaScript.",
      technologies: ["Html", "CSS", "JavaScript"],
      demoUrl: "https://josecabralesdev.github.io/javascript-projects/meme-generator.html",
      githubUrl: "https://github.com/josecabralesdev/javascript-projects/blob/main/meme-generator.html"
    },
    {
      title: "SVG Graph Creator",
      description: "A modern, interactive graph visualization tool built with pure HTML, CSS, and JavaScript using SVG for rendering. Create beautiful, customizable graphs without any external libraries.",
      technologies: ["Html", "CSS", "JavaScript", "SVG"],
      demoUrl: "https://josecabralesdev.github.io/javascript-projects/svg-graph-creation.html",
      githubUrl: "https://github.com/josecabralesdev/javascript-projects/blob/main/svg-graph-creation.html"
    },
    {
      title: "Rhythm Game - Follow the Beat",
      description: "A colorful, interactive rhythm game where players press keys in time with falling notes to score points. Test your timing skills and try to achieve the highest score possible!",
      technologies: ["Html", "CSS", "JavaScript"],
      demoUrl: "https://josecabralesdev.github.io/javascript-projects/rhythm-game.html",
      githubUrl: "https://github.com/josecabralesdev/javascript-projects/blob/main/rhythm-game.html",
      featured: true
    },
    {
      title: "QR Code Generator",
      description: "A modern, responsive web application that generates QR codes for URLs, text, and other data. Built with HTML, CSS, and JavaScript using the QRCode.js library.",
      technologies: ["Html", "CSS", "JavaScript", "QRCode.js"],
      demoUrl: "https://josecabralesdev.github.io/javascript-projects/qr-code-generator.html",
      githubUrl: "https://github.com/josecabralesdev/javascript-projects/blob/main/qr-code-generator.html",
      featured: true
    },
    {
      title: "Analog Clock Simulator",
      description: "A beautiful and functional analog clock simulator built with HTML, CSS, and JavaScript. This project features a sleek design with smooth animations and accurate timekeeping.",
      technologies: ["Html", "CSS", "JavaScript"],
      demoUrl: "https://josecabralesdev.github.io/javascript-projects/analog-clock-simulator.html",
      githubUrl: "https://github.com/josecabralesdev/javascript-projects/blob/main/analog-clock-simulator.html"
    },
    {
      title: "Rapid Reaction Game",
      description: "A fun and interactive reaction time test game built with HTML, CSS, and JavaScript. Test your reflexes by clicking a button as fast as possible when it turns green!",
      technologies: ["Html", "CSS", "JavaScript"],
      demoUrl: "https://josecabralesdev.github.io/javascript-projects/rapid-reaction-game.html",
      githubUrl: "https://github.com/josecabralesdev/javascript-projects/blob/main/rapid-reaction-game.html"
    },
    {
      title: "IP Address Information Lookup Tool",
      description: "A modern, responsive web application that allows users to look up detailed information about any IP address using the ipapi.co service. The tool displays network information, geolocation data, and an interactive map showing the IP's location.",
      technologies: ["Html", "CSS", "JavaScript", "ipapi.co"],
      demoUrl: "https://josecabralesdev.github.io/javascript-projects/ip-address-information.html",
      githubUrl: "https://github.com/josecabralesdev/javascript-projects/blob/main/ip-address-information.html"
    },
    {
      title: "Excel.js - Browser-Based Spreadsheet Application",
      description: "Excel.js is a lightweight, browser-based spreadsheet application built with HTML, CSS, and JavaScript. It provides core spreadsheet functionality including cell editing, formula evaluation, and basic calculations - all running directly in your web browser with no server required.",
      technologies: ["Html", "CSS", "JavaScript"],
      demoUrl: "https://josecabralesdev.github.io/javascript-projects/excel-js-browser-based.html",
      githubUrl: "https://github.com/josecabralesdev/javascript-projects/blob/main/excel-js-browser-based.html",
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
            <span className="text-primary font-medium text-sm">My Work</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-js-accent to-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Here's a selection of my recent work, showcasing different aspects of modern web development
            and creative problem-solving with JavaScript.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-slide-up">
          <p className="text-lg text-muted-foreground mb-6">
            Want to see more? Check out my GitHub for additional projects and contributions.
          </p>

          <a
            href="https://github.com/josecabralesdev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-secondary hover:bg-secondary/80 
                     border border-primary/30 hover:border-primary rounded-lg
                     text-foreground font-semibold transition-all duration-300 hover:shadow-glow"
          >
            <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            Visit GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;