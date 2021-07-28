const DAYS_IN_WEEK = 7;
const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const MONTH = {
    January: 0,
    February: 1,
    Mart: 2,
    April: 3,
    May: 4,
    June: 5,
    July: 6,
    August: 7,
    September: 8,
    October: 9,
    November: 10,
    December: 11,
}

//провека высокосного года
function isLeapYear(year) {
    return !((year % 4) || (!(year % 100) && (year % 400)))
};

function getDaysInMonth(date) {
 const month = date.getMonth();
 const year = date.getFullYear();

 if (isLeapYear(year) && month === MONTH.February) {
     return DAYS_IN_MONTH[month] + 1;
 } else {
     return DAYS_IN_MONTH[month];
 }
};

function getDayOfWeek(date) {
    const dayOfWeek = date.getDay();
    if (dayOfWeek === 0) {
        return 6
    } else {
        return dayOfWeek - 1;
    }
};

export default function getMonthData(year,month) {
    const result = [];
    const date = new Date(year, month);

    // how mach days in month
    const daysInMonth = getDaysInMonth(date);
    // when start and end week
    const  monthStartOn = getDayOfWeek(date);
    let day = 1;
    //(daysInMonth + monthStartOn) / DAYS_IN_WEEK - how mach week in month
    for (let i = 0; i < (daysInMonth + monthStartOn) / DAYS_IN_WEEK; i++) {
        // days in month;
        result[i] = [];
        // first week day;
        for (let j = 0; j < DAYS_IN_WEEK; j++) {
            if ((i === 0 && j < monthStartOn) || day > daysInMonth) {
                result[i][j] = undefined;
            } else {
                result[i][j] = new Date(year, month, day++)
            }

        }
    }

    return result
}