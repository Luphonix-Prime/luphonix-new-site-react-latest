import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useBlog } from '../context/BlogContext';

const AdminToggle = () => {
  const { state, authenticateAdmin, logoutAdmin } = useBlog();
  const { isAdmin } = state;
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleAdminClick = () => {
    if (isAdmin) {
      logoutAdmin();
    } else {
      setShowPasswordModal(true);
      setPassword('');
      setErrorMessage('');
    }
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (authenticateAdmin(password)) {
      setShowPasswordModal(false);
      setPassword('');
      setErrorMessage('');
    } else {
      setErrorMessage('Incorrect password. Please try again.');
      setPassword('');
    }
  };

  const handleModalClose = () => {
    setShowPasswordModal(false);
    setPassword('');
    setErrorMessage('');
  };

  return (
    <>
      <button
        onClick={handleAdminClick}
        style={{
          padding: '8px 12px',
          background: isAdmin ? 'var(--accent-green)' : 'transparent',
          color: isAdmin ? 'var(--primary-bg)' : 'var(--text-secondary)',
          border: `1px solid ${isAdmin ? 'var(--accent-green)' : 'var(--border-color)'}`,
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '12px',
          transition: 'var(--transition-fast)',
          marginRight: '15px'
        }}
        title={isAdmin ? 'Logout Admin' : 'Admin Login'}
      >
        <i className={`fas ${isAdmin ? 'fa-user-shield' : 'fa-lock'}`} style={{ marginRight: '6px' }}></i>
        {isAdmin ? 'Admin' : 'Login'}
      </button>

      {/* Password Modal */}
      {showPasswordModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10000,
          backdropFilter: 'blur(10px)'
        }}>
          <div style={{
            background: 'var(--primary-bg)',
            border: '1px solid var(--border-color)',
            borderRadius: '16px',
            padding: '40px',
            width: '100%',
            maxWidth: '400px',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
              <i className="fas fa-shield-alt" style={{ 
                fontSize: '2rem', 
                color: 'var(--accent-green)', 
                marginBottom: '20px' 
              }}></i>
              <h3 style={{ 
                color: 'var(--text-primary)', 
                marginBottom: '10px',
                fontSize: '1.5rem'
              }}>
                Admin Access
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
                Enter the admin password to continue
              </p>
            </div>

            <form onSubmit={handlePasswordSubmit}>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                autoFocus
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: `1px solid ${errorMessage ? '#ff3b30' : 'var(--border-color)'}`,
                  borderRadius: '8px',
                  color: 'var(--text-primary)',
                  fontSize: '14px',
                  outline: 'none',
                  marginBottom: '10px',
                  transition: 'var(--transition-fast)'
                }}
                onFocus={(e) => e.target.style.borderColor = errorMessage ? '#ff3b30' : 'var(--accent-green)'}
                onBlur={(e) => e.target.style.borderColor = errorMessage ? '#ff3b30' : 'var(--border-color)'}
              />

              {errorMessage && (
                <p style={{ 
                  color: '#ff3b30', 
                  fontSize: '12px', 
                  marginBottom: '20px',
                  textAlign: 'center'
                }}>
                  <i className="fas fa-exclamation-triangle" style={{ marginRight: '6px' }}></i>
                  {errorMessage}
                </p>
              )}

              <div style={{ display: 'flex', gap: '15px' }}>
                <button
                  type="button"
                  onClick={handleModalClose}
                  style={{
                    flex: 1,
                    padding: '12px',
                    background: 'transparent',
                    color: 'var(--text-secondary)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    transition: 'var(--transition-fast)'
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  style={{
                    flex: 1,
                    padding: '12px',
                    background: 'var(--accent-green)',
                    color: 'var(--primary-bg)',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: '500',
                    transition: 'var(--transition-fast)'
                  }}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={closeMobileMenu}>
          <svg className="nav-logo-svg" width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="15" stroke="var(--accent-green)" strokeWidth="1" fill="none"/>
            <text x="16" y="20" textAnchor="middle" fill="var(--accent-green)" fontSize="14" fontWeight="300">L</text>
          </svg>
          Luphonix
        </Link>

        <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <Link
            to="/"
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            Home
          </Link>
          <Link
            to="/services"
            className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            Services
          </Link>
          <Link
            to="/projects"
            className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            Projects
          </Link>
          <Link
            to="/blog"
            className={`nav-link ${location.pathname.startsWith('/blog') ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            Contact
          </Link>
        </div>

        <div
          className={`nav-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="nav-actions">
            <AdminToggle />
          </div>
      </div>
    </nav>
  );
};

export default Navbar;