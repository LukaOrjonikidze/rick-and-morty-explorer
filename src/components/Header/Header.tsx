import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import { useLanguage } from '../../hooks/useLanguage';
import './Header.scss';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo" onClick={() => setIsMenuOpen(false)}>
          <img src="/morty-smith.png" width={60} alt="R&M Logo" />
        </Link>

        <div className={`nav-container ${isMenuOpen ? 'open' : ''}`}>
          <nav className="nav">
            <NavLink to="/" onClick={toggleMenu}>{t('navHome')}</NavLink>
            <NavLink to="/characters" onClick={toggleMenu}>{t('navCharacters')}</NavLink>
            <NavLink to="/favorites" onClick={toggleMenu}>{t('navFavorites')}</NavLink>
          </nav>
          <div className="controls">
            <div className="lang-switcher">
              <button
                onClick={() => setLanguage('en')}
                className={language === 'en' ? 'active' : ''}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('ge')}
                className={language === 'ge' ? 'active' : ''}
              >
                GE
              </button>
            </div>
            <button onClick={toggleTheme} className="theme-toggle">
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          </div>
        </div>

        <button
          className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;