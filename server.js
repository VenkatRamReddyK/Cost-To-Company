var http = require('http');
var mysql = require('mysql');
var express = require('express');
var fs = require('fs');
var app = express();

app.get('/', function(req, res){	
    fs.readFile('./index.html', function(err, html){
	if(err){
	    throw err;
	}
	res.writeHeader(200, {"Content-Type": "text/html"});
	res.write(html);
	res.end();
	});
});

app.get('/main.html', function(req, res){	
    fs.readFile('./main.html', function(err, html){
	if(err){
	    throw err;
	}
	res.writeHeader(200, {"Content-Type": "text/html"});
	res.write(html);
	res.end();
	});
});

app.get('/detail.html', function(req, res){	
    fs.readFile('./detail.html', function(err, html){
	if(err){
	    throw err;
	}
	res.writeHeader(200, {"Content-Type": "text/html"});
	res.write(html);
	res.end();
	});
});

app.get('/js/main.js', function(req, res){	
    fs.readFile('js/main.js', function(err, html){
	if(err){
	    throw err;
	}
	res.writeHeader(200, {"Content-Type": "application/javascript"});
	res.write(html);
	res.end();
	});
});

app.get('/js/select.js', function(req, res){	
    fs.readFile('js/select.js', function(err, html){
	if(err){
	    throw err;
	}
	res.writeHeader(200, {"Content-Type": "application/javascript"});
	res.write(html);
	res.end();
	});
});

app.get('/images/dots.jpg', function(req, res){	
    fs.readFile('images/dots.jpg', function(err, html){
	if(err){
	    throw err;
	}
	res.writeHeader(200, {"Content-Type": "image/jpeg"});
	res.write(html);
	res.end();
	});
});

app.get('/images/spinner.gif', function(req, res){	
    fs.readFile('images/spinner.gif', function(err, html){
	if(err){
	    throw err;
	}
	res.writeHeader(200, {"Content-Type": "image/gif"});
	res.write(html);
	res.end();
	});
});

app.get('/css/style.css', function(req, res){	
    fs.readFile('css/style.css', function(err, html){
	if(err){
	    throw err;
	}
	res.writeHeader(200, {"Content-Type": "text/css"});
	res.write(html);
	res.end();
	});
});

app.get('/css/select.css', function(req, res){	
    fs.readFile('css/select.css', function(err, html){
	if(err){
	    throw err;
	}
	res.writeHeader(200, {"Content-Type": "text/css"});
	res.write(html);
	res.end();
	});
});

app.get('/a', function(req, res){	
    connection.query('SELECT * from Person', function (error, results, fields) {
    	if (error) throw error;
        else res.send(results);
    });
});

app.post('/storeData', function(req, res){	
    var body = "";
  req.on('data', function (chunk) {
    body += chunk;
  });
  req.on('end', function () {
    console.log('body: ' + body);
    var jsonObj = JSON.parse(body);
    var fName = jsonObj.FirstName;
    var lName = jsonObj.LastName;
    var address = jsonObj.Address;
    var salary = jsonObj.Salary;
    var company = jsonObj.Company;
    if(fName == null || lName == null || fName == '' || lName == '') throw {name:"Invalid input", message:"First name cannot be null"};
    var values = [
	[fName, lName, address, salary, company]
    ];
    var sql = 'Insert into Person (FirstName, LastName, Address, Salary, Company) values ?';
    connection.query(sql, [values], function (error, results) {
    	if (error) throw {name:"Invalid input", message:"First name cannot be null"};
	else {
	    res.writeHeader(200, {"Content-Type": "text/css"});
	    res.write('');
	    res.end();
	}
    })
    });
    /*
    connection.query('SELECT * from Person', function (error, results, fields) {
    	if (error) throw error;
        else res.send(results);
    });
    */
});

app.post('/deletePerson', function(req, res){	
    var id = "";
  req.on('data', function (chunk) {
    id += chunk;
  });
  req.on('end', function () {
    var sql = 'delete from Person where id = ?';
    connection.query(sql, id, function (error, results) {
    	if (error) throw error;
	else {
	    res.writeHeader(200, {"Content-Type": "text/css"});
	    res.write('');
	    res.end();
	}
    })
    });
    /*
    connection.query('SELECT * from Person', function (error, results, fields) {
    	if (error) throw error;
        else res.send(results);
    });
    */
});

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'ibm',
  port 	   : 3310
});
 
var PORT = 8080;
if(!module.parent){
//  app.listen(PORT);
  http.createServer(app).listen(8080);
}

console.log('Running on http://localhost:' + PORT);
module.exports = app;
/*
http.createServer(function (req, res) {
   
  connection.end();
  
  //create a server object:
  res.end(); //end the response
}).listen(8080);
*/