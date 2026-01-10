import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, Award, Code2, ExternalLink, Info, X } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('projects');
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);

  const tabs = [
    { id: 'projects', name: 'Projects', icon: FolderGit2 },
    { id: 'certificates', name: 'Certificates', icon: Award },
    { id: 'techstack', name: 'Tech Stack', icon: Code2 },
  ];

  const projects = [
    {
      id: 1,
      title: 'Book Borrowing Platform Website',
      type: 'Web System',
      shortDescription: 'A simple book borrowing platform website that using CRUD, storing books information, managing user borrowing records, and providing an intuitive interface for library management.',
      techStack: ['React JS', 'Vite', 'Node.js', 'Firebase', 'TypeScript'],
      images: [
        '/projects/bookborrowingwebsite.png',
        '/projects/bookborrowingwebsite1.png',
      ],
      visitSite: null, // No visit site for this project
    },
    // Add more projects here later
  ];

  const certificates = [
    { id: 1, image: '/certificates/phpmysql.jpg' },
    // Add more certificates here later
  ];

  const techStack = [
    { id: 1, name: 'React', color: '#61DAFB' },
    { id: 2, name: 'JavaScript', color: '#F7DF1E' },
    { id: 3, name: 'TypeScript', color: '#3178C6' },
    { id: 4, name: 'Node.js', color: '#339933' },
    { id: 5, name: 'Next.js', color: '#000000' },
    { id: 6, name: 'Tailwind CSS', color: '#06B6D4' },
    { id: 7, name: 'Firebase', color: '#FFCA28' },
    { id: 8, name: 'MongoDB', color: '#47A248' },
    { id: 9, name: 'Git', color: '#F05032' },
    { id: 10, name: 'HTML5', color: '#E34F26' },
    { id: 11, name: 'CSS3', color: '#1572B6' },
    { id: 12, name: 'Python', color: '#3776AB' },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setSelectedImage(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setSelectedImage(0);
  };

  return (
    <section id="portfolio" className="min-h-screen flex items-center justify-center px-6 py-32">
      <div className="container mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <motion.h2 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold gradient-text font-['Space_Grotesk'] mb-4"
          >
            Portfolio Showcase
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-400 text-lg font-['Inter'] max-w-3xl mx-auto leading-relaxed"
          >
            Explore my journey through projects, certifications, and technical expertise. 
            Each section represents a milestone in my continuous learning path.
          </motion.p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center gap-4 mb-16"
        >
          {tabs.map((tab, index) => (
            <motion.button
              key={tab.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              onClick={() => setActiveTab(tab.id)}
              className={`
                px-8 py-4 rounded-xl font-semibold text-lg font-['Inter'] 
                flex items-center gap-3 transition-all duration-300
                ${activeTab === tab.id 
                  ? 'bg-white/20 backdrop-blur-md text-white shadow-lg' 
                  : 'bg-white/5 backdrop-blur-sm text-gray-400 hover:bg-white/10 hover:text-white'
                }
              `}
            >
              <tab.icon className="w-6 h-6" />
              {tab.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {/* PROJECTS TAB */}
          {activeTab === 'projects' && (
            <motion.div
              key="projects"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ 
                    delay: 0.2 + index * 0.15,
                    duration: 0.5,
                    ease: [0.25, 0.1, 0.25, 1]
                  }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  onClick={() => openModal(project)}
                  className="bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all group cursor-pointer"
                >
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden bg-gray-900/50">
                    <Image
                      src={project.images[0]}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Project Content */}
                  <div className="p-6 space-y-4">
                    {/* Type Badge */}
                    <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm text-blue-400 text-xs font-semibold rounded-full font-['Fira_Code']">
                      {project.type}
                    </span>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white font-['Space_Grotesk'] group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>

                    {/* Description with ellipsis */}
                    <p className="text-gray-400 font-['Inter'] text-sm leading-relaxed line-clamp-2">
                      {project.shortDescription}
                    </p>

                    {/* Details Button */}
                    <button 
                      onClick={() => openModal(project)}
                      className="w-full mt-4 px-5 py-2.5 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-white/20 transition-all font-['Inter']"
                    >
                      <Info className="w-4 h-4" />
                      View Details
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* CERTIFICATES TAB */}
          {activeTab === 'certificates' && (
            <motion.div
              key="certificates"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {certificates.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ 
                    delay: 0.2 + index * 0.15,
                    duration: 0.5,
                    ease: [0.25, 0.1, 0.25, 1]
                  }}
                  whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
                  className="bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all cursor-pointer"
                >
                  <div className="relative h-80 overflow-hidden bg-gray-900/50">
                    <Image
                      src={cert.image}
                      alt="Certificate"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* TECH STACK TAB */}
          {activeTab === 'techstack' && (
            <motion.div
              key="techstack"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-6 gap-6"
            >
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ 
                    delay: 0.1 + index * 0.05,
                    duration: 0.4,
                    ease: [0.25, 0.1, 0.25, 1]
                  }}
                  whileHover={{ y: -8, scale: 1.05, transition: { duration: 0.3 } }}
                  className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all flex flex-col items-center justify-center gap-3 group"
                >
                  {/* SVG Icon Placeholder - Replace with actual SVG later */}
                  <div 
                    className="w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${tech.color}20` }}
                  >
                    <svg 
                      width="40" 
                      height="40" 
                      viewBox="0 0 40 40"
                      className="group-hover:scale-110 transition-transform"
                    >
                      <rect 
                        width="40" 
                        height="40" 
                        rx="8" 
                        fill={tech.color}
                        opacity="0.8"
                      />
                      <text
                        x="20"
                        y="25"
                        textAnchor="middle"
                        fill="white"
                        fontSize="16"
                        fontWeight="bold"
                      >
                        {tech.name.charAt(0)}
                      </text>
                    </svg>
                  </div>
                  
                  {/* Tech Name */}
                  <span className="text-white text-sm font-semibold text-center font-['Inter'] group-hover:text-blue-400 transition-colors">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* PROJECT MODAL */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 max-w-7xl w-full max-h-[90vh] overflow-y-auto"
              >
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-6 right-6 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all"
                >
                  <X className="w-6 h-6 text-white" />
                </button>

                <div className="grid md:grid-cols-2 gap-8 p-8">
                  {/* Left Side - Images */}
                  <div className="space-y-4">
                    {/* Main Image - Wider and Less Rounded */}
                    <div className="relative w-full h-[500px] rounded-lg overflow-hidden bg-gray-900/50">
                      <Image
                        src={selectedProject.images[selectedImage]}
                        alt={selectedProject.title}
                        fill
                        className="object-contain"
                      />
                    </div>

                    {/* Thumbnail Gallery */}
                    <div className="grid grid-cols-6 gap-2">
                      {selectedProject.images.map((img, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedImage(index)}
                          className={`relative h-16 rounded overflow-hidden border-2 transition-all ${
                            selectedImage === index 
                              ? 'border-blue-500' 
                              : 'border-white/20 hover:border-white/40'
                          }`}
                        >
                          <Image
                            src={img}
                            alt={`Preview ${index + 1}`}
                            fill
                            className="object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Right Side - Details */}
                  <div className="space-y-6">
                    {/* Type Badge */}
                    <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-blue-400 text-sm font-semibold rounded-full font-['Fira_Code']">
                      {selectedProject.type}
                    </span>

                    {/* Title */}
                    <h2 className="text-4xl font-bold text-white font-['Space_Grotesk']">
                      {selectedProject.title}
                    </h2>

                    {/* Description */}
                    <p className="text-gray-300 font-['Inter'] leading-relaxed">
                      {selectedProject.shortDescription}
                    </p>

                    {/* Tech Stack */}
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-white font-['Space_Grotesk']">
                        Tech Stack Used:
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.techStack.map((tech, index) => (
                          <span
                            key={index}
                            className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white text-sm font-['Fira_Code'] rounded-lg"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Visit Site Button (if available) */}
                    {selectedProject.visitSite && (
                      <a
                        href={selectedProject.visitSite}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all font-['Inter']"
                      >
                        <ExternalLink className="w-5 h-5" />
                        Visit Site
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}