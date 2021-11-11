const mysql = require('mysql');
const dotenv= require('dotenv')
const config = require('../config/config');

dotenv.config();


const connection = mysql.createConnection(

config[process.env.NODE_ENV||'development']



)