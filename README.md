# Attendance Tracker 5000

The Attendance Tracker 5000 is an Attendance logging application that allows students to check in to their class on a given day.  Teachers can view all of the students in a class and details about attendance rates.


### Setup and running the program

To install the program: 
>download the source files 
>create a .env file for the server
>>inside the .env file, create variables for:
>>>DB_URI
>>>DB_NAME
>>>DB_USERNAME
>>>DB_PASSWORD
>>>JWT_SECRET

>Run the program by:
>>in the client directory, execute the command:
>>>npm start
>>in the server directory, execute the command:
>>>node server

### By default the client is mapped to:
>> http://localhost:3000
### and the server is mapped to:
>> http://localhost:8080
