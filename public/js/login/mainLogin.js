import ui from './uiLogin.js'

const form = document.querySelector('#formLogin')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    ui.fazLogin()
})