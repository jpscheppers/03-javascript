/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to get the value of an input: document.getElementById("element-id").value
  /*  var myNumbers = document.getElementById("numbers").value;
    console.log(myNumbers);
    var parsedNumbers = [parseInt(myNumbers)];
    console.log(parsedNumbers);  */



    document.getElementById("run").addEventListener("click", function() {


      var myNumbers = document.getElementById("numbers").value; // Input
      var parsedNumbers = myNumbers.match(/\d+/g); // Get a list of all integers
      parsedNumbers.sort(function(x,y){         // Sort list
          return x - y;
      });
      console.log(parsedNumbers);
      alert(parsedNumbers);
    });

})();

/*alternative method: use split instead of match + regex*/
