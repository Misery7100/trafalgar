
var target = window.document.getElementsByClassName("testimonials__slides")[0];
let btnNext = document.querySelector('button.slider__next');
let btnPrev = document.querySelector('button.slider__prev');
let slider = document.querySelector("ul.testimonials__slides");
let dots = document.querySelector('div.slider__dots');

const num = slider.childNodes.length;

var slideWidth = 70;
let viewSlide = 0;

let dotActive = 'slider__dots-item--active';
let dotClass = 'slider__dots-item';

let isClicked = false;
let avoidDoubleClick = false;

for (let i = 0; i < num; i++) {

    let span = document.createElement('span');
    if (i == 0) {
        span.className = dotClass + ' ' + dotActive;
    }

    else {
        span.className = dotClass;
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

    return slideWidth;
};

/* =================================================================== */


var allDots = document.querySelectorAll('span.' + dotClass);

var toggleDots = (viewSlide) => {

    allDots[viewSlide].classList.toggle(dotActive);
};

/* =================================================================== */

var slideCards = direction => {

    if (avoidDoubleClick || (Math.abs(direction)!= 1)) {return}

    toggleDots(viewSlide);
    let cards = document.querySelectorAll('li.test-slides');
    let classes = slider.classList;
    let movedCard;
    let index;

    
    checkWidth();

    switch (direction) {

        case 1:

            nextSlide();
            console.log(viewSlide);
            toggleDots(viewSlide);

            index = 0;
            movedCard = cards[index].cloneNode(deep = true);
            break
            
        case -1:

            prevSlide();
            console.log('?????');
            toggleDots(viewSlide);

            index = num - 1;
            movedCard = cards[index].cloneNode(deep = true);
            break

    }


    slider.style.left = -(slideWidth) * (1 + direction) + "vw";

    avoidDoubleClick = true;

    setTimeout(() => {

        if (direction == 1) {slider.appendChild(movedCard);}
        else {slider.insertBefore(movedCard, cards[0]);}
        
        slider.removeChild(cards[index]);

        classes.add('remove-animation');
        slider.style.left = -(slideWidth) + "vw";
        avoidDoubleClick = false;
        
    }, 400);

    setTimeout(() => {classes.remove('remove-animation')}, 450);
            
};

/* =================================================================== */


var scroll = setInterval(() => {

    slideCards(1);

    // if (avoidDoubleClick) {return}
    
    // // allDots[viewSlide].classList.toggle('test-black');
    // toggleDots(viewSlide);
    // checkWidth();
    // nextSlide();
    // console.log(viewSlide);

    // let items = document.querySelectorAll('li.test-slides');
    // let first = items[0].cloneNode(deep=true);
    // var classes = slider.classList;
    
    // allDots[viewSlide].classList.toggle('test-black');
    // // setTimeout(slider.insertBefore(last, first), 200);
    // slider.style.left = -(slideWidth) * 2 + "vw";



    // avoidDoubleClick = true;
    // setTimeout(() => {

    //     slider.appendChild(first);
    //     slider.removeChild(items[0]);
    //     classes.add('remove-animation');
    //     slider.style.left = -(slideWidth) + "vw";
    //     avoidDoubleClick = false;
        
    // }, 400);

    // setTimeout(() => {classes.remove('remove-animation')}, 450);

}, 5000);


btnNext.addEventListener("click", () => {

    isClicked = true; 
    clearInterval(scroll); 
    slideCards(1);
});
 

btnPrev.addEventListener("click", () => {

    isClicked = true; 
    clearInterval(scroll); 
    slideCards(-1);
});


/*slider.addEventListener("mouseover", () => {

    clearInterval(scroll);
    slider.style.cursor = 'pointer';
});


slider.addEventListener("mouseout", () => {

    slider.style.cursor = 'none';

    if (!isClicked) {

        scroll = setInterval(() => {slideCards(1)}, 5000);
    }
});*/


/* =================================================================== */





// slider.addEventListener('touchstart', function() {

//     let viewport = document.getElementsByClassName("testimonials__slides")[0].offsetWidth;
//     slider.style.left = event.PageX + "px";
// });