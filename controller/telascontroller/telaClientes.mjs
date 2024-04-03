import { clientes } from "../../model/clientes.mjs";

// Função para mostrar os clientes
let mostrarClientes = () => {
    const clientesList = document.getElementById('clientes-list');
    clientesList.innerHTML = '';
    
    clientes.forEach(cliente => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${cliente.id}</td><td>${cliente.nome}</td><td>${cliente.idade}</td> `;
        clientesList.appendChild(tr);
    });
}

export { mostrarClientes };