let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
let taille=users.length;
let rest;
if(taille==0){
  console.log("il n'ya personne en ligne :");
}
else if (taille==1){
  console.log(" il n'ya qu'une seule personne connectée : "+users[0]);
}
else if(taille==2){
  console.log(" il y'a 2 personnes connectées :"+users[0]+ " et "+users[1]);
}
else{
  rest=taille-2;
  console.log(users[0]+" , "+users[1]+" et "+rest+" autres personnes sont en ligne ")
}
