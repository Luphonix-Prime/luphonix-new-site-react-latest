import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useBlog } from '../context/BlogContext';
import Model3D from '../components/Model3D';
import SEOHead from '../components/SEOHead';
import BackgroundPaths from '../components/BackgroundPaths';
import SplineSceneBasic from '../components/SplineSceneBasic';
import '../components/BlogAnimations.css';

const Blog = () => {
  const { state } = useBlog();
  const { posts: blogPosts, isAdmin } = state;
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('all');
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);

  const blogStructuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Luphonix Tech Blog | Digital Innovation Insights",
    "description": "Latest insights, tutorials, and updates on web development, AI/ML, 3D visualization, and digital innovation trends.",
    "url": "https://luphonix.com/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Luphonix"
    }
  };

  // Get all unique tags
  const allTags = ['all', ...new Set(blogPosts.flatMap(post => post.tags))];
  const categories = ['all', 'Web Dev', 'AI/ML', 'Cybersecurity', 'Blockchain', 'Design'];
  const featuredPosts = blogPosts.filter(post => post.is_featured);

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

    // Filter by tag or category
    if (selectedTag !== 'all') {
      if (categories.includes(selectedTag)) {
        filtered = filtered.filter(post => post.category === selectedTag);
      } else {
        filtered = filtered.filter(post => post.tags.includes(selectedTag));
      }
    }

    setFilteredPosts(filtered);
  }, [searchTerm, selectedTag, blogPosts, categories]);

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
    <>
      <SEOHead
        title="Blog | Luphonix Tech Insights | Web Development & AI Trends"
        description="Latest insights, tutorials, and updates on web development, AI/ML, 3D visualization, digital innovation trends, and technology best practices from Luphonix experts."
        keywords="tech blog, web development blog, AI blog, machine learning insights, digital innovation trends, programming tutorials, technology articles, software development blog"
        canonical="https://luphonix.com/blog"
        structuredData={blogStructuredData}
      />
      <div className="blog-page">
      {/* Header Section with 3D Spline Scene */}
      <section className="section" style={{ padding: '80px 0', position: 'relative' }}>
        <div className="container">
          <SplineSceneBasic />
        </div>
      </section>

      {/* Admin Button Section */}
      {isAdmin && (
        <section className="section" style={{ paddingTop: '20px', paddingBottom: 0 }}>
          <div className="container">
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Link 
                to="/blog/admin" 
                className="cta-button"
                style={{ fontSize: '14px', padding: '12px 20px' }}
              >
                <i className="fas fa-cog" style={{ marginRight: '8px' }}></i>
                Admin Panel
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Featured Articles Section */}
      <section className="section" style={{ paddingTop: '20px', paddingBottom: '40px', position: 'relative', zIndex: 10 }}>
        <div className="container">
          <h2 style={{ 
            fontSize: '2.5rem', 
            textAlign: 'center', 
            marginBottom: '50px',
            background: 'linear-gradient(135deg, var(--text-primary), var(--accent-green))',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Editor's Pick
          </h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
            gap: '30px', 
            marginBottom: '60px' 
          }}>
            {featuredPosts.slice(0, 3).map((post, index) => (
              <div key={post.id} style={{
                background: 'linear-gradient(135deg, rgba(0, 212, 170, 0.1), rgba(10, 10, 10, 0.9))',
                border: '2px solid var(--accent-green)',
                borderRadius: '20px',
                padding: '25px',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '15px',
                  right: '15px',
                  background: 'var(--accent-green)',
                  color: 'var(--primary-bg)',
                  padding: '5px 12px',
                  borderRadius: '20px',
                  fontSize: '10px',
                  fontWeight: 'bold'
                }}>
                  FEATURED
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                  <img 
                    src={post.author?.avatar || ''} 
                    alt={post.author?.name || 'Author'}
                    style={{ 
                      width: '40px', 
                      height: '40px', 
                      borderRadius: '50%', 
                      border: '2px solid var(--accent-green)' 
                    }}
                  />
                  <div>
                    <div style={{ fontWeight: '600', fontSize: '14px' }}>By {post.author?.name || 'Unknown Author'}</div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '12px' }}>{post.author?.title || 'Author'}</div>
                  </div>
                </div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '15px', lineHeight: '1.4' }}>{post.title}</h3>
                <div style={{ marginBottom: '15px' }}>
                  {post.summary_points.map((point, idx) => (
                    <div key={idx} style={{ 
                      display: 'flex', 
                      alignItems: 'flex-start', 
                      gap: '10px', 
                      marginBottom: '8px',
                      fontSize: '14px',
                      color: 'var(--text-secondary)'
                    }}>
                      <i className="fas fa-check" style={{ color: 'var(--accent-green)', marginTop: '2px' }}></i>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
                  <div style={{ display: 'flex', gap: '15px', fontSize: '12px', color: 'var(--text-muted)' }}>
                    <span><i className="fas fa-heart" style={{ color: 'var(--accent-green)' }}></i> {post.likes}</span>
                    <span><i className="fas fa-clock" style={{ color: 'var(--accent-green)' }}></i> {post.read_time} min</span>
                  </div>
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="cta-button"
                    style={{ fontSize: '12px', padding: '8px 16px' }}
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="section" style={{ paddingTop: '20px', paddingBottom: '60px', position: 'relative', zIndex: 10 }}>
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

            {/* Category Filters */}
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
              <h4 style={{ marginBottom: '20px', color: 'var(--text-secondary)', fontSize: '1rem' }}>Categories</h4>
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '15px', 
                justifyContent: 'center',
                marginBottom: '30px'
              }}>
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedTag(category)}
                    style={{
                      padding: '12px 25px',
                      background: selectedTag === category ? 'var(--accent-green)' : 'rgba(255, 255, 255, 0.05)',
                      color: selectedTag === category ? 'var(--primary-bg)' : 'var(--text-primary)',
                      border: `2px solid ${selectedTag === category ? 'var(--accent-green)' : 'rgba(255, 255, 255, 0.1)'}`,
                      borderRadius: '25px',
                      cursor: 'pointer',
                      transition: 'var(--transition-fast)',
                      fontSize: '14px',
                      fontWeight: '500',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Tag Filter */}
            <div style={{ textAlign: 'center' }}>
              <h4 style={{ marginBottom: '20px', color: 'var(--text-secondary)', fontSize: '1rem' }}>Tags</h4>
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '10px', 
                justifyContent: 'center' 
              }}>
                {allTags.slice(1, 15).map(tag => (
                  <button
                    key={tag}
                    onClick={() => setSearchTerm(tag)}
                    style={{
                      padding: '6px 15px',
                      background: 'rgba(0, 212, 170, 0.1)',
                      color: 'var(--accent-green)',
                      border: '1px solid rgba(0, 212, 170, 0.3)',
                      borderRadius: '15px',
                      cursor: 'pointer',
                      transition: 'var(--transition-fast)',
                      fontSize: '11px',
                      fontWeight: '400',
                      textTransform: 'capitalize'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'rgba(0, 212, 170, 0.2)';
                      e.target.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'rgba(0, 212, 170, 0.1)';
                      e.target.style.transform = 'scale(1)';
                    }}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
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
                    {/* Author Info */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                      <img 
                        src={post.author?.avatar || ''} 
                        alt={post.author?.name || 'Author'}
                        style={{ 
                          width: '35px', 
                          height: '35px', 
                          borderRadius: '50%', 
                          border: '2px solid var(--accent-green)' 
                        }}
                      />
                      <div>
                        <div style={{ fontWeight: '600', fontSize: '12px' }}>By {post.author?.name || 'Unknown Author'}</div>
                        <div style={{ color: 'var(--text-secondary)', fontSize: '10px' }}>{post.author?.title || 'Author'}</div>
                      </div>
                      {post.is_trending && (
                        <div style={{
                          background: 'linear-gradient(45deg, #ff6b6b, #ffd93d)',
                          color: 'var(--primary-bg)',
                          padding: '3px 8px',
                          borderRadius: '10px',
                          fontSize: '8px',
                          fontWeight: 'bold',
                          marginLeft: 'auto'
                        }}>
                          TRENDING
                        </div>
                      )}
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '15px' }}>
                      {post.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span 
                          key={tag} 
                          className="tech-tag tech-tag-animated" 
                          style={{ 
                            fontSize: '9px',
                            padding: '4px 8px',
                            animationDelay: `${(index * 0.1) + (tagIndex * 0.05)}s`
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="blog-title blog-title-animated">{post.title}</h3>
                    
                    {/* Summary Points */}
                    <div style={{ marginBottom: '20px' }}>
                      {post.summary_points && post.summary_points.slice(0, 2).map((point, idx) => (
                        <div key={idx} style={{ 
                          display: 'flex', 
                          alignItems: 'flex-start', 
                          gap: '8px', 
                          marginBottom: '8px',
                          fontSize: '13px',
                          color: 'var(--text-secondary)',
                          lineHeight: '1.4'
                        }}>
                          <i className="fas fa-check-circle" style={{ color: 'var(--accent-green)', marginTop: '2px', fontSize: '10px' }}></i>
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                    <div className="blog-meta blog-meta-animated" style={{ 
                      marginBottom: '25px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      fontSize: '12px'
                    }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                        <span style={{ 
                          display: 'flex', 
                          alignItems: 'center',
                          transition: 'transform 0.3s ease'
                        }}>
                          <i className="fas fa-clock" style={{ 
                            marginRight: '6px', 
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
                            marginRight: '6px',
                            color: 'var(--accent-green)',
                            transition: 'color 0.3s ease'
                          }}></i>
                          {new Date(post.created_at).toLocaleDateString()}
                        </span>
                      </div>
                      <button
                        style={{
                          background: 'transparent',
                          border: '1px solid rgba(0, 212, 170, 0.3)',
                          borderRadius: '20px',
                          padding: '6px 12px',
                          color: 'var(--accent-green)',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          fontSize: '11px'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.background = 'rgba(0, 212, 170, 0.1)';
                          e.target.style.transform = 'scale(1.1)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = 'transparent';
                          e.target.style.transform = 'scale(1)';
                        }}
                      >
                        <i className="fas fa-heart" style={{ marginRight: '5px' }}></i>
                        {post.likes}
                      </button>
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

      {/* Animated Background Paths Section */}
      <section style={{ margin: '80px 0', padding: '0 20px' }}>
        <BackgroundPaths 
          title="Explore Our Insights"
          subtitle="Dive deeper into the world of technology and innovation with our curated content"
          showButton={false}
          containerStyle={{ 
            minHeight: '60vh',
            borderRadius: '20px',
            background: 'var(--secondary-bg)',
            overflow: 'hidden'
          }}
        />
      </section>

      {/* Newsletter Subscription CTA */}
      <section className="section" style={{ paddingTop: '0', paddingBottom: '60px' }}>
        <div className="container">
          <div style={{
            background: 'linear-gradient(135deg, rgba(0, 212, 170, 0.1), rgba(26, 26, 26, 0.8))',
            border: '1px solid rgba(0, 212, 170, 0.3)',
            borderRadius: '20px',
            padding: '50px',
            textAlign: 'center',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '20px', color: 'var(--accent-green)' }}>
              Stay ahead in tech
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '30px', fontSize: '1.2rem' }}>
              Subscribe for weekly insights, tutorials, and industry updates
            </p>
            <div style={{ display: 'flex', gap: '15px', maxWidth: '450px', margin: '0 auto' }}>
              <input
                type="email"
                placeholder="Enter your email"
                style={{
                  flex: 1,
                  padding: '15px 25px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '30px',
                  color: 'var(--text-primary)',
                  outline: 'none',
                  fontSize: '16px'
                }}
              />
              <button 
                className="cta-button"
                style={{ padding: '15px 30px', whiteSpace: 'nowrap', fontSize: '16px' }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3D Model Experience Section */}
      <section className="section" style={{ backgroundColor: 'var(--secondary-bg)', padding: '120px 0' }}>
        <div className="container">
          <h2 className="section-title fade-in">3D Blog Visualization</h2>
          <p className="section-subtitle fade-in" style={{ marginBottom: '60px' }}>
            Experience our content through interactive 3D technology
          </p>
          <div className="fade-in" style={{ 
            animationDelay: '0.2s',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <Model3D 
              modelPath="/ganesha_fbx.fbx"
              containerStyle={{
                height: '500px'
              }}
              showBorder={false}
              enableRotation={false}
            />
            <p style={{ 
              color: 'var(--text-secondary)', 
              textAlign: 'center',
              fontSize: '14px',
              fontWeight: '300',
              marginTop: '20px'
            }}>
              Interactive 3D experience showcasing our blog content presentation capabilities
            </p>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default Blog;