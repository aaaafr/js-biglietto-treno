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
// va applicato uno sconto del 40% per gli over 65.
var totale1 = prezzo - ((prezzo * 20)/100);
var totale2 = prezzo - ((prezzo * 40)/100);



if (eta < 18) {
    console.log(totale1);
} else if (eta > 65) {
   console.log(totale2);

} else {
    console.log("Paghi prezzo pieno");
}


// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
document.getElementById("spesa").innerHTML = "La spesa totale è " +  + " euro"