const playMain = document.querySelector('#play-main-video');
const playPouse = document.querySelector('#play-pause');
const progressVideo = document.querySelector('#progress-video');
const muteVideo = document.querySelector('#mute-video');
const volumeVideo = document.querySelector('#volume-video');
const fullscreenVideo = document.querySelector('#fullscreen-video');
const video = document.querySelector('#custom-video-player');
const videoAndControls = document.querySelector('#video-player');
const videoWrapper = document.querySelector('#video-wrapper');
const videoControl = document.querySelector('#video-control');

/*проигрывание и пауза*/

function playVid() {
  playMain.classList.add('play-button-hidden');
  playPouse.classList.remove('play-pause-style-1');
  playPouse.classList.add('play-pause-style-2');
  video.play();
}

export function pauseVid() {
  video.pause();
  playPouse.classList.remove('play-pause-style-2');
  playPouse.classList.add('play-pause-style-1');
  playMain.classList.remove('play-button-hidden');
}

function playOrPause() {
  if (video.paused) {
    playVid();
  } else {
    pauseVid();
  }
}

playMain.addEventListener('click', (e) => {
  e.preventDefault();
  playVid();
});

video.addEventListener('click', (e) => {
  e.preventDefault();
  playOrPause();
});

playPouse.addEventListener('click', (e) => {
  e.preventDefault();
  playOrPause();
});

document.addEventListener('keydown', (e) => {
  if (e.code == 'Space') {
    e.preventDefault();
    videoAndControls.scrollIntoView(true);
    playOrPause();
  }
});

/*ускорение и замедление*/

document.addEventListener('keydown', (e) => {
  // e.preventDefault();
  if (e.code == 'Comma' && e.shiftKey) {
    if (video.playbackRate > 0.25) {
      video.playbackRate -= 0.25;
    }
    playVid();
  }
});

document.addEventListener('keydown', (e) => {
  // e.preventDefault();
  if (e.code == 'Period' && e.shiftKey) {
    if (video.playbackRate < 5) {
      video.playbackRate += 0.25;
    }
    playVid();
  }
});

/*громкость и мут*/

let lastVV = volumeVideo.value;

function toggleMute() {
  if (volumeVideo.value == 0) {
    muteVideo.classList.remove('style-mute');
    muteVideo.classList.add('style-unmute');
  } else {
    muteVideo.classList.remove('style-unmute');
    muteVideo.classList.add('style-mute');
  }
}

function muteUnmute() {
  if (volumeVideo.value > 0) {
    video.volume = 0;
    volumeVideo.value = 0;
  } else {
    volumeVideo.value = lastVV;
    video.volume = volumeVideo.value / 100;
  }
  toggleMute();
  volumeVideo.style.setProperty('--value', volumeVideo.value);
}

volumeVideo.addEventListener('input', (e) => {
  e.preventDefault();
  video.volume = volumeVideo.value / 100;
  lastVV = volumeVideo.value;
  toggleMute();
});

muteVideo.addEventListener('click', (e) => {
  e.preventDefault();
  muteUnmute();
});

document.addEventListener('keydown', function (event) {
  if (event.code == 'KeyM') {
    muteUnmute();
  }
});

/*прогресс бар*/

/*video.ontimeupdate = progressUpdate;*/
video.addEventListener('timeupdate', progressUpdate);

function progressUpdate() {
  progressVideo.value = (100 * video.currentTime) / video.duration || 0;
  progressVideo.style.setProperty('--value', progressVideo.value);
  if (video.currentTime == video.duration) {
    pauseVid();
  }
}

progressVideo.addEventListener('click', (e) => {
  e.preventDefault();
  let w = progressVideo.offsetWidth;
  let o = event.offsetX;
  // progressVideo.value = 100 * o / w;
  video.pause();
  video.currentTime = video.duration * (o / w);
  playVid();
});

/*полный экран*/

function toggleFullscreen() {
  if (document.fullscreenElement) {
    document.exitFullscreen();
    videoWrapper.classList.remove('video-wrapper-fullscreen');
    videoControl.classList.remove('video-control-fullscreen');
    fullscreenVideo.classList.remove('fullscreen-style-2');
    fullscreenVideo.classList.add('fullscreen-style-1');
  } else {
    videoAndControls.requestFullscreen();
    videoWrapper.classList.add('video-wrapper-fullscreen');
    videoControl.classList.add('video-control-fullscreen');
    fullscreenVideo.classList.remove('fullscreen-style-1');
    fullscreenVideo.classList.add('fullscreen-style-2');
  }
}

fullscreenVideo.addEventListener('click', (e) => {
  e.preventDefault();
  toggleFullscreen();
});

video.addEventListener('dblclick', (e) => {
  e.preventDefault();
  toggleFullscreen();
  playVid();
});

document.addEventListener('keydown', function (event) {
  if (event.code == 'KeyF') {
    toggleFullscreen();
  }
});
