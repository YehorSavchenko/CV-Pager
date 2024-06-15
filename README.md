# WWW-Dynamic-Web-Page

## Table of Contents
- [Project Description](#project-description)
- [Features](#features)
- [Used Technologies](#used-technologies)
- [Prerequisites](#prerequisites)
- [Setup Instructions](#setup-instructions)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [Application Flow](#application-flow)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Database Schema](#database-schema)

## Project Description

This repository contains the source code for a dynamic web page that showcases a CV and includes a blog management system. The web page is built using HTML, CSS, JavaScript (NodeJS), EJS, and is connected to a MySQL database.

## Features

- Clean and modern design for the CV web page
- User-friendly interface for accessing and updating CV information stored in the database
- Dynamic content generation using EJS templates and data from the database
- Responsive layout that adjusts to different screen sizes and devices
- Admin interface for managing blog posts

## Used Technologies

This project was built using the following technologies:

- **JavaScript**: The main programming language used for the project.
- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express.js**: A minimal and flexible Node.js web application framework.
- **MySQL2**: A MySQL client for Node.js.
- **EJS**: Templating engine to generate HTML markup with plain JavaScript.
- **CSS**: Frontend for styling.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your machine
- MySQL server installed and running
- A MySQL database created for the project

## Setup Instructions

1. **Clone the Repository**

    ```sh
    git clone <repository-url>
    cd WWW-Dynamic-Web-Page
    ```

2. **Install Dependencies**

    ```sh
    npm install
    ```

3. **Configure Environment Variables**

   Create a `.env` file in the root of the project and add the following environment variables 
or change `db` variable in project:

    ```env
    DB_HOST=localhost
    DB_PORT=3306
    DB_USER=your_database_user
    DB_PASS=your_database_password
    DB=your_database_name
    ```

4. **Set Up the Database**

   Import the database schema and initial data into your MySQL database:
    - Use the following SQL script to create the necessary tables:

    ```sql
    CREATE TABLE admin_users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL
    );

    CREATE TABLE articles (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        short_description TEXT NOT NULL,
        full_description TEXT NOT NULL,
        preview_image VARCHAR(255)
    );
    ```

5. **Run the Application**

    ```sh
    npm start
    ```

   The server will start on `http://localhost:3000`.

## Environment Variables

The following environment variables are used in the project:

- `DB_HOST`: Hostname for the database server
- `DB_PORT`: Port number for the database server
- `DB_USER`: Database user
- `DB_PASS`: Database password
- `DB`: Database name

## Project Structure

```plaintext
WWW-Dynamic-Web-Page/
├── bin/
│   └── www
├── node_modules/
├── public/
│   ├── images/
│   │   ├── avatar.webp
│   │   ├── balloon.webp
│   │   ├── bear.webp
│   │   ├── flower.webp
│   │   ├── monkey.webp
│   │   ├── monster.webp
│   ├── javascripts/
│   │   └── menubutton.js
│   ├── stylesheets/
│       ├── blog.css
│       ├── main.css
│       └── style.css
├── routes/
│   ├── article-page.js
│   ├── blog.js
│   ├── blog-admin.js
│   ├── index.js
│   └── login.js
├── views/
│   ├── inc/
│   │   ├── article.ejs
│   │   ├── header.ejs
│   ├── article-page.ejs
│   ├── blog.ejs
│   ├── blog-admin.ejs
│   ├── error.ejs
│   ├── index.ejs
│   ├── login.ejs
├── .env
├── .gitignore
├── app.js
├── package.json
├── package-lock.json
└── README.md
```

## Application Flow

The application allows users to view a CV and manage blog posts through an admin interface. The general flow is as follows:

1. Users visit the homepage to view the CV.
2. Users can navigate to the blog section to read articles.
3. Admin users can log in through the `/login` page to access the admin interface.
4. Admin users can create, update, or delete blog posts from the admin interface.

## Usage

### Accessing the CV

1. Navigate to `http://localhost:3000` to view the CV.

### Reading Blog Posts

1. Go to `http://localhost:3000/blog` to read the available blog posts.

### Admin Login

1. Go to `http://localhost:3000/login` to access the login page.
2. Enter the admin credentials to log in.

### Managing Blog Posts

1. After logging in, navigate to `http://localhost:3000/blog-admin` to manage blog posts.
2. Use the provided interface to create, update, or delete articles.

## API Endpoints

### Authentication

- `POST /login` - Authenticate an admin user

### Blog Management

- `GET /blog-admin` - Access the blog management interface
- `POST /blog-admin` - Create a new blog post

### Articles

- `GET /blog` - View all blog posts
- `GET /blog/:id` - View a single blog post by ID

## Database Schema

### Admin Users Table

```sql
CREATE TABLE admin_users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);
```

### Articles Table

```sql
CREATE TABLE articles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    short_description TEXT NOT NULL,
    full_description TEXT NOT NULL,
    preview_image VARCHAR(255)
);
```

## UML Diagram

#### Application Component Diagram

You can view the UML diagram for the application structure [here](application-component.puml).
