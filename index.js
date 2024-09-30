console.log('Ciao')

//TRACCIA
// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).



// FASI COMMENTATE

// Chiedere al utente 2 cose:
// Verificare l'età del utente
// Verificare quanti chilometri deve fare
// Dare un prezzo in base alle risposte

// Prima fase: Preparazione
// Creo le variabili
let age;
let km;
// Creo la variabile dove salvare il messaggio finale
let message;

// Seconda fase: Raccogliamo i dati
// Utilizzo un prompt per salvare le parole
age = prompt('Inserisci la tua età');
km = prompt('Inserisci quanti chilometri devi percorrere');

console.log(age, km);