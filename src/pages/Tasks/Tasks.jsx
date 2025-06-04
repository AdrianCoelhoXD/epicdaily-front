import React, { useState } from 'react'
import Task from '../../components/Task/Task'
import '../Tasks/Tasks.css'

const Tasks = ({ user }) => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Fazer exercícios",
      description: "30 minutos de atividade física",
      difficulty: 5,
      xp: 30,
      coins: 15,
      completed: false,
      category: "saúde"
    },
    {
      id: 2,
      title: "Estudar React",
      description: "1 hora de estudo sobre hooks",
      difficulty: 4,
      xp: 40,
      coins: 20,
      completed: false,
      category: "aprendizado"
    },
    {
      id: 3,
      title: "Lavar a louça",
      description: "Limpar toda a louça acumulada",
      difficulty: 1,
      xp: 20,
      coins: 10,
      completed: false,
      category: "casa"
    }
    ,
     {
      id: 4,
      title: "Alimentar pet",
      description: "Cuidar do seu animal de estimação",
      difficulty: 2,
      xp: 20,
      coins: 10,
      completed: false,
      category: "casa"
    }
  ])

  const [xp, setXp] = useState(0)
  const [maxXp, setMaxXp] = useState(100)
  const [level, setLevel] = useState(1)
  const [coins, setCoins] = useState(0)
  const [activeCategory, setActiveCategory] = useState('Todas')

  const completeTask = (taskId) => {
    setTasks(tasks.map(task => {
      if (task.id === taskId && !task.completed) {
        // Atualizar XP
        const newXp = xp + task.xp
        let newLevel = level
        let newMaxXp = maxXp
        let remainingXp = newXp
        
        // Verificar se subiu de nível
        while (remainingXp >= newMaxXp) {
          remainingXp -= newMaxXp
          newLevel += 1
          newMaxXp = Math.floor(newMaxXp * 1.5)
        }
        
        setLevel(newLevel)
        setXp(remainingXp)
        setMaxXp(newMaxXp)
        
        // Atualizar moedas
        setCoins(coins + task.coins)
        
        return { ...task, completed: true }
      }
      return task
    }))
  }

  const filteredTasks = activeCategory === 'Todas' 
    ? tasks 
    : tasks.filter(task => task.category === activeCategory.toLowerCase())

  const categories = ['Todas', 'Saúde', 'Casa', 'Trabalho', 'Aprendizado']

  return (
    <div className="tasks-container pixel-art">
      <header className="tasks-header">
        <h1>Missões Diárias</h1>
        <div className="stats">
          <span>Nível: {level}</span>
          <span>Moedas: {coins}</span>
        </div>
      </header>

      <div className="xp-bar-container">
        <div className="xp-bar" style={{ width: `${(xp/maxXp)*100}%` }}></div>
        <span className="xp-text">Nível {level} - {xp}/{maxXp} XP</span>
      </div>

      <div className="tasks-categories">
        {categories.map(category => (
          <button 
            key={category}
            className={`button-rpg small ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="tasks-list">
        {filteredTasks.map(task => (
          <Task 
            key={task.id}
            task={task}
            onComplete={completeTask}
          />
        ))}
      </div>

      <div className="add-task">
        <button className="button-rpg">
          + Nova Missão
        </button>
      </div>
    </div>
  )
}

export default Tasks