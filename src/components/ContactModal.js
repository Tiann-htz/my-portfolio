import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, User, MessageSquare, Send, Linkedin, Instagram, Github, Facebook, Loader2, Check, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import { sendEmail } from '@/lib/emailjs';

export default function ContactModal({ isOpen, onClose, variant = 'default' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSending, setIsSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const socialLinks = [
    { 
      icon: Github, 
      title: "GitHub", 
      subtitle: '@Tiann-htz',
      link: 'https://github.com/Tiann-htz',
      color: '#FFFFFF'
    },
    { 
      icon: Instagram, 
      title: 'Instagram', 
      subtitle: '@htz.tiann',
      link: 'https://www.instagram.com/htz.tiann',
      color: '#E4405F'
    },
    { 
      icon: Facebook, 
      title: 'Facebook', 
      subtitle: 'Tiannn.s.092',
      link: 'https://web.facebook.com/Tiannn.s.092',
      color: '#1877F2'
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please fill in all fields');
      setTimeout(() => setError(''), 3000);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      setTimeout(() => setError(''), 3000);
      return;
    }

    setIsSending(true);
    setError('');

    try {
      await sendEmail(formData.name, formData.email, formData.message);
      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setSuccess(false);
        onClose();
      }, 2000);
    } catch (error) {
      console.error('Error sending email:', error);
      setError('Failed to send message. Please try again.');
      setTimeout(() => setError(''), 3000);
    } finally {
      setIsSending(false);
    }
  };

  // Landscape variant for home page
  if (variant === 'landscape') {
    return (
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ duration: 0.4, type: 'spring', bounce: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 max-w-6xl w-full max-h-[85vh] overflow-hidden relative"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all z-10 group"
              >
                <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" />
              </button>

              <div className="grid md:grid-cols-5 h-full">
                {/* Left Side - Profile & Contact Info (2 columns) */}
<div className="md:col-span-2 bg-white/5 backdrop-blur-md p-8 flex flex-col justify-center items-center border-r border-white/10">
  <motion.div
    initial={{ scale: 0, rotate: -180 }}
    animate={{ scale: 1, rotate: 0 }}
    transition={{ delay: 0.2, type: 'spring', bounce: 0.4 }}
    className="relative mb-6"
  >
    <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-2xl">
      <Image
        src="/image/image1.jpg"
        alt="Christian Carl Paete"
        fill
        className="object-cover"
        onError={(e) => {
          e.currentTarget.style.display = 'none';
          const parent = e.currentTarget.parentElement;
          const fallback = parent.querySelector('.fallback-icon');
          if (fallback) fallback.style.display = 'flex';
        }}
      />
      <div className="fallback-icon w-full h-full hidden items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600">
        <User className="w-20 h-20 text-white" />
      </div>
    </div>
  </motion.div>

  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3 }}
    className="text-center mb-6"
  >
    <h2 className="text-3xl font-bold text-white font-['Space_Grotesk'] mb-2">
      Christian Carl Paete
    </h2>
    <p className="text-blue-400 font-['Fira_Code'] text-sm mb-1">
      @Tiann.s092
    </p>
    <div className="flex items-center justify-center gap-2 mt-2">
      <div className="w-2 h-2 rounded-full bg-green-500 shadow-lg shadow-green-500/50 animate-pulse"></div>
      <span className="text-gray-300 text-sm font-['Inter']">Available for projects</span>
    </div>
  </motion.div>

  {/* Quick Contact Info */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4 }}
    className="space-y-3 w-full mb-6"
  >
    <div className="flex items-center gap-3 text-gray-300 bg-white/5 backdrop-blur-sm rounded-lg p-3">
      <Mail className="w-5 h-5 text-blue-400" />
      <span className="text-sm font-['Inter']">christiancarlpaete@gmail.com</span>
    </div>
    <div className="flex items-center gap-3 text-gray-300 bg-white/5 backdrop-blur-sm rounded-lg p-3">
      <MapPin className="w-5 h-5 text-blue-400" />
      <span className="text-sm font-['Inter']">Tugbok, Davao City, Philippines</span>
    </div>
  </motion.div>

  {/* Social Links */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.5 }}
    className="w-full"
  >
    <h3 className="text-white font-semibold font-['Space_Grotesk'] mb-3 text-center">
      Connect with me
    </h3>
    <div className="grid grid-cols-1 gap-2">
      {socialLinks.map((social, index) => (
        <motion.a
          key={index}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 + index * 0.1 }}
          className="flex items-center gap-3 p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all group"
        >
          <div 
            className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: `${social.color}20` }}
          >
            <social.icon className="w-5 h-5" style={{ color: social.color }} />
          </div>
          <div className="flex-1">
            <p className="text-white text-sm font-semibold font-['Inter'] group-hover:text-blue-400 transition-colors">
              {social.title}
            </p>
            <p className="text-gray-400 text-xs font-['Fira_Code']">
              {social.subtitle}
            </p>
          </div>
        </motion.a>
      ))}
    </div>
  </motion.div>
</div>

                {/* Right Side - Contact Form (3 columns) */}
                <div className="md:col-span-3 p-8 overflow-y-auto">
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h3 className="text-3xl font-bold text-white font-['Space_Grotesk'] mb-2">
                      Let's Work Together
                    </h3>
                    <p className="text-gray-400 font-['Inter'] mb-6">
                      Have a project in mind or need help with development? Send me a message and let's discuss how we can collaborate!
                    </p>

                    {error && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm font-['Inter']"
                      >
                        {error}
                      </motion.div>
                    )}

                    <div className="space-y-4">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="relative"
                      >
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full pl-12 pr-4 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-blue-500/50 focus:outline-none transition-all font-['Inter']"
                          disabled={isSending}
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="relative"
                      >
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full pl-12 pr-4 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-blue-500/50 focus:outline-none transition-all font-['Inter']"
                          disabled={isSending}
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="relative"
                      >
                        <MessageSquare className="absolute left-4 top-6 w-5 h-5 text-gray-400" />
                        <textarea
                          placeholder="Describe your project or how I can help..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          rows={6}
                          className="w-full pl-12 pr-4 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-blue-500/50 focus:outline-none transition-all resize-none font-['Inter']"
                          disabled={isSending}
                        />
                      </motion.div>

                      <motion.button
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.7 }}
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  onClick={handleSubmit}
  disabled={isSending || success}
  style={!success ? {
    background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 30%, #1d4ed8 60%, #1e40af 100%)',
  } : {}}
  className={`w-full px-6 py-4 text-white rounded-xl font-semibold flex items-center justify-center gap-2 transition-all font-['Inter'] hover:shadow-lg hover:shadow-blue-500/50 ${
    success 
      ? 'bg-green-600 hover:bg-green-600'
      : ''
  } ${isSending ? 'opacity-75 cursor-not-allowed' : ''}`}
>
                        {isSending ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Sending...
                          </>
                        ) : success ? (
                          <>
                            <Check className="w-5 h-5" />
                            Message Sent!
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            Send Message
                          </>
                        )}
                      </motion.button>
                    </div>

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 }}
                      className="text-center text-gray-500 text-sm mt-6 font-['Inter']"
                    >
                      I typically respond within 24 hours
                    </motion.p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }

  // Default variant (original design for About page)
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all z-10"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <div className="p-8">
              {/* Header with Avatar */}
              <div className="text-center mb-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring' }}
                  className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-1"
                >
                  <Image
                    src="/image/image1.jpg"
                    alt="Christian Carl Paete"
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const parent = e.currentTarget.parentElement;
                      const fallback = parent.querySelector('.fallback-icon');
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div className="fallback-icon w-full h-full hidden items-center justify-center">
                    <User className="w-12 h-12 text-white" />
                  </div>
                </motion.div>
                <h2 className="text-3xl font-bold text-white font-['Space_Grotesk'] mb-2">
                  Let's Work Together
                </h2>
                <p className="text-gray-400 font-['Inter']">
                  Have a project in mind or need help with development? Let's discuss!
                </p>
              </div>

              {/* Get in Touch */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white font-['Space_Grotesk'] mb-4 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-blue-400" />
                  Send me a message
                </h3>

                {error && (
                  <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm font-['Inter']">
                    {error}
                  </div>
                )}

                <div className="space-y-4">
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-12 pr-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-blue-500/50 focus:outline-none transition-all font-['Inter']"
                      disabled={isSending}
                    />
                  </div>

                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-12 pr-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-blue-500/50 focus:outline-none transition-all font-['Inter']"
                      disabled={isSending}
                    />
                  </div>

                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                    <textarea
                      placeholder="Describe your project or how I can help..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="w-full pl-12 pr-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-blue-500/50 focus:outline-none transition-all resize-none font-['Inter']"
                      disabled={isSending}
                    />
                  </div>

                  <button
  onClick={handleSubmit}
  disabled={isSending || success}
  style={!success ? {
    background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 30%, #1d4ed8 60%, #1e40af 100%)',
  } : {}}
  className={`w-full px-6 py-3 text-white rounded-xl font-semibold flex items-center justify-center gap-2 transition-all font-['Inter'] hover:shadow-lg hover:shadow-blue-500/50 ${
    success 
      ? 'bg-green-600 hover:bg-green-600'
      : ''
  } ${isSending ? 'opacity-75 cursor-not-allowed' : ''}`}
>
                    {isSending ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : success ? (
                      <>
                        <Check className="w-5 h-5" />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Separator */}
              <div className="my-8 border-t border-white/10"></div>

              {/* Connect With Me */}
              <div>
                <h3 className="text-xl font-bold text-white font-['Space_Grotesk'] mb-4">
                  Or connect with me on
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.1 }}
                      className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all group"
                    >
                      <div 
                        className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${social.color}20` }}
                      >
                        <social.icon className="w-6 h-6" style={{ color: social.color }} />
                      </div>
                      <div className="flex-1">
                        <p className="text-white font-semibold font-['Inter'] group-hover:text-blue-400 transition-colors">
                          {social.title}
                        </p>
                        <p className="text-gray-400 text-sm font-['Fira_Code']">
                          {social.subtitle}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}