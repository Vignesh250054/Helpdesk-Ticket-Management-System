# Helpdesk and Ticket Management System

## Project Description

A web-based technical support system that allows users to create, track, and manage support tickets. Staff members can handle assigned tickets, while administrators can manage users, tickets, categories, priorities, and roles.

## Problem Statement

In many organizations and educational institutions, technical support requests are handled through informal methods such as phone calls, emails, messaging applications, or direct communication with support staff. These methods can make it difficult to properly record, prioritize, assign, and track support requests.

The Helpdesk and Ticket Management System provides a centralized platform where users can create support tickets and track their progress. Staff members can manage assigned tickets, update their status, and communicate with users through comments. Administrators can manage users, staff, tickets, categories, priorities, and roles.

## Objectives

- Provide a centralized platform for submitting technical support requests.
- Allow users to create and track support tickets.
- Organize tickets using categories and priority levels.
- Allow staff members to manage assigned tickets.
- Provide ticket status tracking.
- Allow users and staff to communicate through comments.
- Provide administrators with management and role-based access features.
- Store application data using MongoDB.
- Develop a backend-oriented web application using Node.js and Express.js.

## Target Users

### User
- Register and login.
- Create support tickets.
- View submitted tickets.
- Track ticket status.
- Add comments to tickets.

### Staff
- View assigned tickets.
- Update ticket status.
- Add comments.
- Handle and resolve support requests.

### Administrator
- Manage users and staff.
- Manage tickets.
- Manage ticket categories.
- Manage priority levels.
- Assign tickets to staff.
- Manage user roles.

## Main Features

- User registration and login
- Ticket creation
- Ticket categories
- Priority levels
- Ticket assignment
- Status tracking
- Ticket comments
- Admin/Staff/User role management

## Technology Stack

- Frontend: HTML, CSS, JavaScript / React
- Backend: Node.js
- Backend Framework: Express.js
- Database: MongoDB
- Database ODM: Mongoose
- API Testing: Postman / Thunder Client
- Version Control: Git
- Repository: GitHub
- Development Environment: Visual Studio Code

## Project Structure

```text
helpdesk-ticket-management-system/
│
├── client/
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   ├── utils/
│   ├── app.js
│   └── server.js
│
├── docs/
│
├── screenshots/
│
├── .env.example
├── .gitignore
├── package.json
└── README.md
