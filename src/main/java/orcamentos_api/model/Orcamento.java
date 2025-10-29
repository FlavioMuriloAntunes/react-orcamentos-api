package orcamentos_api.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity(name = "orcamento") // especifico para minha IDE que está é uma classe de entidade necessario para o spring boot 
// passo o nome da entidade

@Table(name = "orcamento") // ela vai ter uma tabela no banco de dados 
 
public class Orcamento {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO) // vai gerando o valor dos ID automaticamente
    private long id;
    private String clientenome;
    private String descricao;
    private long valor;

    public Orcamento() {
    }
    
    public Orcamento(long id, String clientenome, String descricao, long valor) {
        this.id = id;
        this.clientenome = clientenome;
        this.descricao = descricao;
        this.valor = valor;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getClientenome() {
        return clientenome;
    }

    public void setClientenome(String clientenome) {
        this.clientenome = clientenome;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public long getValor() {
        return valor;
    }

    public void setValor(long valor) {
        this.valor = valor;
    }

}
