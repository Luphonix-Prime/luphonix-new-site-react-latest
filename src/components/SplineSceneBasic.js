import React from 'react';
import { SplineScene } from './ui/SplineScene';
import { Card } from './ui/Card';
import { Spotlight } from './ui/Spotlight';

const SplineSceneBasic = () => {
  return (
    <Card className="w-full h-500px relative overflow-hidden"
          style={{
            background: 'rgba(10, 10, 10, 0.96)',
            border: '1px solid var(--border-color)',
            borderRadius: '24px'
          }}>
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      <div className="flex h-full" style={{ display: 'flex', height: '100%' }}>
        {/* Left content */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center" 
             style={{ 
               flex: 1, 
               padding: '2rem', 
               position: 'relative', 
               zIndex: 10, 
               display: 'flex', 
               flexDirection: 'column', 
               justifyContent: 'center' 
             }}>
          <h1 className="text-4xl md:text-5xl font-bold"
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 3rem)',
                fontWeight: 'bold',
                background: 'linear-gradient(180deg, var(--text-primary) 0%, var(--text-secondary) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                lineHeight: '1.2',
                marginBottom: '1rem'
              }}>
            Interactive 3D Blog
          </h1>
          <p className="mt-4 max-w-lg"
             style={{
               marginTop: '1rem',
               color: 'var(--text-secondary)',
               maxWidth: '28rem',
               lineHeight: '1.6',
               fontSize: '1rem'
             }}>
            Bring your blog content to life with beautiful 3D scenes. Create immersive experiences 
            that capture attention and enhance your storytelling.
          </p>
        </div>

        {/* Right content */}
        <div className="flex-1 relative" 
             style={{ 
               flex: 1, 
               position: 'relative',
               minHeight: '400px'
             }}>
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </div>
    </Card>
  );
};

export default SplineSceneBasic;