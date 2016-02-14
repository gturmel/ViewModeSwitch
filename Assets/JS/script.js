      // variable declarations!


var button = document.getElementsByClassName("cartButton");

var gridIcon = document.getElementById("grid");

var listIcon = document.getElementById("list");

var liFormat = document.getElementsByTagName("li");

var css = document.getElementsByClassName("block");


// This changes the header icons to a different color when clicked

gridIcon.addEventListener("click", function(){
   if(gridIcon.style.color = "#c0c0c0") {
      gridIcon.style.color = "#47a3da";
      listIcon.style.color = "#c0c0c0";
   }
});

listIcon.addEventListener("click", function (){
   if (listIcon.style.color = "#c0c0c0") {
      listIcon.style.color = "#47a3da";
      gridIcon.style.color = "#c0c0c0";
   };
});

// Here's where the list-block style changes happen
