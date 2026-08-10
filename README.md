# Helpdesk and Ticket Management System

## Project Description

A web-based technical support system that allows users to create, track, and manage support tickets. Staff members can handle assigned tickets, while administrators can manage users, tickets, categories, priorities, and roles.

The system provides a centralized platform for managing technical support requests and helps users and support staff track the progress of service tickets.

---

## Problem Statement

In many organizations and educational institutions, technical support requests are handled through informal methods such as phone calls, emails, messaging applications, or direct communication with support staff.

These methods can make it difficult to properly record, prioritize, assign, and track support requests. Users may not know the current status of their requests, while support staff may have difficulty managing multiple support requests efficiently.

The Helpdesk and Ticket Management System provides a centralized web-based platform where users can create support tickets and track their progress. Staff members can manage assigned tickets, update their status, and communicate with users through comments.

Administrators can manage users, staff, tickets, categories, priorities, and roles.

The system aims to improve the organization, tracking, and management of technical support requests through a structured ticket-based workflow.

---

## Objectives

The main objectives of the Helpdesk and Ticket Management System are:

1. To provide a centralized platform for submitting technical support requests.

2. To allow users to create and track support tickets.

3. To organize tickets using categories and priority levels.

4. To allow staff members to view and manage assigned tickets.

5. To provide ticket status tracking throughout the support process.

6. To allow users and support staff to communicate through ticket comments.

7. To provide administrators with user, staff, ticket, category, priority, and role management capabilities.

8. To implement authentication and role-based access control.

9. To store and manage application data using MongoDB.

10. To develop a backend-oriented web application using Node.js and Express.js.

---

## Target Users

The system will support three main types of users.

### 1. User

Users are individuals who require technical support.

Responsibilities:

- Register an account.
- Login to the system.
- Create support tickets.
- View submitted tickets.
- Track ticket status.
- Add comments to tickets.
- View updates related to their tickets.

### 2. Staff

Staff members are responsible for handling technical support requests.

Responsibilities:

- Login to the system.
- View tickets assigned to them.
- Review ticket details.
- Update ticket status.
- Add comments to tickets.
- Handle and resolve support requests.

### 3. Administrator

Administrators are responsible for managing the overall helpdesk system.

Responsibilities:

- Manage users.
- Manage staff members.
- Manage tickets.
- Manage ticket categories.
- Manage priority levels.
- Assign tickets to staff.
- Manage user roles.
- Monitor ticket status.

---

## Main Features

### User Management

- User registration
- User login
- User account management
- Role-based access

### Ticket Management

- Create support tickets
- View tickets
- Track ticket status
- Update ticket status
- Assign tickets to staff
- Manage tickets

### Ticket Categories

Tickets can be organized into different categories such as:

- Hardware
- Software
- Network
- Account
- Other

### Priority Levels

Tickets can have different priority levels:

- Low
- Medium
- High
- Critical

### Status Tracking

Tickets can have different statuses such as:

- Open
- In Progress
- Resolved
- Closed

### Comments

Users and authorized staff members can add comments to tickets to communicate about the support request.

### Role Management

The system supports three roles:

- User
- Staff
- Administrator

Each role will have different permissions and access to system functionality.

---

## Functional Requirements

### User Requirements

- The system shall allow users to register.
- The system shall allow users to login.
- The system shall allow users to create support tickets.
- The system shall allow users to view their tickets.
- The system shall allow users to track ticket status.
- The system shall allow users to add comments to their tickets.

### Staff Requirements

- The system shall allow staff members to login.
- The system shall allow staff members to view assigned tickets.
- The system shall allow staff members to update ticket status.
- The system shall allow staff members to add comments.
- The system shall allow staff members to handle support requests.

### Administrator Requirements

- The system shall allow administrators to manage users.
- The system shall allow administrators to manage staff.
- The system shall allow administrators to manage tickets.
- The system shall allow administrators to manage categories.
- The system shall allow administrators to manage priority levels.
- The system shall allow administrators to assign tickets.
- The system shall allow administrators to manage user roles.

---

## Non-Functional Requirements

### Security

The system should protect user information and authentication credentials. Passwords should not be stored as plain text.

### Performance

The system should respond efficiently to user requests and API operations.

### Reliability

The system should maintain consistent user and ticket information.

### Usability

The system should provide a simple and understandable interface for users, staff, and administrators.

### Maintainability

The application should use a modular structure so that different parts of the system can be developed and maintained independently.

### Scalability

The system architecture should allow additional features and users to be added in the future.

### Availability

The application should be accessible to authorized users when the system is deployed and running.

---

## Technology Stack

| Technology | Purpose |
|------------|---------|
| HTML | Web page structure |
| CSS | Web page styling |
| JavaScript | Client-side functionality |
| React | Frontend development |
| Node.js | Backend runtime environment |
| Express.js | Backend/API framework |
| MongoDB | Database |
| Mongoose | MongoDB object modeling |
| Git | Version control |
| GitHub | Source code repository |
| Postman / Thunder Client | API testing |
| Visual Studio Code | Development environment |
| npm | Package management |

---

## Project Architecture

The project will use a client-server architecture.

```text
                    Helpdesk and Ticket
                    Management System
                           |
             +-------------+-------------+
             |                           |
          Frontend                    Backend
             |                           |
          React.js                  Node.js
             |                           |
             |                    Express.js
             |                           |
             |              +------------+------------+
             |              |            |            |
             |          Controllers    Routes     Middleware
             |              |            |            |
             |              +------------+------------+
             |                           |
             |                        Models
             |                           |
             +---------------------------+
                                         |
                                      MongoDB
