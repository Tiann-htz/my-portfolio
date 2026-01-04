import { motion } from 'framer-motion';
import { Sparkles, Download, Briefcase } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

export default function About() {
  const [isHovered, setIsHovered] = useState(false);

  const stats = [
    { 
      number: '12', 
      label: 'Total Projects',
      description: 'Innovative solutions delivered'
    },
    { 
      number: '5', 
      label: 'Certificates',
      description: 'Professional certifications earned'
    },
    { 
      number: '4', 
      label: 'Years Experience',
      description: 'Building digital products'
    },
  ];

  const handleDownloadCSV = () => {
    // Create CSV content
    const csvContent = `Name,Role,Experience,Projects,Certificates
Christian Carl Paete,Web & Mobile App Developer,4 Years,12,5`;
    
    // Create blob and download
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'christian_paete_info.csv';
    link.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-32">
      <div className="container mx-auto relative z-10">
        {/* Header - Center */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold gradient-text font-['Space_Grotesk'] mb-4">
            About Me
          </h2>
          <div className="flex items-center justify-center gap-2 text-blue-600">
            <Sparkles className="w-5 h-5" />
            <p className="text-lg font-['Fira_Code']">Passionate about crafting exceptional digital experiences</p>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Introduction */}
            <div className="space-y-3">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-gray-400 text-lg font-['Inter']"
              >
                Hello, I'm
              </motion.p>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-4xl md:text-5xl font-bold text-white font-['Space_Grotesk']"
              >
                Christian Carl Paete
              </motion.h3>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-gray-400 text-lg font-['Inter'] leading-relaxed"
            >
              I'm a passionate web and mobile app developer on a journey of creating impactful digital solutions. 
              With extensive experience in building full-scale projects, I specialize in developing modern websites 
              and applications that combine functionality with stunning design. My work focuses on delivering 
              user-centric experiences that solve real-world problems through innovative technology and clean code.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex gap-4 pt-4"
            >
              <button 
                onClick={handleDownloadCSV}
                className="px-6 py-3 bg-gradient-to-r from-blue-700 to-blue-600 text-white rounded-lg font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-blue-700/50 transition-all font-['Inter']"
              >
                <Download className="w-5 h-5" />
                Download CSV
              </button>
              <button className="px-6 py-3 bg-white/5 border border-blue-700/30 text-white rounded-lg font-semibold flex items-center gap-2 hover:bg-white/10 hover:border-blue-600/50 transition-all font-['Inter']">
                <Briefcase className="w-5 h-5" />
                My Projects
              </button>
            </motion.div>

            {/* Stats Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-3 gap-4 pt-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="bg-white/5 border border-blue-700/30 rounded-lg p-4 hover:border-blue-600/50 transition-all hover:shadow-lg hover:shadow-blue-700/20"
                >
                  <h4 className="text-3xl font-bold gradient-text font-['Space_Grotesk'] mb-1">
                    {stat.number}
                  </h4>
                  <p className="text-white text-sm font-semibold font-['Inter'] mb-1">
                    {stat.label}
                  </p>
                  <p className="text-gray-500 text-xs font-['Fira_Code']">
                    {stat.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Picture */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center justify-center"
          >
            <motion.div
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              animate={{
                boxShadow: isHovered 
                  ? '0 0 40px rgba(37, 99, 235, 0.6), 0 0 80px rgba(37, 99, 235, 0.4)'
                  : '0 0 20px rgba(37, 99, 235, 0.3), 0 0 40px rgba(37, 99, 235, 0.2)',
              }}
              transition={{ duration: 0.3 }}
              className="relative w-80 h-80 rounded-full border-4 border-blue-700/50 overflow-hidden"
              style={{
                boxShadow: '0 0 20px rgba(37, 99, 235, 0.3), 0 0 40px rgba(37, 99, 235, 0.2)',
              }}
            >
              {/* Placeholder - Replace with your actual image */}
              <div className="w-full h-full bg-gradient-to-br from-blue-900/40 to-blue-700/40 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-blue-700/50 flex items-center justify-center">
                    <span className="text-6xl font-bold text-white">CP</span>
                  </div>
                  <p className="text-gray-400 text-sm font-['Fira_Code']">
                    Your Photo Here
                  </p>
                </div>
              </div>
              {/* 
              Uncomment and use this when you have your image:
              <Image
                src="/your-photo.jpg"
                alt="Christian Carl Paete"
                fill
                className="object-cover"
              />
              */}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}