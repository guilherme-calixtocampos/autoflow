const btn = document.querySelector('#btnHamburguer')
const menu = document.querySelector('#menuHamburguer')

btn.addEventListener('click', () => {
    menu.classList.toggle('hidden')
})