/* becode/javascript
 *
 * /04-dates/01-title-by-hour-one/script.js - 4.1: texte en fonction de l'heure (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

  var d = new Date();
  console.log('d' + d);
  var myTime = d.getHours(); //+ d.getMinutes();
  console.log('myTime ' + myTime);
  function textSelector(){
    if (myTime >= 18) {
      document.getElementById("target").textContent="Bonsoir !";
      }
    if (myTime < 18)    {
      document.getElementById("target").textContent="Bonjour !";
      }
    };
    textSelector();
})();
