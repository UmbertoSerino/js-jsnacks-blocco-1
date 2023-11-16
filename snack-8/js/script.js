// Chiedi un numero di 7 cifre all'utente e calcola la somma di tutte le cifre che compongono il numero.

// chiediamo

const userNumber = parseInt(prompt("Dammi i tuoi numeri!!!"));
const numberToString = userNumber.toString();

let sum = 0;

for (let index = 0; index < numberToString.length; index++) {
    let = singleLetter = parseInt(numberToString[index]);
    sum += singleLetter;
}

console.log(sum);

