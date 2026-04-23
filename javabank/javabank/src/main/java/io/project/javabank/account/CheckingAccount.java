package io.project.javabank.account;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;

@Entity
@DiscriminatorValue("CHECKING")
public class CheckingAccount extends Account {

    @Override
    public boolean canWithdraw(double amount) {
        return amount > 0 && getBalance() >= amount;
    }

    @Override
    public String getType() {
        return "CHECKING";
    }
}
