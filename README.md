# Attendance Tracker 5000

The Attendance Tracker 5000 is an Attendance logging application that allows students to check in to their class on a given day.  Teachers can view all of the students in a class and details about their individual attendance rates, as well as aggregated attendance data for the entire class.


### Setup and running the program

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
