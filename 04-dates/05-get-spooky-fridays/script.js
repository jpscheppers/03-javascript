/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


    document.getElementById("run").addEventListener("click", function() {

      var userYear = document.getElementById("year").value;
      function getThatFrikinYear() {
        Date.getFullYear(userYear);
      };
      console.log(userYear);
      var year = getThatFrikinYear;

    });
