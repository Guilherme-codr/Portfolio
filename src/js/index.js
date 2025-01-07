const botaomostrarprojetos = document.querySelector('.btn-mostrar-projetos');
const projetosinativos  = document.querySelectorAll('.projeto:not(.ativo');

botaomostrarprojetos.addEventListener('click', () => {
    projetosinativos.forEach(projetoinativo => {
        projetoinativo.classList.add('ativo');
    });

    botaomostrarprojetos.classList.add("remover");
});