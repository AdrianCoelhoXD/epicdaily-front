import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/UI/Header/Header';
import Footer from '../../components/UI/Footer/Footer';
import Avatar from '../../components/Avatar/Avatar';
import Pet from '../../components/Pet/Pet';
import './Dashboard.css';

const Dashboard = ({ user }) => {
  return (
    <div className="dashboard-page">
      
      <main className="dashboard-content">
        <div className="dashboard-grid">
          {/* Seção do Personagem */}
          <section className="character-panel">
            <div className="character-info">
              <h2 className="character-title">Seu Aventureiro</h2>
                
              <div className="character-stats">
                <div className="stat-item">
                  <span className="stat-label">Nível</span>
                  <span className="stat-value">{user.level}</span>
                </div>
                
                <div className="stat-item">
                  <span className="stat-label">EXP</span>
                  <div className="xp-container">
                    <div className="xp-bar">
                      <div 
                        className="xp-progress" 
                        style={{ width: `${(user.xp / user.maxXp) * 100}%` }}
                      ></div>
                    </div>
                    <span className="xp-text">{user.xp}/{user.maxXp}</span>
                  </div>
                </div>
                
                <div className="stat-item">
                  <span className="stat-label">Moedas</span>
                  <span className="stat-value coins">
                    <span className="coin-icon">🪙</span>
                    {user.coins || 0}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="character-display">
              <img 
                src={user.avatarImg} 
                alt="Personagem" 
                className="pixel-art character-sprite" 
              />
              <Pet pet={user.pet} />
            </div>
          </section>

          {/* Seção de Ações */}
          <section className="dashboard-actions">
            <Link to="/tasks" className="action-button pixel-button">
              <span className="button-icon">🎯</span>
              <span className="button-text">Missões</span>
            </Link>
            
            <Link to="/shop" className="action-button pixel-button">
              <span className="button-icon">🛒</span>
              <span className="button-text">Loja</span>
            </Link>
          </section>

          {/* Seção de Progresso */}
          <section className="progress-section">
            <div className="progress-card pixel-border">
              <h3 className="progress-title">Progresso Diário</h3>
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ width: `${(user.tasksCompletedToday / user.totalDailyTasks) * 100}%` }}
                ></div>
              </div>
              <p className="progress-text">
                {user.tasksCompletedToday} de {user.totalDailyTasks} tarefas completadas
              </p>
            </div>
          </section>
        </div>
      </main>

    </div>
  );
};

export default Dashboard;