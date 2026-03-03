const URL_BASE = `http://localhost:3000`

const api = {
    async buscaUsuarios() {
    try {
            const response = await fetch(`${URL_BASE}/usuarios`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Erro ao buscar usuário:', error);
            throw error;
        }
    },

    async buscaUsuariosPorId(id) {
    try {
            const response = await fetch(`${URL_BASE}/usuarios/${id}`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Erro ao buscar usuário:', error);
            throw error;
        }
    },

    async criaUsuario(usuario) {
        try {
            const promise = await fetch(`${URL_BASE}/usuarios`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(usuario)
            });
            const usuarios = await promise.json();
            return usuarios;
        } catch (error) {
            console.error('Erro ao salvar usuário:', error);
            throw error;
        }
    },

    async editaUsuario(usuario) {
        try {
            const promise = await fetch(`${URL_BASE}/usuarios/${usuario.id}`,{
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(usuario)
            });
            const usuarios = await promise.json();
            return usuarios;
        } catch (error) {
            console.error('Erro ao editar usuário:', error);
            throw error;
        }
    },

    async deletaUsuario(id) {
        try {
            const promise = await fetch(`${URL_BASE}/usuarios/${id}`,{
                method: 'DELETE'});
        } catch (error) {
            console.error('Erro ao deletar usuário:', error);
            throw error;
        }
    },
    
}

export default api