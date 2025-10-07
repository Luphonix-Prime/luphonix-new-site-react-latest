
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBlog } from '../context/BlogContext';
import SEOHead from '../components/SEOHead';

const BlogLogin = () => {
  const navigate = useNavigate();
  const { state, authenticateAdmin } = useBlog();
  const { isAdmin } = state;
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Redirect if already logged in
  React.useEffect(() => {
    if (isAdmin) {
      navigate('/blog/admin');
    }
  }, [isAdmin, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');

    // Simulate a small delay for better UX
    setTimeout(() => {
      if (authenticateAdmin(password)) {
        navigate('/blog/admin');
      } else {
        setErrorMessage('Incorrect password. Please try again.');
        setPassword('');
        setIsLoading(false);
      }
    }, 500);
  };

  return (
    <>
      <SEOHead
        title="Blog Admin Login | Luphonix"
        description="Admin login for Luphonix blog management"
        noindex={true}
      />
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 20, 40, 0.95) 100%)',
        padding: '20px'
      }}>
        <div style={{
          background: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid var(--border-color)',
          borderRadius: '20px',
          padding: '50px 40px',
          maxWidth: '450px',
          width: '100%',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 20px 60px rgba(0, 212, 170, 0.1)'
        }}>
          {/* Logo/Title */}
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div style={{
              width: '80px',
              height: '80px',
              margin: '0 auto 20px',
              background: 'linear-gradient(135deg, var(--accent-green), var(--accent-blue))',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '32px'
            }}>
              <i className="fas fa-lock"></i>
            </div>
            <h1 style={{ 
              fontSize: '28px', 
              marginBottom: '10px',
              background: 'linear-gradient(135deg, var(--accent-green), var(--accent-blue))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Blog Admin
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
              Enter your password to access the admin panel
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '30px' }}>
              <label style={{
                display: 'block',
                marginBottom: '10px',
                color: 'var(--text-secondary)',
                fontSize: '14px',
                fontWeight: '500'
              }}>
                Admin Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                required
                disabled={isLoading}
                style={{
                  width: '100%',
                  padding: '14px 18px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: errorMessage ? '1px solid #ff3b30' : '1px solid var(--border-color)',
                  borderRadius: '12px',
                  color: 'var(--text-primary)',
                  fontSize: '15px',
                  outline: 'none',
                  transition: 'var(--transition-fast)',
                  opacity: isLoading ? 0.6 : 1
                }}
                onFocus={(e) => {
                  if (!errorMessage) {
                    e.target.style.border = '1px solid var(--accent-green)';
                  }
                }}
                onBlur={(e) => {
                  if (!errorMessage) {
                    e.target.style.border = '1px solid var(--border-color)';
                  }
                }}
              />
              {errorMessage && (
                <p style={{
                  color: '#ff3b30',
                  fontSize: '13px',
                  marginTop: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  <i className="fas fa-exclamation-circle"></i>
                  {errorMessage}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading || !password}
              style={{
                width: '100%',
                padding: '14px',
                background: isLoading || !password 
                  ? 'rgba(0, 212, 170, 0.3)' 
                  : 'linear-gradient(135deg, var(--accent-green), var(--accent-blue))',
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                fontSize: '15px',
                fontWeight: '500',
                cursor: isLoading || !password ? 'not-allowed' : 'pointer',
                transition: 'var(--transition-fast)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px'
              }}
              onMouseEnter={(e) => {
                if (!isLoading && password) {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 10px 30px rgba(0, 212, 170, 0.3)';
                }
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              {isLoading ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i>
                  Authenticating...
                </>
              ) : (
                <>
                  <i className="fas fa-sign-in-alt"></i>
                  Login to Admin Panel
                </>
              )}
            </button>
          </form>

          {/* Back to Blog Link */}
          <div style={{ 
            marginTop: '30px', 
            paddingTop: '30px', 
            borderTop: '1px solid var(--border-color)',
            textAlign: 'center'
          }}>
            <a
              href="/blog"
              style={{
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                fontSize: '14px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'var(--transition-fast)'
              }}
              onMouseEnter={(e) => {
                e.target.style.color = 'var(--accent-green)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = 'var(--text-secondary)';
              }}
            >
              <i className="fas fa-arrow-left"></i>
              Back to Blog
            </a>
          </div>

          {/* Password Hint */}
          <div style={{
            marginTop: '20px',
            padding: '15px',
            background: 'rgba(0, 212, 170, 0.05)',
            border: '1px solid rgba(0, 212, 170, 0.2)',
            borderRadius: '10px',
            fontSize: '12px',
            color: 'var(--text-muted)',
            textAlign: 'center'
          }}>
            <i className="fas fa-info-circle" style={{ marginRight: '6px' }}></i>
            Default password is set in BlogContext.js
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogLogin;
