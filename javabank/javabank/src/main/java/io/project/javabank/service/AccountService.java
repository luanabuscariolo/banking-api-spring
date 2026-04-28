package io.project.javabank.service;

import io.project.javabank.dto.request.AccountRequest;
import io.project.javabank.dto.response.AccountResponse;

import java.util.List;

public interface AccountService {
    AccountResponse create(Long customerId, AccountRequest request);
    List<AccountResponse> findByCustomer(Long customerId);
    void delete(Long accountId);
}
