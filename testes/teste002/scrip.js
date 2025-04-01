var tela = document.getElementById('caixa-resultado');
var botoes = document.getElementsByClassName('button');

// Percorre todos os botões e adiciona o evento de clique
for (let i = 0; i < botoes.length; i++) {
    botoes[i].addEventListener('click', function(event) {
        tela.innerText += event.target.innerText; // Adiciona o número à tela
    });
}
