



function attendanceCalculator(classStartDate, daysInClass) {

    const currDate = new Date();
    var tempStartDate = new Date(classStartDate);

    if (classStartDate > currDate) {
        console.log('Start >')
    }

    //Accounts for 5 days a week of school
    var totalSchoolDays = numOfSchoolDays(tempStartDate, currDate)
    console.log(totalSchoolDays)
    var attendanceRate = daysInClass / totalSchoolDays

    return attendanceRate * 100

}
//FIXME: GET CORRECT DAYS
function numOfSchoolDays(start, end) {
    var schoolDays = 0;
    var current = start;
    current.setDate(current.getDate() + 1);
    var day;

    while (current <= end) {
        day = current.getDay();
        if (day >= 1 && day <=5) {
            ++schoolDays;
        }
        current.setDate(current.getDate() + 1)
    }
    return schoolDays;
}

export default attendanceCalculator