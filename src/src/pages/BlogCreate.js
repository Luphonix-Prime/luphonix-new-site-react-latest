
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useBlog } from '../context/BlogContext';

const BlogCreate = () => {
  const navigate = useNavigate();
  const { dispatch } = useBlog();
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    featured_image: '',
    tags: '',
    author: '',
    read_time: 5
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const newPost = {
        id: Date.now(),
        ...formData,
        slug: generateSlug(formData.title),
        tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
        author: formData.author || 'Luphonix Team',
        created_at: new Date().toISOString(),
        read_time: parseInt(formData.read_time) || 5,
        featured_image: formData.featured_image || 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      };

      dispatch({ type: 'ADD_POST', payload: newPost });
      navigate('/blog/admin');
    } catch (error) {
      console.error('Error creating post:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="create-post-page">
      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ marginBottom: '40px' }}>
            <Link 
              to="/blog/admin" 
              style={{ 
                color: 'var(--accent-green)', 
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                marginBottom: '30px',
                fontSize: '14px'
              }}
            >
              <i className="fas fa-arrow-left" style={{ marginRight: '10px' }}></i>
              Back to Admin
            </Link>
            
            <h1 className="section-title" style={{ textAlign: 'left', marginBottom: '10px' }}>
              Create New Blog Post
            </h1>
            <p style={{ color: 'var(--text-secondary)' }}>
              Fill in the details below to create a new blog post
            </p>
          </div>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            {/* Title */}
            <div>
              <label style={{ 
                display: 'block', 
                marginBottom: '8px', 
                color: 'var(--text-primary)',
                fontSize: '14px',
                fontWeight: '300'
              }}>
                Post Title *
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                placeholder="Enter the blog post title"
                style={{
                  width: '100%',
                  padding: '16px 20px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '12px',
                  color: 'var(--text-primary)',
                  fontSize: '16px',
                  outline: 'none',
                  transition: 'var(--transition-fast)'
                }}
              />
            </div>

            {/* Excerpt */}
            <div>
              <label style={{ 
                display: 'block', 
                marginBottom: '8px', 
                color: 'var(--text-primary)',
                fontSize: '14px',
                fontWeight: '300'
              }}>
                Excerpt *
              </label>
              <textarea
                name="excerpt"
                value={formData.excerpt}
                onChange={handleChange}
                required
                placeholder="Brief description of the post"
                rows={3}
                style={{
                  width: '100%',
                  padding: '16px 20px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '12px',
                  color: 'var(--text-primary)',
                  fontSize: '16px',
                  outline: 'none',
                  resize: 'vertical',
                  minHeight: '80px',
                  transition: 'var(--transition-fast)'
                }}
              />
            </div>

            {/* Content */}
            <div>
              <label style={{ 
                display: 'block', 
                marginBottom: '8px', 
                color: 'var(--text-primary)',
                fontSize: '14px',
                fontWeight: '300'
              }}>
                Content *
              </label>
              <textarea
                name="content"
                value={formData.content}
                onChange={handleChange}
                required
                placeholder="Write your blog post content here..."
                rows={12}
                style={{
                  width: '100%',
                  padding: '20px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '12px',
                  color: 'var(--text-primary)',
                  fontSize: '16px',
                  outline: 'none',
                  resize: 'vertical',
                  minHeight: '300px',
                  lineHeight: '1.6',
                  transition: 'var(--transition-fast)'
                }}
              />
            </div>

            {/* Row for Featured Image and Author */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '8px', 
                  color: 'var(--text-primary)',
                  fontSize: '14px',
                  fontWeight: '300'
                }}>
                  Featured Image URL
                </label>
                <input
                  type="url"
                  name="featured_image"
                  value={formData.featured_image}
                  onChange={handleChange}
                  placeholder="https://example.com/image.jpg"
                  style={{
                    width: '100%',
                    padding: '16px 20px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '12px',
                    color: 'var(--text-primary)',
                    fontSize: '16px',
                    outline: 'none',
                    transition: 'var(--transition-fast)'
                  }}
                />
              </div>

              <div>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '8px', 
                  color: 'var(--text-primary)',
                  fontSize: '14px',
                  fontWeight: '300'
                }}>
                  Author
                </label>
                <input
                  type="text"
                  name="author"
                  value={formData.author}
                  onChange={handleChange}
                  placeholder="Author name (optional)"
                  style={{
                    width: '100%',
                    padding: '16px 20px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '12px',
                    color: 'var(--text-primary)',
                    fontSize: '16px',
                    outline: 'none',
                    transition: 'var(--transition-fast)'
                  }}
                />
              </div>
            </div>

            {/* Row for Tags and Read Time */}
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '20px' }}>
              <div>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '8px', 
                  color: 'var(--text-primary)',
                  fontSize: '14px',
                  fontWeight: '300'
                }}>
                  Tags (comma-separated)
                </label>
                <input
                  type="text"
                  name="tags"
                  value={formData.tags}
                  onChange={handleChange}
                  placeholder="React, JavaScript, Web Development"
                  style={{
                    width: '100%',
                    padding: '16px 20px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '12px',
                    color: 'var(--text-primary)',
                    fontSize: '16px',
                    outline: 'none',
                    transition: 'var(--transition-fast)'
                  }}
                />
              </div>

              <div>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '8px', 
                  color: 'var(--text-primary)',
                  fontSize: '14px',
                  fontWeight: '300'
                }}>
                  Read Time (minutes)
                </label>
                <input
                  type="number"
                  name="read_time"
                  value={formData.read_time}
                  onChange={handleChange}
                  min="1"
                  max="60"
                  style={{
                    width: '100%',
                    padding: '16px 20px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '12px',
                    color: 'var(--text-primary)',
                    fontSize: '16px',
                    outline: 'none',
                    transition: 'var(--transition-fast)'
                  }}
                />
              </div>
            </div>

            {/* Submit Button */}
            <div style={{ display: 'flex', gap: '15px', justifyContent: 'flex-end', paddingTop: '20px' }}>
              <Link 
                to="/blog/admin"
                style={{
                  padding: '16px 30px',
                  background: 'transparent',
                  color: 'var(--text-secondary)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  fontSize: '16px',
                  transition: 'var(--transition-fast)',
                  display: 'inline-flex',
                  alignItems: 'center'
                }}
              >
                Cancel
              </Link>
              <button
                type="submit"
                disabled={isSubmitting}
                className="cta-button"
                style={{
                  padding: '16px 30px',
                  fontSize: '16px',
                  opacity: isSubmitting ? 0.7 : 1,
                  cursor: isSubmitting ? 'not-allowed' : 'pointer'
                }}
              >
                {isSubmitting ? 'Creating...' : 'Create Post'}
                {!isSubmitting && <i className="fas fa-plus" style={{ marginLeft: '10px' }}></i>}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default BlogCreate;
