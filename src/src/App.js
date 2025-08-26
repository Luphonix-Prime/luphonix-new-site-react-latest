import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BlogProvider } from './context/BlogContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import BlogAdmin from './pages/BlogAdmin';
import BlogCreate from './pages/BlogCreate';
import BlogEdit from './pages/BlogEdit';
import Contact from './pages/Contact';
import LanguageDetails from './pages/LanguageDetails';
import ThemeSwitcher from './components/ThemeSwitcher';

function App() {
  const [currentTheme, setCurrentTheme] = useState('default');

  useEffect(() => {
    // Load saved theme
    const savedTheme = localStorage.getItem('selected-theme') || 'default';
    setCurrentTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const handleThemeChange = (theme) => {
    setCurrentTheme(theme);
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('selected-theme', theme);
  };

  return (
    <BlogProvider>
      <Router>
        <div className="App">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/blog/admin" element={
                <ProtectedRoute>
                  <BlogAdmin />
                </ProtectedRoute>
              } />
              <Route path="/blog/create" element={
                <ProtectedRoute>
                  <BlogCreate />
                </ProtectedRoute>
              } />
              <Route path="/blog/edit/:id" element={
                <ProtectedRoute>
                  <BlogEdit />
                </ProtectedRoute>
              } />
              <Route path="/contact" element={<Contact />} />
              <Route path="/language/:language" element={<LanguageDetails />} />
            </Routes>
          </main>
          <Footer />
          <ThemeSwitcher currentTheme={currentTheme} onThemeChange={handleThemeChange} />
        </div>
      </Router>
    </BlogProvider>
  );
}

export default App;