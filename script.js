const botaoSim = document.getElementById('sim');
const botaoNao = document.getElementById('nao');
const painelPergunta = document.getElementById('painel-pergunta');
const painelSucesso = document.getElementById('painel-sucesso');

// Quando clicar no Sim
botaoSim.addEventListener('click', () => {
    painelPergunta.classList.add('hidden');
    painelSucesso.classList.remove('hidden');
});

// Quando passar o rato no Não, ele foge!
botaoNao.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - botaoNao.offsetWidth);
    const y = Math.random() * (window.innerHeight - botaoNao.offsetHeight);
    
    botaoNao.style.position = 'absolute';
    botaoNao.style.left = `${x}px`;
    botaoNao.style.top = `${y}px`;
});
