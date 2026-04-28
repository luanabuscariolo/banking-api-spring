package io.project.javabank.service;

import io.project.javabank.account.Account;
import io.project.javabank.account.CheckingAccount;
import io.project.javabank.account.SavingsAccount;
import io.project.javabank.dto.request.AccountRequest;
import io.project.javabank.dto.response.AccountResponse;
import io.project.javabank.mapper.AccountMapper;
import io.project.javabank.model.Customer;
import io.project.javabank.repository.AccountRepository;
import io.project.javabank.repository.CustomerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(readOnly=true)
public class AccountServiceImpl implements AccountService {

    private final AccountRepository accountRepository;
    private final CustomerRepository customerRepository;
    private final AccountMapper accountMapper;

    @Override
    @Transactional
    public AccountResponse create(Long customerId, AccountRequest request) {
        Customer customer = customerRepository.findById(customerId).orElseThrow(()-> new RuntimeException("Customer not found" + customerId));

        Account account = switch (request.getType().toUpperCase()){
            case "CHECKING" -> new CheckingAccount();
            case "SAVINGS" -> new SavingsAccount();
            default -> throw new RuntimeException("Invalid account type: " + request.getType());
        };

        customer.addAccount(account);
        accountRepository.save(account);

        return accountMapper.toResponse(account);
    }

    @Override
    public List<AccountResponse> findByCustomer(Long customerId) {
        return accountRepository.findByCustomersId(customerId).stream().map(accountMapper::toResponse).toList();
    }

    @Override
    @Transactional
    public void delete(Long accountId) {
        if (!accountRepository.existsById(accountId))
            throw new RuntimeException("Account not found" + accountId);
        accountRepository.deleteById(accountId);
    }

}
