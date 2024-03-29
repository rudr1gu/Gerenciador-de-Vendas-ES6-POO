class Nav {
  constructor(telas) {
    this.telas = telas;
  }

  alternarTela(target) {
    // Ocultando todas as telas
    this.telas.forEach(tela => {
      tela.style.display = "none";
    });

    // Exibindo a tela correspondente ao botão clicado
    const telaAlvo = document.getElementById(target);
    if (telaAlvo) {
      telaAlvo.style.display = "flex";
    }
  }
}

// Obtendo os elementos de tela
const registro = document.getElementById("registro-vendas");
const estoque = document.getElementById("controle-estoque");
const gerenciamento = document.getElementById("gerenciamento-clientes");
const analise = document.getElementById("analise-desempenho");

// Criando um array de telas
const telas = [registro, estoque, gerenciamento, analise];
  
export { Nav, telas };
