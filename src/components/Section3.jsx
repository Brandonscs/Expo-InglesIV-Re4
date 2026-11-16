import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Section3() {
  const sectionRef = useRef(null);
  const viewportConfig = { once: false, amount: 0.3 };

  // Detectamos el progreso del scroll en toda la sección
  // "start end": cuando el borde superior de la sección entra por abajo de la pantalla
  // "end start": cuando el borde inferior de la sección sale por arriba de la pantalla
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // La imagen aparece (0 -> 1) al entrar, se mantiene visible en el centro y se desvanece (1 -> 0) al salir
  const bgOpacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0]);

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const leftPanelVariants = {
    hidden: { opacity: 0, x: -150 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.1, type: "spring", stiffness: 80 } }
  };

  const rightPanelVariants = {
    hidden: { opacity: 0, x: 150 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.2, type: "spring", stiffness: 80 } }
  };

  const panelStyle = {
    background: 'rgba(15, 15, 15, 0.85)',
    border: '2px solid #222',
    borderRadius: '12px',
    padding: '2.5rem',
    width: '450px',
    minHeight: '280px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    boxShadow: '0 15px 35px rgba(0,0,0,0.7)',
    backdropFilter: 'blur(8px)',
  };

  const listStyle = {
    listStyleType: 'disc',
    paddingLeft: '1.5rem',
    marginTop: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.2rem',
    color: 'var(--color-text-main)',
  };

  const listItemStyle = {
    fontSize: '1.3rem',
    fontWeight: 'bold',
  };

  return (
    <section 
      ref={sectionRef}
      className="section-container" 
      style={{ minHeight: '100vh', padding: '100px 20px', position: 'relative', overflow: 'hidden' }}
    >
      
      {/* Fondo animado vinculado al scroll */}
      <motion.div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'url(/challenge.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: bgOpacity,
        zIndex: -2
      }} />

      <motion.h2 
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        style={{ fontSize: '3rem', color: 'var(--color-text-main)', marginBottom: '4rem', textAlign: 'center' }}
      >
        OBJECTIVES & CHALLENGES
      </motion.h2>

      <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'stretch' }}>
        
        {/* Columna Izquierda: OBJECTIVES */}
        <motion.div 
          variants={leftPanelVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          style={panelStyle}
          whileHover={{ borderColor: 'var(--color-blood-red)', boxShadow: '0 0 25px rgba(139, 0, 0, 0.15)', scale: 1.02 }}
        >
          <h3 style={{ color: 'var(--color-accent-red)', fontSize: '2rem', borderBottom: '1px solid #333', paddingBottom: '0.8rem' }}>
            Mission Objectives
          </h3>
          <ul style={listStyle}>
            <li style={listItemStyle}>Search and Rescue</li>
            <li style={listItemStyle}>Escape & Extraction</li>
            <li style={listItemStyle}>Uncover the Truth</li>
          </ul>
        </motion.div>

        {/* Columna Derecha: CHALLENGES */}
        <motion.div 
          variants={rightPanelVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          style={panelStyle}
          whileHover={{ borderColor: 'var(--color-blood-red)', boxShadow: '0 0 25px rgba(139, 0, 0, 0.15)', scale: 1.02 }}
        >
          <h3 style={{ color: 'var(--color-accent-red)', fontSize: '2rem', borderBottom: '1px solid #333', paddingBottom: '0.8rem' }}>
            Survival Challenges
          </h3>
          <ul style={listStyle}>
            <li style={listItemStyle}>Villagers</li>
            <li style={listItemStyle}>Resource Management</li>
            <li style={listItemStyle}>Puzzles & Traps</li>
          </ul>
        </motion.div>

      </div>
    </section>
  );
}