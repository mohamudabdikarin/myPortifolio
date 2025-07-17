import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, Users, Star } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast'; // <-- Add this import

const Contact: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitError, setSubmitError] = useState('');

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters long';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // EmailJS configuration
      const templateParams = {
        name: formData.name,
        email: formData.email,
        title: formData.subject,
        message: formData.message
      };

      // Send email using EmailJS
      await emailjs.send(
        'service_lan5bdf', // <-- Replace with your EmailJS service ID
        'template_tarl8pr', // <-- Replace with your EmailJS template ID
        templateParams,
        'CCUG9DwBQg9urQ8C_' // <-- Replace with your EmailJS public key
      );

      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      toast.success('Message sent successfully!'); // <-- Show toast
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      setIsSubmitting(false);
      setSubmitError('Failed to send message. Please try again or contact me directly.');
      toast.error('Failed to send message.'); // <-- Show error toast
      console.error('EmailJS Error:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-white" />,
      title: 'Email',
      value: 'maxamuud632@gmail.com',
      link: 'mailto:maxamuud632@gmail.com',
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      icon: <Phone className="w-6 h-6 text-white" />,
      title: 'Phone',
      value: '+252615962724',
      link: 'tel:+252615962724',
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      icon: <MapPin className="w-6 h-6 text-white" />,
      title: 'Location',
      value: 'Banadir, Mogadishu',
      link: '',
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  const stats = [
    {
      icon: <Clock className="w-6 h-6" />,
      value: '< 24h',
      label: 'Response Time',
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      icon: <Users className="w-6 h-6" />,
      value: '50+',
      label: 'Happy Clients',
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      icon: <Star className="w-6 h-6" />,
      value: '100%',
      label: 'Satisfaction',
      gradient: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <>
      <Toaster position="top-center" /> {/* Add Toaster for toast notifications */}
    <section ref={ref} id="contact" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 dark:bg-blue-800 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-200 dark:bg-purple-800 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-30 animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's collaborate and create something amazing together. 
            I'm always excited to discuss new projects and opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className={`space-y-8 transition-all duration-1000 delay-200 ${
            inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Let's Start a Conversation
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                I'm passionate about creating beautiful, functional web applications and stunning visual designs. 
                Whether you need a complete website overhaul, a custom web application, or creative design work, 
                I'm here to help bring your vision to life.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target={info.title === 'Location' ? '_blank' : undefined}
                    rel={info.title === 'Location' ? 'noopener noreferrer' : undefined}
                    className="flex items-center space-x-4 group hover:transform hover:translate-x-2 transition-all duration-300"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${info.gradient} rounded-full flex items-center justify-center group-hover:shadow-lg transition-shadow`}>
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-gray-900 dark:text-white font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {info.title}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Professional Services */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Services I Offer
              </h4>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Responsive Website Design</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span>Graphic Design & Branding</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>UI/UX Design</span>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div className={`bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg transition-all duration-1000 delay-400 ${
            inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send me a message
            </h3>

            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-center space-x-3 animate-fade-in">
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                <div>
                  <span className="text-green-800 dark:text-green-200 font-medium">
                    Thank you for your message!
                  </span>
                  <p className="text-green-700 dark:text-green-300 text-sm">
                    I'll get back to you within 24 hours.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="group">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 transform group-hover:scale-[1.02] focus:scale-[1.02] ${
                      errors.name 
                        ? 'border-red-500 dark:border-red-500' 
                        : 'border-gray-300 dark:border-gray-600'
                    } bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:shadow-lg`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <p className="mt-2 text-sm text-red-600 dark:text-red-400 animate-pulse">{errors.name}</p>
                  )}
                </div>

                <div className="group">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 transform group-hover:scale-[1.02] focus:scale-[1.02] ${
                      errors.email 
                        ? 'border-red-500 dark:border-red-500' 
                        : 'border-gray-300 dark:border-gray-600'
                    } bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:shadow-lg`}
                    placeholder="Enter your email address"
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-600 dark:text-red-400 animate-pulse">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="group">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 transform group-hover:scale-[1.02] focus:scale-[1.02] ${
                    errors.subject 
                      ? 'border-red-500 dark:border-red-500' 
                      : 'border-gray-300 dark:border-gray-600'
                  } bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:shadow-lg`}
                >
                  <option value="">Select a subject</option>
                  <option value="web-development">Web Development Project</option>
                  <option value="graphic-design">Graphic Design Work</option>
                  {/* <option value="consultation">Technical Consultation</option> */}
                  {/* <option value="collaboration">Collaboration Opportunity</option> */}
                  <option value="other">Other</option>
                </select>
                {errors.subject && (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-400 animate-pulse">{errors.subject}</p>
                )}
              </div>

              <div className="group">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 transform group-hover:scale-[1.02] focus:scale-[1.02] ${
                    errors.message 
                      ? 'border-red-500 dark:border-red-500' 
                      : 'border-gray-300 dark:border-gray-600'
                  } bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:shadow-lg resize-none`}
                  placeholder="Tell me about your project, timeline, budget, and any specific requirements..."
                />
                {errors.message && (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-400 animate-pulse">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`group w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 active:scale-95 active:translate-y-0 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed shadow-none'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
                } text-white`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>

            {/* Form Footer */}
            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                Your information is secure and will be sent directly to maxamuud632@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-600 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Prefer a different way to connect?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Feel free to reach out through any of these platforms
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/252615962724"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 active:scale-95 flex items-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <span className="group-hover:animate-bounce">📱</span>
                <span>WhatsApp</span>
              </a>
              <a
                href="tel:+252615962724"
                className="group px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 active:scale-95 flex items-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <span className="group-hover:animate-pulse">📞</span>
                <span>Call Now</span>
              </a>
              <a
                href="mailto:maxamuud632@gmail.com"
                className="group px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 active:scale-95 flex items-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <span className="group-hover:animate-bounce">✉️</span>
                <span>Email Direct</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Contact;