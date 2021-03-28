var primeiroValor = parseInt(prompt("Digite o primeiro valor: "))

var segundoValor =  parseInt(prompt("Digete o segundo valor: "))


var operacao = prompt("Digite 1 para soma , 2 para subtração, 3 para multiplicação e 4 para divisão: ")

if (operacao == 1 ) {
    var resultado = primeiroValor + segundoValor
    document.write("<h2>" + primeiroValor + " + "+ segundoValor + " = " + resultado + "</h2>")
}else if (operacao == 2) {
    var resultado = primeiroValor - segundoValor
    document.write("<h2>" + primeiroValor + " - "+ segundoValor + " = " + resultado + "</h2>")
}else if (operacao == 3){
    var resultado = primeiroValor * segundoValor
    document.write("<h2>" + primeiroValor + " * "+ segundoValor + " = " + resultado + "</h2>")
}else if (operacao == 4){
    var resultado = primeiroValor / segundoValor
    document.write("<h2>" + primeiroValor + " / "+ segundoValor + " = " + resultado + "</h2>")
}else{
document.write("<h2>" + "Opção invalida" + "</h2>")
} 

// escrevendo na tela - Document.write
// usar o mais para concatenar