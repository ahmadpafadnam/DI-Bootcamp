let people = ["Greg", "Mary", "Devon", "James"];
// exercice 1

// PARTIE 1 (tableau)
//  1 suppression de "greg"
console.log("---");
people.shift();
console.log(people);
//  2 remplaçons james par jason
console.log("---");
people.splice(2,1,"Jason");
console.log(people);
// 3 mon nom à la fin du tableau
console.log("---");
people.push("Ahmad");
console.log(people);
// 4 indice de Mary
console.log("---");
let ind_Mary=people.indexOf("Mary");
console.log(" l'index de Mary est : "+ind_Mary);
// 5 copie du tableau pr la methode slice
console.log("---");
let newpeople=people.slice(1,3);
console.log(newpeople);
// 6 indice de foo
console.log("---");
let index_foo=people.indexOf("Foo");
console.log(index_foo);// ça renvoie parce le élement "Foo" ne figure pas dans le tableau
console.log("ça renvoie -1 parce l'élement Foo ne figure pas dans le tableau");
// 7 dernier element du tableau
console.log("---");
let dernier_element=people[people.length-1];
console.log(dernier_element);

// PARTIE 2 (boucles)
// 1 parcours et affichage des personnes du tableau
console.log("---");
console.log("les elements du tableau");
for(let i=0;i<people.length;i++){
    console.log(people[i]);
}
// 2 quittez le tableau après avoir affiché jason en utilisant breack
console.log("---");
console.log("quiter après l'affichage de Jason");
for(let i=0;i<people.length;i++){
    console.log(people[i]);
    if(i==people.indexOf("Jason")){
        break;
    }
}


// exercice2
//1 declaration du tableau
let colors=["bleu","blanc","noir","vert","rouge"];
//2 boucle de parcours et affiche les elements du tableau
console.log("---");
for(let i=0;i<colors.length;i++){
    console.log("Mon choix n°" +(i+1)+" est " +colors[i]);
}
// 3 tableau avec des suffixe
console.log("---");
let suffixe=["er","ièm"];
for(let i=0;i<colors.length;i++){
    if(i==0){
        console.log("Mon "+(i+1)+suffixe[0]+" choix est "+colors[i]);
    }
    else{
        console.log("Mon "+(i+1)+suffixe[1]+" choix est "+colors[i]);
    }
}

// exercice 3
// 1 deamndez à entrer un numéro
console.log("---");
var nombre=parseInt(prompt("Entrer un nombre : ",));
console.log("Le type de "+nombre+" est "+typeof(nombre));
// 2 controle de saisi
console.log("---");
while(nombre<10){
    nombre=parseInt(prompt("Entrer un nombre : ",));
}
console.log("Le type de "+nombre+" est "+typeof(nombre));


// EXERCICE4
let building = {
    numberOfFloors : 4,
    numberOfAptByFloor : {
        firstFloor : 3,
        secondFloor : 4,
        thirdFloor : 9,
        fourthFloor : 2,
    },
    nameOfTenants : ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan :  [4, 1000],
        david : [1, 500],
    },
}
// affichage du nombre d'étage
console.log("---");
console.log("le nombre d'etage dans le batiment est : ");
console.log(building.numberOfFloors);
//affichage du nombre d'appartement aux etage 1  et 3
console.log("---");
console.log("le nombre d'appartement à l'etage 1 est : ");
console.log(building.numberOfAptByFloor.firstFloor);

console.log("le nombre d'appartement à l'etage 3 est : ");
console.log(building.numberOfAptByFloor.thirdFloor);
// le nom du deuxieme locataire et le nmbre de pieces 
console.log("---");
console.log("le nom deuxième  est : ");
console.log(building.nameOfTenants[1]);
console.log("Et le nombre de pieces est : ");
console.log(building.numberOfRoomsAndRent.dan[0]);
//verification des loyers
console.log("---");

if(building.numberOfRoomsAndRent.david[1]+building.numberOfRoomsAndRent.sarah[1]>building.numberOfRoomsAndRent.dan[1]){
    console.log(" oui la somme des loyers de Sarah et de David est supperieure au loyer de Dan");
    building.numberOfRoomsAndRent.dan[1]=1200;
    console.log(" le nouveau loyer de Dan est :");
    console.log(building.numberOfRoomsAndRent.dan[1]);
}


// exercice 5
//création de l'objet famille
let famille={
    pere : "Moussa",
    mere : "Sali",
    enfants : {
        premier : "Adel",
        deuxieme : "Kader",
        troisieme : "Fatou",
    },
    oncle : "Alex",
    tante : "Awa",
    grand_pere : "Ali",
    grand_mere : "Maryam",
}
// affichage des clés de de la famille avec l boucle for in
console.log("---");
console.log("affichage des clés de de la famille");
for (x in famille) {
    console.log(x);
}
// affichage des clés de de la famille avec l boucle for in
console.log("---");
console.log("affichage des valeurs de de la famille");
for (x in famille) {
    console.log(famille[x]);
}

// exercie 6
console.log("---");
let details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
}
for(x in details){
    console.log(x+" "+details[x]);
}


// exercice 7
let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
// ordonnons les element du tableau
console.log("---");
names.sort();
console.log(names);
// affichage du nom de la societe
let societe=names[0][0]+names[1][0]+names[2][0]+names[3][0]+names[4][0]+names[5][0];
console.log(" le nom de la société est :"+societe);
