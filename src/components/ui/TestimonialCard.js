
import React from 'react';
import { Avatar, AvatarImage } from './Avatar';

export function TestimonialCard({ 
  author,
  text,
  href,
  className
}) {
  const Card = href ? 'a' : 'div';
  
  return (
    <Card
      {...(href ? { 
        href, 
        target: "_blank", 
        rel: "noopener noreferrer",
        style: { textDecoration: 'none' }
      } : {})}
      className={className}
      style={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 'var(--card-radius)',
        background: 'linear-gradient(to bottom, rgba(255,255,255,0.08), rgba(255,255,255,0.03))',
        border: '1px solid rgba(255,255,255,0.1)',
        padding: '24px',
        textAlign: 'left',
        maxWidth: '320px',
        minWidth: '320px',
        transition: 'all 0.3s ease',
        cursor: href ? 'pointer' : 'default',
        backdropFilter: 'blur(10px)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'linear-gradient(to bottom, rgba(255,255,255,0.12), rgba(255,255,255,0.06))';
        e.currentTarget.style.borderColor = 'rgba(0, 212, 170, 0.3)';
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 212, 170, 0.1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'linear-gradient(to bottom, rgba(255,255,255,0.08), rgba(255,255,255,0.03))';
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        marginBottom: '16px'
      }}>
        <Avatar className="h-12 w-12">
          <AvatarImage src={author.avatar} alt={author.name} />
        </Avatar>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start'
        }}>
          <h3 style={{ 
            color: 'var(--text-primary)',
            fontSize: '16px',
            fontWeight: '600',
            lineHeight: '1.2',
            marginBottom: '4px'
          }}>
            {author.name}
          </h3>
          <p style={{ 
            color: 'var(--text-secondary)',
            fontSize: '14px',
            lineHeight: '1.2'
          }}>
            {author.handle}
          </p>
        </div>
      </div>
      <p style={{ 
        color: 'var(--text-secondary)',
        fontSize: 'clamp(14px, 1vw, 15px)',
        lineHeight: '1.6',
        margin: 0
      }}>
        {text}
      </p>
    </Card>
  );
}
