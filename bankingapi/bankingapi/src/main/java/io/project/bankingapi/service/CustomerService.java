package io.project.bankingapi.service;

import io.project.bankingapi.dto.request.CustomerRequest;
import io.project.bankingapi.dto.response.CustomerResponse;

import java.util.List;

public interface CustomerService {
    List<CustomerResponse> findAll();
    CustomerResponse findById(Long id);
    CustomerResponse create(CustomerRequest request);
    CustomerResponse update(Long id, CustomerRequest request);
    void delete(Long id);
}
