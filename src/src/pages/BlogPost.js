import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useBlog } from '../context/BlogContext';

const BlogPost = () => {
  const { slug } = useParams();
  const { state } = useBlog();
  const { posts: blogPosts, isAdmin } = state;
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
      <div className="container" style={{ maxWidth: '900px' }}>
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
                {post.author || 'Luphonix Team'}
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

          <div style={{
            marginTop: '80px',
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