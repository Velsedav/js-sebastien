// Exercice 1
console.log(5+2);
console.log(5+"2");
console.log(5*2);
console.log(5*"2");


// Exercice 2
let i = 0;

i = i+1; /* i = Nouvelle valeur de */
i = i+1;
i = i+1;
i++; /* ++ = raccourci pour +1 */
i+=1;
i--; /* -- = raccourci pour -1 */

console.log(i)


// Exercice 3
const prenom = "Sebastien";
const nom = "VELASQUEZ";

let nomComplet=prenom + nom;

console.log(nomComplet);


// Exercice 4
const FirstName = "Alain"
console.log(`Bonjour` + FirstName + `ça va bien ?`); /* Concatenation */
console.log(`bonjour ${FirstName} ça va ?`); /* Interpolation */

// Exercice 5
const phrase ="J'ai oublié mon PC"

console.log(phrase.length)

// Exercice 6


// Exercice 7
let word ="Kamehameha!";
console.log(word[0]); /* trouver lettre en position 1 */ 
console.log(word.indexOf("!")); /* trouver position du caractère */

// Calculer : Exercice 2
let francais = 16;
let math = 13;
let geographie =14;
let musique =17;

let moyenne = (francais+math+geographie+musique)/4
console.log(moyenne);

// Calculer : Exercice 1
let Birth = 1959
let Today = 2024

let Age = (Today-Birth)

console.log(Age);

// Exemple fonction
//role: dire bonjour à quelqu'un
//parametre: prenom
// retourne : bonjour +prenom

function direBonjour (prenom){
    console.log(`bonjour ${prenom}`)

}

direBonjour("Ludivine")
direBonjour("Kim")
direBonjour("Abdoul")

// Exercice Fonctions

// Rôle : Calculer moyenne d'un élève
// Argument : Mathématiques, français, chimie et italien
// Return : Resultat du calcul de la moyenne

function Funct0Moy (Maths,French,Chemistry,Italian){
    return (Maths+French+Chemistry+Italian)/4

}
let Resultaaat = Funct0Moy (20,10,20,8)

console.log("La moyenne de l'élève est " +Resultaaat+"/20");
// Version encore mieux, calcul moyenne d'un élève dont la fonction connaît le prénom
// Paramètre : calcul et affiche en console la moyenne
// Return : Pas de retour

//Rôle : Additionner 2 chiffres
//Paramètres/Argument : 2 valeurs/chiffres
//Return : Le résultat de l'addition

function addition (a,b){
    return a+b
}

let resultat = addition (5,6)

console.log(resultat)
// Nous cherchons à créer une fonction mettant à jour le stock de pommes du magasin. Le magasin a en stock 4 pommes, et nous souhaitons que lorsqu’on renseigne un chiffre en argument de notre fonction, cela affecte le stock de pommes en le faisant baisser. Nous pouvons voir le nouveau stock dans la console.
//Rôle : Update stock
//Paramètres/Argument : x
//Return : Argument 4-x
function Decremen (a){
    return (4-a)
}
let Decrem = Decremen (2)
console.log(Decrem);

// Nous cherchons à créer une fonction mettant à jour notre offre en magasin. Nous proposons initialement les produits suivants : "thé, café, tisane, bubble tea". Nous souhaitons pouvoir remplacer “bubble tea” par un nouveau produit, que nous renseignerons en argument de la fonction. Enfin, nous voulons visualiser la nouvelle offre dans la console.
//Rôle : Remplacer un produit par un nouveau produit
//Paramètres/Argument : Produit à emplacer ==> Replaced,
//                      Produit remplaçant ==> NewProduct
//Return : La nouvelle offre (=liste produit des magasins)
function Replacomatic(Replaced, NewProduct){
    let ListeProduits ="thé, café, tisane, bubble tea"
    return ListeProduits.replace(Replaced, NewProduct)
    
}
console.log(Replacomatic("bubble tea", "coca"));
console.log(Replacomatic("café", "tiramisu"));



