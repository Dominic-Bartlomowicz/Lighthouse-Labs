
  function calculateDayInYear(date) {
  var splitDate = date.split('/');
  var year = Number(splitDate[0]);
  var month = Number(splitDate[1]);
  var day = Number(splitDate[2]);

  console.log(day);
  console.log(month);
  console.log(year);

  var febDays = daysInFeb(year);
  var DAYS_IN_MONTH = [31, febDays, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (year && validMonth(month) && validDay(day)) {
    console.log(date, "is day", calculateDayNumber(month, day), "of the year", year);
  } else {
    console.log("Invalid date");
  }

  function validMonth(month) {
    return month && month >= 1 && month <= 12;
  }

  function validDay(day) {
    return day && day >= 1 && day <= DAYS_IN_MONTH[month - 1];;
  }

  function calculateDayNumber(month, day) {

    var dayOfYear = 0 + day;

    for (var i = 1; i < month; i++) {
      dayOfYear += DAYS_IN_MONTH[i - 1];
    }

    return dayOfYear;
  }

  function daysInFeb(year) {

    if(isMultiple(year, 400) || !isMultiple(year, 100) && isMultiple(year, 4))
    {
      return 29;
    }

    else
    {
      return 28;
    }

  }

}

function isMultiple(numerator, denominator) {
  return numerator % denominator === 0;
}

var date = process.argv[2];

if (!date) {
  console.log("Please provide a date in the format YYYY/MM/DD");
} else {
  calculateDayInYear(date);
}
