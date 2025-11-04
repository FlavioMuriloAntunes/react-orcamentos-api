import React, { useEffect, useState } from "react";
import "../styles/global.css";

const Deletar = () => {
  const [clientes, setClientes] = useState([]);

  // 🔹 Buscar todos os clientes ao carregar a página
  useEffect(() => {
    fetch("http://localhost:8080/Orcamento")
      .then((res) => res.json())
      .then((data) => setClientes(data))
      .catch((err) => console.error("Erro ao buscar clientes:", err));
  }, []);

  // 🔹 Função para deletar um cliente
  const handleDeletar = async (id) => {
    if (window.confirm("Tem certeza que deseja deletar este cliente?")) {
      try {
        const response = await fetch(`http://localhost:8080/Orcamento/${id}`, {
          method: "DELETE",
        });

        if (response.ok) {
          alert("Cliente deletado com sucesso!");
          // Remove da tabela sem precisar recarregar a página
          setClientes(clientes.filter((cliente) => cliente.id !== id));
        } else {
          alert("Erro ao deletar cliente.");
        }
      } catch (error) {
        console.error("Erro na requisição DELETE:", error);
      }
    }
  };

  return (
    <div className="deletar-page">
      <h2>🗑️ Deletar Clientes</h2>

      {clientes.length === 0 ? (
        <p>Nenhum cliente cadastrado.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Valor (R$)</th>
              <th>Descrição</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((cliente) => (
              <tr key={cliente.id}>
                <td>{cliente.id}</td>
                <td>{cliente.clientenome}</td>
                <td>{cliente.valor.toFixed(2)}</td>
                <td>{cliente.descricao}</td>
                <td>
                  <button
                    onClick={() => handleDeletar(cliente.id)}
                    style={{ backgroundColor: "#e74c3c", color: "white" }}
                  >
                    Deletar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Deletar;
