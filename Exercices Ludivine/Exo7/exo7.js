//Return + prompt
//Consignes : Nous souhaitons créer une fonction qui posera une question en utilisant la fonction "prompt" pour poser une question. La réponse sera retournée et affichée dans la console.

// Role : Poser une question et récupérer une réponse
// Argument : rien (car on attend une réponse et on ne sait pas ce qu'elle va être)
// Return : La réponse

function Quizz() {
    let Reponse = prompt("Quelle est la capitale du Burkina Faso ?") /* Stock la réponse */
    return Reponse
}
console.log(`La réponse de l'utilisateur est ${Quizz()}`); /* La Fonction Quizz est vide car il n'y a pas d'argument */