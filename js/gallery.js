const pictureInnerContainer = document.querySelector('.picture-inner-container');

function randomPic() {
  let pics = [
    './assets/img/galery/galery1.jpg',
    './assets/img/galery/galery2.jpg',
    './assets/img/galery/galery3.jpg',
    './assets/img/galery/galery4.jpg',
    './assets/img/galery/galery5.jpg',
    './assets/img/galery/galery6.jpg',
    './assets/img/galery/galery7.jpg',
    './assets/img/galery/galery8.jpg',
    './assets/img/galery/galery9.jpg',
    './assets/img/galery/galery10.jpg',
    './assets/img/galery/galery11.jpg',
    './assets/img/galery/galery12.jpg',
    './assets/img/galery/galery13.jpg',
    './assets/img/galery/galery14.jpg',
    './assets/img/galery/galery15.jpg',
  ];

  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

  shuffle(pics);

  pics.map(function (el) {
    const img = document.createElement('img');
    img.classList.add('gallery-item');
    img.classList.add('slide-in');
    img.src = el;
    img.alt = 'picture';
    pictureInnerContainer.append(img);
  });
}

randomPic();

//плавное появление при прокрутке

const galleryItems = document.querySelectorAll('.gallery-item');

const displayScrollElement = (element) => {
  element.classList.add('active');
};

const hideScrollElement = (element) => {
  element.classList.remove('active');
};

const elementInView = (el, percentageScroll = 100) => {
  const elementTop = el.getBoundingClientRect().top;

  return elementTop <= (window.innerHeight || document.documentElement.clientHeight) * (percentageScroll / 100);
};

const handleScrollAnimation = () => {
  galleryItems.forEach((el) => {
    if (elementInView(el, 100)) {
      displayScrollElement(el);
    } else {
      hideScrollElement(el);
    }
  });
};

window.addEventListener('scroll', () => {
  handleScrollAnimation();
});

// window.addEventListener('scroll', debounce(handleScrollAnimation));

// function debounce(f, ms = 100) {
//   let isCooldown = false;

//   return function () {
//     if (isCooldown) return;
//     f.apply(this, arguments);
//     isCooldown = true;
//     setTimeout(() => (isCooldown = false), ms);
//   };
// }
