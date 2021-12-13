/*
    Helper functions to calculate the attendance percentage for a student
*/


// calculate the attendance rate given the start of class, total attended days, and frequency of class
function attendanceCalculator(classStartDate, daysInClass, classesPerWeek) {

    console.log("AttendanceHelper:attendanceCalculator - beginning")
    var daysOfClass = numOfClassDays(classStartDate, classesPerWeek)
    var attendancePercentage = daysInClass / daysOfClass;
    
    return Math.round(attendancePercentage * 100)

}

// Calculate the number of classes since the start date
function numOfClassDays(start, classesPerWeek) {

    console.log("AttendanceHelper:numOfClassDays - beginning")
    const currDate = new Date();
    var tempStartDate = new Date(start);

    var diffOfDatesTime = currDate.getTime() - tempStartDate.getTime();
    var diffOfDatesDays = diffOfDatesTime / (1000 * 3600 * 24);
    
    var weeksOfClass = Math.floor(diffOfDatesDays / 7);
    var totalClasses = weeksOfClass * classesPerWeek

    console.log("AttendanceHelper:numOfClassDays - finished")

    return totalClasses;

}

// Calculates the class average for attendance by using data from 
function totalAttendanceAverage(classAttendanceRates) {

    console.log("AttendanceHelper:classAttendanceRates - beginning")
    let totalAttendancePercentages = 0;
    let numOfStudents = classAttendanceRates.length
    for (var i = 0; i < numOfStudents; i++) {
        
        totalAttendancePercentages += classAttendanceRates[i];
    }
    console.log("AttendanceHelper:classAttendanceRates - ended")
    return totalAttendancePercentages / numOfStudents

}

export  {attendanceCalculator, totalAttendanceAverage}