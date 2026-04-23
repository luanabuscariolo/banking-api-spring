package io.project.javabank.service;

import io.project.javabank.dto.request.CustomerRequest;
import io.project.javabank.dto.response.CustomerResponse;

import java.util.List;

public interface CustomerService {
    List<CustomerResponse> findAll();
    CustomerResponse findById(Long id);
    CustomerResponse create(CustomerRequest request);
    CustomerResponse update(Long id, CustomerRequest request);
    void delete(Long id);
}
