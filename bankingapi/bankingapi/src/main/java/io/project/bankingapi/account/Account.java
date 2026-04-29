package io.project.bankingapi.account;

import io.project.bankingapi.exception.InsufficientFundsException;
import io.project.bankingapi.model.Customer;
import io.project.bankingapi.model.Transaction;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "accounts")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "account_type")
@Getter @Setter
@NoArgsConstructor
public abstract class Account {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private double balance;

    @ManyToMany(mappedBy = "accounts")
    private Set<Customer> customers = new HashSet<>();

    @OneToMany(mappedBy = "account", cascade = CascadeType.ALL)
    private List<Transaction> transactions = new ArrayList<>();
    
    public abstract boolean canWithdraw(double amount);
    public abstract String getType();

    public void credit(double amount) {
        if (amount <= 0) {
            throw new IllegalArgumentException("Amount must be greater than 0.");
        };
        this.balance += amount;
    }

    public void debit(double amount) {
        if (!canWithdraw(amount)) {
            throw new InsufficientFundsException("Insufficient funds.");
        }
        this.balance -= amount;
    }
}
