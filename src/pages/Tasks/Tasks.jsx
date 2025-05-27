import React, { useState } from 'react'
import Task from '../../components/Task/Task'
import '../Tasks/Tasks.css'

const Tasks = ({ user }) => {
  // Estado inicial das tarefas
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Fazer exercícios",
      description: "30 minutos de atividade física",
      difficulty: 3,
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
      difficulty: 2,
      xp: 20,
      coins: 10,
      completed: true,
      category: "casa"
    }
  ])

  const completeTask = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: true } : task
    ))
    // Aqui você adicionaria lógica para atualizar XP e moedas do usuário
  }

  return (
    <div className="tasks-container pixel-art">
      <header className="tasks-header">
        <h1>Missões Diárias</h1>
        <div className="stats">
          <span>Nível: {user?.level || 1}</span>
          <span>Moedas: {user?.coins || 0}</span>
        </div>
      </header>

      <div className="tasks-categories">
        <button className="button-rpg small">Todas</button>
        <button className="button-rpg small">Saúde</button>
        <button className="button-rpg small">Casa</button>
        <button className="button-rpg small">Trabalho</button>
      </div>

      <div className="tasks-list">
        {tasks.map(task => (
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