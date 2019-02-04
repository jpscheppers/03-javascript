/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    document.getElementById("run").addEventListener("click", function() {
    var myValue = Math.floor(Math.random() * 100) + 1;
    document.getElementById("n-1").textContent=myValue;
    var myValue2 = Math.floor(Math.random() * 100) + 1;
    document.getElementById("n-2").textContent=myValue2;
    var myValue3 = Math.floor(Math.random() * 100) + 1;
    document.getElementById("n-3").textContent=myValue3;
    var myValue4 = Math.floor(Math.random() * 100) + 1;
    document.getElementById("n-4").textContent=myValue4;
    var myValue5 = Math.floor(Math.random() * 100) + 1;
    document.getElementById("n-5").textContent=myValue5;
    var myValue6 = Math.floor(Math.random() * 100) + 1;
    document.getElementById("n-6").textContent=myValue6;
    var myValue7 = Math.floor(Math.random() * 100) + 1;
    document.getElementById("n-7").textContent=myValue7;
    var myValue8 = Math.floor(Math.random() * 100) + 1;
    document.getElementById("n-8").textContent=myValue8;
    var myValue9 = Math.floor(Math.random() * 100) + 1;
    document.getElementById("n-9").textContent=myValue9;
    var myValue10 = Math.floor(Math.random() * 100) + 1;
    document.getElementById("n-10").textContent=myValue10;

    var allValues = [myValue, myValue2, myValue3, myValue4, myValue5, myValue6, myValue7, myValue8, myValue9, myValue10];
    console.log(allValues);
    // find min value
    allValues.min = function( allValues ){
      return Math.min.apply( Math, allValues );
  };
    var minimum = allValues.min(allValues);
    console.log(minimum);
    document.getElementById("min").textContent=minimum;

    // find max value
    allValues.max = function( allValues) {
      return Math.max.apply( Math, allValues);
    };
    var maximum = allValues.max(allValues);
    console.log(maximum);
    document.getElementById("max").textContent=maximum;

    //sum
    // 1 - rewritten way
    // function for adding two numbers. Easy!
    const add = (a, b) =>
      a + b
    // use reduce to sum our array
    const sum = allValues.reduce(add);
    document.getElementById("sum").textContent = sum;
    /* 2 - Standard Way
    var sum = 0;
    for (var i = 0; i < allValues.length; i++) {
      sum += allValues[i]
    };
    document.getElementById("sum").textContent = sum; */

    // average
    let sum2 = allValues.reduce((previous, current) => current += previous);
    let avg = sum2 / allValues.length;
    document.getElementById("average").textContent = avg;


  });

})();
