const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar_menu')
const body = document.querySelector('body')
const navLinks = document.querySelectorAll('.navbar_link')

// Toggle hamburger
const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
    body.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu)

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (menu.classList.contains('is-active')) {
            menu.classList.remove('is-active')
            menuLinks.classList.remove('active')
            body.classList.remove('active')
        }
    })
})
