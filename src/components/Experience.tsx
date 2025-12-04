import React from 'react';
import { Briefcase } from 'lucide-react';
import SectionTitle from './SectionTitle';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Walgreens Boots Alliance",
      location: "Deerfield, IL",
      period: "June 2025 - Present",
      description: [
        "Build and maintain UI automation for DSCSA workflows using Selenium WebDriver (Java) with Cucumber BDD and Page Object Model architecture.",
        "Perform backend validation using SQL, Cosmos DB queries, API logs, and event payload inspection to ensure correct TI/TS/TH processing.",
        "Develop REST Assured API automation validating EPCIS events, trace requests, product verification endpoints, and DSCSA microservices.",
        "Integrate and execute automation suites in Azure DevOps CI/CD pipelines, debugging failures at service, API, and UI layers.",
        "Perform root-cause analysis on failed builds by inspecting API payloads, service logs, and pipeline outputs to ensure framework stability."
      ],
      skills: ["Java", "Selenium", "BDD", "TestNG", "Gherkin", "Cucumber"]
    },
    {
      title: "Graduate Teaching Assistant",
      company: "Northern Illinois University, Computer Science",
      location: "DeKalb, IL",
      period: "Aug 2024 - May 2025",
      description: [
        "Supported instruction for a class of 80+ students, covering UNIX system usage, shell scripting, and network programming fundamentals in C++.",
        "Led 15+ lab sessions, helping students implement system-level programming concepts including file permissions, process control, and system calls.",
        "Reviewed and provided feedback on 100+ weekly code submissions, ensuring performance, correctness, and adherence to coding standards.",
        "Assisted with 10 hands-on assignments involving TCP/UDP socket programming, bash scripting, and simulated file system utilities.",
        "Conducted 50+ individual mentoring sessions, clarifying multithreading, memory management, and C++-based client-server architecture."
      ],
      skills: ["UNIX", "C++", "Shell Scripting", "Networking", "Teaching", "Mentoring"]
    },
    {
      title: "Machine Learning Engineer",
      company: "Samsung Prism",
      location: "India",
      period: "Jul 2021 - Mar 2022",
      description: [
        "Contributed to the development of a real-time image processing system to generate HDR frames from single-exposure LDR images, improving detail accuracy by 35%.",
        "Engineered a custom fusion pipeline that synthetically generated 3–5 multi-exposure LDR frames per input image.",
        "Integrated and compared Reinhard, Mantiuk, and Drago tone mapping algorithms, achieving 20% enhancement in visual fidelity metrics (PSNR, SSIM).",
        "Ran over 1,000 test cases across varied lighting conditions to validate algorithm robustness and consistency.",
        "Collaborated in a research-driven environment, contributing to presenting findings to a panel of 5+ domain experts."
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
