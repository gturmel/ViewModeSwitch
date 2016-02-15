      // variable declarations!


var button = document.getElementsByClassName("cartButton");

var gridIcon = document.getElementById("grid");

var listIcon = document.getElementById("list");

var titleOfProduct = document.getElementsByTagName("h3")

var price = document.getElementsByClassName("price");

var description = document.getElementsByClassName("description");

var cartButton = document.getElementsByClassName("cartButton");

var listTag = document.getElementsByTagName("li");

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

gridIcon.addEventListener("click", function(){
for (num = 0; num <= price.length; num++) {
   price[num].style.display = ""
   }
});

listIcon.addEventListener("click", function(){
for (num = 0; num <= price.length; num++) {
   price[num].style.display = "inline";

   }
});

gridIcon.addEventListener("click", function(){
for (num = 0; num <= titleOfProduct.length; num++) {
   titleOfProduct[num].style.display = ""
   }
});

listIcon.addEventListener("click", function(){
for (num = 0; num <= titleOfProduct.length; num++) {
   titleOfProduct[num].style.display = "inline";

   }
});

gridIcon.addEventListener("click", function(){
for (num = 0; num <= description.length; num++) {
   description[num].style.display = ""
   }
});

listIcon.addEventListener("click", function(){
for (num = 0; num <= description.length; num++) {
   description[num].style.display = "inline";

   }
});

gridIcon.addEventListener("click", function(){
for (num = 0; num <= cartButton.length; num++) {
   cartButton[num].style.display = ""
   }
});

listIcon.addEventListener("click", function(){
for (num = 0; num <= cartButton.length; num++) {
   cartButton[num].style.display = "inline";

   }
});

gridIcon.addEventListener("click", function(){
   
})
