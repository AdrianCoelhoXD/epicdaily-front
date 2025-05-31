import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import logo from '../../assets/sprites/logo1.png';
import Footer from '../../components/UI/Footer/Footer';


const Login = ({ setUser }) => {
  const [isLoginView, setIsLoginView] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({
      email: formData.email,
      isAuthenticated: true
    });
  };

  return (
    <div className="login-wrapper">
      <div className="login-container pixel-art">
        <div className="login-header">
          <img src={logo} alt="EpicDaily Logo" className="pixel-logo" />
          <h1>Seja bem-vindo, Aventureiro!</h1>
        </div>

        {isLoginView ? (
          <>
            <form onSubmit={handleSubmit} className="login-form ">
              <div className="input-group">
                <label htmlFor="email">E-mail:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="pixel-input"
                  placeholder='Digite seu e-mail'
                  required
                />
              </div>
              
              <div className="input-group">
                <label htmlFor="password">Senha:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="pixel-input"
                  placeholder='Digite sua senha'
                  required
                />
              </div>

              <button type="submit" className="button-rpg">
                Entrar na Jornada
              </button>
            </form>

            <div className="social-divider">
              <span>ou</span>
            </div>

            <button 
              type="button" 
              className="button-rpg google-button"
              disabled
            >
              <span className="google-icon">G</span>
              Continuar com Google
            </button>

            <div className="login-options">
              <button 
                type="button" 
                className="text-button"
                onClick={() => setIsLoginView(false)}
              >
                Começar Jornada (Registrar)
              </button>
              <button type="button" className="text-button">
                Recuperar Acesso
              </button>
            </div>
          </>
        ) : (
          <form onSubmit={handleSubmit} className="login-form ">
            <div className="input-group">
              <label htmlFor="reg-email">E-mail:</label>
              <input
                type="email"
                id="reg-email"
                name="email"
                className="pixel-input"
                placeholder='Digite seu e-mail'
                required
              />
            </div>
            
            <div className="input-group">
              <label htmlFor="reg-password">Criar Senha:</label>
              <input
                type="password"
                id="reg-password"
                name="password"
                className="pixel-input"
                placeholder='Digite sua senha'
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="reg-confirm">Confirmar Senha:</label>
              <input
                type="password"
                id="reg-confirm"
                name="confirmPassword"
                className="pixel-input"
                placeholder='Confirme sua senha'
                required
              />
            </div>

            <button type="submit" className="button-rpg">
              Registrar
            </button>

            <div className="login-options">
              <button 
                type="button" 
                className="text-button"
                onClick={() => setIsLoginView(true)}
              >
                Já tenho uma conta
              </button>
            </div>
          </form>
        )}

        <div className="login-footer">
          <p>Gerenciamento de Tarefas em RPG Pixel Art</p>
        </div>
        
      </div>
        
    </div>
  );
};

export default Login;