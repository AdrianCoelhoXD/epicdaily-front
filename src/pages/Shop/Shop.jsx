import React, { useState } from 'react'
import '../Shop/Shop.css'

const Shop = ({ user }) => {
  const [activeTab, setActiveTab] = useState('avatar')
  
  const shopItems = {
    avatar: [
      { id: 1, name: 'Disponivel em breve', price: 0, image: 'src/assets/sprites/Loja/embreve.png' },
      { id: 2, name: 'Disponivel em breve', price: 0, image: 'src/assets/sprites/Loja/embreve.png' },
      { id: 3, name: 'Disponivel em breve', price: 0, image: 'src/assets/sprites/Loja/embreve.png' },
      { id: 4, name: 'Disponivel em breve', price: 0, image: 'src/assets/sprites/Loja/embreve.png' },

      
    ],
    pet: [
      { id: 5, name: 'Chicken Cleide', price: 25, type:'animal', image: 'src/assets/sprites/Loja/galinha-pet.png' },
      { id: 6, name: 'Dog Ralf', price: 100, type:'animal', image: 'src/assets/sprites/Loja/dog-removebg-preview.png' },
    ],
    consumables: [
      { id: 6, name: 'Poção de vida', price: 20, type: 'life-potion', image: 'src/assets/sprites/Inventario/potion-i-bg.png' },
    ]
  }

  const buyItem = (item) => {
    // Lógica para comprar item
    if (user.coins >= item.price) {
      alert(`Você comprou ${item.name}!`)
      // Subtrairia as moedas e adicionaria o item ao inventário
    } else {
      alert('Moedas insuficientes!')
    }
  }

  return (
    <div className="shop-container pixel-art">
      <header className="shop-header">
        <h1>Loja do Aventureiro</h1>
        <div className="coins-display">
          <span className="coins-amount">{user?.coins || 0}</span>
          <img src="src/assets/sprites/Loja/Moeda.png" alt="Moedas" className="coin-icon" />
          <p>Moedas atuais</p>
        </div>
      </header>

      <div className="shop-tabs">
        <button 
          className={`tab-btn ${activeTab === 'avatar' ? 'active' : ''}`}
          onClick={() => setActiveTab('avatar')}
        >
          Avatar
        </button>
        <button 
          className={`tab-btn ${activeTab === 'pet' ? 'active' : ''}`}
          onClick={() => setActiveTab('pet')}
        >
          Pet
        </button>
        <button 
          className={`tab-btn ${activeTab === 'consumables' ? 'active' : ''}`}
          onClick={() => setActiveTab('consumables')}
        >
          Consumíveis
        </button>
      </div>

      <div className="shop-items">
        {shopItems[activeTab].map(item => (
          <div key={item.id} className="shop-item pixel-border">
            <img src={item.image} alt={item.name} className="item-image" />
            <h3 className="item-name">{item.name}</h3>
            <div className="item-price">
              <span>{item.price}</span>
              <img src="src/assets/sprites/Loja/Moeda.png" alt="Moedas" className="coin-icon" />
            </div>
            <button 
              className="button-rpg buy-btn"
              onClick={() => buyItem(item)}
            >
              Comprar
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Shop