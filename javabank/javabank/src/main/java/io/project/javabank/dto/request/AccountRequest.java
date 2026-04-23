package io.project.javabank.dto.request;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class AccountRequest {

    @NotBlank(message = "Account type is required")
    private String type;  // "CHECKING" ou "SAVINGS"
}