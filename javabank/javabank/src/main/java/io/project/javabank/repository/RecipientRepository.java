package io.project.javabank.repository;

import io.project.javabank.model.Recipient;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RecipientRepository extends JpaRepository<Recipient, Long> {

    List<Recipient> findByCustomerId(Long customerId);

}
