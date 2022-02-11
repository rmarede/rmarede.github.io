const hobbies_slide = document.querySelector('.hobbies_slide');
const hobbies = document.querySelectorAll('.hobby');

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



