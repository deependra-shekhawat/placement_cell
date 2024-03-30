# Coding Ninjas Placement Cell

An interface for coding ninjas placement cell to keep records of students and schedule interviews with different companies

# Features of this projects are 🚱
## Authentication Part
1. Sign up with email
2. Sign in (redirect to a home page with student details)
3. Sign out
4. The password store in the db will be encrypted

## Placement cell functionality
1. add students in placement cell.
2. add interview to company.(student must be present in list before adding interview)
3. display of student's interviews.
4. display of all student registered for interview in a company.
5. Download all student details and all interviews in CSV format.


# How to setup the project on local system 🚱
lets understand steps of using this project in local system -

1. Do npm install to get node-module.
2. Do npm init to set project config accordingly.
3. Create .env file in config directory
      Environment Variables:
      - PORT = [Your Port]
      - SECRET = [Your Secret]
      - MONGO_URI = [Your MongoDB Ur]

## Tech Stack

- [Node.js](https://nodejs.org/en/): An asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications.

- [Express](https://expressjs.com/): Express is a minimal and flexible Node.js web application framework

- [EJS](https://ejs.co/): View Engine used to display web pages

- [mongoDB](https://www.mongodb.com/): A NoSQL database which uses JSON-like documents

- [Passport](http://www.passportjs.org/): Passport is authentication middleware for Node.js
