// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById('voice-select');
  const textInput = document.getElementById('text-to-speak');
  const faceImage = document.querySelector('#explore img');
  const talkButton = document.querySelector('#explore button');

  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();
  
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }
  
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      option.value = i;
      voiceSelect.appendChild(option);
    }
  }  

  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  talkButton.addEventListener('click', () => {
    const text = textInput.value;

    const utter = new SpeechSynthesisUtterance(text);

    const choice = voiceSelect.value;
    if (choice !== 'select') {
      utter.voice = voices[Number(choice)];
    }

    faceImage.src = 'assets/images/smiling-open.png';
    faceImage.alt = 'Speaking face';

    utter.addEventListener('end', () => {
      faceImage.src = 'assets/images/smiling.png';
      faceImage.alt = 'Smiling face';
    });

    synth.speak(utter);
  });
}
