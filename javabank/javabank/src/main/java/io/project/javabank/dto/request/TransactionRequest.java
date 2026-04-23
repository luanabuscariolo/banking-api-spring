package io.project.javabank.dto.request;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import lombok.Data;

@Data
public class TransactionRequest {

    @NotNull
    @Positive(message = "Amount must be positive")
    private double amount;

    private String description;

    private Long targetAccountId;
}
