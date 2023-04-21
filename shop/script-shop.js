const category1 = document.getElementById("category-1");
const category2 = document.getElementById("category-2");
const category3 = document.getElementById("category-3");
const cart1 = document.getElementById("cart1");
const cart2 = document.getElementById("cart2");
const cart3 = document.getElementById("cart3");
const cart4 = document.getElementById("cart4");
const cart5 = document.getElementById("cart5");
const cart6 = document.getElementById("cart6");
const cart7 = document.getElementById("cart7");
const cart8 = document.getElementById("cart8");
const cart9 = document.getElementById("cart9");
const cart10 = document.getElementById("cart10");
const cart11 = document.getElementById("cart11");
const cart12 = document.getElementById("cart12");
const cart13 = document.getElementById("cart13");
const cart14 = document.getElementById("cart14");
const cart15 = document.getElementById("cart15");
const yellowcart1 = document.getElementById("yellow-cart1");
const yellowcart2 = document.getElementById("yellow-cart2");
const yellowcart3 = document.getElementById("yellow-cart3");
const yellowcart4 = document.getElementById("yellow-cart4");
const yellowcart5 = document.getElementById("yellow-cart5");
const yellowcart6 = document.getElementById("yellow-cart6");
const yellowcart7 = document.getElementById("yellow-cart7");
const yellowcart8 = document.getElementById("yellow-cart8");
const yellowcart9 = document.getElementById("yellow-cart9");
const yellowcart10 = document.getElementById("yellow-cart10");
const yellowcart11 = document.getElementById("yellow-cart11");
const yellowcart12 = document.getElementById("yellow-cart12");
const yellowcart13 = document.getElementById("yellow-cart13");
const yellowcart14 = document.getElementById("yellow-cart14");
const yellowcart15 = document.getElementById("yellow-cart15");

category1.onclick = function(){
    category1.style.backgroundColor = "#FFD74B";
    category1.style.color = "#FFFFFF";
    category2.style.backgroundColor = "#FFFFFF";
    category2.style.color = "#FFD74B";
    category3.style.backgroundColor = "#FFFFFF";
    category3.style.color = "#FFD74B";
    category1.style.transition = "background-color 0.5s ease, color 0.5s ease";
    category2.style.transition = "background-color 0.5s ease, color 0.5s ease";
    category3.style.transition = "background-color 0.5s ease, color 0.5s ease";
}

category2.onclick = function(){
    category2.style.backgroundColor = "#FFD74B";
    category2.style.color = "#FFFFFF";
    category1.style.backgroundColor = "#FFFFFF";
    category1.style.color = "#FFD74B";
    category3.style.backgroundColor = "#FFFFFF";
    category3.style.color = "#FFD74B";
    category1.style.transition = "background-color 0.5s ease, color 0.5s ease";
    category2.style.transition = "background-color 0.5s ease, color 0.5s ease";
    category3.style.transition = "background-color 0.5s ease, color 0.5s ease";
}

category3.onclick = function(){
    category3.style.backgroundColor = "#FFD74B";
    category3.style.color = "#FFFFFF";
    category2.style.backgroundColor = "#FFFFFF";
    category2.style.color = "#FFD74B";
    category1.style.backgroundColor = "#FFFFFF";
    category1.style.color = "#FFD74B";
    category1.style.transition = "background-color 0.5s ease, color 0.5s ease";
    category2.style.transition = "background-color 0.5s ease, color 0.5s ease";
    category3.style.transition = "background-color 0.5s ease, color 0.5s ease";
}

cart1.onmouseover = function(){
    cart1.style.opacity = "0";
    yellowcart1.style.opacity = "100";
}

cart1.onmouseout = function(){
    cart1.style.opacity = "100";
    yellowcart1.style.opacity = "0";
}
