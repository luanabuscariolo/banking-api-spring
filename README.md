# 🏦 Banking API

> REST API for a banking domain built with Spring Boot, Java 21, PostgreSQL, and Flyway.  
> The project focuses on a clean layered architecture, banking business rules, DTO-based endpoints, and interactive API documentation with Swagger/OpenAPI.

![Java](https://img.shields.io/badge/Java-21-ED8B00?style=flat&logo=openjdk&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=flat&logo=spring-boot&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=flat&logo=postgresql&logoColor=white)
![Maven](https://img.shields.io/badge/Maven-C71A36?style=flat&logo=apache-maven&logoColor=white)

---

## 📋 Overview

This project simulates a small banking backend and was designed as a portfolio piece to demonstrate:

- REST API design with Spring Boot
- Layered architecture with controllers, services, repositories, and mappers
- Relational persistence with PostgreSQL and JPA/Hibernate
- Database versioning with Flyway
- Centralized error handling
- API documentation with Swagger/OpenAPI

---

## ✨ Main Features

| Area | Operations |
|---|---|
| **Customer Management** | Create, list, update, delete, and search by ID |
| **Account Management** | Create and list customer accounts, delete accounts |
| **Transactions** | Deposit, withdraw, transfer, and account statement |
| **Recipients** | Recipient listing linked to customers |
| **Error Handling** | Global exception handling for validation and business errors |

---

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| **Language** | Java 21 |
| **Framework** | Spring Boot, Spring Web, Spring Data JPA, Spring Security, Spring Validation |
| **Database** | PostgreSQL, Flyway |
| **Utilities** | Lombok |
| **Documentation** | SpringDoc OpenAPI / Swagger UI |
| **Build** | Maven |

---

## 📁 Project Structure

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

---

## 🗂️ Domain Model

Main entities:

- `Customer`
- `Account` *(abstract)*
- `CheckingAccount`
- `SavingsAccount`
- `Transaction`
- `Recipient`

> The account hierarchy allows different withdrawal rules depending on account type.

---

## 🗄️ Database

The database is managed with Flyway migrations:

```
V1__create_tables.sql
V2__seed_data.sql
V3__fix_column_types.sql
```

The application uses PostgreSQL and is configured to run on a dedicated database named `banking_api`.

---

## 🚀 How to Run

### Requirements

- Java 21+
- Maven 3.9+
- PostgreSQL running locally

### Run the application

Using the Maven wrapper:

```powershell
.\mvnw.cmd spring-boot:run
```

Or with a local Maven installation:

```powershell
mvn spring-boot:run
```

The application runs on `http://localhost:8081`.

---

## 📖 API Documentation

With the application running, open:

| Interface | URL |
|---|---|
| Swagger UI | `http://localhost:8081/swagger-ui.html` |
| OpenAPI Docs | `http://localhost:8081/api-docs` |

---

## 🔗 Key Endpoints

<details>
<summary><strong>Customers</strong></summary>

```
GET    /api/customers
GET    /api/customers/{id}
POST   /api/customers
PUT    /api/customers/{id}
DELETE /api/customers/{id}
```

</details>

<details>
<summary><strong>Accounts</strong></summary>

```
POST   /api/customers/{customerId}/accounts
GET    /api/customers/{customerId}/accounts
DELETE /api/customers/{customerId}/accounts/{accountId}
```

</details>

<details>
<summary><strong>Transactions</strong></summary>

```
POST   /api/accounts/{accountId}/deposit
POST   /api/accounts/{accountId}/withdraw
POST   /api/accounts/{accountId}/transfer
GET    /api/accounts/{accountId}/statement
```

</details>

<details>
<summary><strong>Recipients</strong></summary>

```
GET    /api/customers/{customerId}/recipients
```

</details>

---

## 🏆 Portfolio Highlights

- ✅ Clean package organization and layered architecture
- ✅ Real persistence with PostgreSQL
- ✅ Schema management with Flyway
- ✅ DTOs and mappers for API contract control
- ✅ Business rules for banking operations
- ✅ Global exception handling
- ✅ Swagger/OpenAPI for easy review and testing

---

## 🔮 Future Improvements

- [ ] JWT authentication and authorization
- [ ] Automated tests
- [ ] Pagination for listing endpoints
- [ ] Better validation and business error responses
- [ ] Deployment pipeline and cloud hosting
