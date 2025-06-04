import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css'; 

const Profile = ({ user, setUser }) => {
  const navigate = useNavigate();

  return (
    <div className="profile-page">
      <h1>Configurações de Perfil</h1>
      
      <div className="security-section">
  <h2>Segurança</h2>
  <button onClick={() => {/* Lógica para alterar senha */}}>Alterar Senha</button>
  <button onClick={() => {/* Lógica para autenticação de dois fatores */}}>
    {user?.twoFactorAuth ? 'Desativar' : 'Ativar'} Autenticação de Dois Fatores
  </button>
  <button className="logout-btn" onClick={() => { setUser(null); navigate('/login'); }}>
    Sair da Conta
  </button>
</div>
<div className="preferences-section">
  <h2>Preferências</h2>
  
  <label>
    Idioma:
    <select defaultValue={user?.language || 'pt-BR'}>
      <option value="pt-BR">Português (BR)</option>
      <option value="en-US">English (US)</option>
      <option value="es-ES">Español</option>
    </select>
  </label>
  <label>
    Notificações por Email:
    <input type="checkbox" defaultChecked={user?.emailNotifications || true} />
  </label>
</div>
<div className="advanced-section">
  <h2>Avançado</h2>
  
  <button className="delete-account" onClick={() => {/* Lógica para deletar conta */}}>
    Excluir Minha Conta
  </button>
</div>
    </div>
  );
};


export default Profile;