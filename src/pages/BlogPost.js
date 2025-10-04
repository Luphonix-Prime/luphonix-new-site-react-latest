import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useBlog } from '../context/BlogContext';

const BlogPost = () => {
  const { slug } = useParams();
  const { state } = useBlog();
  const { posts: blogPosts } = state;
  const post = blogPosts.find(p => p.slug === slug);

  useEffect(() => {
    // Add fade-in animation on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        }
      });
    });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.tags.some(tag => post.tags.includes(tag)))
    .slice(0, 3);

  return (
    <div className="blog-post" style={{ paddingTop: '120px' }}>
      <div className="container" style={{ maxWidth: '1600px', width: '100%', padding: '0 40px' }}>
        <Link to="/blog" className="back-link" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          color: 'var(--accent-green)',
          textDecoration: 'none',
          marginBottom: '40px',
          fontSize: '16px',
          fontWeight: '500',
          transition: 'all 0.3s ease'
        }}>
          <i className="fas fa-arrow-left"></i> Back to Blog
        </Link>

        <article className="blog-post-content">
          <header className="blog-post-header" style={{
            textAlign: 'center',
            marginBottom: '60px',
            paddingBottom: '40px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <div className="blog-post-meta" style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '30px',
              marginBottom: '25px',
              fontSize: '14px',
              color: 'var(--text-secondary)',
              flexWrap: 'wrap'
            }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <i className="fas fa-calendar" style={{ color: 'var(--accent-green)' }}></i>
                {new Date(post.created_at).toLocaleDateString()}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <i className="fas fa-clock" style={{ color: 'var(--accent-green)' }}></i>
                {post.read_time} min read
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <i className="fas fa-user" style={{ color: 'var(--accent-green)' }}></i>
                {post.author?.name || 'Luphonix'}
              </span>
            </div>

            <h1 className="blog-post-title" style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: '700',
              lineHeight: '1.2',
              marginBottom: '25px',
              background: 'linear-gradient(135deg, var(--text-primary), var(--accent-green))',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              {post.title}
            </h1>

            <p className="blog-post-excerpt" style={{
              fontSize: '1.2rem',
              lineHeight: '1.6',
              color: 'var(--text-secondary)',
              maxWidth: '700px',
              margin: '0 auto 30px',
              fontWeight: '300'
            }}>
              {post.excerpt}
            </p>

            <div className="blog-post-tags" style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '12px'
            }}>
              {post.tags.map(tag => (
                <span key={tag} className="tag" style={{
                  background: 'rgba(0, 212, 170, 0.1)',
                  color: 'var(--accent-green)',
                  padding: '8px 16px',
                  borderRadius: '25px',
                  fontSize: '12px',
                  fontWeight: '500',
                  border: '1px solid rgba(0, 212, 170, 0.3)',
                  transition: 'all 0.3s ease'
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </header>

          <div className="blog-post-image" style={{
            marginBottom: '60px',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
          }}>
            <img src={post.featured_image} alt={post.title} style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              transition: 'transform 0.3s ease'
            }} />
          </div>

          <div className="blog-post-body" style={{
            fontSize: '1.1rem',
            lineHeight: '1.8',
            color: 'var(--text-primary)',
            maxWidth: '100%'
          }}>
            <div
              dangerouslySetInnerHTML={{ __html: post.content }}
              style={{
                '& h2': {
                  fontSize: '2rem',
                  fontWeight: '600',
                  marginTop: '50px',
                  marginBottom: '25px',
                  color: 'var(--accent-green)'
                },
                '& h3': {
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  marginTop: '40px',
                  marginBottom: '20px'
                },
                '& p': {
                  marginBottom: '25px',
                  lineHeight: '1.8'
                },
                '& img': {
                  width: '100%',
                  height: 'auto',
                  borderRadius: '12px',
                  margin: '30px 0',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)'
                },
                '& code': {
                  background: 'rgba(255, 255, 255, 0.1)',
                  padding: '2px 8px',
                  borderRadius: '4px',
                  fontSize: '0.9em',
                  color: 'var(--accent-green)'
                },
                '& pre': {
                  background: 'rgba(0, 0, 0, 0.3)',
                  padding: '25px',
                  borderRadius: '12px',
                  overflow: 'auto',
                  margin: '30px 0',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                },
                '& blockquote': {
                  borderLeft: '4px solid var(--accent-green)',
                  paddingLeft: '25px',
                  margin: '30px 0',
                  fontStyle: 'italic',
                  color: 'var(--text-secondary)',
                  fontSize: '1.1em'
                },
                '& ul, & ol': {
                  paddingLeft: '30px',
                  marginBottom: '25px'
                },
                '& li': {
                  marginBottom: '10px',
                  lineHeight: '1.6'
                }
              }}
            />
          </div>

          {/* Author Bio Section */}
          <div style={{
            marginTop: '60px',
            padding: '30px',
            background: 'rgba(255, 255, 255, 0.02)',
            borderRadius: '15px',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <img 
                src={post.author?.avatar || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'} 
                alt={post.author?.name || 'Luphonix'}
                style={{ 
                  width: '80px', 
                  height: '80px', 
                  borderRadius: '50%', 
                  border: '3px solid var(--accent-green)' 
                }}
              />
              <div style={{ flex: 1 }}>
                <h4 style={{ fontSize: '1.3rem', marginBottom: '8px' }}>About {post.author?.name || 'Luphonix'}</h4>
                <p style={{ color: 'var(--accent-green)', marginBottom: '10px', fontSize: '1rem', fontWeight: '500' }}>
                  {post.author?.title || 'Digital Innovation Team'}
                </p>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  Passionate about creating innovative digital solutions and sharing knowledge with the tech community. 
                  Specialized in cutting-edge technologies and best practices.
                </p>
              </div>
            </div>
          </div>

          {/* Related Posts Section */}
          {relatedPosts.length > 0 && (
            <div style={{ marginTop: '80px' }}>
              <h3 style={{
                fontSize: '2rem',
                marginBottom: '40px',
                color: 'var(--accent-green)',
                textAlign: 'center'
              }}>
                Related Articles
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '30px',
                marginBottom: '60px'
              }}>
                {relatedPosts.map(relatedPost => (
                  <div key={relatedPost.id} style={{
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '15px',
                    padding: '25px',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.borderColor = 'rgba(0, 212, 170, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '15px' }}>
                      <img 
                        src={relatedPost.author.avatar} 
                        alt={relatedPost.author.name}
                        style={{ 
                          width: '30px', 
                          height: '30px', 
                          borderRadius: '50%', 
                          border: '1px solid var(--accent-green)' 
                        }}
                      />
                      <div>
                        <div style={{ fontSize: '11px', fontWeight: '500' }}>{relatedPost.author.name}</div>
                        <div style={{ fontSize: '9px', color: 'var(--text-secondary)' }}>{relatedPost.read_time} min read</div>
                      </div>
                    </div>
                    <h4 style={{ 
                      fontSize: '1.1rem', 
                      marginBottom: '12px', 
                      lineHeight: '1.4',
                      color: 'var(--text-primary)'
                    }}>
                      {relatedPost.title}
                    </h4>
                    <p style={{ 
                      color: 'var(--text-secondary)', 
                      fontSize: '0.9rem', 
                      lineHeight: '1.5',
                      marginBottom: '15px' 
                    }}>
                      {relatedPost.excerpt.substring(0, 100)}...
                    </p>
                    <div style={{ display: 'flex', gap: '8px', marginBottom: '15px' }}>
                      {relatedPost.tags.slice(0, 2).map(tag => (
                        <span key={tag} style={{
                          background: 'rgba(0, 212, 170, 0.1)',
                          color: 'var(--accent-green)',
                          padding: '4px 8px',
                          borderRadius: '10px',
                          fontSize: '9px',
                          border: '1px solid rgba(0, 212, 170, 0.2)'
                        }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      to={`/blog/${relatedPost.slug}`}
                      style={{
                        color: 'var(--accent-green)',
                        textDecoration: 'none',
                        fontSize: '14px',
                        fontWeight: '500',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}
                    >
                      Read More <i className="fas fa-arrow-right" style={{ fontSize: '12px' }}></i>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div style={{
            marginTop: '60px',
            padding: '40px',
            background: 'rgba(0, 212, 170, 0.05)',
            borderRadius: '20px',
            border: '1px solid rgba(0, 212, 170, 0.1)',
            textAlign: 'center'
          }}>
            <h3 style={{
              marginBottom: '20px',
              color: 'var(--accent-green)',
              fontSize: '1.5rem'
            }}>
              Enjoyed this article?
            </h3>
            <p style={{
              marginBottom: '30px',
              color: 'var(--text-secondary)',
              fontSize: '1.1rem'
            }}>
              Check out more of our insights and tutorials
            </p>
            <Link
              to="/blog"
              className="cta-button"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              View More Articles
              <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;