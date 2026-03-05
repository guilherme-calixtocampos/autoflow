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

//DELETA VEICULO
const deletaVeiculoBtn = document.querySelector('#deletaVeiculo');

deletaVeiculoBtn.addEventListener('click', async () => {
    try {
        // Pega o ID do veículo que está no modal
        const veiculoId = document.querySelector('#novoVeiculoId').value;

        if (!veiculoId) return; // não faz nada se não tiver ID

        // Chama a API para deletar
        await api.deletaVeiculo(veiculoId);

        // Fecha o modal
        const modalVeiculo = document.getElementById("modalVeiculo");
        modalVeiculo.classList.add("hidden");
        modalVeiculo.classList.remove("flex");

        // Re-renderiza os clientes com seus veículos
        await ui.renderClientes();
    } catch (error) {
        console.error('Erro ao deletar veículo:', error);
    }
});


document.addEventListener('DOMContentLoaded', () => {
    ui.renderClientes()
    uiIndex.carregaUsuario()

    const formCliente = document.querySelector('#novoCliente')
    formCliente.addEventListener('submit', criaClientes)

    const formVeiculo = document.querySelector('#novoVeiculo')
    formVeiculo.addEventListener('submit', criaVeiculos)

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
async function criaVeiculos(event) {
    event.preventDefault();
    try {

        const id = document.querySelector('#novoVeiculoId').value
        const clienteId = document.querySelector('#novoVeiculoClienteId').value
        const placa = document.querySelector('#novoVeiculoPlaca').value
        const marca = document.querySelector('#novoVeiculoMarca').value
        const modelo = document.querySelector('#novoVeiculoModelo').value
        const ano = document.querySelector('#novoVeiculoAno').value
        const cor = document.querySelector('#novoVeiculoCor').value
        const quilometragem = document.querySelector('#novoVeiculoKm').value

        

        if (id) {
            await api.editaVeiculo({id,clienteId, placa, marca, modelo, ano, cor, quilometragem})
        } else {
            await api.cadastraVeiculo({clienteId, placa, marca, modelo, ano, cor, quilometragem})
        }

        await ui.renderClientes()

        document.querySelector('#novoVeiculoId').value = ""

        modalVeiculo.classList.add("hidden")
        modalVeiculo.classList.remove("flex")

    } catch (error) {
        console.error('Erro ao criar veiculo')
    }
}