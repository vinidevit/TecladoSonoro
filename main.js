Alert("O GitHub Pages não permite a reprodução destes arquivo JS, porém o código funciona perfeitamente fora do Github")

function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}


const listaDeTeclas = document.querySelectorAll('.tecla')

var contador = 0

while (contador < listaDeTeclas.length){    

const tecla = listaDeTeclas[contador];
const instrumento = tecla.classList[1];
const idAudio = `#som_${instrumento}`

tecla.onclick = function () {
    tocaSom(idAudio)
}
contador = contador + 1

}
