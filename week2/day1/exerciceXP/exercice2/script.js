// partie 1
let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
let myWatchedSeriesLength=myWatchedSeries.length;
console.log(myWatchedSeriesLength);
let myWatchedSeriesSentence="j'ai regardé la serie "+myWatchedSeries[2];
console.log(myWatchedSeriesSentence);
console.log("j'ai regardé "+myWatchedSeries.length +" series : "+myWatchedSeries[0]+" , "+myWatchedSeries[1] +" ,"+ myWatchedSeries[2]);
// partie2
myWatchedSeries.splice(2,1,"amis");// remplaver le dernier element par "amis" 
myWatchedSeries.push("prison breack"); // ajouter prison breack à la fin du tableu
myWatchedSeries.splice(0,0,"squid game"); // insertion d'element en tete (indice 0,0 element supprimer,element ajouté)
myWatchedSeries.splice(1,1)// suppression de "black mirror qui se trouve maintenant à l'indice 1"
let lettre=myWatchedSeries[1][2];
console.log(lettre);
console.log(myWatchedSeries);