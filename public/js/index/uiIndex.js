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

        for (let contrato of OS) {
            for (let veiculo of veiculos) {
                uiIndex.criaCardOS(contrato, veiculo)
            }
        }

        const validaPlaca = document.querySelector('#btnValidaPlaca')
        validaPlaca.addEventListener('click', () => {
            const pesquisaPlaca = document.querySelector('#pesquisaPlaca').value.trim().toLowerCase();

            // Filtra apenas os veículos que batem com a pesquisa
            const veiculosFiltrados = veiculos.filter((v) => v.placa.toLowerCase().includes(pesquisaPlaca));

            // Limpa a lista de OS antes de renderizar os resultados
            const containerOS = document.querySelector('#listaOS'); // ajuste para o ID do container real
            containerOS.innerHTML = '';

            // Para cada OS, verifica se o veículo filtrado pertence a ela
            for (let contrato of OS) {
                // Se você quer criar card apenas para veículos que correspondem à pesquisa:
                    veiculosFiltrados.forEach((veiculo) => {
                    uiIndex.criaCardOS(contrato, veiculo);
                });
            }
        });

    },

    async criaCardOS(contrato, veiculo) {
        const card = document.createElement('div')
        card.classList.add('bg-sky-900/50', 'border-1', 'border-gray-700', 'rounded-xl', 'p-4','mx-4', 'flex', 'flex-col')

        const divInfPrincipais = document.createElement('div')
        divInfPrincipais.classList.add('flex', 'flex-col', 'items-start', 'border-b-1', 'border-gray-700', 'gap-2', 'pb-4')
        const pTitulo = document.createElement('p')
        pTitulo.textContent = 'Veículo em atendimento'
        pTitulo.classList.add('text-gray-500')

        const pVeiculo = document.createElement('p')
        pVeiculo.textContent = `${veiculo.marca} ${veiculo.modelo} ${veiculo.ano}`
        pVeiculo.classList.add('text-white')

        const pPlaca = document.createElement('p')
        pPlaca.textContent = `Placa: ${veiculo.placa}`
        pPlaca.classList.add('text-gray-500')

        const pPecas = document.createElement('p')
        pPecas.textContent = `Placa: ${veiculo.placa}`
        pPecas.classList.add('text-gray-500')

        divInfPrincipais.appendChild(pTitulo)
        divInfPrincipais.appendChild(pVeiculo)
        divInfPrincipais.appendChild(pPlaca)

        card.appendChild(divInfPrincipais)

        const divServicos = document.createElement('div');
        divServicos.classList.add('flex', 'items-start', 'flex-col', 'text-white')
        divServicos.innerHTML = '<strong>Serviços:</strong>';
        contrato.servicos.forEach(s => {
            const p = document.createElement('p');
            p.textContent = `${s.descricao} - R$ ${s.valor}`;
                const divPecas = document.createElement('div');
                contrato.pecas.forEach(p => {
                    const pElem = document.createElement('p');
                    pElem.textContent = `${p.descricao} (x${p.quantidade}) - R$ ${p.valorUnitario}`;
                    divPecas.appendChild(pElem)
                });

            
            divServicos.appendChild(p);
            divServicos.appendChild(divPecas)
        });
        card.appendChild(divServicos);

        const listaOS = document.querySelector('#listaOS')
        listaOS.appendChild(card)

    }
}

export default uiIndex