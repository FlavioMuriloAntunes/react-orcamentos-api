package orcamentos_api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import orcamentos_api.model.Orcamento;

public interface OrcamentoRepository extends JpaRepository <Orcamento , Long>{ // jpa repository ja popssuis os metodos CRUD Create, Read, Update, Delete) 
// neste case nao precisamos criar os metodos para entrar em contato com o banco de dados por ele ja puxa do jpaRepository
// devo especificar o nome da entidade que vamos utilizar e o tipo do id


}
