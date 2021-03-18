const dateAndTimeToASentence = function () {

    const getDateAndTime = new Date(); 
    //Get the minute
    const getMinutes = getDateAndTime.getMinutes();
    //Get the hour
    const getHour = getDateAndTime.getHours();
    //get the day
    const getDay = getDateAndTime.getDay();
    //get the month 
    const getMonth = getDateAndTime.getMonth();
    //get the year
    const getYear = getDateAndTime.getFullYear();

    const convertDayToString = function (getDay) {
        let todayIs = '';
        switch (getDay) {
            case 0: todayIs = 'Sunday';
            break;
            case 1: todayIs = 'Monday';
            break;
            case 2: todayIs = 'Tuesday';
            break;
            case 3: todayIs = 'Wednesday';
            break;
            case 4: todayIs = 'Thursday';
            break;
            case 5: todayIs = 'Friday';
            break;
            case 6: todayIs = 'Saturday';
            break;
            default: todayIs = 'Not A Day';
        }
        return todayIs;
    }
    const convertMonthToString = function (getMonth) {
        let monthIs = '';
        switch (getMonth) {
            case 0: monthIs = 'January';
            break;
            case 1: monthIs = 'February';
            break;
            case 2: monthIs = 'March';
            break;
            case 3: monthIs = 'April';
            break;
            case 4: monthIs = 'May';
            break;
            case 5: monthIs = 'June';
            break;
            case 6: monthIs = 'July';
            break;
            case 7: monthIs = 'August';
            break;
            case 8: monthIs = 'September';
            break;
            case 9: monthIs = 'October';
            break;
            case 10: monthIs = 'November';
            break;
            case 11: monthIs = 'December';
            break;
            default: monthIs = 'Not A Month';
        }
        return monthIs;
    }
    const dateObject = {
        minute: getMinutes,
        hours: getHour,
        day: convertDayToString(getDay),
        month: convertMonthToString(getMonth),
        year: getYear,
    } 
    const displayString = `It is ${dateObject.minute} minutes and ${dateObject.hours} hours on ${dateObject.day}. It is ${dateObject.month} ${dateObject.year}`;
    return displayString;
}