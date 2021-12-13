# Attendance Tracker 5000

The Attendance Tracker 5000 is an Attendance logging application that allows students to check in to their class on a given day.  Teachers can view all of the students in a class and details about their individual attendance rates, as well as aggregated attendance data for the entire class.

The program has built with the SERN stack (MySQL, Express, React, Node.js) and is containerized for easy deployment.  The system utilizes JSON Web Tokens to authenticate users and stores the tokens for a period of time to allow users to quickly return to the site.  

### Setup and running the program (current)

## Current set up instructions:
1. The both the client and server are containerized by docker.  If you do not have have docker installed, please follow the link below to install:
    >https://docs.docker.com/get-docker/
2. With docker installed, download the zip file, extract, and navigate using the CLI to the extracted file.
3. Run the following command in the CLI:
    >docker-compose up --build
4. This will begin both the client and server using local ports 3000 and 8080, respectively.
5. Navigate to http://localhost:3000 and log in with the desired username and password to explore the site.


#### Instructions for logging in

Currently the system utilizes mock data.  To access the login information for any of our test users, please navigate to:

> ./server/data/users.json

There you can obtain the username and password for the currently added users.


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



### ### Setup and running the program (outdated)
To install the program: 
>1. Download the source files 
>2. Create a .env file for the server that is in the server's root directory
>3. Inside the .env file, create variables for:
>    1. DB_URI
>    2. DB_NAME
>    3. DB_USERNAME
>    4. DB_PASSWORD
>    5. JWT_SECRET

#### Run the program by:
1. In the client directory, execute the command:
>npm start
2. In the server directory, execute the command:
>node server

### By default the client is mapped to:
> http://localhost:3000
### and the server is mapped to:
> http://localhost:8080
