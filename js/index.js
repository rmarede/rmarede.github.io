const hobbies_slide = document.querySelector('.hobbies_slide');
const hobbies = document.querySelectorAll('.hobby');


/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', './js/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });


// buttons
const prevBtn = document.querySelector('#prev_hobby');
const nextBtn = document.querySelector('#next_hobby');

// counter
let counter = 0;

// button listeners

nextBtn.addEventListener('click', function(){
    if (counter < hobbies.length - 1) counter++;
    else counter = 0;
    hobbies_slide.style.transform = 'translateX(' + (-hobbies[0].clientWidth*counter) + 'px)';
});

prevBtn.addEventListener('click', function(){
    if (counter > 0) counter--;
    else counter = hobbies.length - 1;
    hobbies_slide.style.transform = 'translateX(' + (-hobbies[0].clientWidth*counter) + 'px)';
});

window.addEventListener('resize', function() {
    hobbies_slide.style.transform = 'translateX(' + (-hobbies[0].clientWidth*counter) + 'px)';
});

window.addEventListener('scroll', function() {
    var fade_on_scroll_list = document.querySelectorAll('.fade_on_scroll');

    for (var i = 0; i < fade_on_scroll_list.length; i++) {
        var slack = 150;
        var top = fade_on_scroll_list[i].getBoundingClientRect().top; 

        if(top < window.innerHeight - slack) 
            fade_on_scroll_list[i].classList.add('active');
        else
            fade_on_scroll_list[i].classList.remove('active');
    }
});


