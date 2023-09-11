let currentDay = document.querySelector(".currentDayOfTheWeek");
let currentUTCTimeMillis = document.querySelector(".currentUTCTime");

// created a function to get the current date
function getCurrentDate() {
  let daysOfTheWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
    
    // fetching the current day of the week and assigning it to the daysOfTheWeek Array
  let currentDate = new Date();
  let dayOfTheWeek = currentDate.getDay();
  return daysOfTheWeek[dayOfTheWeek];
}

// This is where the h2 in the html is updated to the current day of the week
currentDay.textContent = `Current day of the week ${getCurrentDate()}`;

currentUTCTimeMillis.textContent = new Date().getTime();



