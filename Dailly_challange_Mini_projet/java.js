function palyThesong(){
    nombre=0;
    var i=0;
    var j=0;
    do{
        nombre=parseInt(prompt("Entrer le nombre de fois que vous voulez jouer la chasson : ",))
    }while(isNaN(nombre)||(nombre<0));

j=nombre;
var n=0;
var t=0;
for(i=0;i<nombre;i++){
    t=t+1;
    if(i==0){
        console.log(j+ " bottles of beer on the wall ");
    }
    else{
        console.log(j-t+1+ " bottles of beer on the wall ");
    }
    console.log("Take " + t + "down,pass it around ");
    console.log(j-t + " bottles of beer on the wall ");
    if(j==0){
        break
    }
}

}
palyThesong();