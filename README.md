# Cost-To-Company
Introduction:
	The application is used to keep track of employees and their salary on the basis of companies.
	
Features:
	- Add Employee to an existing or a new company.
	- Delete specific employee from the database.
	- View company specific employees.
	- Total money spent for each company.

Technology Used:
	Front-End: Html, Css, AngularJS, Bootstrap
	Server-Side: Node.js
	Database: MySQL
	Testing: Karma, Jasmine, chai, istanbul 

How to replicate/recreate the environment:
1. Use command-line to clone files from github.
	- git clone https://github.com/shrenikrajvijay/Cost-To-Company

2. Set up the database. Change directory to the cloned folder and issue the following command to import the database,
	- mysql -u username -p ibm < ibm.sql
	
	Here, username is the name that is specific to your database settings. If your settings has password, then specify password after -p. ibm is the name of the database specific to this application. ibm.sql is the file that will be used to make the database environment. It has the table structure and sample data.

3. Install node and npm if it is not already installed.

4. Start the server so that requests can be made,
	- node ./server.js
	
	Here, server.js is the server daemon that listens for request and responds to those requests. The port it listens on is 8080.

5. After all the above is set up, issue reques to server by typing in the following inside the web browser,
	- localhost:8080

If everything went well, then you should see the web page.
