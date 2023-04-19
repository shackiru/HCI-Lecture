const category1 = document.getElementById("category-1");
const category2 = document.getElementById("category-2");
const category3 = document.getElementById("category-3");

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