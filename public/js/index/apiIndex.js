const URL_BASE = `http://localhost:3000`

const apiIndex = {
    async buscaOS() {
        try {
                const response = await fetch(`${URL_BASE}/ordensServico`);
                const data = await response.json();
                return data;
            } catch (error) {
                console.error('Erro ao buscar OS:', error);
                throw error;
            }
    },
    async buscaOSporPlaca(placa) {
        try {
                const response = await fetch(`${URL_BASE}/ordensServico/${placa}`);
                const data = await response.json();
                return data;
            } catch (error) {
                console.error('Erro ao buscar OS por placa:', error);
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
    }
}

export default apiIndex