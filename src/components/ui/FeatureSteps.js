import { motion, AnimatePresence } from "framer-motion";

const FeatureSteps = ({
  features,
  className = "",
  title = "How to get Started",
  autoPlayInterval = 3000
}) => {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 100 / (autoPlayInterval / 100));
      } else {
        setCurrentFeature((prev) => (prev + 1) % features.length);
        setProgress(0);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [progress, features.length, autoPlayInterval]);

  const handleStepClick = (index) => {
    setCurrentFeature(index);
    setProgress(0);
  };

  return (
    <div className={`p-8 md:p-12 ${className}`}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        <h2 style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: '600',
          marginBottom: '60px',
          textAlign: 'center',
          color: 'var(--text-primary)'
        }}>
          {title}
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '40px'
        }}>
          {/* Steps Section */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px'
          }}>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '20px',
                  padding: '20px',
                  borderRadius: '15px',
                  background: index === currentFeature
                    ? 'rgba(0, 212, 170, 0.1)'
                    : 'rgba(255, 255, 255, 0.03)',
                  border: index === currentFeature
                    ? '2px solid var(--accent-green)'
                    : '1px solid rgba(255, 255, 255, 0.1)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                initial={{ opacity: 0.5 }}
                animate={{ opacity: index === currentFeature ? 1 : 0.7 }}
                transition={{ duration: 0.5 }}
                onClick={() => handleStepClick(index)}
              >
                <motion.div
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '2px solid',
                    borderColor: index === currentFeature
                      ? 'var(--accent-green)'
                      : 'rgba(255, 255, 255, 0.3)',
                    background: index === currentFeature
                      ? 'var(--accent-green)'
                      : 'transparent',
                    color: index === currentFeature
                      ? 'var(--primary-bg)'
                      : 'var(--text-secondary)',
                    fontSize: '16px',
                    fontWeight: '600',
                    flexShrink: 0
                  }}
                  animate={{
                    scale: index === currentFeature ? 1.1 : 1,
                    rotate: index === currentFeature ? 360 : 0
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {index <= currentFeature ? "✓" : index + 1}
                </motion.div>

                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    marginBottom: '8px',
                    color: index === currentFeature
                      ? 'var(--accent-green)'
                      : 'var(--text-primary)'
                  }}>
                    {feature.title || feature.step}
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    lineHeight: '1.5',
                    color: 'var(--text-secondary)'
                  }}>
                    {feature.content}
                  </p>

                  {/* Progress bar for current step */}
                  {index === currentFeature && (
                    <motion.div
                      style={{
                        width: '100%',
                        height: '3px',
                        background: 'rgba(255, 255, 255, 0.1)',
                        borderRadius: '2px',
                        marginTop: '15px',
                        overflow: 'hidden'
                      }}
                    >
                      <motion.div
                        style={{
                          height: '100%',
                          background: 'var(--accent-green)',
                          borderRadius: '2px'
                        }}
                        initial={{ width: '0%' }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.1 }}
                      />
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Main Image Section */}
          <div style={{
            position: 'relative',
            height: '400px',
            borderRadius: '20px',
            overflow: 'hidden',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <AnimatePresence mode="wait">
              {features.map(
                (feature, index) =>
                  index === currentFeature && (
                    <motion.div
                      key={index}
                      style={{
                        position: 'absolute',
                        inset: '0',
                        borderRadius: '20px',
                        overflow: 'hidden'
                      }}
                      initial={{ y: 100, opacity: 0, rotateX: -10 }}
                      animate={{ y: 0, opacity: 1, rotateX: 0 }}
                      exit={{ y: -100, opacity: 0, rotateX: 10 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                      <img
                        src={feature.image}
                        alt={feature.step}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.6s ease'
                        }}
                      />
                      <div style={{
                        position: 'absolute',
                        bottom: '0',
                        left: '0',
                        right: '0',
                        height: '60%',
                        background: 'linear-gradient(to top, var(--primary-bg), rgba(0,0,0,0.5), transparent)'
                      }} />

                      {/* Feature info overlay */}
                      <div style={{
                        position: 'absolute',
                        bottom: '20px',
                        left: '20px',
                        right: '20px',
                        color: 'white'
                      }}>
                        <h4 style={{
                          fontSize: '24px',
                          fontWeight: '600',
                          marginBottom: '10px',
                          textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
                        }}>
                          {feature.title || feature.step}
                        </h4>
                        <p style={{
                          fontSize: '16px',
                          lineHeight: '1.5',
                          textShadow: '1px 1px 2px rgba(0,0,0,0.8)'
                        }}>
                          {feature.content}
                        </p>
                      </div>
                    </motion.div>
                  )
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSteps;