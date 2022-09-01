let i=0;
var tab=["*"];
do{
  if (i==0){
    console.log(tab[0]);
  }
  else{
    console.log(tab.join(" "))
  }
  tab.push("*");
  i=i+1;
}while(i<6);