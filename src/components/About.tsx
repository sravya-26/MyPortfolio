import React from 'react';
import { User } from 'lucide-react';
import SectionTitle from './SectionTitle';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="About Me" 
          subtitle="Get to know me better"
          icon={<User className="text-indigo-600" size={28} />}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
          {/* Personal Info */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Who I Am</h3>
            <p className="text-gray-600 mb-4">
              My journey began in India, where I built a strong foundation in Computer Science and Engineering during my bachelor’s degree, graduating with a GPA of 9.3/10. That passion for technology brought me to the United States, where I completed my Master’s in Computer Science at Northern Illinois University with a GPA of 3.87/4, focusing on software development engineering.
            </p>
            <p className="text-gray-600 mb-4">
              Today, I’m a Software Engineer at Walgreens, contributing to large-scale, high-impact systems within the Pharmacy Technology domain. With hands-on experience in building, testing, and improving software solutions, I thrive in fast-paced, collaborative environments where I can solve real-world problems through clean code, automation, and thoughtful engineering.
            </p>
            <p className="text-gray-600">
              Driven by curiosity and a commitment to continuous growth, I’m dedicated to creating reliable, efficient, and scalable software while always staying excited about exploring emerging technologies and pushing my technical boundaries.
            </p>
          </div>
          
          {/* Why Work With Me */}
          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Why Work With Me</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mr-4 flex-shrink-0">
                  <span className="font-semibold">01</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Technical Expertise</h4>
                  <p className="text-gray-600">Proficient in multiple programming languages and frameworks, including Python, Java, and React.js.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mr-4 flex-shrink-0">
                  <span className="font-semibold">02</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Problem-Solving Skills</h4>
                  <p className="text-gray-600">Strong analytical thinking with the ability to tackle complex challenges efficiently.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mr-4 flex-shrink-0">
                  <span className="font-semibold">03</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Continuous Learning</h4>
                  <p className="text-gray-600">Committed to staying updated with emerging technologies and industry best practices.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mr-4 flex-shrink-0">
                  <span className="font-semibold">04</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Collaborative Mindset</h4>
                  <p className="text-gray-600">Experience working in team environments with excellent communication skills.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Personal Interests */}
        <div className="mt-16 bg-gray-50 p-8 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Beyond Academics</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h4 className="font-medium text-gray-800 mb-2">Personal Projects</h4>
              <p className="text-gray-600"> I love working on side projects that challenge me to try new frameworks or APIs; anything that keeps learning fun and hands-on.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h4 className="font-medium text-gray-800 mb-2">Work-Life Balance</h4>
              <p className="text-gray-600">When I’m not coding, you’ll find me at the gym, dancing, walking in nature, or vibing to music. All these keep me energized and creative.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h4 className="font-medium text-gray-800 mb-2">Creative Exploration</h4>
              <p className="text-gray-600">I enjoy blending tech with creativity. Whether it's designing clean UI layouts, editing videos, or experimenting with aesthetic portfolio designs.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
