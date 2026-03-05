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
    async editaCliente(cliente) {
        try {
                const response = await fetch(`${URL_BASE}/clientes/${cliente.id}`,{
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(cliente)
            });
                const clientes = await response.json();
                return clientes;
                
            } catch (error) {
                console.error('Erro ao editar cliente:', error);
                throw error;
            }
    },
    async buscaClientesPorId(id) {
        try {
                const response = await fetch(`${URL_BASE}/clientes/${id}`);
                const data = await response.json();
                return data;
            } catch (error) {
                console.error('Erro ao buscar clientes por id:', error);
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
    async buscaVeiculosPorId(id) {
        try {
                const response = await fetch(`${URL_BASE}/veiculos/${id}`);
                const data = await response.json();
                return data;
            } catch (error) {
                console.error('Erro ao buscar veiculos por id:', error);
                throw error;
            }
    },
    async editaVeiculo(veiculo) {
        try {
                const response = await fetch(`${URL_BASE}/veiculos/${veiculo.id}`,{
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(veiculo)
            });
                const veiculos = await response.json();
                return veiculos;
                
            } catch (error) {
                console.error('Erro ao editar veiculo:', error);
                throw error;
            }
    },
    async cadastraVeiculo(veiculo) {
        try {
                const response = await fetch(`${URL_BASE}/veiculos`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(veiculo)
            });
                const veiculos = await response.json();
                return veiculos;

            } catch (error) {
                console.error('Erro ao cadatrar veiculo:', error);
                throw error;
            }
    },
    async deletaCliente(id) {
        try {
            const promise = await fetch(`${URL_BASE}/clientes/${id}`,{
                method: 'DELETE'});
        } catch (error) {
            console.error('Erro ao deletar cliente:', error);
            throw error;
        }
    },
    async deletaVeiculo(id) {
        try {
            const promise = await fetch(`${URL_BASE}/veiculos/${id}`,{
                method: 'DELETE'});
        } catch (error) {
            console.error('Erro ao deletar veiculo:', error);
            throw error;
        }
    },
    
}

export default api