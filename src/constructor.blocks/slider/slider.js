
// Получаем видимую часть слайда
var target = window.document.getElementsByClassName("testimonials__slides")[0];
// Получаем кнопку вперёд
let btnNext = document.querySelector('button.slider__next');
// Получаем кнопку назад
let btnPrev = document.querySelector('button.slider__prev');
// Получаем элемент со всеми слайдами
let slider = document.querySelector("ul.testimonials__slides");

let dots = document.querySelector('div.slider__dots');

const num = slider.childNodes.length;
var slideWidth = 70;
// // Получаем элементы показа слайда
// let viewSliders = document.querySelectorAll(".viewSlide");
// Объявляем переменную номера слайда
let viewSlide = 0;
let isClicked = false;
let avoidDoubleClick = false;

for (let i = 0; i < num; i++) {

    let span = document.createElement('span');
    if (i == 0) {
        span.className = 'span-span-span test-black';
    }

    else {
        span.className = 'span-span-span';
    }
    dots.appendChild(span);
}

var nextSlide = () => {

    if (viewSlide < num - 1) { // Если верно то
        // Увеличиваем номер слайда на один
        viewSlide++;

    } else { // Иначе
        // Номер слайда равен нулю
        viewSlide = 0;
    }
};

var prevSlide = () => {

    if (viewSlide > 0) { // Если верно то
        // Уменьшаем номер слайда
        viewSlide--; 
    } else { // Иначе
        // Номер слайда равен четырём
        viewSlide = num - 1; 
    }
};

var checkWidth = () => {

    let width = window.innerWidth;
    let height = window.innerHeight;

    if (width > height) {slideWidth = 70;}
    else {slideWidth = 90;}
};

var allDots = document.querySelectorAll('span.span-span-span');

for (let j = 0; j < num; j++) {

    var dott = allDots[j];

    dott.addEventListener('click', () => {

        let allDots = document.querySelectorAll('span.span-span-span');
        let items = document.querySelectorAll('li.test-slides');
        var classes = slider.classList;

        console.log(j);

        allDots[viewSlide].classList.toggle('test-black');
        viewSlide = j;
        allDots[viewSlide].classList.toggle('test-black');

        if (j == num - 1) {

            
            let first = items[0].cloneNode(deep=true);
            
            slider.appendChild(first);
            slider.style.left = -(slideWidth) * (j+1) + "vw"; // Доделать

        }

        else {

            slider.style.left = -(slideWidth) * (j + 1) + "vw";
        }

    });
} 

// var scroll = setInterval(() => {

//     if (avoidDoubleClick) {return}
    
//     allDots[viewSlide].classList.toggle('test-black');

//     checkWidth();
//     nextSlide();
//     console.log(viewSlide);

//     let items = document.querySelectorAll('li.test-slides');
//     let first = items[0].cloneNode(deep=true);
//     var classes = slider.classList;
    
//     allDots[viewSlide].classList.toggle('test-black');
//     // setTimeout(slider.insertBefore(last, first), 200);
//     slider.style.left = -(slideWidth) * 2 + "vw";



//     avoidDoubleClick = true;
//     setTimeout(() => {

//         slider.appendChild(first);
//         slider.removeChild(items[0]);
//         classes.add('remove-animation');
//         slider.style.left = -(slideWidth) + "vw";
//         avoidDoubleClick = false;
        
//     }, 400);
//     // slider.appendChild(first);
//     // slider.removeChild(items[0]);
//     // slider.removeChild(last);

//     setTimeout(() => {classes.remove('remove-animation')}, 450);

// }, 5000);


btnNext.addEventListener("click", function () {

    if (avoidDoubleClick) {return}
    // clearInterval(scroll);
    isClicked = true;

    checkWidth();

    nextSlide();

    let items = document.querySelectorAll('li.test-slides');
    let first = items[0].cloneNode(deep=true);
    var classes = slider.classList;

    // setTimeout(slider.insertBefore(last, first), 200);
    slider.style.left = -(slideWidth) * 2 + "vw";

    avoidDoubleClick = true;
    setTimeout(() => {

        slider.appendChild(first);
        slider.removeChild(items[0]);
        classes.add('remove-animation');
        slider.style.left = -(slideWidth) + "vw";
        avoidDoubleClick = false;
        
    }, 400);
    // slider.appendChild(first);
    // slider.removeChild(items[0]);
    // slider.removeChild(last);

    setTimeout(() => {classes.remove('remove-animation')}, 450);

});
 

btnPrev.addEventListener("click", function () {

    if (avoidDoubleClick) {return}
    // clearInterval(scroll);
    isClicked = true;

    checkWidth();

    prevSlide();

    let items = document.querySelectorAll('li.test-slides');
    let last = items[num - 1].cloneNode(deep=true);
    var classes = slider.classList;

    slider.style.left = 0 + "vw";

    avoidDoubleClick = true;
    setTimeout(() => {
        
        slider.insertBefore(last, items[0]);
        slider.removeChild(items[num - 1]);
        classes.add('remove-animation');
        slider.style.left = -(slideWidth) + "vw";
        avoidDoubleClick = false;

    }, 400);
    // slider.appendChild(first);
    // slider.removeChild(items[0]);
    // slider.removeChild(last);


    setTimeout(() => {classes.remove('remove-animation')}, 450);
    

});




slider.addEventListener("mouseover", () => {

    // clearInterval(scroll);
    slider.style.cursor = 'pointer';
});


slider.addEventListener("mouseout", () => {

    slider.style.cursor = 'none';

    // if (!isClicked) {

    //     scroll = setInterval(() => {

    //         checkWidth();
    //         nextSlide();
    //         slider.style.left = -viewSlide * slideWidth + "vw";
    //         console.log(viewSlide);

    //     }, 7000);
    // }
});







// slider.addEventListener('touchstart', function() {

//     let viewport = document.getElementsByClassName("testimonials__slides")[0].offsetWidth;
//     slider.style.left = event.PageX + "px";
// });