// Exercice 1  

// Role: calculer la moyenne de 4 notes
// parametres : les 4 notes de  maths , francais, chimie italien
// retour: le resultat du calcul de la moyenne 
function moyenne(maths, francais, chimie, italien){
    return (maths+francais+chimie+italien)/4
}

let resultat = moyenne(10,14,12,20)
console.log("La moyenne est "+resultat+"/20")


// 2 eme  solution 
// Role : Fonction plus intelligente qui affiche en console la moyenne d'un eleve dont elle connait le prenom:
// parametre: Les 4 notes et le prénom de l'eleve
//retour: pas de retour

function moyenneIntelligente(prenom, maths,francais,chimie,italien){
    const moy =(maths+ francais+chimie+italien)/4
    console.log(`la moyenne de ${prenom} est de ${moy}/20 `)
}


//-----------------------------------------------------------------------------------------
// Exercice 2 
// Role: enlever du stock a un stock de pomme
// parametre : le nombre de pommes a enlever 
// retour : le nombre de pomme dans le stock actuel
function stock(stockInitial,chiffre){
    return stockInitial-chiffre
}


//-----------------------------------------------------------------------------------------
//Exercice 3 :
// "thé, café, tisane, bubble tea"

// Role : remplacer un produit par un autre
// Parametres : le produit a remplacer => ancienProduit
            // le nouveau produit => nouveauProduit
// retour : la nouvelle (la liste des produits de mon magasin)

function remplacementProduit(ancienProduit, nouveauProduit){
    let offre = "thé, café, tisane, bubble tea"
    return offre.replace(ancienProduit,nouveauProduit)
} 

console.log(remplacementProduit("bubble tea","coca"))
console.log(remplacementProduit("café", "chocolat"))

//------------------------------------------------------------------------------------------
// Exercice 4 : 
// Role: Une fonction qui verifie si un mot de passe contient un @
// parametre: le mot de passe a verifier (mdp)
// retour:  true si le caractere @ a été trouvé
//          false si le caractere n'a pas eté trouvé

function verifMdp(mdp){
    return mdp.includes("@")
}

// je stocke le retour de ma fonction dans une variable
const testmdp = verifMdp("MonMot2passe@42")
// pour pouvoir l'afficher dans la console
console.log(testmdp)


// ------------------------------------------------------------------------------------
// on a sauté l'exercice 5 car il utilise les tableaux que l'on a pas enore vu :) 

//-----------------------------------------------------------------------------------------
// Exercice 6 : 
// Role : Faire l'addition de 2 nombres
// Parametres: a et b les deux nombres
// Retour: la somme de a et b
function somme(a,b){
    return a+b
} 



//----------------------------------------------------------------------------------------
// Exercice 7: 
// Role : pose une question a l'utilisateur et retourne la réponse entrée par l'utilisateur
// parametre: la question a afficher dans la popup
// retour : la reponse de l'utlisateur

function poseLaQuestion(question){
    const reponse = prompt(question)
    return reponse
}

const reponse =question("quelle est la couleur du cheval blanc d'Henry 4 ? ")
console.log(reponse)
// ce qui s'affiche en console ici c'est la réponse qui a été tapé par l'utilisateur

// => REMARQUE : la constante réponse déclarée dans la fonction est UNIQUEMENT accessible dans la fonction et ne rentre pas en conflit avec la constante reponse déclarée en dehors ! 
// => de la meme facon que tout ce qui se passe a Vegas reste a Végas, ce qui se passe dans une fonction reste dans la fonction, la seule chose qui en sort c'est son return 

//-----------------------------------------------------------------------------------------
// Exercice 8 : 
// Role : Une fonction qui affiche la derniere lettre d'un mot 
// parametre: le mot a annalyser
// retour : rien (bah oui elle affiche juste :) ) 
function derniereLettre(mot){
    console.log(mot[mot.length -1])
}

// LA premiere lettre d'une chaine de caratere est a la position 0 => chaine[0]
// LA DERNIERE LETTRE d'UNE CHAINE est TOUOUJOURS a la position : sa longeur - 1
// chaine[chaine.length - 1]