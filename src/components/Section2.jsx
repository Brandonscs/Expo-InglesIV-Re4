import { motion } from 'framer-motion';

export default function Section2() {
  const viewportConfig = { once: false, amount: 0.4 };

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const cardLeftVariants = {
    hidden: { opacity: 0, x: -150 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.1 } }
  };

  const cardRightVariants = {
    hidden: { opacity: 0, x: 150 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.3 } }
  };

  const cardStyle = {
    background: 'rgba(20, 20, 20, 0.8)',
    border: '1px solid #333',
    borderRadius: '12px',
    padding: '1.5rem',
    width: '320px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
    backdropFilter: 'blur(5px)'
  };

  const imageStyle = {
    width: '100%',
    aspectRatio: '1 / 1',
    backgroundColor: '#2a2a2a', 
    borderRadius: '8px',
    marginBottom: '1.5rem',
    objectFit: 'cover'
  };

  return (
    <section className="section-container" style={{ minHeight: '100vh', padding: '100px 20px', overflow: 'hidden' }}>
      
      <motion.h2 
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        style={{ fontSize: '3rem', color: 'var(--color-text-main)', marginBottom: '4rem', textAlign: 'center' }}
      >
        STORYLINE AND SETTING
      </motion.h2>

      <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        
        {/* Carta Izquierda: Storyline */}
        <motion.div 
          variants={cardLeftVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          style={cardStyle}
          whileHover={{ scale: 1.05, borderColor: 'var(--color-blood-red)' }}
        >
          <img src="/ashley.jpg" alt="Secret Mission" style={imageStyle} /> 
          <h3 style={{ color: 'var(--color-accent-red)', marginBottom: '0.5rem', fontSize: '1.5rem' }}>
            Secret Mission
          </h3>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem' }}>
            Rescue the President's daughter.
          </p>
        </motion.div>

        {/* Carta Derecha: Setting */}
        <motion.div 
          variants={cardRightVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          style={cardStyle}
          whileHover={{ scale: 1.05, borderColor: 'var(--color-blood-red)' }}
        >
          <img src="/location.jpg" alt="Hostile Environment" style={imageStyle} />
          <h3 style={{ color: 'var(--color-accent-red)', marginBottom: '0.5rem', fontSize: '1.5rem' }}>
            Hostile Environment
          </h3>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem' }}>
            Isolated regions in rural Europe.
          </p>
        </motion.div>

      </div>
    </section>
  );
}