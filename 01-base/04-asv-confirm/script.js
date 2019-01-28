/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

})();

function infos() {
  age = prompt("quel est votre age ?");
  genre = prompt("quel est votre genre ?");
  ville = prompt("quelle est votre ville ?")
}

infos();

if (confirm( age + ' ' + genre + ' ' + ville + '\n' + 'ces informations sont-elles exactes ?')) {
  alert("bien enregistré !")
} else {
  infos();
}

console.log(age); /*for debugging empty variables*/
