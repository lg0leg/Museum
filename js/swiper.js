import { pauseVid } from './custom-video-player.js';

const swiper = new Swiper('.playlist-view', {
  navigation: {
    nextEl: '.arrow-right',
    prevEl: '.arrow-left',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  slidesPerView: 3,
  spaceBetween: 42,
  loop: true,

  centeredSlides: true,
  // initialSlide: 2,
});

const arrSrc = [
  './assets/video/video0.mp4',
  './assets/video/video1.mp4',
  './assets/video/video2.mp4',
  './assets/video/video3.mp4',
  './assets/video/video4.mp4',
  './assets/video/video0.mp4',
];

const arrPosters = [
  './assets/video/poster0.jpg',
  './assets/video/poster1.jpg',
  './assets/video/poster2.jpg',
  './assets/video/poster3.jpg',
  './assets/video/poster4.jpg',
  './assets/video/poster0.jpg',
];

const playlistControls = document.querySelector('#youtube-switcher');
const mainPlayerWindow = document.querySelector('#custom-video-player');

playlistControls.addEventListener('click', () => {
  pauseVid();
  let j = swiper.activeIndex - 3;
  if (j == -1) {
    mainPlayerWindow.setAttribute('src', './assets/video/video4.mp4');
    mainPlayerWindow.setAttribute('poster', './assets/video/poster4.jpg');
  } else {
    mainPlayerWindow.setAttribute('src', arrSrc[j]);
    mainPlayerWindow.setAttribute('poster', arrPosters[j]);
  }
  stopYouTubeVideos();
});

function stopYouTubeVideos() {
  document
    .querySelectorAll('.youtube-video-item')
    .forEach((value) =>
      value.contentWindow.postMessage(
        '{"event":"command","func":"stopVideo","args":""}',
        '*'
      )
    );
}
