import React from 'react';
import { Github, Facebook, Phone, MessageCircle, Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Alex Johnson
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Frontend Developer & Graphic Designer passionate about creating beautiful, 
              functional digital experiences that make a difference.
            </p>
       
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {[
                { name: 'Home', id: 'home' },
                { name: 'About', id: 'about' },
                { name: 'Skills', id: 'skills' },
                { name: 'Projects', id: 'projects' },
                { name: 'Contact', id: 'contact' },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    const element = document.getElementById(link.id);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Connect Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Let's Connect</h4>
            <p className="text-gray-300 text-sm">
              Ready to work together? Get in touch and let's create something amazing!
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/mohamudabdikarin/mohamud"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors"
              >
                <Github className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
              <a
                href="https://www.facebook.com/mohamud2724/"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-gray-800 hover:bg-blue-600 rounded-full transition-colors"
              >
                <Facebook className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
              <a
                href="https://wa.me/252615962724"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-gray-800 hover:bg-green-600 rounded-full transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
              <a
                href="tel:+252615962724"
                className="group p-3 bg-gray-800 hover:bg-purple-600 rounded-full transition-colors"
              >
                <Phone className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Alex Johnson. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Terms of Service
            </a>
            <button
              onClick={scrollToTop}
              className="group p-2 bg-gray-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 rounded-full transition-all duration-300"
            >
              <ArrowUp className="w-4 h-4 text-gray-400 group-hover:text-white" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;