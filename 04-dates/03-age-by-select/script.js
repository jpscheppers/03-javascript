/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

  document.getElementById("run").addEventListener("click", function() {
  var dobday = document.getElementById("dob-day").value;
  var dobmonth = document.getElementById("dob-month").value;
  var dobyear = document.getElementById("dob-year").value;

  var d = new Date();
  var userDay = d.getDay();
  var userMonth =  d.getMonth();
  var userYear = d.getFullYear();

  console.log(d);
  console.log(userDay);
  console.log(userMonth);
  console.log(userYear);

    var age = (userYear - dobyear);
      alert('votre age est ' + age);


})


})();
