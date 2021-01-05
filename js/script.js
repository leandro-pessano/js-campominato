// SENZA FUNZIONI

// var bombe = [];
// var numeriUtente = [];
// var sentinella = true;
//
// while (bombe.length < 16) {
//   var bomba = Math.floor(Math.random()*100) +1;
//   if (bombe.includes(bomba) == false) {
//     bombe.push(bomba)
//   }
// }
// console.log(bombe);
//
// while (numeriUtente.length < 84 && sentinella == true) {
//   var numero = parseInt(prompt('inserisci un numero tra 1 e 100'));
//   if (numeriUtente.includes(numero) == false) {
//     numeriUtente.push(numero);
//   } else {
//       alert('Hai già inserito questo numero');
//   }
//   if (bombe.includes(numero) == true) {
//     sentinella = false;
//     numeriUtente.length -= 1;
//     alert('Hai perso con punteggio: ' + numeriUtente.length);
//   }
// }
// console.log(numeriUtente);
//
// if (numeriUtente.length == 84) {
//   alert('Hai vinto');
// }

// CON FUNZIONI E BONUS (switch difficoltà)

var bombe = [];
var numeriUtente = [];
var sentinella = false;

var message = prompt('Scegli la difficoltà! Scrivi: normal, hard o too hard')
while (message != 'normal' && message != 'hard' && message != 'too hard') {
  alert('Devi scrivere: normal, hard o too hard')
  var message = prompt('Scegli la difficoltà! Scrivi: normal, hard o too hard')
}

var tentativi;
switch (message) {
  case 'normal':
    var tentativi = 100 - 16;
    break;
  case 'hard':
    var tentativi = 80 - 16;
    break;
  case 'too hard':
    var tentativi = 50 - 16;
    break;
  default:
    var tentativi = 100 - 16;
}

while (bombe.length < 16) {
  var bomba = Math.floor(Math.random()*(tentativi + 16)) +1;
  if (check(bombe, bomba) == false) {
    bombe.push(bomba);
  }
}
console.log(bombe);

while (numeriUtente.length < tentativi && sentinella == false) {
  var numero = parseInt(prompt('inserisci un numero tra 1 e ' + (tentativi + 16)));
  while (numero > tentativi + 16 || numero < 1 || isNaN(numero)) {
    alert('Devi inserire un numero consentito')
    var numero = parseInt(prompt('inserisci un numero tra 1 e ' + (tentativi + 16)));
  }
  if (check(bombe, numero) == true) {
    sentinella = true;
    alert('Hai perso con punteggio: ' + numeriUtente.length);
  } else if (check(numeriUtente, numero) == false) {
    numeriUtente.push(numero);
  } else if (check(numeriUtente, numero) == true) {
    alert('Hai già inserito questo numero');
  }
}
console.log(numeriUtente);

if (numeriUtente.length == tentativi) {
  alert('Hai vinto');
}

// Funzioni
function check(array, num) {
  var check = false;
  for (var i = 0; i < array.length; i++) {
    if (num == array[i]) {
      var check = true;
      return check;
    }
  }
  return check;
}
