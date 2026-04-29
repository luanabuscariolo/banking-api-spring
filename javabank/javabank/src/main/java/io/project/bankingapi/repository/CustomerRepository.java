package io.project.bankingapi.repository;

import io.project.bankingapi.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface CustomerRepository extends JpaRepository<Customer, Long> {

    Optional<Customer> findByEmail(String email);

    boolean existsByEmail(String email);
    
    //@query para evitar N+1
    @Query("SELECT c FROM Customer c LEFT JOIN FETCH c.accounts WHERE c.id = :id")
    Optional<Customer> findByIdWithAccounts(Long id);
}
