// app.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const errorHandler = require('./errorHandler');
const userRoutes = require('./routes/userRoutes');
const swaggerDoc = require('./swagger');
const app = express();
swaggerDoc(app);
app.use(bodyParser.json());
app.use(cors());

app.use('/users', userRoutes);

// Add the errorHandler middleware
app.use(errorHandler);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
