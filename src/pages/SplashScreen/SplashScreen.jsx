import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './SplashScreen.css'; 
import bruxinhaGif from '../../assets/sprites/Bruxinha.gif';

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login'); // Redireciona para a página de login
    }, 1000); // Define o tempo 10 segundos

    return () => clearTimeout(timer); 
  }, [navigate]);

  return (
    <div className="splash-container">
      <img 
        src={bruxinhaGif} 
        alt="Bruxinha correndo com pets GIF" 
        className="splash-gif"
        loading="eager" // Prioriza carregamento do GIF
      />
      <h2 className="welcome-text">Bem-vindo ao Epic Daily!</h2>

    </div>
  );
};

export default SplashScreen;