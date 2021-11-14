<<<<<<< HEAD
require("dotenv").config();
=======
require('dotenv').config();
>>>>>>> b22fe6f2dd68442a707479d3da1c5c7b010bbdf0

module.exports = {
  development: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
<<<<<<< HEAD
    host: "localhost",
    dialect: "mysql",
=======
    host: '127.0.0.1',
    dialect: 'mysql'
>>>>>>> b22fe6f2dd68442a707479d3da1c5c7b010bbdf0
  },
  test: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
<<<<<<< HEAD
    host: "localhost",
    dialect: "mysql",
=======
    host: '127.0.0.1',
    dialect: 'mysql'
>>>>>>> b22fe6f2dd68442a707479d3da1c5c7b010bbdf0
  },
  production: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
<<<<<<< HEAD
    host: "localhost",
    dialect: "mysql",
  },
};
=======
    host: '127.0.0.1',
    dialect: 'mysql'
  }
};
>>>>>>> b22fe6f2dd68442a707479d3da1c5c7b010bbdf0
