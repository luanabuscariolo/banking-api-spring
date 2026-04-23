package io.project.javabank.mapper;

import io.project.javabank.account.Account;
import io.project.javabank.dto.request.CustomerRequest;
import io.project.javabank.dto.response.AccountResponse;
import io.project.javabank.dto.response.CustomerResponse;
import io.project.javabank.model.Customer;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class CustomerMapper {

    public CustomerResponse toResponse(Customer customer) {
        List<AccountResponse> accounts = customer.getAccounts().stream()
                .map(this::toAccountResponse)
                .toList();
        return CustomerResponse.builder()
                .id(customer.getId())
                .firstName(customer.getFirstName())
                .lastName(customer.getLastName())
                .email(customer.getEmail())
                .phone(customer.getPhone())
                .totalBalance(customer.getTotalBalance())
                .accounts(accounts)
                .build();
    }

    public Customer toEntity(CustomerRequest request) {
        Customer customer = new Customer();
        customer.setFirstName(request.getFirstName());
        customer.setLastName(request.getLastName());
        customer.setEmail(request.getEmail());
        customer.setPhone(request.getPhone());
        return customer;
    }

    private AccountResponse toAccountResponse(Account account) {
        return AccountResponse.builder()
                .id(account.getId())
                .type(account.getType())
                .balance(account.getBalance())
                .build();
    }
}
