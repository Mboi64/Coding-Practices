let year = 1900;

function isLeapYear(year) {
  let numberYear = year;

  if (year % 4 === 0 && year % 100 !== 0) {
    return `${numberYear} is a leap year.`;
  } else if (year % 400 === 0) {
    return `${numberYear} is a leap year.`;
  } else {
    return `${numberYear} is not a leap year.`;
  }
}

let result = isLeapYear(year);

console.log(result);

// really close to getting this one too
// you just did not understand how the divisibility of 100 and 400 worked
