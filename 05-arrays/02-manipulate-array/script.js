/* becode/javascript
 *
 * /05-arrays/02-manipulate-array/script.js - 5.2: manipulation de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


document.getElementById("run").addEventListener("click", function() {
    var fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    fruits.shift(); //removes first element of the array
    fruits.pop(); //removes first element of the array
    fruits.push("banana"); //adds item at the end of the array
    fruits.unshift("kiwi"); //adds item at te start of the array
    alert(fruits);
});
