import React from 'react'

const Pet = ({ pet }) => {
  return (
    <div className="pet-container">
      <img 
        src={pet?.image || '/assets/sprites/default-pet.png'} 
        alt="Pet" 
        className="pixel-art pet-sprite"
      />
      <div className="pet-status">
        <div className="pet-happiness">
          Felicidade: {pet?.happiness || 50}/100
        </div>
      </div>
    </div>
  )
}

export default Pet