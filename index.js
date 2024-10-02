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
// Creo variabile età utente
let age;
// Creo variabile km percorsi
let km;
// Creo variabile con prezzo al chilometro
let price_km;
// Creo variabile con prezzo totale
let total_price;
// Creo la variabile dove salvare il messaggio finale
let message;

// Seconda fase: Raccolta dati
// Assegno alle variabili il risultato del prompt
age = Number(window.prompt('Inserisci la tua età'));
km = Number(window.prompt('Inserisci quanti chilometri vuoi percorrere'));
// Assegno valore prezzo al km
price_km = 0.21
// Stampo le variabili con i dati raccolti
console.log(age, km, price_km);

// Terza fase: Elaborazione
// Calcolo biglietto senza sconti
total_price = km * price_km;
console.log(total_price);
// Se l'età dell'utente è minore di 18 allora applico lo sconto del 20%
if (age < 18) {
    // Calcolare sconto del 20% sul prezzo totale
    const discount = total_price * 0.2;
    console.log(discount);
    //Applico lo sconto al prezzo finale
    total_price -= discount;

    // Aggiorno la variabile 'message' con un messaggio appropriato
    message = `Ciao, il costo del tuo biglietto è: €${total_price.toFixed(2)} - Applicato sconto del 20%`;
    window.alert(message);
    console.log(message);
}
// Se l'età dell'utente è maggiore di 65 applico lo sconto del 40%
else if (age > 65) {
    // Calcolare sconto del 20% sul prezzo totale
    const discount = total_price * 0.4;
    console.log(discount);
    // Applico lo sconto al prezzo finale
    total_price -= discount;
    // Aggiorno la variabile 'message' con un messaggio appropriato
    message = `Ciao, il costo del tuo biglietto è: €${total_price.toFixed(2)} - Applicato sconto del 40%`;
    window.alert(message);
    console.log(message);
}
// Altrimenti il prezzo è pieno
else {
    // Aggiorno la variabile 'message' con un messaggio appropriato
    message = `Ciao, il costo del tuo biglietto è: €${total_price.toFixed(2)}`;
    window.alert(message);
    console.log(message);
}