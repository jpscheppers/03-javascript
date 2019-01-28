/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.




prompt('Quel est ton age ?');

function questionnaire() {
  let age = prompt("Quel est ton âge ?");
  let sexe = prompt("Quel est ton genre ?");
  let ville = prompt("Dans quelle ville habites-tu ?");
}

var r = confirm('Ces informations sont-elles correctes ?');

if (r == true) {
    alert("C'est noté!");
} else {
  questionnaire();
};

if (confirm == "oui") {
  alert("C'est noté!");
} else {
  questionnaire();
}


/*let confirm = prompt("ton âge est " + age + \n + "Ton genre est " + sexe + \n + "ta ville est " + ville + \n + "Ces informations sont-elles correctes ?");
if (confirm == "oui") {
  alert("C'est noté!");
} else {
  questionnaire();
}
