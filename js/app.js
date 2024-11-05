let total = 0;
limpar();

function adicionar(){
    let quantidade = document.getElementById('quantidade').value;
    if(quantidade == ''){
        return alert('Insira uma quantidade do produto.');
    }
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let preco = quantidade * valorUnitario;
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
        </section>`
    total = total + preco;
    let valorTotal = document.getElementById('valor-total');
    valorTotal.textContent = (`R$${total}`);
    document.getElementById('quantidade').value = '';
}

function limpar(){
   total = 0;
   carrinho = document.getElementById('lista-produtos').innerHTML = 'Seu carrinho está vazio';
   valorTotal = document.getElementById('valor-total').innerHTML = 'R$0';

}