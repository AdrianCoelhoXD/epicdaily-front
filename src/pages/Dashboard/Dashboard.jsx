import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/UI/Header/Header';
import Footer from '../../components/UI/Footer/Footer';
import Avatar from '../../components/Avatar/Avatar';
import Pet from '../../components/Pet/Pet';
import './Dashboard.css';

import defaultCharacter from '../../assets/sprites/Personagem/Guerreira-default.png';
import defaultPet from '../../assets/sprites/Pet/pet-default.png';
import scrollQuest from '../../assets/sprites/scroll-quest.png';
import potionStore from '../../assets/sprites/potion.png';
import inventaryChest from '../../assets/sprites/treasure-chest.png';



const Dashboard = ({ user }) => {
  const userData = {
    level: 1,
    xp: 50,
    maxXp: 100,
    coins: 500,
    tasksCompletedToday: 1,
    totalDailyTasks: 5,
    ...user, 
    avatarImg: user?.avatarImg || defaultCharacter,
    pet: {
      image: defaultPet,
      name: "Mascote",
      level: 1,
      ...user?.pet
    }
  };

  return (
    <div className="dashboard-page">
      <main className="dashboard-content">
        <div className="dashboard-grid">
          {/* Seção do Personagem */}
          <section className="character-panel pixel-border">
            <div className="character-info">
              <h2 className="character-title">Seu Aventureiro </h2>
                
              <div className="character-stats">
                <div className="stat-item">
                  <span className="stat-label">Nível</span>
                  <span className="stat-value">{userData.level}</span>
                </div>
                
                <div className="stat-item">
                  <span className="stat-label">EXP</span>
                  <div className="xp-container">
                    <div className="xp-bar">
                      <div 
                        className="xp-progress" 
                        style={{ width: `${(userData.xp / userData.maxXp) * 100}%` }}
                      ></div>
                    </div>
                    <span className="xp-text">{userData.xp}/{userData.maxXp}</span>
                  </div>
                </div>
                
                <div className="stat-item">
                  <span className="stat-label">Moedas</span>
                  <span className="stat-value coins">
                    <span className="coin-icon">🪙</span>
                    {userData.coins || 0}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="character-display">
              <img 
                src={userData.avatarImg} 
                alt="Personagem" 
                className="pixel-art character-sprite" 
              />
              <div className="pet-container">
                <img 
                  src={userData.pet.image} 
                  alt={userData.pet.name} 
                  className="pixel-art pet-sprite" 
                />
                <span className="pet-name">{userData.pet.name}</span>
                <span className="pet-level">Nv. {userData.pet.level}</span>
              </div>
            </div>
          </section>

          {/* Seção de Ações */}
          <section className="dashboard-actions">
            <Link to="/tasks" className="action-button pixel-button">
              <span className="button-icon">
              <img src={scrollQuest} alt="Scroll de Quest" />

              </span>
              <span className="button-text">Missões</span>
            </Link>
            
            <Link to="/shop" className="action-button pixel-button">
              <span className="button-icon">
              <img src={potionStore} alt="Loja de porçôes" />
              </span>
              <span className="button-text">Loja</span>
            </Link>
            
            <Link to="/inventory" className="action-button pixel-button">
              <span className="button-icon">
              <img src={inventaryChest} alt="Inventario de bau do tesouro" />
              </span>
              <span className="button-text">Inventário</span>
            </Link>
          </section>

          {/* Seção de Progresso */}
          <section className="progress-section">
            <div className="progress-card pixel-border">
              <h3 className="progress-title">Progresso Diário</h3>
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ width: `${(userData.tasksCompletedToday / userData.totalDailyTasks) * 100}%` }}
                ></div>
              </div>
              <p className="progress-text">
                {userData.tasksCompletedToday} de {userData.totalDailyTasks} tarefas completadas
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;