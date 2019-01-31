/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

  var d = new Date();
  var userDay = d.getUTCDate();
  var userMonth =  d.getMonth();
  var userYear = d.getFullYear();
  var userHour = d.getHours();
  var userMinute = d.getMinutes();

  var weekday = new Array(7);
  weekday[0] =  "dimanche";
  weekday[1] = "lundi";
  weekday[2] = "mardi";
  weekday[3] = "mercredi";
  weekday[4] = "jeudi";
  weekday[5] = "vendredi";
  weekday[6] = "samedi";

  var currentDay = weekday[d.getDay()];

  var monthName = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
  var currentMonth = monthName[d.getMonth()];

  // proper numbers fix
  userMonth = (userMonth + 1);

  console.log(d);
  console.log(userDay);
  console.log(userMonth);
  console.log(userYear);
  console.log(monthName);
  // display  0 in front of months and days > 10
    if (userMonth < 10) {
      userMonth = ('0' + userMonth);
    };
    if (userDay < 10) {
      userDay = ('0' + userDay);
    };
  document.getElementById("target").textContent=('Nous sommes le ' + currentDay + ' ' + userDay + ' ' + currentMonth + ' ' + userYear + ' - ' + userHour + ':' + userMinute);

})();
