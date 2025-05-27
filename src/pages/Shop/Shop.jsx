// src/pages/Shop/Shop.jsx
import React, { useState } from 'react'
import '../Shop/Shop.css'

const Shop = ({ user }) => {
  const [activeTab, setActiveTab] = useState('avatar')
  
  const shopItems = {
    avatar: [
      { id: 1, name: 'Capacete de Aço', price: 50, type: 'head', image: '/assets/shop/helmet.png' },
      { id: 2, name: 'Armadura Dourada', price: 100, type: 'body', image: '/assets/shop/armor.png' },
      { id: 3, name: 'Botas Velozes', price: 40, type: 'feet', image: '/assets/shop/boots.png' }
    ],
    pet: [
      { id: 4, name: 'Chapéu de Festa', price: 30, type: 'pet-hat', image: '/assets/shop/party-hat.png' },
      { id: 5, name: 'Coleira Brilhante', price: 25, type: 'pet-collar', image: '/assets/shop/collar.png' }
    ],
    consumables: [
      { id: 6, name: 'Poção de XP', price: 20, type: 'xp-potion', image: '/assets/shop/xp-potion.png' },
      { id: 7, name: 'Doce para Pet', price: 15, type: 'pet-treat', image: '/assets/shop/treat.png' }
    ]
  }

  const buyItem = (item) => {
    // Lógica para comprar item
    if (user.coins >= item.price) {
      alert(`Você comprou ${item.name}!`)
      // Aqui você subtrairia as moedas e adicionaria o item ao inventário
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
          <img src="/assets/shop/coin.png" alt="Moedas" className="coin-icon" />
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
              <img src="/assets/shop/coin.png" alt="Moedas" className="coin-icon" />
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