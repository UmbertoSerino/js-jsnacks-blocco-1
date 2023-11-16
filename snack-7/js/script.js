// Crea un array vuoto. Chiedi per 6 volte all'utente di inserire un numero, se è dispari inseriscilo nell'array.

// creiamo un array vuoto
const insertList = [];

// ci creiamo un ciclo dove va ripetuta l'azione per 6 volte
for (let index = 0; index < 6; index++) {
    // creiamo una variabile e chiediamo al cliente di inserire dei numeri
    let userNumber = parseInt(prompt("Inserisci il tuo numero"));
    // se il numero inserito dal cliente è divisibile per 2 e se il resto è diverso da 0 allora è un numero dispari
    if (userNumber % 2 !== 0) {
        // se il numero è dispari usiamo la funzione insertList.push(nome dell'array) per inserirlo nell'array vuoto
        insertList.push(userNumber);
    }
}
// infine controlliamo in console il numero degli array inseriti in lista
console.log("Numeri dispari inseriti:", insertList);
