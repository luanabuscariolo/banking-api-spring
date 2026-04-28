package io.project.javabank.service;

import io.project.javabank.dto.request.TransactionRequest;
import io.project.javabank.dto.response.TransactionResponse;

import java.util.List;

public interface TransactionService {
    TransactionResponse deposit(Long accountId, TransactionRequest request);
    TransactionResponse withdraw(Long accountId, TransactionRequest request);
    TransactionResponse transfer(Long sourceAccountId, TransactionRequest request);
    List<TransactionResponse> getStatement(Long accountId);
}
