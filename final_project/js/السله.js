let score = 0;
let total = 2;

const foods = document.querySelectorAll(".food");
const basket = document.getElementById("basket");

foods.forEach(food => {

food.addEventListener("dragstart", e => {
e.dataTransfer.setData("food", food.id);
});

});

basket.addEventListener("dragover", e => {
e.preventDefault();
basket.classList.add("active");
});

basket.addEventListener("dragleave", () => {
basket.classList.remove("active");
});

basket.addEventListener("drop", e => {

basket.classList.remove("active");

let food = e.dataTransfer.getData("food");

if(food === "apple" || food === "banana"){

score++;

document.getElementById("message").innerHTML = "⭐رائع ! ";
document.getElementById("correctSound").play();

document.getElementById(food).style.display="none";

}else{

document.getElementById("message").innerHTML = "🙂 حاول مره اخري";
document.getElementById("wrongSound").play();

}

document.getElementById("score").innerHTML = score;

let progress = (score/total)*100;

document.getElementById("progress").style.width = progress + "%";

if(score === total){

document.getElementById("message").innerHTML = "🎉 انت الفائز !";

}

});