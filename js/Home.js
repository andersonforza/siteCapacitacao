var main = document.querySelector("main");
var itens = main.querySelectorAll(".slide");
var controller = main.querySelectorAll("li");
var current = 2;

var interval = 500000;

const Slider = {
    init:() => {
        controller[0].addEventListener('click', Slider.clickedControl)
        controller[2].addEventListener('click', Slider.clickedControl)

        Slider.active();
    },
    reset: () =>{
        itens[current].style.display = "none";
    },
    nextSlide: () => { // Increment current slide and add active class
        Slider.reset();
        if (current === itens.length - 1) current = -1; // Check if current slide is last in array     
        current++;
        Slider.active();
    },
    clickedControl: (e) =>{
        Slider.reset();
        clearInterval(intervalF);
        let control = e.target.value;
        current += control;
        if (current === itens.length) current = 0;
        if (current == -1) current = itens.length - 1;
        Slider.active();
        intervalF = setInterval(Slider.nextSlide, interval);
    },
    active: () =>{
        itens[current].style.display = "block";
    },
    Delay: () =>{
        h1.textContent.forEach(element => {
        });
    }
}
let intervalF = setInterval(Slider.nextSlide(),interval);
Slider.init();