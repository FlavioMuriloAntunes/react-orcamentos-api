import React from "react";
import './Listar.css';

const Listar = () => {
  // Dados fictícios
  const clientes = [
    { id: 1, nome: "João da Silva", valor: 1200.50, descricao: "Reforma da sala" },
    { id: 2, nome: "Maria Souza", valor: 850.00, descricao: "Pintura externa" },
    { id: 3, nome: "Carlos Lima", valor: 640.75, descricao: "Troca de piso" },
    { id: 4, nome: "Ana Oliveira", valor: 2300.00, descricao: "Construção de varanda" },
    { id: 5, nome: "Pedro Santos", valor: 1500.25, descricao: "Instalação elétrica" },
  ];

  return (
    <div className="listar-page">
      <h2>Clientes Cadastrados</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Valor (R$)</th>
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map(cliente => (
            <tr key={cliente.id}>
              <td>{cliente.id}</td>
              <td>{cliente.nome}</td>
              <td>{cliente.valor.toFixed(2)}</td>
              <td>{cliente.descricao}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Listar;
