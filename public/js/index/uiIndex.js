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
    }
}

export default uiIndex