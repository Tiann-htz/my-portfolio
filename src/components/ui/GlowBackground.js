import { motion } from 'framer-motion';

export default function GlowBackgroun() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
      {/* TOP RIGHT - LIGHT PURPLE */}
      <motion.div
        animate={{
          x: ['-22%', '0%', '-22%'],
        }}
        transition={{
          duration: 5, // Slow movement - change to 20, 30, 35 for different speeds
          ease: 'easeInOut',
          repeat: Infinity,
        }}
        style={{
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(83, 5, 97, 0.785) 0%, rgba(68, 15, 99, 0.45) 25%, transparent 65%)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          position: 'absolute',
          top: '-10%',
          right: '6%',
        }}
      />

      {/* TOP LEFT - LIGHT TEAL */}
      <motion.div
        animate={{
          x: ['0%', '18%', '0%'],
        }}
        transition={{
          duration: 6, // Different speed for variety
          ease: 'easeInOut',
          repeat: Infinity,
        }}
        style={{
          width: '500px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(24, 120, 161, 0.29) 0%, rgba(11, 91, 115, 0.7) 25%, transparent 65%)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          position: 'absolute',
          top: '-5%',
          left: '5%',
        }}
      />

      {/* BOTTOM LEFT - BLUE */}
      <motion.div
        animate={{
          x: ['0%', '22%', '0%'],
        }}
        transition={{
          duration: 7, // Slowest movement
          ease: 'easeInOut',
          repeat: Infinity,
        }}
        style={{
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(72, 142, 180, 0.46) 0%, rgba(15, 60, 132, 0.57) 25%, transparent 65%)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          position: 'absolute',
          bottom: '-10%',
          left: '-7%',
        }}
      />

      {/* BOTTOM RIGHT - SKY BLUE */}
      <motion.div
        animate={{
          x: ['-20%', '0%', '-21%'],
        }}
        transition={{
          duration: 5,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
        style={{
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(64, 130, 184, 0.26) 0%, rgba(75, 114, 191, 0.43) 25%, transparent 65%)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          position: 'absolute',
          bottom: '-10%',
          right: '-5%',
        }}
      />
    </div>
  );
}