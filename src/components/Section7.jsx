import { motion } from 'framer-motion';

export default function Section7() {
  const viewportConfig = { once: false, amount: 0.3 };

  const titleVariants = {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const videoContainerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.7, ease: "easeOut" } 
    }
  };

  const closingVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, delay: 0.3 } 
    }
  };

  return (
    <section 
      className="section-container" 
      style={{ minHeight: '100vh', padding: '100px 20px 60px 20px', overflow: 'hidden', justifyContent: 'space-between' }}
    >
      
      <motion.h2
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        style={{ fontSize: '3rem', color: 'var(--color-text-main)', marginBottom: '2.5rem', textAlign: 'center' }}
      >
        ART CONCEPT
      </motion.h2>

      {/* Marco del Tráiler estilo Sala de Cine */}
      <motion.div
        variants={videoContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        style={{
          width: '100%',
          maxWidth: '900px',
          background: 'rgba(15, 15, 15, 0.9)',
          border: '2px solid #2a2a2a',
          borderRadius: '14px',
          padding: '1rem',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8), 0 0 25px rgba(139, 0, 0, 0.2)',
          backdropFilter: 'blur(8px)'
        }}
      >
        <video
          src="/trailer.mp4"
          controls
          playsInline
          style={{
            width: '100%',
            maxHeight: '500px',
            borderRadius: '8px',
            display: 'block',
            backgroundColor: '#000'
          }}
        />
      </motion.div>

      {/* Mensaje de cierre */}
      <motion.div
        variants={closingVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        style={{ textAlign: 'center', marginTop: '3.5rem' }}
      >
        <h3 style={{ 
          fontSize: '2.5rem', 
          color: 'var(--color-accent-red)', 
          letterSpacing: '2px',
          textTransform: 'uppercase',
          marginBottom: '0.5rem',
          textShadow: '2px 2px 10px rgba(139, 0, 0, 0.4)'
        }}>
          Thank You For Your Attention!
        </h3>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem' }}>

        </p>
      </motion.div>

    </section>
  );
}