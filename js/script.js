const firstAge = parseInt (prompt ("Qual'è eta di Gino?"));
const secondAge = parseInt (prompt ("Qual è l'età Antonietta?"));

if (firstAge > secondAge) {
    console.log(firstAge);

} else if (firstAge < secondAge) {
    console.log (secondAge);
} else {
    console.log ("le due persone hanno la stessa età");
}
