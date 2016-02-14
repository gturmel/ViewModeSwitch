      // variable declarations!


var button = document.getElementsByClassName("cartButton");

var gridIcon = document.getElementById("grid");

var listIcon = document.getElementsByClassName("fa fa-bars fa-2x");

var liFormat = document.getElementsByTagName("li");

var block = document.getElementsByClassName("block");


// I'll need to set up a for loop to iterate through each item in each array, setting all of it to inline. Woof

gridIcon.addEventListener("click", function(){
   if(button[1].className = "cartButton")
   {button[1].className = "blue"};
});
