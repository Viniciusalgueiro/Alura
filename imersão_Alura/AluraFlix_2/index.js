function adicionarFilme() {
    var campoFilmefav = document.querySelector('#filme')
    var filmefav = campoFilmefav.value
    if(filmefav.endsWith('.jpg')){
        listarFilmesNaTela(filmefav)
    }else{
        alert("Image Invalida")
    }
    campoFilmefav.value = ""
}

function listarFilmesNaTela(filme){
    var listaFilmes = document.querySelector('#listaFilmes')
    var elementoFilme = "<img src=" + filme + ">"
    listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme    

}