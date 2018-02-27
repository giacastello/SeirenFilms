
imagesArray = new Array (7);
imagesArray[0]= "assets/dog.jpg"; 
imagesArray[1]= "assets/fox.jpg";
imagesArray[2]= "assets/mouse.jpg";
imagesArray[3]= "assets/alligator.jpg";
imagesArray[4]= "assets/fish.jpg";
imagesArray[5]= "assets/parrot.jpg";
imagesArray[6]= "assets/cat.jpg";

function displayImage ()

{
var num = Math.floor(Math.random() * 7); // Math floor makes a whole number and rounds down.
document.getElementById ("randomImage").src = (imagesArray [num]);
}