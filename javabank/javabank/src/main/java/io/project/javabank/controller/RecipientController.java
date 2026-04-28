package io.project.javabank.controller;

import io.project.javabank.model.Recipient;
import io.project.javabank.repository.RecipientRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/customers/{customerId}/recipients")
@RequiredArgsConstructor
public class RecipientController {

    private final RecipientRepository recipientRepository;

    @GetMapping
    public ResponseEntity<List<Recipient>> findAll(@PathVariable Long customerId){
        return ResponseEntity.ok(recipientRepository.findByCustomerId(customerId));
    }
}
