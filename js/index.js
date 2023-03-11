
/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', './js/particles.json');


// ABOUT ME SLIDER

const hobbies_slide = document.querySelector('.hobbies_slide');
const hobbies = document.querySelectorAll('.hobby');
  
const prevBtn = document.querySelector('#prev_hobby');
const nextBtn = document.querySelector('#next_hobby');
  
nextBtn.addEventListener('click', slideNext);
prevBtn.addEventListener('click', slidePrev);
var sliderTimer = setInterval(slideNext, 10000);
  
let counter = 0;

function slideNext(){
    if (counter < hobbies.length - 1) counter++;
    else counter = 0;
    hobbies_slide.style.transform = 'translateX(' + (-hobbies[0].clientWidth*counter) + 'px)';
    clearInterval(sliderTimer);
    sliderTimer = setInterval(slideNext, 10000);
}

function slidePrev(){
    if (counter > 0) counter--;
    else counter = hobbies.length - 1;
    hobbies_slide.style.transform = 'translateX(' + (-hobbies[0].clientWidth*counter) + 'px)';
    clearInterval(sliderTimer);
    sliderTimer = setInterval(slideNext, 10000);
}

window.addEventListener('resize', function() {
    hobbies_slide.style.transform = 'translateX(' + (-hobbies[0].clientWidth*counter) + 'px)';
});


// FADE ON SCROLL ANIMATION

window.addEventListener('scroll', function() {
    var fade_on_scroll_list = document.querySelectorAll('.fade_on_scroll');

    for (var i = 0; i < fade_on_scroll_list.length; i++) {
        var slack = 130;
        var top = fade_on_scroll_list[i].getBoundingClientRect().top; 

        if(top < window.innerHeight - slack) 
            fade_on_scroll_list[i].classList.add('active');
        else
            fade_on_scroll_list[i].classList.remove('active');
    }
});


// SOFTWARE DEVELOPER TYPING ANIMATION

var i= 0;
var txt = "software engineer";

function type() {
    document.getElementById("developer_tag").innerHTML += txt.charAt(i);
    i++
    setTimeout(type, 100);
}

function reset() {
    document.getElementById("developer_tag").innerHTML = '<i class="fas fa-code"></i> ';
    i = 0;
    setTimeout(reset, 8000);
}

type();
reset();
