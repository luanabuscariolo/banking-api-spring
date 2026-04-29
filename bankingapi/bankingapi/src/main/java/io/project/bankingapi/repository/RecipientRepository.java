package io.project.bankingapi.repository;

import io.project.bankingapi.model.Recipient;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RecipientRepository extends JpaRepository<Recipient, Long> {

    List<Recipient> findByCustomerId(Long customerId);

}
