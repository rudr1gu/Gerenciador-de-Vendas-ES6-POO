import { estoque } from "../model/produtos.js";
import { Produto } from "./telascontroller/telaEstoque.js";
import { Clientes } from "./telascontroller/telaClientes.js";
import { Analise } from "./telascontroller/telaAnalise.js";


const clientes1 = new Clientes();
const produtos = new Produto();
const analise = new Analise();

let vendas = [];

class Registro{
    registrarVenda = (vendas) => {
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
            produtos.mostrarEstoque();
    
            // Atualizar análise de desempenho
            analise.analisarDesempenho(vendas);
    
            alert('Venda registrada com sucesso!');
        } else {
            alert('Produto não disponível no estoque ou quantidade insuficiente.');
        }
    }
}

const btnRegisVendas = document.getElementById("btnVendas")
    btnRegisVendas.addEventListener("click", ()=>{
        registro.registrarVenda(vendas);
});

const registro = new Registro();

// Inicialização
produtos.mostrarProdutos();
produtos.mostrarEstoque();
clientes1.mostrarClientes();
analise.analisarDesempenho(vendas);