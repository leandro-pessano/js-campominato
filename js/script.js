var bombe = [];
var numeriUtente = [];
var sentinella = true;

while (bombe.length < 16) {
  var bomba = Math.floor(Math.random()*100) +1;
  if (bombe.includes(bomba) == false) {
    bombe.push(bomba)
  }
}
console.log(bombe);

while (numeriUtente.length < 84 && sentinella == true) {
  var numero = parseInt(prompt('inserisci un numero tra 1 e 100'));
  if (numeriUtente.includes(numero) == false) {
    numeriUtente.push(numero);
  } else {
      alert('Hai già inserito questo numero')
  }
  if (bombe.includes(numero) == true) {
    sentinella = false;
    var punteggio = numeriUtente.length -1;
    alert('Hai perso con punteggio: ' + punteggio);
  }
}
console.log(numeriUtente);

if (numeriUtente.length == 84) {
  alert('Hai vinto');
}
