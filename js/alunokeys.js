function clique(html) {
    (function () {
        let alunos = document.querySelectorAll('.aluno');
        alunos.forEach(aluno => {
            aluno.children.item(1).children.item(0).addEventListener('click', () => {
                containerclick();
                aluno.classList.add("aluno-clicado");
                aluno.children.item(1).children.item(0).addEventListener('mouseover', function () {
                    aluno.children.item(0).classList.remove("nome-aluno-movimento");
                });
                aluno.children.item(2).classList.remove("remove");
                aluno.children.item(1).classList.remove("imagem-aluno");
                aluno.children.item(0).classList.remove("nome-aluno", "nome-aluno-movimento");
                aluno.children.item(0).classList.add("nome-click");
                aluno.children.item(1).children.item(0).classList.remove("img");
                aluno.children.item(1).children.item(0).classList.add("img-click");
                alunos.forEach(aluno => {
                    if (!aluno.classList.contains("aluno-clicado")) {
                        aluno.classList.add("aluno-suspenso");
                    }
                })
            });
        });
    })();
    let = botoes = document.querySelectorAll('.botao-voltar');
    botoes.forEach(botao => {
        botao.addEventListener('click', () => {
            document.querySelector("body").innerHTML = html;
            mouseover();
            clique(html);
        })
    })
};

function containerclick() {
    let container = document.querySelector(".container");
    container.classList.remove("container");
    container.classList.add("container-clicado");

}