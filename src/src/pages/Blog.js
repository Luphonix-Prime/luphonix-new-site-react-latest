
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useBlog } from '../context/BlogContext';
import '../components/BlogAnimations.css';

const Blog = () => {
  const { state } = useBlog();
  const { posts: blogPosts, isAdmin } = state;
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('all');
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);

  // Get all unique tags
  const allTags = ['all', ...new Set(blogPosts.flatMap(post => post.tags))];

  useEffect(() => {
    let filtered = blogPosts;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filter by tag
    if (selectedTag !== 'all') {
      filtered = filtered.filter(post => post.tags.includes(selectedTag));
    }

    setFilteredPosts(filtered);
  }, [searchTerm, selectedTag]);

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
  }, [filteredPosts]);

  return (
    <div className="blog-page">
      {/* Header Section */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <div>
              <h1 className="section-title fade-in" style={{ textAlign: 'left', marginBottom: '10px' }}>Blog & Insights</h1>
              <p className="section-subtitle fade-in" style={{ textAlign: 'left' }}>
                Stay updated with the latest trends, tutorials, and insights from the world of technology
              </p>
            </div>
            {isAdmin && (
              <Link 
                to="/blog/admin" 
                className="cta-button"
                style={{ fontSize: '14px', padding: '12px 20px' }}
              >
                <i className="fas fa-cog" style={{ marginRight: '8px' }}></i>
                Admin Panel
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="section" style={{ paddingTop: 0, paddingBottom: '60px' }}>
        <div className="container">
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '30px', 
            marginBottom: '60px',
            alignItems: 'center'
          }}>
            {/* Search Bar */}
            <div style={{ width: '100%', maxWidth: '500px' }}>
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: '100%',
                  padding: '16px 24px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '50px',
                  color: 'var(--text-primary)',
                  fontSize: '16px',
                  outline: 'none',
                  transition: 'var(--transition-fast)'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--accent-green)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
              />
            </div>

            {/* Tag Filter */}
            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: '15px', 
              justifyContent: 'center' 
            }}>
              {allTags.slice(0, 8).map(tag => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  style={{
                    padding: '8px 20px',
                    background: selectedTag === tag ? 'var(--accent-green)' : 'transparent',
                    color: selectedTag === tag ? 'var(--primary-bg)' : 'var(--text-secondary)',
                    border: `1px solid ${selectedTag === tag ? 'var(--accent-green)' : 'var(--border-color)'}`,
                    borderRadius: '20px',
                    cursor: 'pointer',
                    transition: 'var(--transition-fast)',
                    fontSize: '12px',
                    textTransform: 'capitalize',
                    fontWeight: '300'
                  }}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Floating Particles Background */}
          <div className="floating-particles">
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
          </div>

          {/* Animated Blog Grid */}
          <div className="blog-grid-animated">
            {filteredPosts.map((post, index) => {
              const isNew = new Date(post.created_at) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
              return (
                <div 
                  key={post.id} 
                  className={`blog-card-animated fade-in ${isNew ? 'blog-card-new' : ''}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="blog-image-container">
                    <img 
                      src={post.featured_image} 
                      alt={post.title} 
                      className="blog-image blog-image-animated" 
                    />
                    <div className="reading-progress"></div>
                  </div>
                  <div className="blog-content-animated">
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
                      {post.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span 
                          key={tag} 
                          className="tech-tag tech-tag-animated" 
                          style={{ 
                            fontSize: '10px',
                            animationDelay: `${(index * 0.1) + (tagIndex * 0.05)}s`
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="blog-title blog-title-animated">{post.title}</h3>
                    <p className="blog-excerpt" style={{ 
                      marginBottom: '20px',
                      lineHeight: '1.6',
                      transition: 'color 0.3s ease'
                    }}>
                      {post.excerpt}
                    </p>
                    <div className="blog-meta blog-meta-animated" style={{ marginBottom: '25px' }}>
                      <span style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        marginBottom: '8px',
                        transition: 'transform 0.3s ease'
                      }}>
                        <i className="fas fa-clock" style={{ 
                          marginRight: '8px', 
                          color: 'var(--accent-green)',
                          transition: 'color 0.3s ease'
                        }}></i>
                        {post.read_time} min read
                      </span>
                      <span style={{ 
                        display: 'flex', 
                        alignItems: 'center',
                        transition: 'transform 0.3s ease'
                      }}>
                        <i className="fas fa-calendar" style={{ 
                          marginRight: '8px',
                          color: 'var(--accent-green)',
                          transition: 'color 0.3s ease'
                        }}></i>
                        {new Date(post.created_at).toLocaleDateString()}
                      </span>
                    </div>
                    <Link 
                      to={`/blog/${post.slug}`} 
                      className="cta-button cta-button-animated" 
                      style={{ 
                        fontSize: '12px', 
                        padding: '12px 24px', 
                        position: 'relative',
                        zIndex: 2,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}
                    >
                      Read More
                      <i className="fas fa-arrow-right" style={{ 
                        transition: 'transform 0.3s ease' 
                      }}></i>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredPosts.length === 0 && (
            <div style={{ textAlign: 'center', padding: '80px 0' }}>
              <h3 style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>No articles found</h3>
              <p style={{ color: 'var(--text-muted)' }}>Try adjusting your search terms or selected tags</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;
