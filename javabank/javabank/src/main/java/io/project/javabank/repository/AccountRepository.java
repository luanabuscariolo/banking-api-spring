package io.project.javabank.repository;

import io.project.javabank.account.Account;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AccountRepository extends JpaRepository<Account, Long> {
    List<Account> findByCustomersId(Long customerId);
}
