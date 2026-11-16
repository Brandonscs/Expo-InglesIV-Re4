import { motion } from 'framer-motion';
import { useState, useRef } from 'react';

export default function Section6() {
  const viewportConfig = { once: false, amount: 0.3 };
  
  const [activeAudio, setActiveAudio] = useState(null);
  const audioRef = useRef(null);

  const toggleAudio = (trackName, src) => {
    if (activeAudio === trackName) {
      audioRef.current.pause();
      setActiveAudio(null);
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      audioRef.current = new Audio(src);
      audioRef.current.onended = () => setActiveAudio(null);
      audioRef.current.play();
      setActiveAudio(trackName);
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const topStripVariants = {
    hidden: { opacity: 0, x: -160 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const bottomStripVariants = {
    hidden: { opacity: 0, x: 160 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.2, ease: "easeOut" } }
  };

  const stripStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: 'rgba(18, 18, 18, 0.88)',
    border: '1px solid #333',
    borderRadius: '12px',
    padding: '2rem',
    width: '100%',
    maxWidth: '950px',
    gap: '2rem',
    boxShadow: '0 12px 30px rgba(0, 0, 0, 0.6)',
    backdropFilter: 'blur(6px)'
  };

  const listStyle = {
    listStyleType: 'disc',
    paddingLeft: '1.5rem',
    marginTop: '1rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.8rem',
    color: 'var(--color-text-main)',
    fontSize: '1.15rem',
    fontWeight: 'bold'
  };

  const audioButtonStyle = (isPlaying) => ({
    background: isPlaying ? 'var(--color-blood-red)' : 'rgba(35, 35, 35, 0.9)',
    color: 'var(--color-text-main)',
    border: isPlaying ? '1px solid var(--color-accent-red)' : '1px solid #444',
    borderRadius: '8px',
    padding: '0.8rem 1.2rem',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    transition: 'all 0.2s ease',
    boxShadow: isPlaying ? '0 0 15px rgba(211, 47, 47, 0.4)' : 'none'
  });

  return (
    <section className="section-container" style={{ minHeight: '100vh', padding: '100px 20px', overflow: 'hidden' }}>
      
      <motion.h2
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        style={{ fontSize: '3rem', color: 'var(--color-text-main)', marginBottom: '4rem', textAlign: 'center' }}
      >
        VISUAL AND AUDIO STYLE
      </motion.h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', width: '100%', alignItems: 'center' }}>
        
        {/* Franja Superior: VISUAL STYLE */}
        <motion.div
          variants={topStripVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          style={stripStyle}
          whileHover={{ borderColor: 'var(--color-blood-red)' }}
        >
          {/* Contenedor para mostrar la imagen completa sin recortes */}
          <div style={{
            width: '380px',
            maxWidth: '100%',
            height: '240px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(10, 10, 10, 0.8)',
            borderRadius: '8px',
            border: '1px solid #2a2a2a',
            overflow: 'hidden'
          }}>
            <img
              src="/visual.jpg"
              alt="Visual Style"
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain'
              }}
            />
          </div>

          <div style={{ flex: 1, minWidth: '280px', textAlign: 'left' }}>
            <h3 style={{ color: 'var(--color-accent-red)', fontSize: '2rem', borderBottom: '1px solid #333', paddingBottom: '0.5rem' }}>
              Visual Style
            </h3>
            <ul style={listStyle}>
              <li>Realistic & Gritty Atmosphere</li>
              <li>Dark, Oppressive Lighting</li>
              <li>Over-the-Shoulder Camera</li>
            </ul>
          </div>
        </motion.div>

        {/* Franja Inferior: AUDIO DESIGN */}
        <motion.div
          variants={bottomStripVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          style={stripStyle}
          whileHover={{ borderColor: 'var(--color-blood-red)' }}
        >
          <div style={{ flex: 1, minWidth: '280px', textAlign: 'left' }}>
            <h3 style={{ color: 'var(--color-accent-red)', fontSize: '2rem', borderBottom: '1px solid #333', paddingBottom: '0.5rem' }}>
              Audio Design
            </h3>
            <ul style={listStyle}>
              <li>Tense Ambient Music</li>
              <li>Terrifying Enemy Sounds</li>
              <li>Realistic Weapon Effects</li>
            </ul>
          </div>

          {/* Panel Interactivo de Audio */}
          <div style={{
            width: '380px',
            maxWidth: '100%',
            height: '220px',
            background: 'rgba(12, 12, 12, 0.9)',
            borderRadius: '8px',
            border: '1px solid #2a2a2a',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            {/* Ecualizador animado */}
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: '6px', height: '45px' }}>
              {[0.4, 0.9, 0.6, 1, 0.5, 0.8, 0.4, 0.7, 0.5].map((heightFactor, i) => (
                <motion.div
                  key={i}
                  animate={activeAudio ? { scaleY: [0.2, heightFactor, 0.2] } : { scaleY: 0.2 }}
                  transition={activeAudio ? { repeat: Infinity, duration: 0.45 + (i % 3) * 0.1, ease: "easeInOut" } : { duration: 0.2 }}
                  style={{
                    width: '8px',
                    height: '100%',
                    backgroundColor: activeAudio ? 'var(--color-accent-red)' : '#444',
                    borderRadius: '4px',
                    transformOrigin: 'bottom'
                  }}
                />
              ))}
            </div>

            {/* Botones de reproducción */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <button
                onClick={() => toggleAudio('chainsaw', '/motosierrista.mp3')}
                style={audioButtonStyle(activeAudio === 'chainsaw')}
              >
                <span>Dr. Salvador (Chainsaw)</span>
                <span>{activeAudio === 'chainsaw' ? 'PAUSE' : 'PLAY'}</span>
              </button>

              <button
                onClick={() => toggleAudio('combat', '/ganado.mp3')}
                style={audioButtonStyle(activeAudio === 'combat')}
              >
                <span>Villager Combat Tension</span>
                <span>{activeAudio === 'combat' ? 'PAUSE' : 'PLAY'}</span>
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}