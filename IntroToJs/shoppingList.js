var shoppingList = ["Milk","Bread","Bananas"];
var item = prompt("What else should i buy? ");
shoppingList.push(item)

for (i=0; i<shoppingList.length; i++){
  console.log("Dont forget to buy "+ shoppingList[i])
}


// var shoppingList = ["Milk","Bread","Bananas"];
// var item = prompt("What else should i buy? ");
// shoppingList.push(item)

// for (i=0; i<shoppingList.length; i++){
//   if (shoppingList[i]=="beer"){
//     ageVer();
//   }
//   console.log("Dont forget to buy "+ shoppingList[i])
// }



// function ageVer(){
//   var age = prompt("Please enter your age");

// if (age >= 21){
//   console.log("Drink responsibly  ")
// } else if (age < 21){
//   console.log("You cannot have a drink yet")
// };
// }