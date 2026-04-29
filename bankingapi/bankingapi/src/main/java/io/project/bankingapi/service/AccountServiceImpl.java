package io.project.bankingapi.service;

import io.project.bankingapi.account.Account;
import io.project.bankingapi.account.CheckingAccount;
import io.project.bankingapi.account.SavingsAccount;
import io.project.bankingapi.dto.request.AccountRequest;
import io.project.bankingapi.dto.response.AccountResponse;
import io.project.bankingapi.exception.ResourceNotFoundException;
import io.project.bankingapi.mapper.AccountMapper;
import io.project.bankingapi.model.Customer;
import io.project.bankingapi.repository.AccountRepository;
import io.project.bankingapi.repository.CustomerRepository;
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
        Customer customer = customerRepository.findById(customerId).orElseThrow(()-> new ResourceNotFoundException("Customer not found with id: " + customerId));

        Account account = switch (request.getType().toUpperCase()){
            case "CHECKING" -> new CheckingAccount();
            case "SAVINGS" -> new SavingsAccount();
            default -> throw new IllegalArgumentException("Invalid account type: " + request.getType());
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
            throw new ResourceNotFoundException("Account not found" + accountId);
        accountRepository.deleteById(accountId);
    }

}
