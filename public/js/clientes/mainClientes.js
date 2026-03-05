import ui from '../clientes/uiClientes.js'
import uiIndex from '../index/uiIndex.js'
import api from './apiClientes.js'

const btnHamburguer = document.querySelector('#btnHamburguer')
const menu = document.querySelector('#menuHamburguer')

btnHamburguer.addEventListener('click', () => {
    menu.classList.toggle('hidden')
})
//MODAL DE CLIENTES
const btnNovoCliente = document.getElementById("btnNovoCliente");
const modal = document.getElementById("modalCliente");
const fecharModal = document.getElementById("fecharModal");

btnNovoCliente.addEventListener("click", () => {
  modal.classList.remove("hidden");
  modal.classList.add("flex");
});

fecharModal.addEventListener("click", () => {
  modal.classList.add("hidden");
  modal.classList.remove("flex");
});


document.addEventListener('DOMContentLoaded', () => {
    ui.renderClientes()
    uiIndex.carregaUsuario()

    const form = document.querySelector('#novoCliente')
    form.addEventListener('submit', criaClientes)

});

async function criaClientes(event) {
    event.preventDefault();
    try {
        const id = document.querySelector('#novoClienteId').value
        const nome = document.querySelector('#novoClienteNome').value
        const cpfCNPJ = document.querySelector('#novoClienteCPFCNPJ').value
        const telefone = document.querySelector('#novoClienteTel').value
        const email = document.querySelector('#novoClienteEmail').value
        const endereco = document.querySelector('#novoClienteEnd').value

        

        if (id) {
            await api.editaCliente({id,nome, cpfCNPJ, telefone, email, endereco})
        } else {
            await api.cadastraCliente({nome, cpfCNPJ, telefone, email, endereco})
        }

        await ui.renderClientes()

        document.querySelector('#novoClienteId').value = ""

        modal.classList.add("hidden")
        modal.classList.remove("flex")

    } catch (error) {
        console.error('Erro ao criar cliente')
    }
}