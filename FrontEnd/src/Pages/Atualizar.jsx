import React, { useState } from "react";
import "../styles/global.css";

const Atualizar = () => {
  const [idBusca, setIdBusca] = useState("");
  const [orcamento, setOrcamento] = useState(null);
  const [mensagem, setMensagem] = useState("");

  // Buscar orçamento pelo ID
  const handleBuscar = async (e) => {
    e.preventDefault();
    setMensagem("");

    try {
      const response = await fetch(`http://localhost:8080/Orcamento/${idBusca}`);
      if (response.ok) {
        const data = await response.json();
        setOrcamento(data);
      } else {
        setMensagem(" Orçamento não encontrado.");
        setOrcamento(null);
      }
    } catch (error) {
      console.error("Erro ao buscar orçamento:", error);
      setMensagem(" Erro de conexão com a API.");
    }
  };

  // Atualizar orçamento
  const handleAtualizar = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:8080/Orcamento/${orcamento.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orcamento),
      });

      if (response.ok) {
        setMensagem(" Orçamento atualizado com sucesso!");
      } else {
        setMensagem(" Erro ao atualizar o orçamento.");
      }
    } catch (error) {
      console.error("Erro ao atualizar:", error);
      setMensagem(" Erro de conexão com a API.");
    }
  };

  return (
    <div className="page">
      <h2>🔄 Atualizar Orçamento</h2>

      {/* Buscar pelo ID */}
      <form onSubmit={handleBuscar}>
        <label>Buscar Orçamento (ID):</label>
        <input
          type="number"
          placeholder="Digite o ID do orçamento"
          value={idBusca}
          onChange={(e) => setIdBusca(e.target.value)}
          required
        />
        <button type="submit">Buscar</button>
      </form>

      {/* Formulário de atualização */}
      {orcamento && (
        <form onSubmit={handleAtualizar} style={{ marginTop: "30px" }}>
          <label>Nome do Cliente:</label>
          <input
            type="text"
            value={orcamento.clientenome}
            onChange={(e) => setOrcamento({ ...orcamento, clientenome: e.target.value })}
            required
          />

          <label>Valor (R$):</label>
          <input
            type="number"
            value={orcamento.valor}
            onChange={(e) => setOrcamento({ ...orcamento, valor: parseFloat(e.target.value) })}
            required
          />

          <label>Descrição:</label>
          <textarea
            value={orcamento.descricao}
            onChange={(e) => setOrcamento({ ...orcamento, descricao: e.target.value })}
            required
          ></textarea>

          <button type="submit">Atualizar</button>
        </form>
      )}

      {mensagem && <p style={{ marginTop: "10px" }}>{mensagem}</p>}
    </div>
  );
};

export default Atualizar;
