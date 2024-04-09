import { estoque } from "../../model/produtos.mjs";

class Produto{
    // Função para mostrar o estoque
    mostrarEstoque = () => {
        const estoqueList = document.getElementById('estoque-list');
        estoqueList.innerHTML = '';
        
        estoque.forEach(item => {
            const tr = document.createElement('tr');
            tr.innerHTML = `<td>${item.tipo}</td><td>${item.produto}</td><td> ${item.quantidade}</td>`;
            estoqueList.appendChild(tr);
        });
    }

    mostrarProdutos = () => {
        const produtosList = document.getElementById("produto");
        produtosList.innerHTML = '';

        estoque.forEach(item =>{
            const OptionsProduto =  document.createElement('option');
            
            OptionsProduto.innerHTML = `${item.produto}`
            produtosList.appendChild(OptionsProduto);
        })
    }
}

export { Produto };