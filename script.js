let quantidade = 1; //declara a variável quantidade

 //recupera os elemento html com os respectivos sinais
const diminuir = document.querySelector('.diminui-quantidade')
const aumentar = document.querySelector('.aumenta-quantidade')

//evento de clique
diminuir.onclick = diminui_quantidade
aumentar.onclick = aumenta_quantidade

//exibe o valor de quantidades na tela
function exibeTexto() {
    document.querySelector('.exibe-quantidade').innerText = quantidade;
}

//decrementa 1 ao contador
function diminui_quantidade() {
    if(quantidade > 1) {
        quantidade--;
        exibeTexto()
    }   
}

//incrementa 1 ao contador
function aumenta_quantidade() {
    quantidade++;
    exibeTexto()
}