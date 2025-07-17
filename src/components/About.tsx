import React from 'react';
import { Code, Palette, Zap, Award, Download } from 'lucide-react';
import SkillCard from './SkillCard';

const About: React.FC = () => {
  const technicalSkills = [
    { name: 'React.js', level: 90, color: 'from-blue-500 to-cyan-500' },
    { name: 'C#', level: 88, color: 'from-purple-500 to-indigo-500' },
    { name: 'TailwindCSS', level: 90, color: 'from-teal-500 to-blue-500' },
    { name: 'JavaScript (ES6+)', level: 92, color: 'from-yellow-500 to-orange-500' },
    { name: 'HTML5', level: 95, color: 'from-orange-500 to-red-500' },
    { name: 'CSS3', level: 95, color: 'from-blue-500 to-purple-500' },
  ];

  const toolsSkills = [
    { name: 'Adobe Photoshop', level: 95, color: 'from-blue-600 to-cyan-600' },
    { name: 'Adobe Illustrator', level: 90, color: 'from-orange-600 to-yellow-600' },
    { name: 'Microsoft Word', level: 98, color: 'from-blue-600 to-blue-700' },
    { name: 'Microsoft Excel', level: 95, color: 'from-green-600 to-green-700' },
    { name: 'Microsoft PowerPoint', level: 100, color: 'from-orange-600 to-red-600' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          I’m a developer and designer who loves building digital experiences that actually make a difference.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">My Journey</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              I'm a frontend developer and graphic designer with over 2 years of experience. I love creating websites and visuals that not only look great but are easy for people to use. I got into this field because I’ve always been curious about how design and tech can come together to make life easier and solve real problems.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                I focus on building websites with React.js and other modern web tools, always paying close attention to design and how users experience things. When I’m not coding, I enjoy checking out new design trends, helping out with open-source projects, or supporting new developers who are just getting started.

              </p>
              
            </div>

            {/* Resume Download */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Ready to work together?</h3>
              <p className="mb-6 opacity-90">
                Download my resume to learn more about my experience and qualifications.
              </p>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2">
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </button>
            </div>
          </div>

          {/* Skills Section */}
          <div id="skills" className="space-y-8">
            <SkillCard
              title="Technical Skills"
              icon={<Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />}
              skills={technicalSkills}
            />
            <SkillCard
              title="Tools & Software"
              icon={<Palette className="w-6 h-6 text-purple-600 dark:text-purple-400" />}
              skills={toolsSkills}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;