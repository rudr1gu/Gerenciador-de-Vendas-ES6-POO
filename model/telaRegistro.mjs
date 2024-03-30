import { vendas } from "../main";
import { estoque } from "../data/produtos.mjs";
import { mostrarEstoque } from "./telaEstoque.mjs";
import { analisarDesempenho } from "../main";

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

export { registrarVenda };