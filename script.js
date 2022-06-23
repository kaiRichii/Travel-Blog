// ============ HEADER ===========
const header = document.querySelector('.main__header');
// ============ NAVBAR ===========
const navbarToggle = document.querySelector('.header__button');
const navbar = document.querySelector('.navbar');
const navbarList = document.querySelector('.navbar__list');
// ============ SCROLL LINKS ===========
const scrollLinks = document.querySelectorAll('.scroll-link');

// FIXED NAVBAR
window.addEventListener('scroll', () => {
    const scrollHeight = window.pageYOffset;
    const headerHeight = header.getBoundingClientRect().height;

    if(scrollHeight > headerHeight) {
        header.classList.add('fixed-navbar');
    } else {
        header.classList.remove('fixed-navbar');
    };
});

// NAVBAR TOGGLE
navbarToggle.addEventListener('click', () => {
    const navbarHeight = navbarList.getBoundingClientRect().height;

    if(!header.classList.contains('show-navbar')) {
        header.classList.add('show-navbar')
        navbar.style.height = `${navbarHeight}px`;
    } else {
        header.classList.remove('show-navbar')
        navbar.style.height = `0px`;
    };
});

// SCROLL
scrollLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();

        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        // Calculate Heights
        const navbarHeight = navbarList.getBoundingClientRect().height;
        const headerHeight = header.getBoundingClientRect().height;
        const fixedNavbar = header.classList.contains('fixed-navbar');
        let position = element.offsetTop - headerHeight + navbarHeight;

        if(window.innerWidth >= 768) {
            position -= navbarHeight;
        }

        if(!fixedNavbar) {
            position = position  - headerHeight;
        };

        window.scrollTo({
            left:0,
            top: position
        });

        header.classList.remove('show-navbar');
        navbar.style.height = `0px`;
    });
});