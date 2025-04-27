import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, ExternalLink, Download } from 'lucide-react';
// import VisitorCounter from './VisitorCounter';


const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { width, height, left, top } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      heroRef.current.style.setProperty('--mouse-x', `${x}`);
      heroRef.current.style.setProperty('--mouse-y', `${y}`);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen overflow-hidden bg-cover bg-center bg-no-repeat flex items-center"
      style={{
        '--mouse-x': '0.5',
        '--mouse-y': '0.5',
        backgroundImage: "linear-gradient(to bottom right, #eef2ff, #dbeafe), url('/wp.png')"
      } as React.CSSProperties}
    >

  {/* 🔧 Background Overlay (DO NOT cover content) */}
  <div className="absolute inset-0 bg-white opacity-70 z-0 pointer-events-none"></div>

  {/* ✅ Main content (z-10 to stay above) */}
  <div className="container mx-auto px-6 py-24 md:py-32 flex flex-col md:flex-row items-center z-10">
    {/* ✨ Left Content */}
    <div className="md:w-3/5 md:pr-8 md:order-1 order-2 animate-fade-in-up">
      <p className="text-indigo-600 font-medium mb-2">Hello, I'm</p>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
        Sravya Koyi
      </h1>
      <h2 className="text-xl md:text-2xl text-gray-700 font-medium mb-6">
        Aspiring Software Engineer
      </h2>
      <p className="text-gray-600 mb-8 max-w-lg">
        I'm a Computer Science graduate from Northern Illinois University, passionate about 
        building efficient software solutions and exploring emerging technologies.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4">

            {/* <a 
              href="/Sravya Koyi Resume.pdf" 
              download="Sravya Koyi Resume"
              className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 flex items-center gap-2"
            >
              <Download size={20} />
              Download Resume
            </a> */}

            <a 
              href="#projects" 
              className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              View My Work
            </a>
            
            <a 
              href="#contact" 
              className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Contact Me
            </a>

            {/* <VisitorCounter />  */}
          </div>

      {/* Socials */}
      <div className="flex space-x-4 mt-8">
        <a 
          href="https://www.linkedin.com/in/sravyakoyi/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-indigo-600 transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin size={24} />
        </a>
        <a 
          href="https://github.com/sravya-26" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-indigo-600 transition-colors"
          aria-label="GitHub"
        >
          <Github size={24} />
        </a>
        <a 
          href="https://fetch-dog-match.vercel.app/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-indigo-600 transition-colors"
          aria-label="Project"
        >
          <ExternalLink size={24} />
        </a>
      </div>
    </div>

    {/* Profile Image */}
    <div className="md:w-2/5 mb-8 md:mb-0 md:order-2 order-1 flex justify-center">
      <div className="relative transform hover:scale-105 transition-transform duration-300">
        <div className="absolute inset-0 bg-indigo-500 rounded-full opacity-10 blur-lg scale-110"></div>
        <div className="rounded-full overflow-hidden border-4 border-white shadow-xl w-80 h-80 md:w-100 md:h-100 relative">
          <img 
            src="/Sravya Koyi.jpg" 
            alt="Sravya Koyi" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </div>

  {/* Scroll Down */}
  <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10">
    <span className="text-sm text-gray-500 mb-2">Scroll Down</span>
    <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-1">
      <div className="w-1 h-2 bg-gray-400 rounded-full animate-scroll-down"></div>
    </div>
  </div>
</section>

  );
};

export default Hero;
