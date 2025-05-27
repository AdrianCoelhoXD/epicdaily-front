import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../CharacterCreate/CharacterCreate.css'

const CharacterCreate = ({ setUser }) => {
  const navigate = useNavigate()
  const [character, setCharacter] = useState({
    name: '',
    class: 'warrior',
    gender: 'male'
  })

  const classes = [
    { id: 'warrior', name: 'Guerreiro', sprite: '/assets/sprites/warrior.png' },
    { id: 'mage', name: 'Mago', sprite: '/assets/sprites/mage.png' },
    { id: 'archer', name: 'Arqueiro', sprite: '/assets/sprites/archer.png' },
    { id: 'rogue', name: 'Ladino', sprite: '/assets/sprites/rogue.png' }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    setUser({
      name: character.name,
      class: character.class,
      gender: character.gender,
      level: 1,
      xp: 0,
      maxXp: 100,
      coins: 50,
      isAuthenticated: true
    })
    navigate('/')
  }

  return (
    <div className="character-create-container pixel-art">
      <h1>Crie seu Personagem</h1>
      
      <form onSubmit={handleSubmit} className="creation-form pixel-border">
        <div className="input-group">
          <label htmlFor="char-name">Nome do Herói:</label>
          <input
            type="text"
            id="char-name"
            value={character.name}
            onChange={(e) => setCharacter({...character, name: e.target.value})}
            className="pixel-input"
            maxLength="16"
            required
          />
        </div>

        <div className="input-group">
          <label>Classe:</label>
          <div className="class-selection">
            {classes.map((cls) => (
              <div 
                key={cls.id}
                className={`class-option ${character.class === cls.id ? 'selected' : ''}`}
                onClick={() => setCharacter({...character, class: cls.id})}
              >
                <img src={cls.sprite} alt={cls.name} />
                <span>{cls.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="input-group">
          <label>Gênero:</label>
          <div className="gender-selection">
            <button
              type="button"
              className={`gender-btn ${character.gender === 'male' ? 'selected' : ''}`}
              onClick={() => setCharacter({...character, gender: 'male'})}
            >
              Masculino
            </button>
            <button
              type="button"
              className={`gender-btn ${character.gender === 'female' ? 'selected' : ''}`}
              onClick={() => setCharacter({...character, gender: 'female'})}
            >
              Feminino
            </button>
          </div>
        </div>

        <div className="preview">
          <h3>Preview:</h3>
          <div className="character-preview">
            <img 
              src={`/assets/sprites/${character.gender}_${character.class}.png`} 
              alt="Character Preview" 
            />
            <div className="character-info">
              <p>Nome: {character.name || '???'}</p>
              <p>Classe: {classes.find(c => c.id === character.class)?.name || '???'}</p>
            </div>
          </div>
        </div>

        <button type="submit" className="button-rpg big-button">
          Começar Aventura!
        </button>
      </form>
    </div>
  )
}

export default CharacterCreate