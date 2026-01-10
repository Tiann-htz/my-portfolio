import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, User, Github } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

// IntroLoading Component (inside index.js)
function IntroLoading({ onLoadingComplete }) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => onLoadingComplete(), 1000);
          }, 1000);
          return 100;
        }
        return prev + 1;
      });
    }, 80);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  const iconVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.4,
        duration: 1,
        ease: 'easeOut',
      },
    }),
  };

  // Word-by-word animation from left to right
  const line1Words = ['Hey', 'there,', 'Welcome', 'to', 'my'];
  const line2Words = ['Portfolio', 'Website'];
  
  const wordVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: 1.5 + i * 0.15,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <AnimatePresence>
      {!fadeOut && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center gradient-bg"
        >
          <div className="text-center space-y-8 px-4">
            {/* Icons Animation */}
            <div className="flex justify-center gap-8 mb-12">
              {[
                { icon: Code2, color: 'text-blue-400' },
                { icon: User, color: 'text-cyan-400' },
                { icon: Github, color: 'text-sky-400' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={iconVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <item.icon className={`w-16 h-16 ${item.color}`} strokeWidth={1.5} />
                </motion.div>
              ))}
            </div>

            {/* Welcome Text - Word by word animation in two lines */}
            <div className="space-y-2">
              {/* First line */}
              <div className="flex justify-center gap-x-3 text-4xl md:text-5xl font-bold text-white font-['Space_Grotesk']">
                {line1Words.map((word, index) => (
                  <motion.span
                    key={index}
                    custom={index}
                    variants={wordVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {word}
                  </motion.span>
                ))}
              </div>
              
              {/* Second line */}
              <div className="flex justify-center gap-x-3 text-4xl md:text-5xl font-bold gradient-text font-['Space_Grotesk']">
                {line2Words.map((word, index) => (
                  <motion.span
                    key={index}
                    custom={line1Words.length + index}
                    variants={wordVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {word}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Typing Animation - Slower speed */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.5, duration: 0.8 }}
              className="text-2xl font-['Fira_Code'] text-blue-300"
            >
              <TypeAnimation
                sequence={[
                  '',
                  500,
                  'Paete.vercel.app',
                  3000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={0}
                speed={30}
              />
            </motion.div>

            {/* Loading Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 4.5, duration: 0.8 }}
              className="w-full max-w-md mx-auto mt-12"
            >
              <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-400 rounded-full"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <p className="text-blue-300 text-sm mt-3 font-['Fira_Code']">
                Loading... {progress}%
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Main Index Page
export default function Index() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const handleLoadingComplete = () => {
    setLoading(false);
    router.push('/home');
  };

  return (
    <>
      {loading && <IntroLoading onLoadingComplete={handleLoadingComplete} />}
    </>
  );
}