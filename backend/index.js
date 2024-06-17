const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const formRoutes = require('./routes/formRoutes');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

sequelize.sync();

app.use('/api/forms', formRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
