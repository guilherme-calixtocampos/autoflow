
import api from './apiUsuarios.js'

const ui = {
    async preencheForm(usuarioId) {

        const modalUsuario = document.getElementById("modalUsuario")

        const usuario = await api.buscaUsuariosPorId(usuarioId)

        document.querySelector('#novoUsuarioId').value = usuario.id
        document.querySelector('#novoUsuarioNome').value = usuario.nome
        document.querySelector('#novoUsuarioEmail').value = usuario.email
        document.querySelector('#novoUsuarioSenha').value = usuario.senha
        document.querySelector('#novoUsuarioFuncao').value = usuario.cargo
        document.querySelector('#novoUsuarioTel').value = usuario.telefone
        document.querySelector('#novoUsuarioStatus').value = usuario.status

        modalUsuario.classList.remove("hidden")
        modalUsuario.classList.add("flex")
    },
    

    async renderUsuarios() {
        try {
            const usuarios = await api.buscaUsuarios()
            console.log(usuarios)
            const listaUsuarios = document.querySelector('#listaUsuarios')
            listaUsuarios.innerHTML = ''
            for (let usuario of usuarios) {
                ui.criaCardUsuario(usuario)
            }
            
        } catch (error) {
            console.error('Deu erro ao criar card dos usuarios')
        }
    },

    async criaCardUsuario(usuario) {
        if (!usuario) return

        const divMaior = document.createElement('div') //div pai de tudo
        divMaior.classList.add(
            'bg-sky-900/50', 'border-1', 'border-gray-700', 'rounded-xl', 'm-5', 'p-5', 'flex', 'justify-between', 'px-5', 'text-gray-500', 'md:w-85', 'gap-4'
        )
        
        const divShield = document.createElement('div') //div da img do shield
        divShield.classList.add(
            'bg-blue-300/20', 'flex', 'items-center', 'w-12', 'h-12', 'justify-center','rounded-full'
        )
        const imgShield = document.createElement('img')
        imgShield.src = 'img/shield.png'
        imgShield.classList.add('w-10', 'h-10')
        divShield.appendChild(imgShield)


        const divDadosUsuario = document.createElement('div') //div dados do usuario
        divDadosUsuario.classList.add('w-65')

        const pNome = document.createElement('p')
        pNome.innerHTML = usuario.nome
        pNome.classList.add('text-white')

        const pCargo = document.createElement('p')
        pCargo.innerHTML = usuario.cargo
        pCargo.classList.add('text-blue-400')
        const divCargo = document.createElement('div')
        divCargo.classList.add(
            'bg-blue-300/20', 'p-1', 'rounded-lg'
        )
        divCargo.appendChild(pCargo)
    
        ui.verificaStatus(usuario)
        
        const divCargoAtivo = document.createElement('div')

        divCargoAtivo.classList.add('flex', 'gap-2')
        divCargoAtivo.appendChild(divCargo)
        const divStatus = await ui.verificaStatus(usuario)
        divCargoAtivo.appendChild(divStatus)

        const pEmail = document.createElement('p')
        pEmail.innerHTML = usuario.email
        pEmail.classList.add('flex', 'items-center', 'gap-2')

        const pTel = document.createElement('p')
        pTel.innerHTML = usuario.telefone
        pTel.classList.add('flex', 'items-center', 'gap-2', 'pb-5')

        const divBotoes = document.createElement('div')
        divBotoes.classList.add(
            'border-t-1', 'border-gray-700', 'pt-5', 'flex', 'items-center', 'justify-between'
        )

        const btnDesativar = document.createElement('button')
        btnDesativar.innerHTML = 'Desativar'
        btnDesativar.classList.add(
            'text-white', 'border-1', 'border-gray-700', 'w-40', 'h-10', 'rounded-lg'
        )

        const btnEditar = document.createElement('button')
        const imgEditar = document.createElement('img')
        imgEditar.src = 'img/editCliente.png'
        btnEditar.appendChild(imgEditar)
        
        btnEditar.addEventListener('click', () => {
            ui.preencheForm(usuario.id)
        })

        const btnExcluir = document.createElement('button')
        const imgRemover = document.createElement('img')
        imgRemover.src = 'img/deleteCliente.png'
        btnExcluir.appendChild(imgRemover)

        btnExcluir.addEventListener('click', () => {
            try {
                api.deletaUsuario(usuario.id)
                ui.renderUsuarios()
            } catch (error) {
                console.error('Erro ao excluir usuario')
            }
        })

        divBotoes.appendChild(btnDesativar)
        divBotoes.appendChild(btnEditar)
        divBotoes.appendChild(btnExcluir)

        divDadosUsuario.appendChild(pNome)
        divDadosUsuario.appendChild(divCargoAtivo)
        divDadosUsuario.appendChild(pEmail)
        divDadosUsuario.appendChild(pTel)
        divDadosUsuario.appendChild(divBotoes)

        const listaUsuarios = document.querySelector('#listaUsuarios')
        divMaior.appendChild(divShield)
        divMaior.appendChild(divDadosUsuario)
        listaUsuarios.appendChild(divMaior)
    },

    async verificaStatus(usuario) {
        if (usuario.status == "desativado") {
            const pStatus = document.createElement('p')
            pStatus.innerHTML = usuario.status
            const divStatus = document.createElement('div')
            pStatus.classList.add('text-gray-400')
            divStatus.classList.add(
            'bg-gray-300/20', 'p-1', 'rounded-lg'
            )
            divStatus.appendChild(pStatus)
            return divStatus
        } else {
            const pStatus = document.createElement('p')
            pStatus.innerHTML = usuario.status
            const divStatus = document.createElement('div')
            pStatus.classList.add('text-green-400')
            divStatus.classList.add(
            'bg-green-300/20', 'p-1', 'rounded-lg'
            )
            divStatus.appendChild(pStatus)
            return divStatus
        }
    }
}

export default ui