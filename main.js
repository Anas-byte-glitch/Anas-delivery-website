/*=============== SHOW MENU ===============*/
const showMenu = (navId, toggleId) => {
    const nav = document.getElementById(navId),
    toggle = document.getElementById(toggleId)

    toggle.addEventListener('click', () => {
        nav.classList.toggle('show-menu')
    })
}
showMenu ('nav-menu', 'nav-toggle')
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav-link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav-link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () => {
  const header = document.getElementById('header');
  // أضف الكلاس إذا كان مقدار التمرير أكبر من 50
  if (window.scrollY >= 50) {
    header.classList.add('shadow-header');
  } else {
    header.classList.remove('shadow-header');
  }
};

window.addEventListener('scroll', shadowHeader);


/*=============== SWIPER REVIEWS ===============*/
const swiperReviews = new Swiper('.reviews-swiper', {
  loop: true,
  spaceBetween: 16,
  grabCursor: true,
  speed: 600,
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay:3000,
    disableOnInteraction: false,
  }
});

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
  const scrollUp = document.getElementById('scroll-up')
  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                  : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollDown = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');
        const sectionClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']');

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionClass.classList.add('active-link');
        } else {
            sectionClass.classList.remove('active-link');
        }
    });
};

window.addEventListener('scroll', scrollActive);

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-fill';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-fill' : 'ri-sun-fill';

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If validation is fulfilled, we add or remove the theme
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'ri-moon-fill' ? 'add' : 'remove'](iconTheme);
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    // Save the current theme and icon in localStorage
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  //reset: true, // Animation repeat
})

sr.reveal(`.home-title, .home-description, .home-data .button`, {interval: 100})
sr.reveal(`.home-image`, {delay: 900})
sr.reveal(`.home-phone`, {origin: 'left', delay: 1500})
sr.reveal(`.home-comment`, {origin: 'right', delay: 1800})
sr.reveal(`.home-sci`, {origin: 'bottom', delay: 2100})

sr.reveal(`.service-card, .service-title, .service-description`, {interval: 100})

sr.reveal(`.menu-card`, {interval: 100})

sr.reveal(`.reviews-content`, {origin: 'left'})
sr.reveal(`.reviews-image`, {origin: 'right', delay: 600})

sr.reveal(`.app .section__subtitle, .app .section__title, app-description, app-button`, {interval: 100})
sr.reveal(`.app-image`, {origin: 'bottom', delay: 900})

sr.reveal(`.map-area`, {origin: 'right', delay: 900})
sr.reveal(`.map-card`, {origin: 'left', delay: 600})

sr.reveal(`.footer-data, .footer-content div`, {interval: 100})