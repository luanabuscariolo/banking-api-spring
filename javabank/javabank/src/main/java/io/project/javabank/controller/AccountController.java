package io.project.javabank.controller;

import io.project.javabank.dto.request.AccountRequest;
import io.project.javabank.dto.response.AccountResponse;
import io.project.javabank.service.AccountService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/customers/{customerId}/accounts")
@RequiredArgsConstructor
public class AccountController {

    private final AccountService accountService;

    @PostMapping
    public ResponseEntity<AccountResponse> create(@PathVariable Long customerId,@Valid @RequestBody AccountRequest request){
        return ResponseEntity.status(HttpStatus.CREATED).body(accountService.create(customerId, request));
    }

    @GetMapping
    public ResponseEntity<List<AccountResponse>> findByCustomer(@PathVariable Long customerId){
        return ResponseEntity.ok(accountService.findByCustomer(customerId));
    }

    @DeleteMapping("/{accountId}")
    public ResponseEntity<Void> delete(@PathVariable  Long accountId){
        accountService.delete(accountId);
        return ResponseEntity.noContent().build();
    }
}
