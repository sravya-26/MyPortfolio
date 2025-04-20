import React from 'react';
import { GraduationCap } from 'lucide-react';
import SectionTitle from './SectionTitle';

const Education: React.FC = () => {
  const educationItems = [
    {
      degree: "Master of Science, Computer Science",
      institution: "Northern Illinois University",
      location: "DeKalb, IL",
      period: "Aug 2023 - May 2025",
      gpa: "GPA: 3.85/4",
      description: "Focused on advanced areas including machine learning, data structures, algorithms, and software development methodologies.",
      courses: ["Advanced Algorithms", "Machine Learning", "Database Systems", "Network Security", "Distributed Systems"]
    },
    {
      degree: "Bachelor of Technology, Computer Science and Engineering",
      institution: "Koneru Lakshmaiah Education Foundation (KLEF)",
      location: "India",
      period: "Jul 2019 - Mar 2023",
      gpa: "GPA: 9.3/10",
      description: "Built a strong foundation in computer science fundamentals, programming, and software engineering principles.",
      courses: ["Data Structures & Algorithms", "Operating Systems", "Database Management", "Computer Networks", "Web Technologies"]
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Education" 
          subtitle="My academic background"
          icon={<GraduationCap className="text-indigo-600" size={28} />}
        />
        
        <div className="mt-16 relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-indigo-100 hidden md:block"></div>
          
          {/* Education Items */}
          {educationItems.map((item, index) => (
            <div 
              key={index} 
              className="relative md:flex md:items-center mb-16"
            >
              {/* Timeline Marker */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 rounded-full bg-indigo-600 border-4 border-white shadow-sm hidden md:block"></div>
              
              {/* Content */}
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:ml-auto' : 'md:pl-12'}`}>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative ml-8 md:ml-0">
                  {/* Mobile Timeline Connector */}
                  <div className="absolute w-8 h-0.5 bg-indigo-100 left-0 top-10 transform -translate-x-full md:hidden"></div>
                  <div className="absolute w-3 h-3 rounded-full bg-indigo-600 left-0 top-10 transform -translate-x-1.5 md:hidden"></div>
                  
                  <div className="flex flex-wrap justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{item.degree}</h3>
                      <p className="text-gray-700">{item.institution}</p>
                      <p className="text-gray-500 text-sm">{item.location}</p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <span className="block px-3 py-1 bg-indigo-100 text-indigo-700 text-sm rounded-full mb-2">
                        {item.period}
                      </span>
                      <span className="block px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full text-center">
                        {item.gpa}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Relevant Coursework:</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.courses.map((course, courseIndex) => (
                        <span 
                          key={courseIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Honors and Awards */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Honors & Awards</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-lg shadow-sm">
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">ComEd Future of Energy Scholarship</h4>
                  <p className="text-gray-600 text-sm mb-2">Spring 2025</p>
                  <p className="text-gray-600">Recipient of the prestigious ComEd Future of Energy Scholarship in recognition of academic excellence and commitment to innovation.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg shadow-sm">
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Tuition Waiver</h4>
                  <p className="text-gray-600 text-sm mb-2">NIU, Fall 2024 - Spring 2025</p>
                  <p className="text-gray-600">Awarded a Tuition Waiver for the final 2 semesters of the master's program based on academic performance.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-lg shadow-sm">
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Recruitment Tuition Waiver</h4>
                  <p className="text-gray-600 text-sm mb-2">NIU, Fall 2023 - Spring 2024</p>
                  <p className="text-gray-600">Received Recruitment Tuition Waiver in the first 2 semesters of the master's program.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-lg shadow-sm">
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Merit Scholarship</h4>
                  <p className="text-gray-600 text-sm mb-2">KLEF, 2019 - 2023</p>
                  <p className="text-gray-600">Recipient of Merit Scholarship for 4 years during bachelor's degree for outstanding academic performance.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-lg shadow-sm">
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Merit Scholorship</h4>
                  <p className="text-gray-600 text-sm mb-2"> June 2017 - May 2019</p>
                  <p className="text-gray-600">Awarded a full tuition fee waiver for outstanding academic performance in Grades 11 and 12 at Sri Chaitanya.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;