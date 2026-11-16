import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Section1() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Animaciones del texto
  const titleX = useTransform(scrollYProgress, [0, 1], [0, -800]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const infoX = useTransform(scrollYProgress, [0, 1], [0, 800]);
  const infoOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Animaciones de la imagen de fondo (se mueve hacia arriba y desaparece)
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.8], [0.6, 0]); // Inicia en 0.6 para que no brille demasiado

  return (
    <section ref={containerRef} style={{ height: '200vh', position: 'relative' }}>
      <div style={{ 
        position: 'sticky', 
        top: 0, 
        height: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center',
        overflow: 'hidden'
      }}>
        
        {/* Imagen de fondo animada */}
        <motion.div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url(/portada_re4.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          y: bgY,
          opacity: bgOpacity,
          zIndex: -2
        }} />

        {/* Capa oscura superpuesta para asegurar que el texto sea legible */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: -1
        }} />
        
        {/* Contenido principal */}
        <motion.div style={{ x: titleX, opacity: titleOpacity, textAlign: 'center' }}>
          <h1 style={{ 
            fontSize: '6rem', 
            color: 'var(--color-blood-red)', 
            marginBottom: '1rem',
            textShadow: '3px 3px 15px rgba(139, 0, 0, 0.4)'
          }}>
            Resident Evil 4
          </h1>
        </motion.div>

        <motion.div style={{ x: infoX, opacity: infoOpacity, textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--color-text-main)', marginBottom: '1.5rem' }}>
            Survival Horror Game
          </h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)' }}>
            Presented by: Brandon Carvajal & Camilo Orozco
          </p>
        </motion.div>

      </div>
    </section>
  );
}