# Banking API

REST API for a banking domain built with Spring Boot, Java 21, PostgreSQL, and Flyway. The project focuses on a clean layered architecture, banking business rules, DTO-based endpoints, and interactive API documentation with Swagger/OpenAPI.

## Overview

This project simulates a small banking backend and was designed as a portfolio piece to demonstrate:

- REST API design with Spring Boot
- layered architecture with controllers, services, repositories, and mappers
- relational persistence with PostgreSQL and JPA/Hibernate
- database versioning with Flyway
- centralized error handling
- API documentation with Swagger/OpenAPI

## Main Features

- Customer management: create, list, update, delete, and search by ID
- Account management: create and list customer accounts, delete accounts
- Transactions: deposit, withdraw, transfer, and account statement
- Recipient listing linked to customers
- Global exception handling for validation and business errors

## Tech Stack

- Java 21
- Spring Boot
- Spring Web
- Spring Data JPA
- Spring Security
- Spring Validation
- PostgreSQL
- Flyway
- Lombok
- SpringDoc OpenAPI / Swagger UI
- Maven

## Project Structure

```text
src/main/java/io/project/bankingapi/
├── account/        # Account hierarchy
├── config/         # Security and OpenAPI configuration
├── controller/     # REST endpoints
├── dto/            # Request and response objects
├── exception/      # Custom exceptions and global handler
├── mapper/         # Entity-to-DTO conversion
├── model/          # JPA entities
├── repository/     # Data access layer
└── service/        # Business rules
```

## Domain Model

Main entities:

- `Customer`
- `Account` (abstract)
- `CheckingAccount`
- `SavingsAccount`
- `Transaction`
- `Recipient`

The account hierarchy allows different withdrawal rules depending on account type.

## Database

The database is managed with Flyway migrations:

- `V1__create_tables.sql`
- `V2__seed_data.sql`
- `V3__fix_column_types.sql`

The application uses PostgreSQL and is configured to run on a dedicated database named `banking_api`.

## How to Run

### Requirements

- Java 21+
- Maven 3.9+
- PostgreSQL running locally

### Run the application

```powershell
.\mvnw.cmd spring-boot:run
```

If you prefer a local Maven installation:

```powershell
mvn spring-boot:run
```

The application runs on:

- `http://localhost:8081`

## API Documentation

With the application running, open:

- Swagger UI: `http://localhost:8081/swagger-ui.html`
- OpenAPI docs: `http://localhost:8081/api-docs`

## Key Endpoints

### Customers

- `GET /api/customers`
- `GET /api/customers/{id}`
- `POST /api/customers`
- `PUT /api/customers/{id}`
- `DELETE /api/customers/{id}`

### Accounts

- `POST /api/customers/{customerId}/accounts`
- `GET /api/customers/{customerId}/accounts`
- `DELETE /api/customers/{customerId}/accounts/{accountId}`

### Transactions

- `POST /api/accounts/{accountId}/deposit`
- `POST /api/accounts/{accountId}/withdraw`
- `POST /api/accounts/{accountId}/transfer`
- `GET /api/accounts/{accountId}/statement`

### Recipients

- `GET /api/customers/{customerId}/recipients`

## Portfolio Highlights

- Clean package organization and layered architecture
- Real persistence with PostgreSQL
- Schema management with Flyway
- DTOs and mappers for API contract control
- Business rules for banking operations
- Global exception handling
- Swagger/OpenAPI for easy review and testing

## Future Improvements

- JWT authentication and authorization
- Automated tests
- Pagination for listing endpoints
- Better validation and business error responses
- Deployment pipeline and cloud hosting
