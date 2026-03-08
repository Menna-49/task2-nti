function playFood(food){

let audio=document.getElementById("foodSound");

audio.src="sounds/"+food+".mp3";

audio.play();

}