const sliderWrap = document.querySelector('.wrapper-slider');
const sliderCont = document.querySelector('.welcome-slider');
const prev = document.querySelector('.slider-arrow-left');
const next = document.querySelector('.slider-arrow-right');
let basePos = 0;
let sliderCounter = 1;
let VisibleCounter = document.querySelector('.slider-counter-left');

//кнопки влево-вправо
prev.addEventListener('click', (e) => {
    e.preventDefault();
    let slideWidth = document.querySelector('.wrapper-slider').offsetWidth;

    if (sliderCounter > 1) {
        sliderCounter -= 1;
        basePos += slideWidth;
        sliderCont.style.left = `${basePos}px`;
        VisibleCounter.innerHTML = `0${sliderCounter}`;
    } else {
        sliderCounter = 5;
        basePos += -4 * slideWidth;
        sliderCont.style.left = `${basePos}px`;
        VisibleCounter.innerHTML = `0${sliderCounter}`;
    };

    checkActiveBullet()
    }
)

next.addEventListener('click', (e) => {
    e.preventDefault();
    let slideWidth = document.querySelector('.wrapper-slider').offsetWidth;

    if (sliderCounter < 5) {
        sliderCounter += 1;
        basePos -= slideWidth;
        sliderCont.style.left = `${basePos}px`;
        VisibleCounter.innerHTML = `0${sliderCounter}`;
    } else {
        sliderCounter = 1;
        basePos = 0;
        sliderCont.style.left = `${basePos}px`;
        VisibleCounter.innerHTML = `0${sliderCounter}`;
    };

    checkActiveBullet()
    }
)


//буллеты
const sci1 = document.querySelector('.sci-1');
const sci2 = document.querySelector('.sci-2');
const sci3 = document.querySelector('.sci-3');
const sci4 = document.querySelector('.sci-4');
const sci5 = document.querySelector('.sci-5');
const sciArr = [sci1, sci2, sci3, sci4, sci5];

function checkActiveBullet() {
    for (let i = 0; i <  sciArr.length; i++) {
        if (i == sliderCounter - 1) {
            sciArr[i].classList.add('slider-control-item-active');
        }
        else {
            sciArr[i].classList.remove('slider-control-item-active')
        }
    }
}

sci1.addEventListener('click', (e) => {
        e.preventDefault();
        sliderCounter = 1;
        basePos = 0;
        sliderCont.style.left = `${basePos}px`;
        VisibleCounter.innerHTML = `0${sliderCounter}`;
        checkActiveBullet()
    }
)

sci2.addEventListener('click', (e) => {
    e.preventDefault();
    sliderCounter = 2;
    let slideWidth = document.querySelector('.wrapper-slider').offsetWidth;
    basePos = -slideWidth;
    sliderCont.style.left = `${basePos}px`;
    VisibleCounter.innerHTML = `0${sliderCounter}`;
    checkActiveBullet()
    }
)

sci3.addEventListener('click', (e) => {
        e.preventDefault();
        sliderCounter = 3;
        let slideWidth = document.querySelector('.wrapper-slider').offsetWidth;
        basePos = -2 * slideWidth;
        sliderCont.style.left = `${basePos}px`;
        VisibleCounter.innerHTML = `0${sliderCounter}`;
        checkActiveBullet()
    }
)

sci4.addEventListener('click', (e) => {
        e.preventDefault();
        sliderCounter = 4;
        let slideWidth = document.querySelector('.wrapper-slider').offsetWidth;
        basePos = -3 * slideWidth;
        sliderCont.style.left = `${basePos}px`;
        VisibleCounter.innerHTML = `0${sliderCounter}`;
        checkActiveBullet()
    }
)

sci5.addEventListener('click', (e) => {
        e.preventDefault();
        sliderCounter = 5;
        let slideWidth = document.querySelector('.wrapper-slider').offsetWidth;
        basePos = -4 * slideWidth;
        sliderCont.style.left = `${basePos}px`;
        VisibleCounter.innerHTML = `0${sliderCounter}`;
        checkActiveBullet()
    }
)



