//Общо време за четене на книгата: 212 страници / 20 страници за час = 10.6 часа
 //общо Необходимите часове на ден: 10.6 часа / 2 дни = 5.3 часа на ден
 function vacationBooks(countListBook, countListHour, countDays){
let hoursTotal = countListBook / countListHour;
let hoursDays = hoursTotal / countDays;

console.log(hoursDays);

 }
 vacationBooks(212,20,2)