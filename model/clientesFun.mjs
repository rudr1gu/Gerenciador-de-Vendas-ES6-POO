import { clientes } from "../data/clientes.mjs";
// Função para mostrar os clientes
let mostrarClientes = () => {
    const clientesList = document.getElementById('clientes-list');
    clientesList.innerHTML = '';
    clientes.forEach(cliente => {
        const li = document.createElement('li');
        li.textContent = `${cliente.nome}: ${cliente.id}`;
        clientesList.appendChild(li);
    });
}

export { mostrarClientes };