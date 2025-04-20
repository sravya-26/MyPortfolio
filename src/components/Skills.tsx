import React from 'react';
import { Code } from 'lucide-react';
import SectionTitle from './SectionTitle';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", level: 75 },
        { name: "Python", level: 70 },
        { name: "C", level: 75 },
        { name: "JavaScript", level: 70 },
      ]
    },
    {
      title: "Web Technologies",
      skills: [
        { name: "HTML5", level: 80 },
        { name: "CSS3", level: 80 },
        { name: "React.js", level: 75 },
        { name: "Django", level: 75 },
        { name: "Flask", level: 70 },
        { name: "Spring Boot", level: 80 },
      ]
    },
    {
      title: "Database Management",
      skills: [
        { name: "MySQL", level: 85 },
        { name: "MongoDB", level: 75 },
        { name: "SQLite", level: 80 },
        { name: "Oracle", level: 70 },
      ]
    },
    {
      title: "Development Tools",
      skills: [
        { name: "Git", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "Eclipse", level: 75 },
        { name: "Jupyter", level: 80 },
        { name: "PyCharm", level: 75 },
      ]
    },
    {
      title: "Cloud Platforms",
      skills: [
        { name: "AWS", level: 75 },
        { name: "Google Cloud Platform", level: 70 },
      ]
    },
    {
      title: "Data Science",
      skills: [
        { name: "Numpy", level: 80 },
        { name: "SciPy", level: 75 },
        { name: "Scikit-learn", level: 75 },
        { name: "Matplotlib", level: 80 },
      ]
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Technical Skills" 
          subtitle="What I can do"
          icon={<Code className="text-indigo-600" size={28} />}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-6">{category.title}</h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700">{skill.name}</span>
                      <span className="text-gray-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-indigo-600 h-2.5 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Skills */}
        <div className="mt-16 bg-white p-8 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Other Skills & Competencies</h3>
          
          <div className="flex flex-wrap gap-3">
            {[
              "Problem Solving", "Analytical Thinking", "Team Collaboration", 
              "Technical Documentation", "Agile Methodology", "RESTful APIs",
              "UI/UX Design Principles", "Data Structures", "Algorithms",
              "System Design", "Object-Oriented Programming", "Test-Driven Development",
              "Continuous Integration", "Code Review", "Pair Programming"
            ].map((skill, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;