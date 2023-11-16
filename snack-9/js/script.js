// Chiedi all'utente due numeri, uno piu' piccolo (due cifre) e uno piu' grande (almeno quattro cifre): moltiplica il primo numero per 2 finche' non arriva ad essere maggiore del secondo numero.


// chiediamo all'utente due numeri a caso
const firstNumber = parseInt(prompt("inserisci un numero a due cifre!"));
const secondNumber = parseInt(prompt("inserisci un numero a quattro cifre!!!"));

// prendiamo questi valori e con un cycle for moltiplichiamo il primo valore per 2 finche' non diventa > del secondo numero
for (let result = firstNumber; result <= secondNumber; risultato *= 2) {
    console.log(risultato);
}