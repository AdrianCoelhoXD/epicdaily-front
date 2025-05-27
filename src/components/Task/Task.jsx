// src/components/Task/Task.jsx
import React from 'react'

const Task = ({ task, onComplete }) => {
  const difficultyStars = '★'.repeat(task.difficulty) + '☆'.repeat(5 - task.difficulty)
  
  return (
    <div className={`task-card ${task.completed ? 'completed' : ''} pixel-border`}>
      <div className="task-header">
        <h3>{task.title}</h3>
        <span className="difficulty">{difficultyStars}</span>
      </div>
      <p className="task-description">{task.description}</p>
      <div className="task-footer">
        <div className="rewards">
          <span className="xp-reward">+{task.xp} XP</span>
          <span className="coin-reward">{task.coins} Moedas</span>
        </div>
        {!task.completed && (
          <button 
            className="button-rpg complete-btn"
            onClick={() => onComplete(task.id)}
          >
            Completar
          </button>
        )}
      </div>
    </div>
  )
}

export default Task