var ext = prompt("Please enter extension  ");

switch (ext) {
  case "1":
    text = "Please hold for John Watson";
    console.log(text);
    break;
  case "2":
    text = "Please hold for Sherlock Holmes";
    console.log(text);
    break;
  default:
    text = " Mrs. Hudson will call you back ";
    console.log(text);
}