let apple=document.getElementById("apple");
let basket=document.getElementById("basket");

apple.addEventListener("dragstart",function(e){

e.dataTransfer.setData("food","apple");

});

basket.addEventListener("dragover",function(e){

e.preventDefault();

});

basket.addEventListener("drop",function(e){

let data=e.dataTransfer.getData("food");

if(data==="apple"){

document.getElementById("basketResult").innerHTML="🎉 Great Job!";

}

});