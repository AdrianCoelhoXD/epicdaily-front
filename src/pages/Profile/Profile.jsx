import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = ({ user, setUser }) => {
  const navigate = useNavigate();

  return (
    <div className="profile-page">
      <h1>Configurações de Perfil</h1>
      <div className="profile-content">
        {/* Adicione aqui o conteúdo do perfil do usuário */}
        <p>Bem-vindo, {user?.name || 'Usuário'}!</p>
        {/* ... outros elementos do perfil ... */}
      </div>
    </div>
  );
};

export default Profile;