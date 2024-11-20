// Role : Vérifier s'il y a un @
// Arguments : Mot de passe
// Retour : Vrai ou faux

// const TestedPassword = 'NicoLeBossDu42';
// const TestedCaracter = '@';
// console.log(
//   `The caracter "${TestedCaracter}"
//   ${TestedPassword.includes(TestedCaracter) ? 'is' : 'is not'} in the password that was just tested`,);

//   function VerifMdp(mdp) {
//       const caractere ="@"
//     return mdp.includes("caractere")
//   }
//   console.log(VerifMdp("@lternative"));

function VerifierMdp(Salut,Bonjour, aurevoir, v) {
    return aurevoir.includes(v); 
}

let result = VerifierMdp("ch@t", ";", "aurevoir");
console.log(result);
