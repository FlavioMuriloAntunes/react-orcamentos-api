import React from 'react';
import "../styles/global.css";




const Cadastrar = () => {
  return (
    <div className="page">
      <h2>Cadastrar Orçamento</h2>
      <form>
        <label>Nome do Cliente:</label>
        <input type="text" placeholder="Digite o nome" />

        <label>Valor:</label>
        <input type="number" placeholder="Digite o valor" />

        <label>Descrição:</label>
        <textarea placeholder="Digite os detalhes do orçamento"></textarea>

        <button type="submit">Salvar</button>
      </form>
    </div>
  );
};

export default Cadastrar;
