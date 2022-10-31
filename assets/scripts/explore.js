// explore.js
var voices;

window.addEventListener('DOMContentLoaded', init);
window.speechSynthesis.addEventListener('voiceschanged',synthInit);

function init(){
  document.querySelector('button').addEventListener('click', speak);
  window.speechSynthesis.addEventListener('change',updateMouth);
}

function synthInit() {
  voices = speechSynthesis.getVoices();

  var selector = document.getElementById("voice-select");

  for(var i = 0; i < voices.length; i++){
    var elem = document.createElement('option');
    elem.value = i;
    elem.innerHTML = voices[i]["name"];
    selector.appendChild(elem);
  }
}


function speak(){
  var text = document.getElementById('text-to-speak').value;
  var voice = document.getElementById("voice-select").value;

  if(isNaN(voice)){
    return;
  }

  var textToSay = new SpeechSynthesisUtterance(text);
  textToSay.voice = voices[voice];
  speechSynthesis.speak(textToSay);

  textToSay.addEventListener('end', function(){document.querySelector('img').src = "assets/images/smiling.png";});
  textToSay.addEventListener('start', function(){document.querySelector('img').src = "assets/images/smiling-open.png";});
}

function updateMouth(){
  console.log("test");
}

