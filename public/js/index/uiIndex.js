import apiIndex from "./apiIndex.js"

const uiIndex = {
    async carregaUsuario() {
        const usuarioSalvo = JSON.parse(localStorage.getItem("usuarioLogado"))

        if (!usuarioSalvo) {
            location.href = "login.html"
        }

        const userName = document.querySelector('#userName')
        const userCargo = document.querySelector('#userCargo')

        userName.innerHTML = usuarioSalvo.nome
        userCargo.innerHTML = usuarioSalvo.cargo
    },
    async renderOS() {

        const OS = await apiIndex.buscaOS()
        const veiculos = await apiIndex.buscaVeiculos()

        const listaOS = document.querySelector('#listaOS')
        const btnValidar = document.querySelector('#btnValidaPlaca')
        const inputPlaca = document.querySelector('#pesquisaPlaca')
        const selectStatus = document.querySelector('#filtraStatus')

        // função para renderizar cards
        const renderCards = (ordens) => {
            listaOS.innerHTML = ''

            ordens.forEach(os => {
                const veiculo = veiculos.find(v => v.id === os.veiculoId)

                if (veiculo) {
                    uiIndex.criaCardOS(os, veiculo)
                }
            })
        }

        // renderiza tudo inicialmente
        renderCards(OS)

        // filtro
        btnValidar.addEventListener('click', () => {

            const pesquisaPlaca = inputPlaca.value.trim().toLowerCase()
            const filtroStatus = selectStatus.value

            let osFiltradas = OS

            // filtro por status
            if (filtroStatus !== "Todos") {
                osFiltradas = osFiltradas.filter(os => os.status === filtroStatus)
            }

            // filtro por placa
            if (pesquisaPlaca) {
                osFiltradas = osFiltradas.filter(os => {
                    const veiculo = veiculos.find(v => v.id === os.veiculoId)
                    return veiculo && veiculo.placa.toLowerCase().includes(pesquisaPlaca)
                })
            }

            renderCards(osFiltradas)

        })
    },

    async criaCardOS(contrato, veiculo) {
        // Filtra serviços e peças pelo veículo do card
        const servicosDoVeiculo = contrato.servicos.filter(s => s.veiculoId === veiculo.id);
        const pecasDoVeiculo = contrato.pecas.filter(p => p.veiculoId === veiculo.id);


        const card = document.createElement('div')
        card.classList.add('bg-sky-900/50', 'border-1', 'border-gray-700', 'rounded-xl', 'p-4','mx-4', 'flex', 'flex-col')

        const divInfPrincipais = document.createElement('div')
        divInfPrincipais.classList.add('flex', 'flex-col', 'items-start', 'border-b-1', 'border-gray-700', 'gap-2', 'pb-4')


        const pVeiculo = document.createElement('p')
        pVeiculo.textContent = `${veiculo.marca} ${veiculo.modelo} ${veiculo.ano}`
        pVeiculo.classList.add('text-white')

        const pPlaca = document.createElement('p')
        pPlaca.textContent = `Placa: ${veiculo.placa}`
        pPlaca.classList.add('text-gray-500')

        const pPecas = document.createElement('p')
        pPecas.textContent = `Placa: ${veiculo.placa}`
        pPecas.classList.add('text-gray-500')

        //divInfPrincipais.appendChild(pTitulo)
        divInfPrincipais.appendChild(pVeiculo)
        divInfPrincipais.appendChild(pPlaca)

        const pMotivo = document.createElement('p')
        pMotivo.textContent = `Motivo: ${contrato.descricaoProblema}`
        pMotivo.classList.add('text-gray-500')
        divInfPrincipais.appendChild(pMotivo)

        const pStatus = document.createElement('p')
        pStatus.textContent = `Status: ${contrato.status}`
        if (contrato.status === "Em andamento") {
            pStatus.classList.add('text-white', 'bg-green-500', 'p-2', 'rounded-lg')
        } else {
            pStatus.classList.add('text-gray-500', 'border-1', 'p-2', 'rounded-lg')
        }
        divInfPrincipais.appendChild(pStatus)

        card.appendChild(divInfPrincipais)

        // Div de serviços
        const divServicos = document.createElement('div');
        divServicos.classList.add('flex', 'items-start', 'flex-col', 'text-white', 'my-3');
        divServicos.innerHTML = '<strong>Serviços:</strong>';
        servicosDoVeiculo.forEach(s => {
            const p = document.createElement('p');
            p.textContent = `${s.descricao} - R$ ${s.valor}`;
            divServicos.appendChild(p);
        });

        // Div de peças
        const divPecas = document.createElement('div');
        divPecas.classList.add('flex', 'items-start', 'flex-col', 'text-white', 'my-3');
        divPecas.innerHTML = '<strong>Peças:</strong>';
        pecasDoVeiculo.forEach(p => {
            const pElem = document.createElement('p');
            pElem.textContent = `${p.descricao} (x${p.quantidade}) - R$ ${p.valorUnitario}`;
            divPecas.appendChild(pElem);
        });
        card.appendChild(divPecas);
        card.appendChild(divServicos);
        

        const listaOS = document.querySelector('#listaOS')
        listaOS.appendChild(card)

    }
}

export default uiIndex