var numeroSecreto = parseInt(Math.random()*10);

var tentativa = 3

while (tentativa > 0 ) {
    
    var chute = parseInt(prompt("Digite um numero entre 0 e 10"))
    if (numeroSecreto == chute) {
        alert("Acertou")

        break
    } else if (chute < numeroSecreto) {
        alert("o numero secreto é maior")
        tentativa = tentativa - 1
    } else if (chute > numeroSecreto) {
        alert("o numero secreto é menor")
        tentativa = tentativa - 1
    }

}

if (chute != numeroSecreto) {
    alert("Você Errou e esgotou suas tentativas infelizmente recarre a pagina e tente novamente")
    alert("O seu numero secreto era " + numeroSecreto)

}