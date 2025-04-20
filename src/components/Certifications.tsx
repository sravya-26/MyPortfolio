import React from 'react';
import { Award } from 'lucide-react';
import SectionTitle from './SectionTitle';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: "Google Cloud Certified Associate Cloud Engineer",
      issuer: "Google Cloud",
      date: "Aug 2022",
      description: "Validates the ability to deploy applications, monitor operations, and maintain cloud projects on Google Cloud Platform",
      link: "https://www.credential.net/2d278bc5-9bff-4f92-81a3-06157f0bc8ff#acc.E0L5AXNP",
      //image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg",
      //image: "public/gcp.png",
      image: "public/Google.png",
      badgeColor: "blue"
    },
    {
      title: "AZ400: Designing and Implementing Microsoft DevOps Solution",
      issuer: "Microsoft",
      date: "Aug 2022",
      description: "Demonstrates expertise in implementing DevOps practices, automating infrastructure and deployments, and implementing application infrastructure",
      link: "https://www.credly.com/badges/c52b415a-03bb-496e-9a75-745a5b681a71/",
      //image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg",
      image: "public/Microsoft.png",
      badgeColor: "indigo"
    },
    {
      title: "ServiceNow Certified System Administrator",
      issuer: "ServiceNow",
      date: "Oct 2022",
      description: "Confirms knowledge of ServiceNow platform functionality and foundational processes for managing service management applications",
      link: "https://drive.google.com/file/d/1EO_JH3CUBusEkHA4fqsR5M7lqDgsunUL/view?usp=drive_link",
      image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg",
      //image: "public/ServiceNow.png",
      badgeColor: "green"
    },
    {
      title: "Aviatrix Certified Engineer - Multicloud Network Associate",
      issuer: "Aviatrix",
      date: "Nov 2022",
      description: "Validates knowledge of multicloud networking architecture, capabilities, and operational best practices",
      link: "https://www.credly.com/badges/7fad3665-5153-4993-9cb2-8fc8c28a4255",
      //image: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg",
      image: "public/Aviatrix.png",
      badgeColor: "purple"
    },
    {
      title: "Certified Network Security Practitioner (CNSP)",
      issuer: "Network Security Institute",
      date: "Jan 2025",
      description: "Demonstrates knowledge of network security principles, tools, and best practices for protecting organizational infrastructure",
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg",
      link: "https://drive.google.com/file/d/176hjpSwwVZa3is5BAUY8drxOXEkzfolY/view?usp=sharing",
      //image: "public/CNSP.png",
      badgeColor: "red"
    },
  ];

  const getBadgeClasses = (color: string) => {
    const baseClasses = "absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium";
    
    switch (color) {
      case "blue":
        return `${baseClasses} bg-blue-100 text-blue-700`;
      case "indigo":
        return `${baseClasses} bg-indigo-100 text-indigo-700`;
      case "green":
        return `${baseClasses} bg-green-100 text-green-700`;
      case "purple":
        return `${baseClasses} bg-purple-100 text-purple-700`;
      case "red":
        return `${baseClasses} bg-red-100 text-red-700`;
      default:
        return `${baseClasses} bg-gray-100 text-gray-700`;
    }
  };

  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Certifications" 
          subtitle="Professional qualifications"
          icon={<Award className="text-indigo-600" size={28} />}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="relative h-48">
                <img 
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-60"></div>
                <span className={getBadgeClasses(cert.badgeColor)}>{cert.date}</span>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{cert.title}</h3>
                <p className="text-indigo-600 text-sm font-medium mb-4">Issued by {cert.issuer}</p>
                <p className="text-gray-600 text-sm">{cert.description}</p>
                
                {/* Verify Button - Note: This could link to credential verification */}
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 w-full py-2 border border-indigo-600 text-indigo-600 rounded hover:bg-indigo-50 transition-colors text-sm font-medium flex items-center justify-center"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 mr-2" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" 
                    />
                  </svg>
                  Verify Credential
                </a>

              </div>
            </div>
          ))}
        </div>
        
        {/* Volunteer Experience */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Volunteer Experience</h3>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/4 mb-4 md:mb-0">
                <h4 className="font-semibold text-gray-800">Social Media Manager</h4>
                <p className="text-indigo-600">Indian Student Association</p>
                <p className="text-gray-600 text-sm">Jan 2024 - Dec 2024</p>
              </div>
              
              <div className="md:w-3/4 md:pl-8 md:border-l md:border-gray-200">
                <p className="text-gray-600 mb-4">
                  Developed and executed social media strategies to enhance engagement, promote events, and foster community within the student body.
                </p>
                <p className="text-gray-600">
                  Designed and scheduled content across multiple platforms, collaborated with different student organizations to amplify outreach, and played a key role in increasing student participation in cultural events.
                </p>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {["Social Media Management", "Event Promotion", "Community Building", "Content Creation", "Collaboration"].map((skill, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;