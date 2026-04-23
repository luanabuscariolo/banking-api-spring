package io.project.javabank.dto.response;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Builder
public class TransactionResponse {
    private Long id;
    private String type;
    private double amount;
    private String description;
    private LocalDateTime createdAt;
    private Long accountId;
    private Long targetAccountId;  // preenchido apenas em transferências
}
