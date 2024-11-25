// // Exercice manipulation de DOM :

// // ex1 : Ecrire une fonction qui modifie un h1 avec le texte qui sera passé en paramètre
// // R : Modifie le contenue du h1
// // A : Le texte à afficher
// // R : rien

// // // Lecture 
// // const contenuHTML = document.getElementById('TitreH1').innerHTML;
// // // Ecriture
// // document.getElementById('TitreH1').innerHTML = "JavaScript c'est l'enfer";

// // let titre=document.querySelector('h1')

// function changeLeTitre(texte) {
//     let titre=document.querySelector('h1')
//     titre.innerHTML = "JavaScript c'est l'enfer"
// }


// // ex2: Ecrire une fonction qui change la couleur de background d'une div
// // R : 
// // A : 
// // R : 

// function ChangementCouleur(couleur) {
//     let div = document.querySelector(".DivAChanger")
//     div.computedStyleMap.backgroundColor = couleur
// }

// // bonus : cette fonction change aléatoirement la couleur de bg de la div

// function RandomColor() {
//         // role : construire une couleur aléatoire en (r, g, b)
//         // Argument : rien
//         // Return : la couleur
//     let r= Math.ceil(math.random()*255);
//     let g= Math.ceil(math.random()*255);
//     let b= Math.ceil(math.random()*255);

//     return `rgb(${r},${g},${b})`
//     // dans console
//     // let couleur = randomColor()
// }

// // type d'evenement à ecouter et le nom de la fonction à déclencher quand l'evenemnt sera realisé
// div.addEventlistener(type, nom fonction)

// .innerHTML = modifier du contenu d'une balise
// classtlist.add/remove