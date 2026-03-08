function playSound(){

let audio = new Audio("");
 audio.play();

}

function checkAnimal(animal){

if(animal === "cow"){

document.getElementById("result2").innerHTML = "🎉 اجابه صحيحه !";

}
else{

document.getElementById("result2").innerHTML = "حاول مره اخري 🙂";

}

}

function playSound(){

document.getElementById("cowSound").play();

}