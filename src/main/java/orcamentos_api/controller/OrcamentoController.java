package orcamentos_api.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import orcamentos_api.model.Orcamento;
import orcamentos_api.repository.OrcamentoRepository;

@RestController
@RequestMapping("/Orcamento")
public class OrcamentoController {

    @Autowired
    private OrcamentoRepository repository;

    // LISTAR TODOS OS ORÇAMENTOS
    @GetMapping
    public ResponseEntity<List<Orcamento>> getALL() {
        List<Orcamento> listOrcamentos = repository.findAll();
        return ResponseEntity.status(HttpStatus.OK).body(listOrcamentos);
    }

    //  BUSCAR ORÇAMENTO POR ID
    @GetMapping("/{id}")
    public ResponseEntity<?> getById(@PathVariable Long id) {
        Optional<Orcamento> orcamento = repository.findById(id);

        if (orcamento.isPresent()) {
            return ResponseEntity.ok(orcamento.get());
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("❌ Orçamento não encontrado.");
        }
    }

    //  CRIAR NOVO ORÇAMENTO
    @PostMapping
    public ResponseEntity<Orcamento> criar(@RequestBody Orcamento orcamento) {
        Orcamento novoOrcamento = repository.save(orcamento);
        return ResponseEntity.status(HttpStatus.CREATED).body(novoOrcamento);
    }

    //  ATUALIZAR ORÇAMENTO EXISTENTE
    @PutMapping("/{id}")
    public ResponseEntity<?> atualizar(@PathVariable Long id, @RequestBody Orcamento novoOrcamento) {
        Optional<Orcamento> orcamentoExistente = repository.findById(id);

        if (orcamentoExistente.isPresent()) {
            Orcamento orcamento = orcamentoExistente.get();
            orcamento.setClientenome(novoOrcamento.getClientenome());
            orcamento.setValor(novoOrcamento.getValor());
            orcamento.setDescricao(novoOrcamento.getDescricao());

            repository.save(orcamento);
            return ResponseEntity.ok(orcamento);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(" Orçamento com ID " + id + " não encontrado.");
        }
    }

    //  DELETAR ORÇAMENTO PELO ID
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deletar(@PathVariable Long id) {
        Optional<Orcamento> orcamento = repository.findById(id);

        if (orcamento.isPresent()) {
            repository.deleteById(id);
            return ResponseEntity.ok(" Orçamento deletado com sucesso!");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(" Orçamento não encontrado.");
        }
    }
}
