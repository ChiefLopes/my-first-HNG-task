let currentDay = document.querySelector(".currentDayOfTheWeek");

function getCurrentDate() {
  let daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
    
  let currentDate = new Date();
  let dayOfWeek = currentDate.getDay();
  return daysOfWeek[dayOfWeek];
}


 currentDay.textContent = `Today is ${getCurrentDate()}`;
