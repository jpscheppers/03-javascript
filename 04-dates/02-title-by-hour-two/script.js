/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

  var d = new Date();
  var myHours = d.getHours();
  var myMinutes =  d.getMinutes();

  function textSelector(){
    if (myHours < 18 & myMinutes < 30) {
      document.getElementById("target").textContent="Bonjour !";
      }
    else if ((myHours >= 17 & myMinutes >= 30) || myHours >= 18) {
      document.getElementById("target").textContent="Bonsoir !";
      }
    };
    textSelector();
})();
