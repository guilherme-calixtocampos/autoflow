import apiClientes from '../clientes/apiClientes.js'
import apiIndex from '../index/apiIndex.js'

const uiOS = {
    async renderContratos() {

        const ordensServico = await apiIndex.buscaOS()
        const clientes = await apiClientes.buscaClientes()
        const veiculos = await apiClientes.buscaVeiculos()

        try {
            for (let OS of ordensServico) {

                const cliente = clientes.find(c => c.id === OS.clienteId)
                const veiculo = veiculos.find(v => v.id === OS.veiculoId)
                console.log(veiculo)
                uiOS.criaCardOS(OS, cliente, veiculo)

            }
        } catch (error) {
            console.error('Erro ao buscar informações')
        }
    },

    async criaCardOS(OS, cliente, veiculo) {
        const divCard = document.createElement('div')
        divCard.classList.add('bg-sky-900/50', 'mt-5', 'border', 'border-gray-700','rounded-xl', 'p-4', 'text-white', 'md:w-160')
            const divTotal = document.createElement('div')
            divTotal.classList.add('flex', 'items-center', 'justify-between')
            divCard.appendChild(divTotal)
                const divCabecalhoCard = document.createElement('div')
                divTotal.appendChild(divCabecalhoCard)
                divCabecalhoCard.classList.add('flex', 'items-center', 'gap-3')

                    const divImgCabecalhoCard = document.createElement('div')
                    divImgCabecalhoCard.classList.add('bg-sky-800', 'p-3', 'rounded-lg', 'flex', 'items-center', 'justify-center')
                        const ImgCabecalhoCard = document.createElement('img')
                        ImgCabecalhoCard.src = 'img/car.png'
                        ImgCabecalhoCard.alt = 'Ícone de carro'
                        ImgCabecalhoCard.classList.add('w-9')
                        divImgCabecalhoCard.appendChild(ImgCabecalhoCard)
                        divCabecalhoCard.appendChild(divImgCabecalhoCard)

                    const divpCabecalhoCard = document.createElement('div')
                        const pVeiculo = document.createElement('p')
                        pVeiculo.classList.add('font-medium')
                        pVeiculo.textContent = `${veiculo.marca} ${veiculo.modelo} ${veiculo.ano}`
                        divpCabecalhoCard.appendChild(pVeiculo)

                        const pPlaca = document.createElement('p')
                        pPlaca.classList.add('text-gray-400', 'text-sm')
                        pPlaca.textContent = 'Placa:'
                        divpCabecalhoCard.appendChild(pPlaca)

                        const spanPlaca = document.createElement('span')
                        spanPlaca.classList.add('text-gray-400', 'text-sm')
                        spanPlaca.textContent = `${veiculo.placa}`
                        divpCabecalhoCard.appendChild(spanPlaca)
                        divCabecalhoCard.appendChild(divpCabecalhoCard)

                const divStatusBotoes = document.createElement('div')
                divStatusBotoes.classList.add('flex', 'items-center', 'gap-3')
                        
                        const divStatus = document.createElement('div')
                        divStatus.classList.add('px-2', 'py-1', 'bg-emerald-500', 'text-white', 'text-sm', 'font-medium', 'rounded-full')
                            const pStatus = document.createElement('p')
                            pStatus.textContent = OS.status
                            divStatus.appendChild(pStatus)
                            divStatusBotoes.appendChild(divStatus)
                            
                        const divBotoes = document.createElement('div')

                            const btnEdit = document.createElement('button')
                            divBotoes.appendChild(btnEdit)
                            btnEdit.classList.add('flex', 'border-1', 'border-gray-700', 'p-2', 'items-center', 'gap-2', 'rounded-lg', 'font-bold')

                                const divImgBtnEdit = document.createElement('div')
                                btnEdit.appendChild(divImgBtnEdit)
                                    const ImgBtnEdit = document.createElement('img')
                                    ImgBtnEdit.src = 'img/edit.png'
                                    ImgBtnEdit.alt = 'Ícone de editar'
                                    divImgBtnEdit.appendChild(ImgBtnEdit)
                                
                                const pTextobtnEdit = document.createElement('p')
                                pTextobtnEdit.textContent = 'Editar'
                                btnEdit.appendChild(pTextobtnEdit)

                            const btnRemove = document.createElement('button')
                            divBotoes.appendChild(btnRemove)
                            btnRemove.classList.add('flex', 'border-1', 'border-gray-700', 'p-2', 'items-center', 'gap-2', 'rounded-lg', 'text-red-500', 'font-bold')

                                const divImgBtnRemove = document.createElement('div')
                                btnRemove.appendChild(divImgBtnRemove)
                                    const ImgBtnRemove = document.createElement('img')
                                    ImgBtnRemove.src = 'img/delete.png'
                                    ImgBtnRemove.alt = 'Ícone de remover'
                                    divImgBtnRemove.appendChild(ImgBtnRemove)
                                
                                const pTextobtnRemove = document.createElement('p')
                                pTextobtnRemove.textContent = 'Excluir'
                                btnRemove.appendChild(pTextobtnRemove)
                                divStatusBotoes.appendChild(divBotoes)
                    divTotal.appendChild(divStatusBotoes)
                        
            
            const hr = document.createElement('hr')
            hr.classList.add('border-gray-700', 'mt-4')
            divCard.appendChild(hr)
        
        const divDadosCliente = document.createElement('div')
        divDadosCliente.classList.add('flex', 'flex-col', 'md:flex-row', 'md:justify-between', 'gap-5', 'md:px-10')
        divCard.appendChild(divDadosCliente)

            const divDadosClienteCabecalho = document.createElement('div')
            divDadosClienteCabecalho.classList.add('flex', 'flex-col', 'gap-5')
            divDadosCliente.appendChild(divDadosClienteCabecalho)

                const divNomeTel = document.createElement('div')
                divDadosClienteCabecalho.appendChild(divNomeTel)

                    const pCliente = document.createElement('p')
                    pCliente.classList.add('text-gray-400')
                    pCliente.textContent = 'Cliente'
                    divNomeTel.appendChild(pCliente)

                    const pClienteNome = document.createElement('p')
                    pClienteNome.textContent = cliente.nome
                    divNomeTel.appendChild(pClienteNome)

                    const pClienteTel = document.createElement('p')
                    pClienteTel.classList.add('text-gray-400', 'text-sm')
                    pClienteTel.textContent = cliente.telefone
                    divNomeTel.appendChild(pClienteTel)

                const divServContratados = document.createElement('div')
                divDadosClienteCabecalho.appendChild(divServContratados)

                    const pServicos = document.createElement('p')
                    pServicos.textContent = 'Serviços contratados'
                    pServicos.classList.add("text-gray-400")
                    divServContratados.appendChild(pServicos)

                    const ulServicos = document.createElement('ul')
                    ulServicos.classList.add('flex', 'gap-4', 'flex-row', 'flex-wrap')
                    divServContratados.appendChild(ulServicos)

                    OS.servicos.forEach(servico => {

                        const liServico = document.createElement('li')
                        liServico.classList.add('p-1', 'bg-gray-700', 'rounded-xl', 'border')
                        liServico.textContent = servico.descricao

                        ulServicos.appendChild(liServico)

                    })
                        

        const divDataCriacao = document.createElement('div')
        divDadosCliente.appendChild(divDataCriacao)

            const pDataDeCriacao = document.createElement('p')
            pDataDeCriacao.classList.add('text-gray-400', 'text-sm')
            pDataDeCriacao.textContent = 'Data de criação'
            divDataCriacao.appendChild(pDataDeCriacao)

            const pData = document.createElement('p')

            pData.textContent = OS.dataEntrada
            divDataCriacao.appendChild(pData)

        const listaCardOS = document.querySelector('#listaCardOS')
        listaCardOS.appendChild(divCard)

    }
}

export default uiOS