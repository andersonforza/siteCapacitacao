var caixas = document.querySelectorAll(".caixas");
var descricao = document.querySelectorAll(".descricao");

descricao.forEach(element => {
    element.parentNode.addEventListener("mouseover", () => {
        element.children[0].classList.add("caixa-clicada");

        let descricaoCompleta = document.querySelectorAll(".descricao-completa");
        for(let i = 0; i <= descricaoCompleta.length; i++){
            element.children[i+1].classList.add("descricao-completa-hover");
            element.children[i].classList.remove("descricao-completa");
        }        
    })
})

descricao.forEach(element => {
    element.parentNode.addEventListener("mouseout", () => {
        element.children[0].classList.remove("caixa-clicada");

        let descricaoCompleta = document.querySelectorAll(".descricao-completa-hover");
        descricaoCompleta.forEach(element =>{
            element.classList.add("descricao-completa");
            element.classList.remove("descricao-completa-hover");
        })
    })
})
caixas.forEach(caixa =>{
    caixa.addEventListener("click", () =>{
        caixa.classList.add("caixa-clicada");
    })
})