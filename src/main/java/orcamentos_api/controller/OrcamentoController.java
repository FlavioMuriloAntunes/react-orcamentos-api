package orcamentos_api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import orcamentos_api.model.Orcamento;
import orcamentos_api.repository.OrcamentoRepository;

@RestController // identifica a classe de controle
@RequestMapping("/Orcamento") // parametro que irei passar no http para utilizar as requisiçoes
public class OrcamentoController {

    @Autowired // permite instanciar o objeto abaixo e adicionar todas as injeçoes de
               // dependencias necessárias
    // utilizar o autowired nos deixa instanciar objetos mais facilmente sem
    // burocracias
    private OrcamentoRepository repository;

    @GetMapping
    public ResponseEntity<List<Orcamento>> getALL() {
        List<Orcamento> listOrcamentos = repository.findAll();
        return ResponseEntity.status(HttpStatus.OK).body(listOrcamentos);
    }

    @PostMapping
    public Orcamento criar(@RequestBody Orcamento orcamento) {
        return repository.save(orcamento);
    }

    

}
