package io.project.bankingapi.dto.response;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class AccountResponse {
    private Long id;
    private String type;
    private double balance;
}
