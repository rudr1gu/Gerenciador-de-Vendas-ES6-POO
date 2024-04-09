
class Analise{

    analisarDesempenho = (vendas) => {
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
}

export { Analise };