// https://www.w3schools.com/jsref/jsref_obj_global.asp
var check1 = prompt("How much is check ")
var check = parseInt(check1);
// parseFloat(string); 
var tax_rate = 0.08;
var tip_rate = 0.18;
var tax = check * tax_rate;
var tip = check * tip_rate;
var total = check + tax + tip;
console.log(total.toFixed(2));
// window.alert('$'+total);
// console.log('$'+total);