/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    var roulette = Math.floor((Math.random() * 100) + 1);
     console.log(roulette);
    function detector(x){
      if(Number.isInteger((x / 3) / 5)){
      return 'fizzbuzz';
      }
      else if(Number.isInteger(x / 5)){
        return 'buzz';
      }
      else if(Number.isInteger(x / 3)){
        return 'fizz';
      }
      else {
        return x;
      }

    };
console.log(detector(roulette));
})();
