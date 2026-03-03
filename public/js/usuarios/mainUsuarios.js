import ui from './uiUsuarios.js'
import api from './apiUsuarios.js'

const btnNovoUsuario = document.getElementById("btnNovoUsuario");
const modalUsuario = document.getElementById("modalUsuario");
const fecharUsuario = document.getElementById("fecharModal");

btnNovoUsuario.addEventListener("click", () => {
    modalUsuario.classList.remove("hidden");
    modalUsuario.classList.add("flex");
});

fecharUsuario.addEventListener("click", () => {
    modalUsuario.classList.add("hidden");
    modalUsuario.classList.remove("flex");
});

document.addEventListener('DOMContentLoaded', () => {
    ui.renderUsuarios()

    

    const form = document.querySelector('#novoUsuarioId')
    form.addEventListener('submit', criaUsuario)
});

async function criaUsuario(evento) {
    evento.preventDefault();

    try {
        const id = document.querySelector('#novoUsuarioId').value
        const nome = document.querySelector('#novoUsuarioNome').value
        const email = document.querySelector('#novoUsuarioEmail').value
        const senha = document.querySelector('#novoUsuarioSenha').value
        const cargo = document.querySelector('#novoUsuarioFuncao').value
        const telefone = document.querySelector('#novoUsuarioTel').value
        const status = document.querySelector('#novoUsuarioStatus').value

        if (id) {
            await api.editaUsuario({ id, nome, email, senha, cargo, telefone, status })
        } else {
            await api.criaUsuario({ nome, email, senha, cargo, telefone, status })
        }

        await ui.renderUsuarios()

        evento.target.reset()
        document.querySelector('#novoUsuarioId').value = ""

        modalUsuario.classList.add("hidden")
        modalUsuario.classList.remove("flex")

    } catch (error) {
        console.error('Erro ao salvar usuário')
    }
}
    