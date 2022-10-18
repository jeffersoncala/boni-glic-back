const config = require('./config')
const mysql = require('mysql'); 

// const connection = mysql.createConnection(`mysql://${config.user}:${config.password}@${config.host}/${config.database}`);

var connection = mysql.createConnection({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database,
});
  
connection.connect(function(err) {
	if (err) throw err;
	console.log("Banco Conectado!");
});

module.exports = {
	connection
}


