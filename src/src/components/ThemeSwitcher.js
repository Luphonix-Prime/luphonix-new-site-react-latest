
import React, { useState } from 'react';

const ThemeSwitcher = ({ currentTheme, onThemeChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const themes = [
    { id: 'default', name: 'Default', colorClass: 'default' },
    { id: 'cyber-blue', name: 'Cyber Blue', colorClass: 'cyber-blue' },
    { id: 'royal-purple', name: 'Royal Purple', colorClass: 'royal-purple' },
    { id: 'sunset-orange', name: 'Sunset Orange', colorClass: 'sunset-orange' },
    { id: 'matrix-red', name: 'Matrix Red', colorClass: 'matrix-red' }
  ];

  const handleThemeSelect = (themeId) => {
    onThemeChange(themeId);
    setIsOpen(false);
  };

  return (
    <div className="theme-switcher">
      <button 
        className="theme-toggle-btn" 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle theme switcher"
      >
        🎨
      </button>
      
      <div className={`theme-panel ${isOpen ? 'active' : ''}`}>
        <div className="theme-options">
          {themes.map(theme => (
            <div
              key={theme.id}
              className={`theme-option ${currentTheme === theme.id ? 'active' : ''}`}
              onClick={() => handleThemeSelect(theme.id)}
            >
              <div className={`theme-color ${theme.colorClass}`}></div>
              <span className="theme-name">{theme.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
