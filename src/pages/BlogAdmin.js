
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useBlog } from '../context/BlogContext';

const BlogAdmin = () => {
  const { state, dispatch } = useBlog();
  const { posts } = state;
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(posts);

  useEffect(() => {
    const filtered = posts.filter(post =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPosts(filtered);
  }, [searchTerm, posts]);

  const handleDelete = (postId) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      dispatch({ type: 'DELETE_POST', payload: postId });
    }
  };

  return (
    <div className="admin-page">
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
            <h1 className="section-title" style={{ textAlign: 'left', marginBottom: 0 }}>Blog Administration</h1>
            <Link 
              to="/blog/create" 
              className="cta-button"
              style={{ display: 'inline-flex', alignItems: 'center' }}
            >
              <i className="fas fa-plus" style={{ marginRight: '8px' }}></i>
              Create New Post
            </Link>
          </div>

          {/* Search Bar */}
          <div style={{ marginBottom: '40px' }}>
            <input
              type="text"
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                maxWidth: '400px',
                padding: '12px 20px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--border-color)',
                borderRadius: '25px',
                color: 'var(--text-primary)',
                fontSize: '14px',
                outline: 'none'
              }}
            />
          </div>

          {/* Posts Table */}
          <div style={{ 
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid var(--border-color)',
            borderRadius: '16px',
            overflow: 'hidden'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '60px 1fr 150px 120px 100px 120px',
              padding: '20px',
              background: 'rgba(0, 212, 170, 0.1)',
              borderBottom: '1px solid var(--border-color)',
              fontSize: '12px',
              fontWeight: '500',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: 'var(--text-secondary)'
            }}>
              <span>ID</span>
              <span>Title</span>
              <span>Author</span>
              <span>Date</span>
              <span>Read Time</span>
              <span>Actions</span>
            </div>

            {filteredPosts.map(post => (
              <div 
                key={post.id}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '60px 1fr 150px 120px 100px 120px',
                  padding: '20px',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                  alignItems: 'center',
                  transition: 'var(--transition-fast)'
                }}
                onMouseEnter={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.02)'}
                onMouseLeave={(e) => e.target.style.background = 'transparent'}
              >
                <span style={{ color: 'var(--text-muted)', fontSize: '12px' }}>#{post.id}</span>
                <div>
                  <Link 
                    to={`/blog/${post.slug}`}
                    style={{ 
                      color: 'var(--text-primary)', 
                      textDecoration: 'none',
                      fontWeight: '300'
                    }}
                  >
                    {post.title}
                  </Link>
                  <div style={{ 
                    color: 'var(--text-muted)', 
                    fontSize: '12px', 
                    marginTop: '4px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                  }}>
                    {post.excerpt.substring(0, 50)}...
                  </div>
                </div>
                <span style={{ color: 'var(--text-secondary)', fontSize: '12px' }}>
                  {post.author || 'Luphonix Team'}
                </span>
                <span style={{ color: 'var(--text-secondary)', fontSize: '12px' }}>
                  {new Date(post.created_at).toLocaleDateString()}
                </span>
                <span style={{ color: 'var(--text-secondary)', fontSize: '12px' }}>
                  {post.read_time} min
                </span>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <Link
                    to={`/blog/edit/${post.id}`}
                    style={{
                      padding: '6px 12px',
                      background: 'rgba(0, 212, 170, 0.1)',
                      color: 'var(--accent-green)',
                      textDecoration: 'none',
                      borderRadius: '6px',
                      fontSize: '11px',
                      border: '1px solid rgba(0, 212, 170, 0.2)',
                      transition: 'var(--transition-fast)'
                    }}
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(post.id)}
                    style={{
                      padding: '6px 12px',
                      background: 'rgba(255, 59, 48, 0.1)',
                      color: '#ff3b30',
                      border: '1px solid rgba(255, 59, 48, 0.2)',
                      borderRadius: '6px',
                      fontSize: '11px',
                      cursor: 'pointer',
                      transition: 'var(--transition-fast)'
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div style={{ textAlign: 'center', padding: '60px 0' }}>
              <h3 style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>No posts found</h3>
              <p style={{ color: 'var(--text-muted)' }}>
                {searchTerm ? 'Try adjusting your search terms' : 'Create your first blog post'}
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogAdmin;
