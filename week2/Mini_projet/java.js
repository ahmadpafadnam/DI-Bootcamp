var computerNumber;
function playTheGame(){
    let jeu=confirm("Souhaitez-vous jouer au jeu ? ");
    if(!jeu){
        alert("Pas de problème, au revoir");
    }
    else{
       let nombre=prompt("Entrer un nombre compris entre 0 et 10",);
       if(!Number(nombre)){
        alert(" Désolé pas un numéro, au revoir");
       }
       else if((nombre<0)||(nombre>10)){
        alert("Désolé, ce n’est pas un bon nombre, au revoir");
       }
       else{
        Math.floor(Math.random() * 11);
       }
    }
}

function compareNumbers(userNumber,computerNumber){
    if(userNumber==computerNumber){
        alert("WINNER");
    }
    else if(userNumber>computerNumber){
       alert("Votre numéro est plus grand que celui de l’ordinateur, devinez à nouveau");
    }
    else{
        alert(" Votre numéro est plus petit que celui de l’ordinateur, devinez à nouveau ");
    }
}