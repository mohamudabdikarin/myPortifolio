import React, { useState, useEffect } from 'react';
import { ChevronDown, Download, ExternalLink } from 'lucide-react';
import { useLoading } from '../contexts/LoadingContext';
import profileImage from '../assets/profile.png';

const Hero: React.FC = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const { isLoading } = useLoading();
  const roles = ['Frontend Developer', 'Graphic Designer'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (isLoading) return null;

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-emerald-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20"></div>
      

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Content - Text */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Animated Text Carousel */}
            <div className="mb-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Mohamud Abdikarin</span>
              </h1>
              <div className="h-12 md:h-16 flex items-center justify-center lg:justify-start">
                <span className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-600 dark:text-gray-300">
                  I'm a{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600 animate-pulse">
                    {roles[currentRole]}
                  </span>
                </span>
              </div>
            </div>

            {/* Tagline */}
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Passionate about creating beautiful, functional web applications and stunning visual designs. 
              Let's build something amazing together.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <button
                onClick={() => scrollToSection('projects')}
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center space-x-2 shadow-lg"
              >
                <span>View My Work</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="group px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400 dark:hover:border-blue-400 hover:shadow-lg transform hover:-translate-y-1 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center space-x-2"
              >
                <Download className="w-4 h-4 group-hover:animate-bounce" />
                <span>Download Resume</span>
              </button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              
              {/* Main Profile Container */}
              <div className="relative">
                <div className="w-80 h-80 md:w-96 md:h-96 relative">
                  {/* Animated Border */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-emerald-500 rounded-3xl "></div>
                  <div className="absolute inset-2 bg-white dark:bg-gray-900 rounded-3xl"></div>
                  
                  {/* Image Container */}
                  <div className="absolute inset-4 bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={profileImage}
                      alt="Alex Johnson - Frontend Developer & Graphic Designer"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  
                  {/* Status Indicator */}
                  <div className="absolute top-4 right-4 w-6 h-6 bg-green-500 rounded-full border-4 border-white dark:border-gray-900 animate-pulse shadow-lg"></div>
                  
                  {/* Floating Skills Tags */}
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 px-3 py-1 rounded-full shadow-lg border border-gray-200 dark:border-gray-700">
                    <span className="text-xs font-medium text-blue-600 dark:text-blue-400">Graphic Designer</span>
                  </div>
                  <div className="absolute bottom-4 -left-4 bg-white dark:bg-gray-800 px-3 py-1 rounded-full shadow-lg border border-gray-200 dark:border-gray-700">
                    <span className="text-xs font-medium text-purple-600 dark:text-purple-400">UI/UX Designer</span>
                  </div>
                  <div className="absolute top-1/3 -right-6 bg-white dark:bg-gray-800 px-3 py-1 rounded-full shadow-lg border border-gray-200 dark:border-gray-700">
                    <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">Frontend Dev</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection('about')}
          className="group text-gray-400 dark:text-gray-600 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
        >
          <ChevronDown className="w-6 h-6 group-hover:animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default Hero;