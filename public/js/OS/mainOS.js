import uiIndex from '../index/uiIndex.js'
import uiOS from '../OS/uiOS.js'

const modal = document.querySelector("#modalOS")
const btnAddOS = document.querySelector("#btnAddOS")
const btnCancelOS = document.querySelector("#btnCancelOS")

btnAddOS.addEventListener('click', () => {
    modal.classList.toggle('hidden')
})

btnCancelOS.addEventListener('click', () => {
    modal.classList.toggle('hidden')
})

document.addEventListener('DOMContentLoaded', () => {
    uiIndex.carregaUsuario()
    uiOS.renderContratos()
});