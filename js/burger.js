(function () {
  const burger = document.querySelector('.header-burger');
  const bgl1 = document.querySelector('.burger-line-1');
  const bgl2 = document.querySelector('.burger-line-2');
  const bgl3 = document.querySelector('.burger-line-3');
  const welDesc1 = document.querySelector('.welDesc1');
  const welDesc2 = document.querySelector('.welDesc2');
  const welDesc3 = document.querySelector('.welDesc3');
  const menu = document.querySelector('.menu');

  burger.addEventListener('click', () => {
    bgl1.classList.toggle('burger-line-1-active');
    bgl2.classList.toggle('burger-line-2-active');
    bgl3.classList.toggle('burger-line-3-active');
    welDesc1.classList.toggle('open');
    welDesc2.classList.toggle('open');
    welDesc3.classList.toggle('open');
    menu.classList.toggle('open2');
  });

  const menuLinks = document.querySelectorAll('.nav-link');

  for (var i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener('click', () => {
      bgl1.classList.remove('burger-line-1-active');
      bgl2.classList.remove('burger-line-2-active');
      bgl3.classList.remove('burger-line-3-active');
      welDesc1.classList.remove('open');
      welDesc2.classList.remove('open');
      welDesc3.classList.remove('open');
      menu.classList.remove('open2');
    });
  }
})();
