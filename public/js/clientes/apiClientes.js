const URL_BASE = `http://localhost:3000`

const api = {
    async buscaClientes() {
        try {
                const response = await fetch(`${URL_BASE}/clientes`);
                const data = await response.json();
                return data;
            } catch (error) {
                console.error('Erro ao buscar clientes:', error);
                throw error;
            }
    },
    async buscaVeiculos() {
        try {
                const response = await fetch(`${URL_BASE}/veiculos`);
                const data = await response.json();
                return data;
            } catch (error) {
                console.error('Erro ao buscar veiculos:', error);
                throw error;
            }
    },
}

export default api