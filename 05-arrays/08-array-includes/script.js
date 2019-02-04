/* becode/javascript
 *
 * /05-arrays/08-array-includes/script.js - 5.8: présence dans un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "kiwi",
        "banane",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    document.getElementById("run").addEventListener("click", function() {
      const value = 'pomme';
      const isInArray = fruits.includes(value);
      console.log(isInArray);
      if (isInArray == true){
        console.log('Oui il y a une pomme.');
      } else {
        console.log('pas de pomme.');
      }
      });


})();


/*fruits.forEach((i) => {
  if (fruits[i] == 'pomme'){
    console.log('Oui il y a une pomme.');
  }
  else if (fruits[i] !== 'pomme'){
    console.log('pas de pomme.');
  }
});*/
