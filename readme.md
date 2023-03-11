# Node.js CRUD API with MySQL

This is a Node.js CRUD API that uses MySQL as its database. It allows users to create, read, update, and delete user records.

## Requirements

To run this project, you will need to have the following software installed on your machine:

- Node.js (v14.17.0 or later)
- MySQL (v8.0 or later)

## Installation  

To install the project, follow these steps:

1. Clone this repository to your local machine.
2. Run `npm install` to install the project dependencies.
3. Create a `.env` file in the root directory of the project and configure the database connection settings (see `.env.example` for an example configuration).
4. Create the MySQL database and tables by running the SQL commands in `db/schema.sql`.
5. Run `npm start` to start the server.

## Usage

To use the API, send HTTP requests to the endpoints listed below:

- GET /users - get a list of all users
- GET /users/:id - get a user by ID
- POST /users - create a new user
- PUT /users/:id - update a user by ID
- DELETE /users/:id - delete a user by ID

## Testing

This project includes a suite of test cases that use Jest. To run the test cases, run the following command:

npm test

## Swagger Documentation

This project includes Swagger documentation that can be accessed at the following URL:

http://localhost:3000/api-docs


## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
