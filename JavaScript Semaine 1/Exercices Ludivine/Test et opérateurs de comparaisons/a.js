// Exercice 1 : strictement égal!
// Exo 1 : Ecrivez une expression JavaScript pour vérifier si un nombre est strictement égal à 10

let nbr=15;
console.log(nbr===10);

// ## Exercice 2 : différent !
// Écrivez une expression JavaScript pour verifier si la chaîne de caractères “Hello” est différente de la chaine “hello”

let wrd="furoncle";
console.log(wrd!=="Furoncle");

// ## Exercice 3: strictement supérieur!
// Écrivez une expression JavaScript pour vérifier si 8 est strictement supérieur a 12
// Quelle réponse attendez vous  ?  Vérifiez en console !

            let nbrStrctSpr=8;
            console.log(nbrStrctSpr>12);
if(8>12){
    console.log("Oui c'est supérieur");

}else{
    console.log("Ben non bolosse !");
    
}


// ## Exercice 4 : Ce nombre est il pair ?
// Ecrire un script qui permet de tester si un nombre stocké dans une variable est pair qui affiche en console : “le nombre est pair “ ou “le nombre est impair”

            // Solution 1
let NbrOddEven=35;

// Modulo % = si le reste de la division par 2 vaut 0
if(NbrOddEven % 2 === 0){
    console.log("Number is even");
}else{
    console.log("Number is odd");

}
            // Solution 2
let n = 36;
function NbrPairImpair(n) {
    return (n % 2 === 0);
}
NbrPairImpair(n) ? console.log("Le nombre est pair") : console.log("Le nombre est impair");

// ## Exercice 5 : Quel temps fait-il ?
// Déclarer une variable meteo : qui peut prendre comme valeur : soleil, pluie, neige
// Si météo vaut neige alors le code affiche “Met des bottes”,sinon si météo vaut pluie alors le code affiche “N’oublie pas ton parapluie”, sinon si meteo contient soleil le code affiche “Prends une casquette”

let Meteo="Orage";

    if(Meteo==="neige"){
        console.log("Met des bottes👢")
    }
    else if(Meteo==="pluie"){
        console.log("N'oublie pas ton parapluie☔")
    }
    else if(Meteo==="soleil"){
        console.log("Prends une casquette🧢")
    }else{
        console.log("Regarde le ciel et débrouille-toi");

    }

// ## Exercice 6 :  Evaluer l’age
// Écrivez un script qui prend un âge en entrée et affiche "Enfant" si l'âge est inférieur à 12, "Adolescent" s'il est compris entre 12 et 18 inclus, et "Adulte" s'il est supérieur à 18.

                // <12 alors enfant
                // >=12 && <=18 alors Adolescent
                // >18 alors adulte

let UserAge=10;

if(UserAge<12){
    console.log('Child');
}else if(UserAge >=12 && <=18){
    console.log('Teenager');
}else if(UserAge>18){
    console.log('Already dying')
}


// ## Exercice 7: Triangles
// Écrivez un script qui prend trois longueurs en entrée et affiche "C'est un triangle équilatéral" si les trois longueurs sont égales, "C'est un triangle isocèle" si exactement deux longueurs sont égales, et "C'est un triangle quelconque" sinon.


// ## Exercice 8 : Réduction
// Créez une fonction qui détermine si une personne est éligible à une réduction spéciale dans un magasin en fonction des critères suivants :

//  ## Exercice 9 : Feux tricolores
