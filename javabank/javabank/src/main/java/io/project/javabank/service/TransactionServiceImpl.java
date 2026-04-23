package io.project.javabank.service;

import io.project.javabank.account.Account;
import io.project.javabank.dto.request.TransactionRequest;
import io.project.javabank.dto.response.TransactionResponse;
import io.project.javabank.model.Transaction;
import io.project.javabank.repository.AccountRepository;
import io.project.javabank.repository.TransactionRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TransactionServiceImpl implements TransactionalService {

    private final AccountRepository accountRepository;
    private final TransactionRepository transactionRepository;

    @Override
    @Transactional
    public TransactionResponse deposit(Long accountId, TransactionRequest request) {
        Account account = findAccount(accountId);
        account.credit(request.getAmount());

        Transaction tx = new Transaction();
        tx.setType(Transaction.Type.DEPOSIT);
        tx.setAmount(request.getAmount());
        tx.setAccount(account);
        tx.setDescription(request.getDescription());

        accountRepository.save(account);
        return toResponse(transactionRepository.save(tx));
    }

    @Override
    @Transactional
    public TransactionResponse withdraw(Long accountId, TransactionRequest request) {
        Account account = findAccount(accountId);
        account.debit(request.getAmount());

        Transaction tx = new Transaction();
        tx.setType(Transaction.Type.WITHDRAWAL);
        tx.setAmount(request.getAmount());
        tx.setAccount(account);
        tx.setDescription(request.getDescription());

        accountRepository.save(account);
        return toResponse(transactionRepository.save(tx));
    }

    @Override
    @Transactional
    public TransactionResponse transfer(Long sourceAccountId, TransactionRequest request) {
        Account source = findAccount(sourceAccountId);
        Account target = findAccount(request.getTargetAccountId());

        source.debit(request.getAmount());
        target.credit(request.getAmount());

        Transaction tx = new Transaction();
        tx.setType(Transaction.Type.TRANSFER);
        tx.setAmount(request.getAmount());
        tx.setAccount(source);
        tx.setTargetAccount(target);
        tx.setDescription(request.getDescription());

        accountRepository.save(source);
        accountRepository.save(target);
        return toResponse(transactionRepository.save(tx));
    }

    @Override
    public List<TransactionResponse> getStatement(Long accountId) {
        findAccount(accountId);
        return transactionRepository.findByAccountIdOrderByCreatedAtDesc(accountId)
                .stream()
                .map(this::toResponse)
                .toList();
    }

    private Account findAccount(Long id) {
        return accountRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Account not found with id: " + id));
    }

    private TransactionResponse toResponse(Transaction tx) {
        return TransactionResponse.builder()
                .id(tx.getId())
                .type(tx.getType().name())
                .amount(tx.getAmount())
                .description(tx.getDescription())
                .createdAt(tx.getCreatedAt())
                .build();
    }
}
