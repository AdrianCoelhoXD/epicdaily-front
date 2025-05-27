
import React from 'react';
import { FaGithub, FaTwitter, FaDiscord, FaQuestionCircle, FaExclamationTriangle, FaInfoCircle } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const openExternalLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="footer-container">
      <div className="footer-sections">
        {/* Seção Redes Sociais */}
        <div className="footer-section">
          <h3 className="footer-title">Social Media</h3>
          <div className="social-icons">
            <button 
              onClick={() => openExternalLink('https://github.com/seu-usuario')}
              aria-label="GitHub"
              className="social-icon"
            >
              <FaGithub />
            </button>
            <button 
              onClick={() => openExternalLink('https://twitter.com/seu-usuario')}
              aria-label="Twitter"
              className="social-icon"
            >
              <FaTwitter />
            </button>
            <button 
              onClick={() => openExternalLink('https://discord.gg/seu-link')}
              aria-label="Discord"
              className="social-icon"
            >
              <FaDiscord />
            </button>
          </div>
        </div>

        {/* Seção Suporte */}
        <div className="footer-section">
          <h3 className="footer-title">Suporte</h3>
          <ul className="support-links">
            <li>
              <button className="support-link">
                <FaQuestionCircle /> FAQ
              </button>
            </li>
            <li>
              <button className="support-link">
                <FaExclamationTriangle /> Reportar Problema
              </button>
            </li>
            <li>
              <button className="support-link">
                <FaInfoCircle /> Sobre Nós
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-copyright">
        <p>Gerenciamento de Tarefas em RPG Pixel Art © {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;