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
    async cadastraCliente(cliente) {
        try {
                const response = await fetch(`${URL_BASE}/clientes`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(cliente)
            });
                const clientes = await response.json();
                return clientes;
                
            } catch (error) {
                console.error('Erro ao cadatrar cliente:', error);
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