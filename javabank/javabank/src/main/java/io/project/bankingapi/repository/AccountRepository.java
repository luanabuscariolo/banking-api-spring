package io.project.bankingapi.repository;

import io.project.bankingapi.account.Account;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AccountRepository extends JpaRepository<Account, Long> {
    List<Account> findByCustomersId(Long customerId);
}
