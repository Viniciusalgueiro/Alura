var valorDolar = prompt("qual o valor em dolar que voce quer converter ?")
valorDolar = parseFloat(valorDolar)

var ValorReal = valorDolar * 5.50
ValorReal = ValorReal.toFixed(2)
alert("o valor final é "+ ValorReal)