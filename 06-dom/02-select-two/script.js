/* becode/javascript
 *
 * /06-dom/02-select-two/script.js - 6.2: sélection par sélecteur css
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    var myTarget = document.getElementsByClassName("target");
    console.log(myTarget);
      for (var i = 0; i < myTarget.length; i++) {
    myTarget[i].textContent = "owned";
    }

})();
