// objetos 
var paulo = {
    nome: "Paulo",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    ponto: 0,
    perfil:'https://uploads.jovemnerd.com.br/wp-content/uploads/2021/02/JUJUTSU-KAISEN-DEDO-DO-SUKUNA-VIRA-DOCE.jpg'
}

var vinicius = {
    nome: "vinicius",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    ponto: 0,
    perfil:'https://avatars.githubusercontent.com/u/68074908?v=4'
}


vinicius.pontos = calculatePontos(vinicius) 

paulo.pontos = calculatePontos(paulo)

function calculatePontos(jogador){
    var pontos = (jogador.vitorias * 3 ) + jogador.empates
    return pontos
}

var jogadores = [vinicius , paulo ]

exibir(jogadores)

function exibir(jogadores){
    var html = ""
    for(var i= 0; i<jogadores.length; i++){
        html += `<tr><td><img src=${jogadores[i].perfil}></td>`
        html += "<td>" + jogadores[i].nome + "</td>"
        html += "<td>" + jogadores[i].vitorias + "</td>"
        html += "<td>" + jogadores[i].empates + "</td>"
        html += "<td>" + jogadores[i].derrotas + "</td>"
        html += "<td>" + jogadores[i].pontos + "</td>"
        html += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
        html +="<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
        html +="<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td></tr>"
        }
    var tabelaJogadores = document.getElementById('tabelaJogadores')
    tabelaJogadores.innerHTML = html

}
function adicionarjogadores(i){
    var nomejogador = document.getElementById("addNome").value
    var imagem = document.getElementById("addImagem").value
    
    if (imagem.endsWith("jpg") || imagem.endsWith("png")) {
        var jogador = {
            nome: jogador,
            vitorias: 0,
            empates: 0,
            derrotas: 0,
            pontos: 0,
            perfil: imagem
        }
        jogadores.push(jogador)
        exibir(jogadores)
        document.getElementById("addNome").value = ""
        document.getElementById("addImagem").value = ""
    } else {
        alert("Tente novamente")
        document.getElementById("addNome").value = ""
        document.getElementById("addImagem").value = ""
    }
}


function adicionarVitoria(i) {
    var jogador = jogadores[i]
    jogador.vitorias++
    jogador.pontos = calculatePontos(jogador)
    exibir(jogadores)
}
function adicionarEmpate(i) {
    var jogador = jogadores[i]
    jogador.empates++
    jogador.pontos = calculatePontos(jogador)
    exibir(jogadores)
}   
function adicionarDerrota(i) { 
    var jogador = jogadores[i]
    jogador.derrotas++
    jogador.pontos = calculatePontos(jogador)
    exibir(jogadores)
}

//https://codepen.io/caiochristhian/pen/eYggNQN
//https://codepen.io/pietrodessotti/pen/BapLqWG