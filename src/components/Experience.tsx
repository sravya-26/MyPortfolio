import React from 'react';
import { Briefcase } from 'lucide-react';
import SectionTitle from './SectionTitle';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Graduate Teaching Assistant",
      company: "Northern Illinois University, Computer Science",
      location: "DeKalb, IL",
      period: "Aug 2024 - May 2025",
      description: [
        "Assisted in guiding students in UNIX system usage, shell script programming, and network programming in C++",
        "Provided support during laboratory sessions focused on system-level C++ programming and networking",
        "Evaluated assignments and exams on file access, permissions, and basic UNIX administration",
        "Conducted office hours to address student questions on bash scripting, C++ network programming, and system call-level operations in UNIX"
      ],
      skills: ["UNIX", "C++", "Shell Scripting", "Networking", "Teaching", "Mentoring"]
    },
    {
      title: "Intern",
      company: "Samsung Prism",
      location: "India",
      period: "Jul 2021 - Mar 2022",
      description: [
        "Contributed to a real-time project titled \"Video HDR & Efficient Fusion of Synthetically Generated Multi-Exposure LDR Frames\"",
        "Developed a novel image enhancement technique that generates an HDR image from a single LDR image by synthetically generating and fusing multiple exposure frames",
        "Applied tone mapping algorithms (Reinhard, Mantiuk, and Drago's) to transform HDR images into display-friendly formats",
        "Conducted extensive testing and experimentation to optimize the algorithm, resulting in successful generation of HDR images with improved accuracy and quality"
      ],
      skills: ["Image Processing", "Algorithm Development", "HDR Imaging", "Research", "Testing"]
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Work Experience" 
          subtitle="My professional journey"
          icon={<Briefcase className="text-indigo-600" size={28} />}
        />
        
        <div className="mt-16 relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-indigo-100"></div>
          
          {/* Experience Items */}
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className={`relative md:flex items-center mb-16 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Dot */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-indigo-600 border-4 border-white shadow-sm"></div>
              
              {/* Content */}
              <div className="md:w-1/2 p-0 md:px-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold text-gray-800">{exp.title}</h3>
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm rounded-full mt-2 md:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-gray-700 font-medium">{exp.company}</p>
                    <p className="text-gray-500 text-sm">{exp.location}</p>
                  </div>
                  
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <span className="text-indigo-600 mr-2">•</span>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Empty Div for Spacing on Alternate Side */}
              <div className="hidden md:block md:w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;