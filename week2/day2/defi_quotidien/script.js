let sentence="le film n'est pas si mauvais,je l'aime";
let wordNot=sentence.indexOf("pas");
let wordBa=sentence.indexOf("mauvais");
console.log(wordNot);
console.log(wordBa);
if(wordNot<wordBa){
  let newsentence=sentence.replace("n'est pas si mauvais","est bon");
  console.log(newsentence);
}
else{
    console.log(sentence);
}