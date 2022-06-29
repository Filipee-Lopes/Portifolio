//Function show menu mobile
function showMenuMobile() {
    let menu = document.querySelector('.header-menu nav ul');
    if (menu.style.display == 'flex') {
        menu.style.display = 'none'
    } else {
        menu.style.display = 'flex'
    }
}

//Function set vanilla Tilt

function animationVanillaTilt() {
    let display = document.body.clientWidth;
    let elemento = document.querySelector('.photo-animation')
    if (display > 770) {
        VanillaTilt.init(elemento, {
            max: 20,
            speed: 200,
            glare: true
        });
    }
}

animationVanillaTilt()



//Function set Intersection Observer
let options = {
    root: null,
    rootMargin: '0px',
    threshold: .25
}

const observer = new IntersectionObserver(entries => {
    Array.from(entries).forEach(entry => {
        if (entry.intersectionRatio >= 0.1) {
            entry.target.classList.add('init-hidden--off')
        }
    })
}, options)


Array.from(document.querySelectorAll('.init-hidden')).forEach(element => {
    observer.observe(element)
})

//Function oppen more projects
function showProjects() {
    let projectsItem = document.querySelectorAll('.projects-area .project-item');
    let showProjectsButton = document.querySelector('.showProjects');

    projectsItem.forEach(item => {
        if (item.classList.contains('hidden')) {
            item.classList.remove('hidden')
            item.classList.add('show')
            item.style.display = 'flex'
            showProjectsButton.innerHTML = 'Ver menos'
        } else if (item.classList.contains('show')) {
            item.classList.remove('show');
            item.classList.add('hidden')
            item.style.display = 'none'
            showProjectsButton.innerHTML = 'Ver mais'
        }
    })
}



