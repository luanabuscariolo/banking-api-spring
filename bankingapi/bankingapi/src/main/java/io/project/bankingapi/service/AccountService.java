package io.project.bankingapi.service;

import io.project.bankingapi.dto.request.AccountRequest;
import io.project.bankingapi.dto.response.AccountResponse;

import java.util.List;

public interface AccountService {
    AccountResponse create(Long customerId, AccountRequest request);
    List<AccountResponse> findByCustomer(Long customerId);
    void delete(Long accountId);
}
