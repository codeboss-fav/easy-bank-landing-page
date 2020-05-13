//  UI variables

const ham = document.querySelector('.hamburger');
const nav = document.querySelector('.mobile-nav');
const father = document.querySelector('.parent');
const close = document.querySelector('.close');
const showClose = document.querySelector('.show-close');

//  adding the event listener to the hamburger menu

ham.addEventListener('click', openNav);


function openNav(e) {
    nav.classList.toggle('navtog');
    close.classList.toggle('show-close');

    father.replaceChild(close, ham);

}

close.addEventListener('click', closeNav);

function closeNav(e) {
    nav.classList.toggle('navtog');
    close.classList.toggle('close');

    father.replaceChild(ham, close);

}


