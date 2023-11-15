// Ciclare per i primi 100 numeri e inserire in un array esclusivamente i numeri divisibili per 7 o per 8.

const newArray = [];

for (let index = 1; index <= 100; index++) {
    if (index % 7 === 0 || index % 8 === 0)
    newArray.push(index)
}
console.log(newArray)