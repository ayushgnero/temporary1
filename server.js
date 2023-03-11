// server.js

const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models/user');
const userRoutes = require('./routes/userRoutes');
const errorHandler = require('./utils/errorHandler');

const app = express();

app.use(bodyParser.json());

// Initialize Sequelize and sync database
sequelize.sync().then(() => {
  console.log('Database synced successfully.');
}).catch((error) => {
  console.log('Database sync error:', error);
});

// Add user routes
app.use('/users', userRoutes);

// Error handler middleware
app.use(errorHandler);

app.listen(3000, () => {
  console.log('Server listening on port 3000.');
});
