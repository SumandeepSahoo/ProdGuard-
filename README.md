# 🛡️ ProdGuard — Full Stack Product Management System

ProdGuard is a secure and scalable full-stack application built with **NestJS**, **React**, and **MongoDB** for managing products, categories, and users with role-based access control (RBAC). It features JWT authentication, refresh tokens, a clean frontend interface, and powerful backend APIs.

---

## 📚 Table of Contents
```bash
- [Tech Stack](#tech-stack)
- [Project Setup](#project-setup)
  - [Step 1: Start MongoDB with Docker](#step-1-start-mongodb-with-docker)
  - [Step 2: Set Up Backend (NestJS)](#step-2-set-up-backend-nestjs)
  - [Step 3: Run Frontend (React)](#step-3-run-frontend-react)
- [Features](#features)
  - [Authentication](#authentication)
  - [RBAC Roles](#rbac-roles)
  - [Product & Category Management](#product--category-management)
  - [Filtering & Pagination](#filtering--pagination)
- [Security](#security)
- [Test Users](#test-users)
- [API Docs](#api-docs)
- [License](#license)

---
```
## 🧰 Tech Stack

| Layer      | Technology                  |
|------------|-----------------------------|
| Backend    | NestJS + TypeScript         |
| Frontend   | React + Axios + React Router|
| Database   | MongoDB (via Docker)        |
| ORM        | Prisma                      |
| Auth       | JWT + Refresh Token         |
| Dev Tools  | Docker Compose, Postman     |

---

## ⚙️ Project Setup

### Step 1: Start MongoDB with Docker

```bash
docker compose up -d

Set Up Backend (NestJS)

# Navigate to the backend folder
cd backend

# Install dependencies
npm install

# Generate Prisma client
npm run db:client:generate

# Push Prisma schema to DB
npm run db:push

# Seed the database
npm run db:seed

# OR run all above in one step
npm run setup

# Start the development server
npm run start:dev

```

Run Frontend (React)

```bash
# Navigate to frontend folder
cd frontend

# Install dependencies
npm install

# Start development server
npm start

```

🚀 Features
```bash

🔐 Authentication
Signup / Login via email & password

JWT-based access and refresh tokens

Refresh tokens auto-renew session
```

👥 RBAC Roles

```bash
Role	Permissions
Admin	Full control of users, products, and categories
Manager	Create/update products & categories (no delete)
Client	Read-only access to products and categories
```
📁 Folder Structure Overview

```bash
ProdGuard/
│
├── backend/                 # NestJS app with Prisma
│   ├── src/
│   ├── prisma/
│   ├── docker-compose.yml
│
├── frontend/                # React frontend app
│   ├── src/
│   ├── public/
│
└── README.md
```

