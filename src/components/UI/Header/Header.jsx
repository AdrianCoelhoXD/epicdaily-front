import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaTasks, FaTrophy, FaShoppingBag, FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa';
import './Header.css';

const Header = ({ title = "EpicDaily", user, setUser }) => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const profileMenuRef = useRef(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate('/login');
  };

  // Fechar o menu quando clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target)) {
        setIsProfileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  
  const handleLogoClick = () => {
    navigate('/dashboard')
  }
  
  return (
    <header className="main-header">
      <h1 className="game-title" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>{title}</h1>

      <nav className="navigation-menu">
        <Link to="/tasks" className="nav-link">
          <FaTasks className="nav-icon" />
          <span>Tarefas</span>
        </Link>
        <Link to="/achievements" className="nav-link">
          <FaTrophy className="nav-icon" />
          <span>Conquistas</span>
        </Link>
        <Link to="/inventory" className="nav-link">
          <FaShoppingBag className="nav-icon" />
          <span>Inventário</span>
        </Link>
        
        <div className="profile-container" ref={profileMenuRef}>
          <button 
            className="nav-link profile-button"
            onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
          >
            <FaUser className="nav-icon" />
            <span>Perfil</span>
          </button>
          
          {isProfileMenuOpen && (
            <div className="profile-dropdown">
              <Link 
                to="/profile" 
                className="dropdown-item"
                onClick={() => setIsProfileMenuOpen(false)}
              >
                <FaCog className="dropdown-icon" />
                <span>Configurações de Perfil</span>
              </Link>
              <button 
                className="dropdown-item"
                onClick={handleLogout}
              >
                <FaSignOutAlt className="dropdown-icon" />
                <span>Sair</span>
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;