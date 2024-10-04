# NestJS Template with JWT Authentication, Authorization, and MongoDB

![NestJS](https://nestjs.com/img/logo_text.svg)
![MongoDB](https://www.mongodb.com/assets/images/global/favicon.ico)

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Architecture](#architecture)
- [Prerequisites](#prerequisites)

## Introduction

Welcome to the **NestJS Template** repository! This project serves as a comprehensive starter template for building robust and scalable applications using [NestJS](https://nestjs.com/). It includes essential features such as **JWT Authentication**, **Role-Based Authorization**, **MongoDB Integration**, and incorporates best practices with **Interceptors**, **Middleware**, **Exception Filters**, and **Custom Decorators**.

Whether you're building an API, a microservice, or a full-stack application, this template provides a solid foundation to accelerate your development process.

## Features

- **Authentication**: Secure user authentication using JSON Web Tokens (JWT).
- **Authorization**: Role-based access control to protect sensitive routes.
- **MongoDB Integration**: Seamless interaction with MongoDB using Mongoose.
- **Interceptors**: Logging and response transformation.
- **Middleware**: HTTP request logging for monitoring and debugging.
- **Exception Filters**: Unified error handling across the application.
- **Custom Decorators**: Simplified access to user information in controllers.
- **Environment Configuration**: Secure management of sensitive data using environment variables.

## Architecture

The project follows the **Modular** architecture pattern, promoting separation of concerns and scalability. Key modules include:

- **AuthModule**: Handles authentication and authorization logic.
- **UsersModule**: Manages user data and interactions with the database.
- **ProtectedModule**: Contains routes that require authentication and specific roles.
- **CommonModule**: Houses shared components like middleware, interceptors, filters, and decorators.

## Prerequisites

Before getting started, ensure you have the following installed on your machine:

- **Node.js** (v14 or later)
- **npm** or **yarn**
- **MongoDB** (Ensure MongoDB is running locally or have access to a MongoDB Atlas cluster)
- **Nest CLI** (optional but recommended)
