package io.project.bankingapi.account;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;

@Entity
@DiscriminatorValue("SAVINGS")
public class SavingsAccount extends Account {

    private static final double MINIMUM_BALANCE = 100.0;

    @Override
    public boolean canWithdraw(double amount) {
        return amount > 0 && (getBalance() - amount) >= MINIMUM_BALANCE;
    }

    @Override
    public String getType() {
        return "SAVINGS";
    }
}
