import uiIndex from '../index/uiIndex.js'
import uiOS from '../OS/uiOS.js'
import apiOS from '../OS/apiOS.js'
import apiClientes from '../clientes/apiClientes.js'
import apiIndex from '../index/apiIndex.js'

const modal = document.querySelector("#modalOS")
const btnAddOS = document.querySelector("#btnAddOS")
const btnCancelOS = document.querySelector("#btnCancelOS")

btnAddOS.addEventListener('click', () => {
    modal.classList.toggle('hidden')
})

btnCancelOS.addEventListener('click', () => {
    modal.classList.toggle('hidden')
})

const btnNovoServico = document.querySelector('#btnNovoServico')
btnNovoServico.addEventListener('click', () => {
    console.log('a')
    const divServico = document.createElement('div')
    divServico.classList.add('flex', 'flex-col', 'p-5')

    const label = document.createElement('label')
    label.classList.add('text-white')
    label.textContent = 'Nome do Serviço *'

    const select = document.createElement('select')
    select.name = 'novoContratoServico'
    select.classList.add(
                        'text-gray-200',
                        'p-3',
                        'border',
                        'border-gray-700',
                        'rounded-xl',
                        'bg-[#0F2547]',
                        'focus:outline-none',
                        'focus:ring-2',
                        'focus:ring-blue-500',
                        'transition'
                    )

    const servicos = [
                        "Troca de Óleo",
                        "Revisão de Freios",
                        "Suspensão",
                        "Troca de pastilhas de freio",
                        "Troca de retrovisores"
                    ]

                    servicos.forEach(servico => {
                        const option = document.createElement('option')
                        option.value = servico
                        option.textContent = servico
                        select.appendChild(option)
                    })

    divServico.appendChild(label)
    divServico.appendChild(select)
    const containerServicos = document.querySelector('#divNovoContratoServicos')
    containerServicos.appendChild(divServico)
})



document.addEventListener('DOMContentLoaded', () => {
    uiIndex.carregaUsuario()
    uiOS.renderContratos()

    btnSalvarOS.addEventListener('click', async (e) => {

    e.preventDefault()

    const descricaoProblema = document.querySelector('#novoContratoDescProblema').value
    const clienteNome = document.querySelector('#novoContratoClienteNome').value
    const veiculoPlaca = document.querySelector('#novoContratoPlaca').value
    const usuario = JSON.parse(localStorage.getItem('usuarioLogado'))

    const id = document.querySelector('#OSId').value

    const selectsServicos = document.querySelectorAll('#divNovoContratoServicos select')

    const servicos = []

    selectsServicos.forEach(select => {
        servicos.push({
            descricao: select.value
        })
    })

    // ===== BUSCAR CLIENTE =====

    const clientes = await apiClientes.buscaClientes()

    const cliente = clientes.find(c =>
        c.nome.toLowerCase() === clienteNome.toLowerCase()
    )

    if (!cliente) {
        alert('Cliente não cadastrado.')
        return
    }

    // ===== BUSCAR VEICULO =====

    const veiculos = await apiIndex.buscaVeiculos()

    const veiculo = veiculos.find(v =>
        v.placa.toLowerCase() === veiculoPlaca.toLowerCase()
    )

    if (!veiculo) {
        alert('Veículo não cadastrado.')
        return
    }

    // ===== VALIDAÇÕES =====

    if (servicos.length === 0) {
        alert('Adicione pelo menos um serviço.')
        return
    }

    if (!descricaoProblema) {
        alert('Informe a descrição do problema.')
        return
    }

    // ===== DADOS =====

    const status = 'Pendente'

    const agora = new Date()
    const dataEntrada = `${agora.getDate()}/${agora.getMonth()+1}/${agora.getFullYear()}`

    const dadosOS = {
        descricaoProblema,
        clienteId: cliente.id,
        veiculoId: veiculo.id,
        usuarioId: usuario.id,
        status,
        dataEntrada,
        servicos
    }

    try {

        if (id) {
            dadosOS.id = id
            await apiOS.editaOS(dadosOS)
        } else {
            await apiOS.cadastraOS(dadosOS)
        }

        alert('OS salva com sucesso')

        uiOS.renderContratos()

        // limpar serviços
        document.querySelector('#divNovoContratoServicos').innerHTML = ''

    } catch (error) {
        console.error('Erro ao salvar OS', error)
    }

})
});