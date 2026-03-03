import api from '../usuarios/apiUsuarios.js'

const ui = {
    async fazLogin() {
        const usuarios = await api.buscaUsuarios()
        const userEmail = document.querySelector('#userEmail').value.trim()
        const userPassword = document.querySelector('#userPassword').value.trim()
        try {
            if (!userEmail || !userPassword) {
                alert("Preencha email e senha")
                return
            }
            console.log(usuarios)
            console.log(userEmail, userPassword)

            const usuarioEncontrado = usuarios.find(usuario => {
            console.log(usuario.email, usuario.senha)
            return (
                usuario.email === userEmail &&
                usuario.senha === userPassword
            )
            })

            if (usuarioEncontrado) {
                localStorage.setItem("usuarioLogado",JSON.stringify(usuarioEncontrado))
                location.href = "index.html"
            }  else {
                alert("Email ou senha incorretos")
            }
        } catch (error) {
            console.error('Erro ao fazer login')
        }
    }
}

export default ui