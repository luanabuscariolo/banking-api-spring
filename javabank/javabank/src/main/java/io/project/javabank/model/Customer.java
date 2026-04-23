package io.project.javabank.model;

import io.project.javabank.account.Account;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "customers")
@Getter @Setter
@NoArgsConstructor
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "First name is required")
    private String firstName;

    @NotBlank(message = "Last name is required")
    private String lastName;

    @Email(message = "Email should be valid")
    @Column(unique = true)
    private String email;

    private String phone;

    @ManyToMany(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinTable(
            name = "customer_accounts",
            joinColumns = @JoinColumn(name = "customer_id"),
            inverseJoinColumns = @JoinColumn(name = "account_id")
    )
    private Set<Account> accounts = new HashSet<>();

    @OneToMany(mappedBy = "customer", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Recipient> recipients = new ArrayList<>();

    public void addAccount(Account account) {
        this.accounts.add(account);
        account.getCustomers().add(this);
    }

    public void removeAccount(Account account) {
        this.accounts.remove(account);
        account.getCustomers().remove(this);
    }

    public double getTotalBalance() {
        return accounts.stream()
                .mapToDouble(Account::getBalance)
                .sum();
    }
}
