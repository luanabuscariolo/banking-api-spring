package io.project.bankingapi.controller;

import io.project.bankingapi.dto.request.TransactionRequest;
import io.project.bankingapi.dto.response.TransactionResponse;
import io.project.bankingapi.service.TransactionService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/accounts/{accountId}")
@RequiredArgsConstructor
public class TransactionController {

    private final TransactionService transactionService;

    @PostMapping("/deposit")
    public ResponseEntity<TransactionResponse> deposit(@PathVariable Long accountId, @Valid @RequestBody TransactionRequest request){
        return ResponseEntity.status(HttpStatus.CREATED).body(transactionService.deposit(accountId, request));
    }

    @PostMapping("/withdraw")
    public ResponseEntity<TransactionResponse> withdraw(@PathVariable Long accountId,  @Valid @RequestBody TransactionRequest request){
        return ResponseEntity.status(HttpStatus.CREATED).body(transactionService.withdraw(accountId, request));
    }

    @PostMapping("/transfer")
    public ResponseEntity<TransactionResponse> transfer(@PathVariable Long accountId,  @Valid @RequestBody TransactionRequest request){
        return ResponseEntity.status(HttpStatus.CREATED).body(transactionService.transfer(accountId, request));
    }

    @GetMapping("/statement")
    public ResponseEntity<List<TransactionResponse>> statement(@PathVariable Long accountId){
        return ResponseEntity.ok(transactionService.getStatement(accountId));
    }

}
