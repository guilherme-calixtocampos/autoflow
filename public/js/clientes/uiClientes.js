import api from '../clientes/apiClientes.js'

const ui = {
    async preencheFormulario(clienteId) {
        const modal = document.getElementById("modalCliente");
        const cliente = await api.buscaClientesPorId(clienteId)

        document.querySelector('#novoClienteId').value = cliente.id
        document.querySelector('#novoClienteNome').value = cliente.nome
        document.querySelector('#novoClienteCPFCNPJ').value = cliente.cpfCNPJ
        document.querySelector('#novoClienteTel').value = cliente.telefone
        document.querySelector('#novoClienteEmail').value = cliente.email
        document.querySelector('#novoClienteEnd').value = cliente.endereco

        
        modal.classList.remove("hidden");
        modal.classList.add("flex");
    },

    async renderClientes() {
        try {
            const clientes = await api.buscaClientes()
            const veiculos = await api.buscaVeiculos()

            clientes.forEach(cliente => {
                const veiculosDoCliente = veiculos.filter(
                    v => v.clienteId === cliente.id
                )

                ui.criaCardClientes(cliente, veiculosDoCliente)
            })

        } catch (error) {
            console.error(error)
        }
    },

    async criaCardClientes(cliente, veiculosDoCliente) {

        // CARD PRINCIPAL
        const cardCliente = document.createElement('div')
        cardCliente.classList.add('bg-sky-900/50', 'border-1', 'border-gray-700', 'rounded-xl', 'm-5', 'p-5')

        // ====== DADOS GERAIS ======
        const divDadosGerais = document.createElement('div')
        divDadosGerais.classList.add(
            'flex',
            'justify-between',
            'text-gray-500'
        )

        // ====== DADOS CLIENTE ======
        const divDadosCliente = document.createElement('div')
        divDadosCliente.classList.add('flex', 'flex-col', 'gap-2')

        const divDadosSimples = document.createElement('div')
        divDadosSimples.classList.add('flex', 'flex-col', 'gap-2')

        // Nome
        const pNome = document.createElement('p')
        pNome.textContent = cliente.nome
        pNome.classList.add('text-white')
        divDadosSimples.appendChild(pNome)

        // CPF/CNPJ
        const pCPFcnpj = document.createElement('p')
        pCPFcnpj.textContent = `CPF/CNPJ: ${cliente.cpfCNPJ}`
        divDadosSimples.appendChild(pCPFcnpj)

        // Email
        const pEmail = document.createElement('p')
        pEmail.classList.add('flex', 'items-center', 'gap-2')

        const imgEmail = document.createElement('img')
        imgEmail.src = "img/mail.png"

        pEmail.appendChild(imgEmail)
        pEmail.append(cliente.email)

        divDadosSimples.appendChild(pEmail)

        // Endereço
        const pEnd = document.createElement('p')
        pEnd.classList.add('flex', 'items-center', 'gap-2')

        const imgEnd = document.createElement('img')
        imgEnd.src = "img/location.png"

        pEnd.appendChild(imgEnd)
        pEnd.append(cliente.endereco)

        divDadosSimples.appendChild(pEnd)

        // Telefone
        const pTel = document.createElement('p')
        pTel.classList.add('flex', 'items-center', 'gap-2')

        const imgTel = document.createElement('img')
        imgTel.src = "img/phone.png"

        pTel.appendChild(imgTel)
        pTel.append(cliente.telefone)

        divDadosCliente.appendChild(divDadosSimples)
        divDadosCliente.appendChild(pTel)

        // ====== BOTÕES ======
        const divBotoes = document.createElement('div')
        divBotoes.classList.add('flex', 'items-start', 'gap-5')

        const btnEditCliente = document.createElement('button')
        const imgEdit = document.createElement('img')
        imgEdit.src = 'img/editCliente.png'
        btnEditCliente.appendChild(imgEdit)

        btnEditCliente.addEventListener('click', () => {
            ui.preencheFormulario(cliente.id)
        })

        const btnDeleteCliente = document.createElement('button')
        const imgDelete = document.createElement('img')
        imgDelete.src = 'img/deleteCliente.png'
        btnDeleteCliente.appendChild(imgDelete)

        divBotoes.appendChild(btnEditCliente)
        divBotoes.appendChild(btnDeleteCliente)

        divDadosGerais.appendChild(divDadosCliente)
        divDadosGerais.appendChild(divBotoes)

        // ====== DIVISÓRIA ======
        const hr = document.createElement('hr')
        hr.classList.add('border', 'border-gray-700', 'mt-5')

        // ====== VEÍCULOS ======
        const divVeiculos = document.createElement('div')
        divVeiculos.classList.add('mt-5')

        const divEscrita = document.createElement('div')
        divEscrita.classList.add('text-white', 'flex', 'gap-2', 'justify-between')

        const imgCar = document.createElement('img')
        imgCar.classList.add('h-10')
        imgCar.src = "img/blueCar.png"

        const pTitulo = document.createElement('p')
        pTitulo.textContent = "Veículos Cadastrados:"

        const divImgTitulo = document.createElement('div')
        divImgTitulo.classList.add('text-white', 'flex', 'gap-2', 'items-center')
        divImgTitulo.appendChild(imgCar)
        divImgTitulo.appendChild(pTitulo)

        const btnAddVeiculo = document.createElement('button')
        btnAddVeiculo.textContent = `Adicionar veículo`
        btnAddVeiculo.classList.add('text-white', 'bg-blue-500', 'p-2', 'rounded-lg', 'flex', 'gap-1', 'items-center', 'w-35', 'h-15', 'md:h-10', 'btnAddVeiculo')

            //MODAL DE VEÍCULOS
            const modalVeiculo = document.getElementById("modalVeiculo");
            const fecharModalVeiculo = document.getElementById("fecharModalVeiculo");

            btnAddVeiculo.addEventListener("click", () => {
            modalVeiculo.classList.remove("hidden");
            modalVeiculo.classList.add("flex");
            });

            fecharModalVeiculo.addEventListener("click", () => {
            modalVeiculo.classList.add("hidden");
            modalVeiculo.classList.remove("flex");
            });

        divEscrita.appendChild(divImgTitulo)
        divEscrita.appendChild(btnAddVeiculo)

        divVeiculos.appendChild(divEscrita)

        // LISTA DE VEÍCULOS
        const ulVeiculos = document.createElement('ul')
        ulVeiculos.classList.add(
            'flex',
            'gap-4',
            'flex-row',
            'flex-wrap',
            'text-gray-500',
            'mt-4'
        )

        // Renderiza veículos do cliente
        veiculosDoCliente.forEach(veiculo => {

            const li = document.createElement('li')
            const btnVeiculo = document.createElement('button')

            btnVeiculo.addEventListener('click', () => {
                console.log('oi')
            })

            li.classList.add(
                'p-2',
                'bg-[#0A1932]',
                'rounded-xl',
                'border'
            )

            const span = document.createElement('span')
            span.classList.add('text-blue-500')
            span.textContent = veiculo.placa

            btnVeiculo.appendChild(span)
            btnVeiculo.append(` ${veiculo.marca} ${veiculo.modelo} ${veiculo.ano}`)
            li.appendChild(span)
            li.appendChild(btnVeiculo)

            ulVeiculos.appendChild(li)
        })

        divVeiculos.appendChild(ulVeiculos)

        // ====== MONTAGEM FINAL ======
        cardCliente.appendChild(divDadosGerais)
        cardCliente.appendChild(hr)
        cardCliente.appendChild(divVeiculos)

        // Adiciona ao container da página
        document.querySelector('#listaClientes').appendChild(cardCliente)
        
    }
}

export default ui