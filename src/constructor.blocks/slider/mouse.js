
var TESTING = false;
var START = 0;
var SHIFT = 0;
var POS = 0;

var crutchFunc = () => {

    if (TESTING) {

        
        console.log(slider.style.left, POS);

        let shift = event.offsetX - START;
        

        SHIFT = POS + shift;
        slider.style.left = SHIFT + 'px';
        console.log(SHIFT);
    }
};

slider.addEventListener("mousedown", function (){

    TESTING = true;
    START = event.offsetX;
    POS = parseInt(slider.style.left);


});

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

document.addEventListener("mouseup", function (){

    TESTING = false;

    let viewport = document.getElementsByClassName("testimonials__slides")[0].offsetWidth;

    if (Math.abs(SHIFT) > 150) {

        switch(Math.sign(SHIFT)) {

            case 1: prevSlide();
            case -1: nextSlide()
        }

    }
    SHIFT = 0;
    slider.style.left = -viewSlide * viewport + "px";
    


});

document.addEventListener("mousemove", crutchFunc);