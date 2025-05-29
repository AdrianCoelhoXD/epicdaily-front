import React from 'react';
import '../Achievements/Achievements.css'; 

const Achievements = ({ user }) => {
  // Definição das conquistas possíveis
  const allAchievements = [
    {
      id: 1,
      name: "Primeiros Passos",
      description: "Complete sua primeira tarefa",
      icon: "🎮",
      unlocked: user?.completedTasks > 0,
      xpReward: 10
    },
    {
      id: 2,
      name: "Forja de Hábitos",
      description: "Complete 5 tarefas no mesmo dia",
      icon: "⚒️",
      unlocked: user?.dailyCompletedTasks >= 5,
      xpReward: 30
    },
    {
      id: 3,
      name: "Mestre da Produtividade",
      description: "Complete 100 tarefas no total",
      icon: "🏆",
      unlocked: user?.totalCompletedTasks >= 100,
      xpReward: 100
    },
    {
      id: 4,
      name: "Comprador Iniciante",
      description: "Compre seu primeiro item na loja",
      icon: "🛍️",
      unlocked: user?.itemsBought > 0,
      xpReward: 20
    },
    {
      id: 5,
      name: "Colecionador",
      description: "Tenha 10 itens no inventário",
      icon: "🎒",
      unlocked: user?.inventory?.length >= 10,
      xpReward: 50
    },
    {
      id: 6,
      name: "Estrategista",
      description: "Complete todas as tarefas de um dia",
      icon: "🧠",
      unlocked: user?.perfectDays > 0,
      xpReward: 40
    },
    {
      id: 7,
      name: "Veterano",
      description: "Use o aplicativo por 7 dias consecutivos",
      icon: "🗓️",
      unlocked: user?.consecutiveDays >= 7,
      xpReward: 70
    }
  ];

  // Calcula conquistas desbloqueadas e XP total ganho
  const unlockedAchievements = allAchievements.filter(a => a.unlocked);
  const totalXpEarned = unlockedAchievements.reduce((sum, a) => sum + a.xpReward, 0);

  return (
    <div className="achievements-container pixel-border">
      <h1 className="pixel-title">🏆 Conquistas</h1>
      
      <div className="stats-bar pixel-bg">
        <p>Desbloqueadas: {unlockedAchievements.length}/{allAchievements.length}</p>
        <p>XP Total: {totalXpEarned}</p>
      </div>
      
      <div className="achievements-grid">
        {allAchievements.map(achievement => (
          <div 
            key={achievement.id} 
            className={`achievement-card ${achievement.unlocked ? 'unlocked' : 'locked'}`}
          >
            <div className="achievement-icon">{achievement.icon}</div>
            <div className="achievement-info">
              <h3>{achievement.name}</h3>
              <p>{achievement.description}</p>
              {achievement.unlocked ? (
                <span className="xp-reward">+{achievement.xpReward} XP</span>
              ) : (
                <span className="locked-text">Bloqueada</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;