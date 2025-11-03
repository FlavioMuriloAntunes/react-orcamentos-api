import React, { useState } from "react";


const Atualizar = () => {
  const [idBusca, setIdBusca] = useState("");       // campo de busca pelo ID
  const [orcamento, setOrcamento] = useState(null); // orçamento encontrado

  // Dados simulados
  const orcamentosFake = [
    { id: 1, nome: "João da Silva", valor: 1200.50, descricao: "Reforma da sala" },
    { id: 2, nome: "Maria Souza", valor: 850.00, descricao: "Pintura externa" },
    { id: 3, nome: "Carlos Lima", valor: 640.75, descricao: "Troca de piso" },
  ];

  // Função para buscar orçamento pelo ID
  const handleBuscar = (e) => {
    e.preventDefault();
    const id = parseInt(idBusca);
    const resultado = orcamentosFake.find(o => o.id === id);
    if (resultado) {
      setOrcamento(resultado);
    } else {
      alert("Orçamento não encontrado!");
      setOrcamento(null);
    }
  };

  // Função para atualizar (simulação)
  const handleAtualizar = (e) => {
    e.preventDefault();
    alert(`Orçamento atualizado: ${orcamento.nome}, R$ ${orcamento.valor.toFixed(2)}`);
    // Aqui você chamaria a API para atualizar o orçamento real
  };

  return (
    <div className="page">
      <h2>Atualizar Orçamento</h2>

      {/* Campo de busca pelo ID */}
      <form onSubmit={handleBuscar}>
        <label>Buscar Orçamento (ID):</label>
        <input 
          type="number" 
          placeholder="Digite o ID do orçamento" 
          value={idBusca}
          onChange={(e) => setIdBusca(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>

      {/* Formulário de atualização aparece só se encontrar orçamento */}
      {orcamento && (
        <form onSubmit={handleAtualizar} style={{ marginTop: "30px" }}>
          <label>Nome do Cliente:</label>
          <input 
            type="text" 
            value={orcamento.nome}
            onChange={(e) => setOrcamento({ ...orcamento, nome: e.target.value })}
          />

          <label>Valor:</label>
          <input 
            type="number" 
            value={orcamento.valor}
            onChange={(e) => setOrcamento({ ...orcamento, valor: parseFloat(e.target.value) })}
          />

          <label>Descrição:</label>
          <textarea 
            value={orcamento.descricao}
            onChange={(e) => setOrcamento({ ...orcamento, descricao: e.target.value })}
          ></textarea>

          <button type="submit">Atualizar</button>
        </form>
      )}
    </div>
  );
};

export default Atualizar;
