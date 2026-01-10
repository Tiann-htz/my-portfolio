import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 py-8 border-t border-white/10 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left"
        >
          {/* Copyright */}
          <p className="text-gray-400 font-['Inter']">
            © {currentYear} All rights reserved
          </p>

          {/* To God be the Glory */}
          <p className="text-gray-300 font-semibold font-['Space_Grotesk']">
            To God be the Glory
          </p>
        </motion.div>
      </div>
    </footer>
  );
}