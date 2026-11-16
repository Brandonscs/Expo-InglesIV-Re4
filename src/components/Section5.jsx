import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const stages = [
  {
    phase: "Stage 1",
    title: "The Village",
    subtitle: "Chapters 1 - 2: Survival & Investigation",
    progression: "Basic weapons, puzzle solving, and rescuing Ashley.",
    image: "/villa.webp",
    align: "left"
  },
  {
    phase: "Stage 2",
    title: "The Castle",
    subtitle: "Chapters 3 - 4: Traps & Cultists",
    progression: "Weapon upgrades via the Merchant, key items, and Salazar's forces.",
    image: "/castillo.webp",
    align: "right"
  },
  {
    phase: "Stage 3",
    title: "The Island",
    subtitle: "Chapter 5 - Final: Military & Lab",
    progression: "Heavy combat, Regeneradors, and final confrontation with Saddler.",
    image: "/isla.webp",
    align: "left"
  }
];

export default function Section5() {
  const containerRef = useRef(null);
  const viewportConfig = { once: false, amount: 0.3 };

  // Vinculamos el scroll al contenedor para dibujar la línea central roja
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const titleVariants = {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section
      ref={containerRef}
      className="section-container"
      style={{ minHeight: '160vh', padding: '100px 20px', position: 'relative', overflow: 'hidden' }}
    >
      <motion.h2
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        style={{ fontSize: '3rem', color: 'var(--color-text-main)', marginBottom: '5rem', textAlign: 'center' }}
      >
        LEVELS OR GAME PROGRESSION
      </motion.h2>

      {/* Contenedor principal de la línea de tiempo */}
      <div style={{ position: 'relative', width: '100%', maxWidth: '1000px', display: 'flex', flexDirection: 'column', gap: '4rem' }}>
        
        {/* Línea guía gris de fondo */}
        <div style={{
          position: 'absolute',
          left: '50%',
          top: 0,
          bottom: 0,
          width: '4px',
          backgroundColor: '#2a2a2a',
          transform: 'translateX(-50%)',
          zIndex: 0
        }} />

        {/* Línea roja animada que se dibuja con el scroll */}
        <motion.div style={{
          position: 'absolute',
          left: '50%',
          top: 0,
          bottom: 0,
          width: '4px',
          backgroundColor: 'var(--color-blood-red)',
          boxShadow: '0 0 12px var(--color-accent-red)',
          transform: 'translateX(-50%)',
          transformOrigin: 'top',
          scaleY: lineScaleY,
          zIndex: 1
        }} />

        {stages.map((stage, index) => {
          const isLeft = stage.align === "left";

          const cardVariants = {
            hidden: { opacity: 0, x: isLeft ? -120 : 120 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
          };

          return (
            <div
              key={index}
              style={{
                display: 'flex',
                justifyContent: isLeft ? 'flex-start' : 'flex-end',
                alignItems: 'center',
                position: 'relative',
                width: '100%',
                zIndex: 2
              }}
            >
              {/* Punto/Nodo central en la línea */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={viewportConfig}
                transition={{ duration: 0.4, delay: 0.2 }}
                style={{
                  position: 'absolute',
                  left: '50%',
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-accent-red)',
                  border: '4px solid var(--color-bg-dark)',
                  transform: 'translateX(-50%)',
                  boxShadow: '0 0 10px var(--color-accent-red)'
                }}
              />

              {/* Tarjeta de la etapa */}
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                whileHover={{ scale: 1.03, borderColor: 'var(--color-blood-red)' }}
                style={{
                  width: '43%',
                  background: 'rgba(18, 18, 18, 0.88)',
                  border: '1px solid #333',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.6)',
                  backdropFilter: 'blur(6px)',
                  textAlign: 'left'
                }}
              >
                <span style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  {stage.phase}
                </span>
                <h3 style={{ color: 'var(--color-accent-red)', fontSize: '1.8rem', margin: '0.3rem 0' }}>
                  {stage.title}
                </h3>
                <p style={{ color: 'var(--color-text-main)', fontWeight: 'bold', fontSize: '1rem', marginBottom: '1rem' }}>
                  {stage.subtitle}
                </p>

                <img
                  src={stage.image}
                  alt={stage.title}
                  style={{
                    width: '100%',
                    height: '180px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    marginBottom: '1rem',
                    border: '1px solid #2a2a2a'
                  }}
                />

                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.4' }}>
                  {stage.progression}
                </p>
              </motion.div>
            </div>
          );
        })}

      </div>
    </section>
  );
}