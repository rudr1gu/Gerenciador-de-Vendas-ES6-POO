// import { clientes } from "./data/clientes.mjs";
import { estoque } from "../model/produtos.mjs";
import { mostrarEstoque, mostrarProdutos } from "./telascontroller/telaEstoque.mjs";
import { mostrarClientes } from "./telascontroller/telaClientes.mjs";


let vendas = [];

const btnRegisVendas = document.getElementById("btnVendas")

    btnRegisVendas.addEventListener("click", ()=>{
        registrarVenda();
    });

//Função para registrar uma venda
let registrarVenda = () => {
    const produto = document.getElementById('produto').value;
    const quantidade = parseInt(document.getElementById('quantidade').value);

    // Verificar se o produto está no estoque
    const itemEstoque = estoque.find(item => item.produto === produto);
    if (itemEstoque && itemEstoque.quantidade >= quantidade) {
        // Registrar venda
        vendas.push({ produto, quantidade });

        // Atualizar estoque
        itemEstoque.quantidade -= quantidade;

        // Atualizar visualização de estoque
        mostrarEstoque();

        // Atualizar análise de desempenho
        analisarDesempenho();

        alert('Venda registrada com sucesso!');
    } else {
        alert('Produto não disponível no estoque ou quantidade insuficiente.');
    }
}

// Função para analisar o desempenho de vendas
let analisarDesempenho = () => {
    // Calcular total de vendas
    const totalVendas = vendas.reduce((acc, venda) => acc + venda.quantidade, 0);
    document.getElementById('total-vendas').textContent = totalVendas;

    // Calcular produto mais vendido
    const produtosVendidos = {};
    vendas.forEach(venda => {
        produtosVendidos[venda.produto] = (produtosVendidos[venda.produto] || 0) + venda.quantidade;
    });
    const produtoMaisVendido = Object.keys(produtosVendidos).reduce((a, b) => produtosVendidos[a] > produtosVendidos[b] ? a : b, "Nenhum");
    document.getElementById('produto-mais-vendido').textContent = produtoMaisVendido;
}

// Inicialização
mostrarProdutos();
mostrarEstoque();
mostrarClientes();
analisarDesempenho();

export { vendas };
export { analisarDesempenho };