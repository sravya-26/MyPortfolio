import React, { useState } from 'react';
import { FolderOpen, ExternalLink, Github } from 'lucide-react';
import SectionTitle from './SectionTitle';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      title: "Fetch Dog Match",
      description: "An interactive web application that helps users find their perfect dog match based on preferences and compatibility factors. The project showcases frontend development skills and API integration.",
      category: "web-development",
      image: "https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg",
      technologies: ["React.js", "JavaScript", "API Integration", "UI Design"],
      demoLink: "https://fetch-dog-match.vercel.app/",
      codeLink: "https://github.com/sravya-26/fetch-dog-match",
      date: "April 2025"
    },
    {
      title: "Breast Cancer Detection Using Deep Learning Models",
      description: "Implemented ResNet18 and Vision Transformers (ViTs) for breast cancer detection in medical images. Used data augmentation techniques to address class imbalance and achieved high accuracy with comprehensive evaluation metrics.",
      category: "machine-learning",
      image: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg",
      technologies: ["Python", "ResNet18", "Vision Transformers", "Data Augmentation"],
      demoLink: "",
      codeLink: "https://github.com/sravya-26/Breast-Cancer-Detection-Project",
      date: "Sep 2024 - Dec 2024"
    },
    {
      title: "Campus Placement Training and Recruitment Management System",
      description: "Developed a RESTful web service using Django to manage campus placements. Implemented data transfer with JSON format, utilized Django REST framework for API endpoints, and integrated with MySQL database.",
      category: "web-development",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
      technologies: ["Python", "Django", "REST API", "MySQL"],
      demoLink: "",
      codeLink: "",
      date: "Jan 2024 - Apr 2024"
    },
    {
      title: "Video HDR & Efficient Fusion of Synthetically Generated Multi-Exposure LDR Frames",
      description: "Developed a novel image enhancement technique that generates an HDR image from a single LDR image by synthetically generating and fusing multiple exposure frames. Applied tone mapping algorithms for display-friendly formats.",
      category: "image-processing",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
      technologies: ["Image Enhancement", "HDR Imaging", "Multi-Exposure Fusion", "Tone Mapping"],
      demoLink: "",
      codeLink: "",
      date: "Jul 2021 - Mar 2022"
    },
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="My Projects" 
          subtitle="Some of my recent work"
          icon={<FolderOpen className="text-indigo-600" size={28} />}
        />
        
        {/* Project Filters */}
        <div className="flex flex-wrap justify-center gap-4 mt-12 mb-8">
          {['all', 'web-development', 'machine-learning', 'image-processing'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === filter
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-52 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-60"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-xs font-medium px-3 py-1 bg-indigo-600 text-white rounded-full">
                    {project.date}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors text-sm font-medium"
                    >
                      <ExternalLink size={16} className="mr-1" /> Live Demo
                    </a>
                  )}
                  
                  {project.codeLink && (
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium"
                    >
                      <Github size={16} className="mr-1" /> View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* More Projects CTA */}
        <div className="text-center mt-16">
          <a
            href="https://github.com/sravya-26"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <Github size={20} className="mr-2" />
            See More Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;