CREATE TABLE customers (
                           id         BIGSERIAL PRIMARY KEY,
                           first_name VARCHAR(100) NOT NULL,
                           last_name  VARCHAR(100) NOT NULL,
                           email      VARCHAR(150) UNIQUE NOT NULL,
                           phone      VARCHAR(20)
);

CREATE TABLE accounts (
                          id           BIGSERIAL PRIMARY KEY,
                          account_type VARCHAR(31) NOT NULL,
                          balance      NUMERIC(15, 2) DEFAULT 0.00
);

CREATE TABLE customer_accounts (
                                   customer_id BIGINT REFERENCES customers(id) ON DELETE CASCADE,
                                   account_id  BIGINT REFERENCES accounts(id)  ON DELETE CASCADE,
                                   PRIMARY KEY (customer_id, account_id)
);

CREATE TABLE transactions (
                              id                BIGSERIAL PRIMARY KEY,
                              type              VARCHAR(20) NOT NULL,
                              amount            NUMERIC(15, 2) NOT NULL,
                              description       VARCHAR(255),
                              created_at        TIMESTAMP DEFAULT NOW(),
                              account_id        BIGINT REFERENCES accounts(id),
                              target_account_id BIGINT REFERENCES accounts(id)
);

CREATE TABLE recipients (
                            id          BIGSERIAL PRIMARY KEY,
                            name        VARCHAR(150) NOT NULL,
                            account_id  BIGINT REFERENCES accounts(id),
                            customer_id BIGINT REFERENCES customers(id) ON DELETE CASCADE
);