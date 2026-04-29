package io.project.bankingapi.service;

import io.project.bankingapi.account.Account;
import io.project.bankingapi.dto.request.TransactionRequest;
import io.project.bankingapi.dto.response.TransactionResponse;
import io.project.bankingapi.exception.ResourceNotFoundException;
import io.project.bankingapi.mapper.TransactionMapper;
import io.project.bankingapi.model.Transaction;
import io.project.bankingapi.repository.AccountRepository;
import io.project.bankingapi.repository.TransactionRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TransactionServiceImpl implements TransactionService {

    private final AccountRepository accountRepository;
    private final TransactionRepository transactionRepository;
    private final TransactionMapper transactionMapper;

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
        return transactionMapper.toResponse(transactionRepository.save(tx));
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
        return transactionMapper.toResponse(transactionRepository.save(tx));
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
        return transactionMapper.toResponse(transactionRepository.save(tx));
    }

    @Override
    public List<TransactionResponse> getStatement(Long accountId) {
        findAccount(accountId);
        return transactionRepository.findByAccountIdOrderByCreatedAtDesc(accountId)
                .stream()
                .map(transactionMapper::toResponse)
                .toList();
    }

    private Account findAccount(Long id) {
        return accountRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Account not found with id: " + id));
    }
}
