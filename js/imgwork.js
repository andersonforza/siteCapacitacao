function mouseover() {
    let alunos = document.querySelectorAll('.aluno');
    alunos.forEach(aluno => {
        aluno.children.item(1).children.item(0).addEventListener('mouseover', function () {
            aluno.children.item(0).classList.add("nome-aluno-movimento");
        });
    })
    alunos.forEach(aluno => {
        aluno.children.item(1).children.item(0).addEventListener('mouseout', function () {
            aluno.children.item(0).classList.remove("nome-aluno-movimento");
        });
    })
};