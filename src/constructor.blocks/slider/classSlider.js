class Slide {

    constructor() {

        this.movedCard = 0;
        this.index = 0;
    }

    set setIndex(index) {

        this.index = index;     
    }

    set setCard(card) {

        this.movedCard = card;
    }
}


class Slider {

    static VIEW_SLIDE_DEFAULT = 0;
    static DOT_ACTIVE = 'slider__dots-item--active';
    static DOT_PASSIVE = 'slider__dots-item';
    static DOT_TAG = 'span';
    static SLIDE_SELECTOR = 'li.testimonials__slide';
    static UNANIMATED = 'remove-animation';

    static BUTTON_NEXT = 'button.slider__next';
    static BUTTON_PREV = 'button.slider__prev';
    static SLIDER_BOX = 'ul.testimonials__slides';
    static DOTS_CONTAINER = 'div.slider__dots';

    static DIRECTION = [

        'testimonials__slides--slide-forward',
        'testimonials__slides--slide-backward'];

    
    constructor() {

        this.btnNext = document.querySelectorAll(Slider.BUTTON_NEXT)[1];
        this.btnPrev = document.querySelectorAll(Slider.BUTTON_PREV)[1];

        this.subBtnNext = document.querySelectorAll(Slider.BUTTON_NEXT)[0];
        this.subBtnPrev = document.querySelectorAll(Slider.BUTTON_PREV)[0];

        this.slider = document.querySelector(Slider.SLIDER_BOX);

        this.dotsContainer = document.querySelector(Slider.DOTS_CONTAINER);

        this.slideDirection = Slider.DIRECTION;
        this.viewSlide = Slider.VIEW_SLIDE_DEFAULT;

        this.slidesNum = this.slider.childNodes.length;
        this.sliderClasses = this.slider.classList;
        this.checkIndex = [0, this.slidesNum - 1];

        this.isClicked = false;
        this.avoidDoubleClick = false;
        this.scroll;
        this.allDots;
    }


    addDots() {

        let firstSpan = document.createElement(Slider.DOT_TAG);
        firstSpan.className = Slider.DOT_PASSIVE + ' ' + Slider.DOT_ACTIVE;
        this.dotsContainer.appendChild(firstSpan);

        for (let i = 1; i < this.slidesNum; i++) {

            let span = document.createElement(Slider.DOT_TAG);
            span.className = Slider.DOT_PASSIVE;
            this.dotsContainer.appendChild(span);
        }

        this.allDots = document.querySelectorAll(Slider.DOT_TAG + '.' + Slider.DOT_PASSIVE);
    }


    toggleDot() {

        this.allDots[this.viewSlide].classList.toggle(Slider.DOT_ACTIVE);
    }


    countSlide(dir) {

        this.toggleDot();

        let cardsArray = document.querySelectorAll(Slider.SLIDE_SELECTOR);
        let newCard = new Slide();

        switch(dir){

            case 0:

                this.viewSlide < this.slidesNum - 1 ? this.viewSlide++ : this.viewSlide = Slider.VIEW_SLIDE_DEFAULT;
                this.toggleDot();
                break

            case 1:

                this.viewSlide > 0 ? this.viewSlide-- : this.viewSlide = this.slidesNum - 1;
                this.toggleDot();
                break
        }

        newCard.setIndex = this.checkIndex[dir];
        newCard.setCard = cardsArray[newCard.index].cloneNode(true);
        // let insert = cardsArray[newCard.index].cloneNode(true);

        // console.log(newCard.movedCard);

        let valuesExport = [newCard, cardsArray];
        return valuesExport;
    }


    leafSlide(dir) {

        if (this.avoidDoubleClick || ((dir != 1) && (dir != 0))) {return}

        console.log(dir);

        let valuesImport = this.countSlide(dir);

        let insertCard = valuesImport[0];
        let cardsMassive = valuesImport[1];

        this.sliderClasses.toggle(Slider.DIRECTION[dir]);

        this.avoidDoubleClick = true;

        setTimeout(() => {

            if (dir == 0) {
                this.slider.appendChild(insertCard.movedCard);
            }

            else {this.slider.insertBefore(insertCard.movedCard, cardsMassive[0]);}
            
            this.slider.removeChild(cardsMassive[insertCard.index]);

            this.sliderClasses.add(Slider.UNANIMATED);
            this.sliderClasses.toggle(Slider.DIRECTION[dir]);

            this.avoidDoubleClick = false;
            
        }, 400);

        setTimeout(() => {this.sliderClasses.remove(Slider.UNANIMATED)}, 450);
    }


    initSlider() {

        this.addDots()

        this.scroll = setInterval(() => {this.leafSlide(0)}, 5000);

        this.btnNext.addEventListener('click', () => {

            this.isClicked = true;
            clearInterval(this.scroll);
            this.leafSlide(0);

        });

        this.btnPrev.addEventListener('click', () => {

            this.isClicked = true;
            clearInterval(this.scroll);
            this.leafSlide(1);

        });

        this.subBtnNext.addEventListener('click', () => {

            this.isClicked = true;
            clearInterval(this.scroll);
            this.leafSlide(0);

        });

        this.subBtnPrev.addEventListener('click', () => {

            this.isClicked = true;
            clearInterval(this.scroll);
            this.leafSlide(1);

        });
    }

}


var newSlider = new Slider();

newSlider.initSlider();