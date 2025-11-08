package orcamentos_api.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import orcamentos_api.model.Orcamento;
import orcamentos_api.repository.OrcamentoRepository;

@RestController
@RequestMapping("/Orcamento")
public class OrcamentoController {

    @Autowired
    private OrcamentoRepository repository;

    //  listar todos
    @GetMapping
    public ResponseEntity<List<Orcamento>> getALL() {
        List<Orcamento> listOrcamentos = repository.findAll();
        return ResponseEntity.status(HttpStatus.OK).body(listOrcamentos);
    }

    //  criar novo orçamento
    @PostMapping
    public Orcamento criar(@RequestBody Orcamento orcamento) {
        return repository.save(orcamento);
    }

    //  DELETE - deletar orçamento pelo ID
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deletar(@PathVariable Long id) {
        Optional<Orcamento> orcamento = repository.findById(id);

        if (orcamento.isPresent()) {
            repository.deleteById(id);
            return ResponseEntity.ok("Orçamento deletado com sucesso!");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Orçamento não encontrado.");
        }
    }
}
