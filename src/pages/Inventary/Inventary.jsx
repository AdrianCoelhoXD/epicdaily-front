import React from 'react'
import '../Inventary/Inventary.css'

const Inventory = ({ user }) => {
  const inventoryItems = [
    { id: 1, name: 'Espada de Encantada', type: 'weapon', quantity: 1, image: 'src/assets/sprites/Inventario/Enchanted_Iron_Sword.gif' },
    { id: 2, name: 'Poção de Cura', type: 'potion', quantity: 3, image: 'src/assets/sprites/Inventario/potion-i-bg.png' },
    { id: 3, name: 'Filhote de pet', type: 'animal', quantity: 1, image: 'src/assets/sprites/Pet/pet-default.png'},
    { id: 4, name: 'Baú Lendário', type: 'chest', quantity: 2, image: 'src/assets/sprites/Inventario/Bau.png' },
  ]

  const equippedItems = {
    weapon: 'Espada Elfica',
    armor: 'Coroa do rei',
    accessory: null
  }

  return (
    <div className="inventory-page pixel-art">
      <h1 className="inventory-title">Inventário</h1>
      
      <div className="inventory-container">
        {/* Seção de Itens Equipados */}
        <section className="equipped-section pixel-border">
          <h2>Equipado</h2>
          <div className="equipped-items">
            <div className="equipped-item">
              <h3>Arma</h3>
              {equippedItems.weapon ? (
                <div className="item-card">
                  <img src="src/assets/sprites/Inventario/sword.png" alt={equippedItems.weapon} />
                  <span>{equippedItems.weapon}</span>
                </div>
              ) : (
                <div className="empty-slot">Vazio</div>
              )}
            </div>
            
            <div className="equipped-item">
              <h3>Armadura</h3>
              {equippedItems.armor ? (
                <div className="item-card">
                  <img src="src/assets/sprites/Inventario/coroa.png" alt={equippedItems.armor} />
                  <span>{equippedItems.armor}</span>
                </div>
              ) : (
                <div className="empty-slot">Vazio</div>
              )}
            </div>
          </div>
        </section>

        {/* Seção de Itens do Inventário */}
        <section className="items-section pixel-border">
          <h2>Seus Itens</h2>
          <div className="items-grid">
            {inventoryItems.map(item => (
              <div key={item.id} className="item-card">
                <img src={item.image} alt={item.name} />
                <div className="item-info">
                  <h3>{item.name}</h3>
                  <p>Tipo: {item.type}</p>
                  <p>Quantidade: {item.quantity}</p>
                </div>
                <button className="use-button pixel-button">
                  Usar
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Inventory