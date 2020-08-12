
// Получаем видимую часть слайда
var target = window.document.getElementsByClassName("testimonials__slides")[0];
// Получаем кнопку вперёд
let btnNext = document.querySelector('button.slider__next');
// Получаем кнопку назад
let btnPrev = document.querySelector('button.slider__prev');
// Получаем элемент со всеми слайдами
let slider = document.querySelector("ul.testimonials__slides");

const num = slider.childNodes.length;
// // Получаем элементы показа слайда
// let viewSliders = document.querySelectorAll(".viewSlide");
// Объявляем переменную номера слайда
let viewSlide = 0;


// alert(document.querySelector('.slider__prev'));
 
// // Назначаем цвет индикатор слайда зелёный
// viewSliders[0].style.backgroundColor = "green";
 
// Обработка клика на кнопку вперёд
btnNext.addEventListener("click", function () {
    /*// Делаем индикатор слайда красный
    viewSliders[viewSlide].style.backgroundColor = "red";*/
    // Условие, если номер слайда меньше четырёх
    let viewport = document.getElementsByClassName("testimonials__slides")[0].offsetWidth;


    if (viewSlide < num - 1) { // Если верно то
        // Увеличиваем номер слайда на один
        viewSlide++;

    } else { // Иначе
        // Номер слайда равен нулю
        viewSlide = 0;
    }
    // // Закрашиваем индикатор слайда в зелёный
    // viewSliders[viewSlide].style.backgroundColor = "green";
    // Меняем позицию всего слайда
    slider.style.left = -viewSlide * viewport + "px";
    console.log('next', -viewSlide * viewport + "px");
});
 
// Обработка клика на кнопку назад
btnPrev.addEventListener("click", function () {
    // // Делаем индикатор слайда красный
    // viewSliders[viewSlide].style.backgroundColor = "red";
    // Условие, если номер слайда больше нуля

    let viewport = document.getElementsByClassName("testimonials__slides")[0].offsetWidth;

    console.log('prev');
    if (viewSlide > 0) { // Если верно то
        // Уменьшаем номер слайда
        viewSlide--; 
    } else { // Иначе
        // Номер слайда равен четырём
        viewSlide = num - 1; 
    }
    // // Закрашиваем индикатор слайда в зелёный
    // viewSliders[viewSlide].style.backgroundColor = "green";
    // Меняем позицию всего слайда
    slider.style.left = -viewSlide * viewport + "px";
});
