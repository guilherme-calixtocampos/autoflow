const URL_BASE = `http://localhost:3000`

const api = {
    async cadastraOS(OS) {
        try {
                const response = await fetch(`${URL_BASE}/ordensServico`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(OS)
            });
                const ordensServico = await response.json();
                return ordensServico;

            } catch (error) {
                console.error('Erro ao cadatrar OS:', error);
                throw error;
            }
    },
    async editaOS(OS) {
        try {
                const response = await fetch(`${URL_BASE}/ordensServico/${cliente.id}`,{
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(OS)
            });
                const ordensServico = await response.json();
                return ordensServico;
                
            } catch (error) {
                console.error('Erro ao editar OS:', error);
                throw error;
            }
    }
}

export default api