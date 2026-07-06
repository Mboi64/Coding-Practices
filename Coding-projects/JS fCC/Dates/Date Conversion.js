const currentDate = new Date()
const options = {
  month: "long",
  day: "numeric",
  year: "numeric"
}

const currentDateFormat = `Current Date and Time: ${currentDate}`

const formatDateMMDDYYYY = (date) => `Formatted Date (MM/DD/YYYY): ${date.toLocaleDateString()}`

const formatDateLong = (date) => `Formatted Date (Month Day, Year): ${date.toLocaleDateString("en-US", options)}` 

console.log(currentDateFormat)
console.log(formatDateMMDDYYYY(currentDate))
console.log(formatDateLong(currentDate))