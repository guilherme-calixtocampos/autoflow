import apiClientes from '../clientes/apiClientes.js'

const uiOS = {
    async renderContratos() {
        const clientes = await apiClientes.buscaClientes
        const clientesPorID = await apiClientes.buscaClientesPorId
    }
}