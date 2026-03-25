import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Logo from '../Logo/Logo';
import UserInfo from '../UserInfo/UserInfo';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import './Header.css';

const Header = () => {
  const { isLoggedIn } = useSelector(state => state.auth);
  const { t } = useTranslation();

  return (
    <header className="header">
      <nav className="header-nav">
        <div className="header-left">
          <Logo />
          
          <ul className="nav-list main-nav">
            {isLoggedIn ? (
              <>
                <li>
                  <NavLink to="/diary" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
                    {t('nav.diary')}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/calculator" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
                    {t('nav.calculator')}
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                   <NavLink to="/login" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
                    {t('nav.login')}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/register" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
                    {t('nav.register')}
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>

        <div className="header-right">
          <div className="header-controls">
             <LanguageSwitcher />
             <ThemeToggle />
          </div>

          {isLoggedIn && (
            <div className="header-user-status">
              <UserInfo />
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
