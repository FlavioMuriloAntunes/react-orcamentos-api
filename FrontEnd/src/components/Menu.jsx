import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
  const navigate = useNavigate();

  return (
    <div className="menu-box">
      <h2 className="menu-title">Sistema de Orçamentos</h2>
      <p className="menu-subtitle">Escolha uma opção abaixo:</p>
      
      <div className="menu-buttons">
        <button onClick={() => navigate('/cadastrar')}>Cadastrar Orçamento</button>
        <button onClick={() => navigate('/listar')}>Listar Orçamentos</button>
        <button onClick={() => navigate('/deletar')}>Deletar Orçamento</button>
        <button onClick={() => navigate('/atualizar')}>Atualizar Orçamento</button>
      </div>
    </div>
  );
};

export default Menu;
