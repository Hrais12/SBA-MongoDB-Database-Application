
# Express API for School Management System

This repository contains an Express.js API for managing teachers, students, and courses in a school management system. The API is built using Express.js and utilizes Mongoose for MongoDB object modeling and interaction.


## Installation

Before running this application, ensure you have the following installed:

- Node.js
- MongoDB

To install the dependencies, run:
npm install express mongoose cors nodemon

## Structure

- `models`: Contains 3 Mongoose models for interacting with the database.
- `controllers`: contains functions to handle CRUD operations for each model. These functions are used as route handlers in the main server file.



## Endpoints

### Teacher Endpoints

- `GET /teacher`: Get all teachers.
- `GET /teacher/:id`: Get a specific teacher by ID.
- `POST /teacher`: Add a new teacher.
- `PUT /teacher/:id`: Update a teacher by ID.
- `DELETE /teacher/:id`: Delete a teacher by ID.

### Student Endpoints

- `GET /student`: Get all students.
- `GET /student/:id`: Get a specific student by ID.
- `POST /student`: Add a new student.
- `PUT /student/:id`: Update a student by ID.
- `DELETE /student/:id`: Delete a student by ID.

### Course Endpoints

- `GET /course`: Get all courses.
- `GET /course/:id`: Get a specific course by ID.
- `POST /course`: Add a new course.
- `PUT /course/:id`: Update a course by ID.
- `DELETE /course/:id`: Delete a course by ID.


#### Student Controller

- `allStudent`: Retrieves all students from the database.
- `getStudent`: Retrieves a specific student by ID from the database.
- `addStudent`: Adds a new student to the database.
- `updateStudent`: Updates an existing student in the database.
- `deleteStudent`: Deletes a student from the database.

#### Course Controller

- `allCourse`: Retrieves all courses from the database.
- `getCourse`: Retrieves a specific course by ID from the database.
- `addCourse`: Adds a new course to the database.
- `updateCourse`: Updates an existing course in the database.
- `deleteCourse`: Deletes a course from the database.


#### Teacher Controller

- `allTeacher`: Retrieves all teachers from the database.
- `getTeacher`: Retrieves a specific teacher by ID from the database.
- `addTeacher`: Adds a new teacher to the database.
- `updateTeacher`: Updates an existing teacher in the database.
- `deleteTeacher`: Deletes a teacher from the database.



##  GitHub link:
https://github.com/Hrais12/SBA-MongoDB-Database-Application