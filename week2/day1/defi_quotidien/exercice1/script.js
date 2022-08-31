let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
fruits.splice(0,1);
let ordonne=fruits.splice(0,1); //extraction du premier element du tableau
console.log(fruits);
console.log(ordonne);
ordonne.push("Blueberries");// ajout de Blueberries
ordonne.push("Orange");// ajout de Orange
console.log(ordonne);// le nouveau tableau après le tri
ordonne.push("Kiwi");
let tableau=ordonne.slice(1,4); /* suppression de Apples sans utiliser la meme methode que la partie 1 on 
utilise le "slice" pour extraire la queue du tableau ie de l'indice 1 à 3*/
console.log(tableau);
let tableau1=tableau.slice(2,3); //inversion des element du tableau
console.log(tableau1);
tableau1.push("Orange");
tableau1.push("Blueberries");
console.log(tableau1);
// fruits.sort permet de trier le tableau par ordre alphabetique
//fruits.reverse reordonne le tableau dans l'autre sens