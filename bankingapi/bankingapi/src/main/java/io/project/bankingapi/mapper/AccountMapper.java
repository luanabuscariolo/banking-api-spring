package io.project.bankingapi.mapper;

import io.project.bankingapi.account.Account;
import io.project.bankingapi.dto.response.AccountResponse;
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
