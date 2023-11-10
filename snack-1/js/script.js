chiedere all'utente con due prompt gli anni di due persone e comunicare quale delle due è più grande

const firstAge = prompt ("Qual'è eta di Gino?");
const secondAge = prompt ("Qual è l'età Antonietta?");

if (firstAge > secondAge) {
    console.log("la prima persona è più grande della seconda");

} else if (firstAge < secondAge) {
    console.log ("la seconda persona è più grande della prima");
}
