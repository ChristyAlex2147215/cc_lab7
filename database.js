const mysql = require('mysql');

var connection = mysql.createConnection({
	
	host:"covid19.c1h8tplwfs1y.us-east-1.rds.amazonaws.com",
	port:"3306",
	user:"admin",
	password:"qwertyuiop",
	database:"Covid19"
});

connection.connect(function(error){
	if(error)
	{
		throw error;
	}
	else
	{
		console.log('MySQL Database is connected Successfully');
		console.log("Server running on :3000")
	}
});

module.exports = connection;