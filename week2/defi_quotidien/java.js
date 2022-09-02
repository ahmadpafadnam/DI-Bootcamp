let mot=prompt("entrer  des mots : ",);
let tableau=mot.split(",");
console.log(tableau);//transformation des chaines en tableau
let longueur=tableau.length;
for(let i=0;i<longueur;i++){ //affichage des elements lignes par lignes
    console.log(tableau[i]);
}