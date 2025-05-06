// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const jsConfetti = new JSConfetti();
  const exposeSect = document.getElementById('expose');
  const hornSelect = document.getElementById('horn-select');
  const hornImg = exposeSect.querySelector('img');
  const hornAudio = exposeSect.querySelector('audio');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const playButton = exposeSect.querySelector('button');

  hornSelect.addEventListener('change', (e) => {
    const horn = e.target.value;
    hornImg.src = `assets/images/${horn}.svg`;
    hornImg.alt = `${horn} image`;
    hornAudio.src = `assets/audio/${horn}.mp3`;
  });

  volumeSlider.addEventListener('input', (e) => {
    const vol = Number(e.target.value);
    hornAudio.volume = vol / 100;

    let level;
    if (vol === 0) level = 0;
    else if (vol < 33) level = 1;
    else if (vol < 67) level = 2;
    else level = 3;

    volumeIcon.src = `assets/icons/volume-level-${level}.svg`;
    volumeIcon.alt = `Volume level ${level}`;
  });

  playButton.addEventListener('click', () => {
    hornAudio.play();
    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });
}
