const nameList = ["LeonardoDiCaprio", "TobeyMaguire", "CarreyMullingan"];

const putYourName = prompt("inserisci il nome dell'attore")

let people = false;

for (let i = 0; i < nameList.length; i++){
    const guest = nameList [index];

    if (guest === putYourName) {
        people = true;
    }
}

console.log(people);