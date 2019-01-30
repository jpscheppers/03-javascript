/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
 // document.getElementById("element-id").value;



(function() {


      document.getElementById("red").addEventListener("click", function() {
        /*body.bgcolor="red";
        body.setAttribute(bgcolor, red);
        document.getElementsByTagName('body').setAttribute('bgcolor', 'red'); */
        document.body.style.backgroundColor = "red";
        console.log(document.body.style.backgroundColor);
          /* this step isn't necessary, it's just for fun LUL
            var myColor = document.getElementsByTagName('body').getAttribute('background-color');
            console.log('background changed to' + myColor);
            */
          })
      document.getElementById("green").addEventListener("click", function() {
        document.body.style.backgroundColor = "green";
        console.log(document.body.style.backgroundColor);
      })

      document.getElementById("yellow").addEventListener("click", function() {
        document.body.style.backgroundColor = "yellow";
        console.log(document.body.style.backgroundColor);
      })

      document.getElementById("blue").addEventListener("click", function() {
        document.body.style.backgroundColor = "blue";
        console.log(document.body.style.backgroundColor + ' da ba dee');
      })

})();
