import { motion } from 'framer-motion';

const characters = [
  {
    name: "Leon S. Kennedy",
    role: "Special government agent.",
    image: "/LeonScottKennedy.webp"
  },
  {
    name: "Ashley Graham",
    role: "Vulnerable rescue target.",
    image: "/Ashleynormal.webp"
  },
  {
    name: "Ada Wong",
    role: "Agile spy with a hidden agenda.",
    image: "/AdaWong.webp"
  },
  {
    name: "Osmund Saddler",
    role: "Manipulative cult leader.",
    image: "/OsmundSaddler.webp"
  },
  {
    name: "Jack Krauser",
    role: "Combat expert mercenary.",
    image: "/JackKrauser.webp"
  },
  {
    name: "Luis Sera",
    role: "Sarcastic allied researcher.",
    image: "/LuisSera.webp"
  }
];

export default function Section4() {
  const viewportConfig = { once: false, amount: 0.2 };

  const titleVariants = {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  return (
    <section className="section-container" style={{ minHeight: '100vh', padding: '100px 20px', overflow: 'hidden' }}>
      
      <motion.h2
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        style={{ fontSize: '3rem', color: 'var(--color-text-main)', marginBottom: '3.5rem', textAlign: 'center' }}
      >
        CHARACTERS
      </motion.h2>

      <motion.div
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, minmax(260px, 320px))',
          gap: '2.5rem',
          justifyContent: 'center',
          width: '100%',
          maxWidth: '1100px'
        }}
      >
        {characters.map((char, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ 
              y: -8, 
              borderColor: 'var(--color-blood-red)', 
              boxShadow: '0 10px 25px rgba(139, 0, 0, 0.35)' 
            }}
            style={{
              background: 'rgba(18, 18, 18, 0.85)',
              border: '1px solid #333',
              borderRadius: '12px',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: '460px', // Altura uniforme para todas las tarjetas
              backdropFilter: 'blur(6px)',
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.6)'
            }}
          >
            {/* Contenedor centrado que muestra la imagen vertical completa sin recortes */}
            <div style={{
              width: '100%',
              height: '320px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              background: 'radial-gradient(circle, rgba(45,45,45,0.4) 0%, rgba(15,15,15,0.8) 100%)',
              borderRadius: '8px',
              padding: '0.5rem',
              overflow: 'hidden'
            }}>
              <img
                src={char.image}
                alt={char.name}
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'contain'
                }}
              />
            </div>

            {/* Textos del personaje */}
            <div style={{ textAlign: 'center', marginTop: '1rem' }}>
              <h3 style={{ color: 'var(--color-accent-red)', fontSize: '1.35rem', marginBottom: '0.35rem' }}>
                {char.name}
              </h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', lineHeight: '1.4' }}>
                {char.role}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}