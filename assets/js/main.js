// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e 
var chilometri = prompt("Quanti km vuoi percorrere?");
console.log(chilometri);
// l'età del passeggero.
var eta = prompt ("Quanti anni hai?")
console.log(eta);
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
var prezzo = 0.21 * chilometri;
console.log(prezzo);
// va applicato uno sconto del 20% per i minorenni
var scontoMin = (prezzo * 20)/100;

// va applicato uno sconto del 40% per gli over 65.
var scontoOver = (prezzo * 40)/100;

var risultato;
if( eta < 18) {
    console.log(risultato = prezzo - scontoMin);
} else if (eta > 65) {
    console.log(risultato = prezzo - scontoOver);
} else {
    console.log(risultato = prezzo);
}

// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
// document.getElementById("spesa").innerHTML = "SPESA TOTALE " + (Math.round((risultato + Number.EPSILON)) * 100 / 100);

document.getElementById("spesa").innerHTML = "Il prezzo totale del biglietto è " + risultato.toFixed(2);
