function showMenuMobile() {
  let menu = document.querySelector('.header-menu nav ul');
  if(menu.style.display == 'flex'){
    menu.style.display = 'none'
  }else{
    menu.style.display = 'flex'
  }
}




VanillaTilt.init(document.querySelector(".photo-animation"), {
    max: 25,
    speed: 200,
    glare: true
});

let options = {
    root: null,
    rootMargin: '0px',
    threshold: .25
}


const observer = new IntersectionObserver(entries => {
    console.log(entries, 'ok')
    Array.from(entries).forEach(entry => {
        if (entry.intersectionRatio >= 0.1) {
            entry.target.classList.add('init-hidden--off')
        }
    })


}, options)


Array.from(document.querySelectorAll('.init-hidden')).forEach(element => {
    observer.observe(element)
})


let totalSlides = document.querySelectorAll('.slide').length;
let currentSlide = 0;
let sliderItemWidth = document.querySelector('.slides').clientWidth;
document.querySelector('.slides').style.width = `${sliderItemWidth} * ${totalSlides}px`;


function goPrev() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }
    updateMargin();
}

function goNext() {
    currentSlide++;
    if (currentSlide > (totalSlides - 1)) {
        currentSlide = 0;
    }
    updateMargin()
}


function updateMargin() {
    let sliderItemWidth = document.querySelector('.slide').clientWidth;
    let newmargin = (currentSlide * sliderItemWidth);
    document.querySelector('.slides').style.marginLeft = ` -${newmargin}px`
}

/* setInterval(goNext, 6000)  */