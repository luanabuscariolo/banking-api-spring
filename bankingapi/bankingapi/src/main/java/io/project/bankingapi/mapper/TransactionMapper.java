package io.project.bankingapi.mapper;

import io.project.bankingapi.dto.response.TransactionResponse;
import io.project.bankingapi.model.Transaction;
import org.springframework.stereotype.Component;

@Component
public class TransactionMapper {
    public TransactionResponse toResponse(Transaction tx){
        return TransactionResponse.builder()
                .id(tx.getId())
                .type(tx.getType().name())
                .amount(tx.getAmount())
                .description(tx.getDescription())
                .createdAt(tx.getCreatedAt())
                .accountId(tx.getAccount() != null ? tx.getAccount().getId() : null)
                .targetAccountId(tx.getTargetAccount() != null ? tx.getTargetAccount().getId() : null)
                .build();
    }
}
