const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('dynamic_forms_db', 'root', 'Abcd1234@', {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize.authenticate()
  .then(() => console.log('Database connected'))
  .catch(err => console.log('Error: ' + err));

module.exports = sequelize;
