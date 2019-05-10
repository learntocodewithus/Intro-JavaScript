var x = prompt("What is the weather looks like today? ");

switch (x) {
  case "rainy":
    text = "Dont forget your umbrella";
    console.log(text);
    break;
  case "sunny":
    text = "Dont forget your sunglusses";
    console.log(text);
    break;
  default:
    text = "Have a nice day ";
    console.log(text);
}