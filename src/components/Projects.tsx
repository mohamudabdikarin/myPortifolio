import React, { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';
import ProjectCard from './ProjectCard';
// import schoolManagement from '../assets/school.png';
import hotelManagement from '../assets/hotelflow.png';
import restaurant from '../assets/resturant.png';
const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Restaurant website',
      description: 'A website for a restaurant that allows customers to view the menu, make reservations, and order food online.',
      image: restaurant,
      technologies: ['React.js', 'Tailwindcss'],
      liveLink: 'https://amal-show-5xuk9c0jt-mohamuds-projects-59b102b1.vercel.app/',
      githubLink: 'https://github.com/mohamudabdikarin/amal_show',
      category: 'web',
      featured: true
    },
    {
      id: 2,
      title: 'E-learning Platform',
      description: 'Modern e-learning platform with video streaming, interactive quizzes, progress tracking, and real-time collaboration features.',
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React.js', 'Firebase', 'WebRTC', 'Stripe', 'Material-UI'],
      liveLink: 'https://example-elearning.vercel.app',
      githubLink: 'https://github.com/yourusername/elearning-platform',
      category: 'web',
      featured: true
    },
    {
      id: 3,
      title: 'Hotel system',
      description: 'A website for a hotel that allows customers to view the rooms, make reservations, and order food online.',
      image: hotelManagement,
      technologies: ['ReactJs', 'Tailwindcss'],
      liveLink: 'https://hotelflow2025.vercel.app/login',
      githubLink: 'https://github.com/mohamudabdikarin/hotelflow2025',
      category: 'web',
      featured: true
    }
  ];

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and creativity
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              <Filter className="w-4 h-4" />
              <span>{filter.name}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Additional Projects CTA */}
        {/* <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Want to see more?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Check out my GitHub profile for more projects and open-source contributions
            </p>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
            >
              <Github className="w-5 h-5" />
              <span>View GitHub Profile</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;