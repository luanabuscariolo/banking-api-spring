INSERT INTO customers (first_name, last_name, email, phone)
VALUES
    ('Ana',   'Santos',   'ana@email.com',   '912000001'),
    ('Bruno', 'Oliveira', 'bruno@email.com', '912000002');

INSERT INTO accounts (account_type, balance) VALUES
                                                 ('CHECKING', 1500.00),
                                                 ('SAVINGS',  2500.00),
                                                 ('CHECKING',  800.00);

INSERT INTO customer_accounts (customer_id, account_id) VALUES
                                                            (1, 1),
                                                            (1, 2),
                                                            (2, 3);