const botaomostrarprojetos = document.querySelector('.btn-mostrar-projetos');
const projetosinativos  = document.querySelectorAll('.projeto:not(.ativo');

botaomostrarprojetos.addEventListener('click', () => {
    mostrarMaisProjetos();

    esconderBotao();
});

function esconderBotao() {
    botaomostrarprojetos.classList.add("remover");
}

function mostrarMaisProjetos() {
    projetosinativos.forEach(projetoinativo => {
        projetoinativo.classList.add('ativo');
    });
}
