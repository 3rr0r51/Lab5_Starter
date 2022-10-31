// expose.js

const confetti = new JSConfetti();

window.addEventListener('DOMContentLoaded', init);

function updateVolumePic(){
  var volInput = document.getElementById('volume');
  var vol = volInput.value;

  var volPic = document.querySelector('#volume-controls > img');
  
  if(vol == 0){
    volPic.src = "assets/icons/volume-level-0.svg";
  }else if(vol < 33){
    volPic.src = "assets/icons/volume-level-1.svg";
  }else if(vol < 67){
    volPic.src = "assets/icons/volume-level-2.svg";
  }else{
    volPic.src = "assets/icons/volume-level-3.svg";
  }

  document.querySelector('audio').volume = vol/100;
}

function updateHorn(){
  var selectedHorn = document.getElementById('horn-select').value;
  var hornPic = document.querySelector("#expose > img");
  var audio = document.querySelector('audio')

  switch(selectedHorn){
    case "air-horn":
      hornPic.src = "assets/images/air-horn.svg";
      audio.src = "assets/audio/air-horn.mp3"
      break;
    case "car-horn":
      hornPic.src = "assets/images/car-horn.svg";
      audio.src = "assets/audio/car-horn.mp3"
      break;
    case "party-horn":
      hornPic.src = "assets/images/party-horn.svg";
      audio.src = "assets/audio/party-horn.mp3"
      break;
  }
}

function playSound(){
  document.querySelector('audio').play();
  if(document.getElementById('horn-select').value == "party-horn"){
    confetti.addConfetti();
  }
}

function init() {
  document.getElementById('volume').addEventListener('input', updateVolumePic);
  document.getElementById('horn-select').addEventListener('input', updateHorn);
  document.querySelector('button').addEventListener('click', playSound);


}