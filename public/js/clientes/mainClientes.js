import ui from '../clientes/uiClientes.js'

const btnHamburguer = document.querySelector('#btnHamburguer')
const menu = document.querySelector('#menuHamburguer')

btnHamburguer.addEventListener('click', () => {
    menu.classList.toggle('hidden')
})

document.addEventListener('DOMContentLoaded', () => {
    ui.renderClientes()

});