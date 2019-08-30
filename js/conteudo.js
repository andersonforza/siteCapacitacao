/*
var itens = document.querySelectorAll(".linha-item");
var linhas = document.querySelectorAll(".line");

console.log(itens);
for (let i = 0; i < itens.length; i++) {
    setTimeout(() => {
        itens[i].style.opacity = "1";  
        if(i<linhas.length) linhas[i].classList.add("animacao");  

    }, i*1000);
};
*/
// implementação do Modal
var modalT = document.getElementById("competencias-tecnicas");
var modalC = document.getElementById("competencias-comportamentais");

// Get the button that opens the modal
var btnT = document.getElementById("ativarTecnicas");
var btnC = document.getElementById("ativarComportamentais");
// Get the <span> element that closes the modal

var spanT = document.getElementById("close-tecnicas");
var spanC = document.getElementById("close-comportamentais");

// When the user clicks on the button, open the modal 
btnT.onclick = function() {
  modalT.style.display = "block";
}
btnC.onclick = function() {
    modalC.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
spanT.onclick = function(){
    modalT.style.display = "none";
}
spanC.onclick = function() {
  modalC.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalT) {
    modalT.style.display = "none";
  }
  if (event.target == modalC) {
    modalC.style.display = "none";
  }
}


