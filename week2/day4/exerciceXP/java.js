// exercice 1

// PARTIE 1
// definition de la fonction
console.log("partie 1");
function infoAboutMe(){
    console.log(" Mon nom est Ahmad,j'ai 25 ans et j'aime le football");
}
// appel
infoAboutMe();
console.log("partie 2");
function infoAboutPerson(personName,personAge,personColor){
    console.log("Votre nom est "+personName+" "+", votre avez "+personAge+ " ans et votre couleur péferée est "+personColor);
}
infoAboutPerson("Alex",34,"noir");

// exercice 2

/*
console.log("exerice 2");
function calculateTip(){
    let montantFacture=parseFloat(prompt("Ebtrer le montant de la facture : ",));
    var pourboire;
    if(montantFacture<50){
        pourboire=(montantFacture*20)/100;
    }
    else if((montantFacture>=50)&&(montantFacture<200)){
        pourboire=(montantFacture*15)/100;
    }
    else{
        pourboire=(montantFacture*10)/100;
    }
    pourboireFacture=montantFacture+pourboire;
    return pourboireFacture;
}
calculateTip();
console.log(" le pourboire finale et la facture est : " +pourboireFacture +"§ ");
*/

// execice 3
console.log("exercice 3")
function isDivisible(){
    var x=0;
    sum=0;
    console.log("les nombre inferieurs à 500 et divisible par 23 sont : ");
    while(x<=500){
        if(x%23==0){
            console.log(x);
            sum=sum+x;
        }
        x=x+1;
    }
    console.log("la somme de ces nombre vaut : ");
    console.log(sum);
}
isDivisible();
// ecercice 4
console.log("exercice 4")
let montant=0;
let stock={
    banana:6,
    apple:0,
    pear:12,
    orange:32,
    blueberry:1,
}
let prices={
    banana:4,
    apple:2,
    pear:1,
    orange:1.5,
    blueberry:10, 
}
let shoppingList={
    banana:1,
    orange:1,
    apple:1,
} 
function myBill(){
    for(x in shoppingList){
        if(stock[x]!=0){
            console.log(" le prix de "+x +" est "+prices[x]+" FCFA");
            stock[x]=stock[x]-1;
            montant=montant+prices[x];
            // console.log(" le stock de "+ x + " restant est "+stock[x]);
        }
    }
    return montant;
}
myBill();
console.log(" le montant total est : "+montant+" FCFA")

// exercice 5
console.log("exercice 5");
var result;
function changeEnough(itemPrice, amountOfChange){
    let valeurTotale=amountOfChange[0]*0.25+amountOfChange[1]*0.10+amountOfChange[2]*0.05+amountOfChange[3]*0.01;
    if(valeurTotale>=itemPrice){
        result="true";
        return result;
    }
    else{
        result="false";
        return result;
    }
   
}
// appel de la fonction 
changeEnough(0.75,[0,0,20,5]);
console.log(result);


// exercice 6
var nuit;
var somme;
function hotelCost(){
    do{
        nuit=prompt("Entrer le nombre de nuit que vous souhaitez passer dans cet hotel ",);
    }while(typeof(nuit)=='number');
    somme=nuit*140;
    return somme;
}
hotelCost();
console.log(" le montant total de vos "+nuit +" nuit(s) vaut "+somme+ " FCFA");