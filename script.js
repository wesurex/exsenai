document.getElementById('btnCriarCaixa').addEventListener('click', function() {
    // Criando uma nova caixa
    let novaCaixa = document.createElement('div');
    novaCaixa.classList.add('caixa'); // Adiciona a classe de estilo
    novaCaixa.textContent = 'Caixa'; // Pode colocar o texto que você quiser aqui

    // Criando o botão de fechar (X)
    let botaoFechar = document.createElement('button');
    botaoFechar.textContent = 'X';
    botaoFechar.classList.add('fechar'); // Estilo do "X"

    // Quando o botão de fechar for clicado, remove a caixa
    botaoFechar.addEventListener('click', function() {
        novaCaixa.remove();
    });

    // Adiciona o botão de fechar à caixa
    novaCaixa.appendChild(botaoFechar);

    // Adiciona a caixa ao contêiner
    document.getElementById('caixasContainer').appendChild(novaCaixa);
});
