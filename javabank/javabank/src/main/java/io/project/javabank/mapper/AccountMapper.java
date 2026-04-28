package io.project.javabank.mapper;

import io.project.javabank.account.Account;
import io.project.javabank.dto.response.AccountResponse;
import org.springframework.stereotype.Component;

@Component
public class AccountMapper {
    public AccountResponse toResponse(Account  account) {
        return AccountResponse.builder()
                .id(account.getId())
                .type(account.getType())
                .balance(account.getBalance())
                .build();
    }
}
