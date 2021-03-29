var ListaFilmes = ["https://m.media-amazon.com/images/M/MV5BY2IzNGNiODgtOWYzOS00OTI0LTgxZTUtOTA5OTQ5YmI3NGUzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg" , 
"https://m.media-amazon.com/images/M/MV5BNGU1NGNiYzYtMTQ2Ni00M2ZlLTg0N2QtMDFhMzNjNzcyMGYyXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg",
"https://m.media-amazon.com/images/M/MV5BODNiODVmYjItM2MyMC00ZWQyLTgyMGYtNzJjMmVmZTY2OTJjXkEyXkFqcGdeQXVyNzk3NDUzNTc@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BYmIzNjUxZGQtYjg0OS00MmE0LTgwZDAtMzVmODQ2MGI5MTQ5XkEyXkFqcGdeQXVyMTA3MTA4Mzgw._V1_UX182_CR0,0,182,268_AL_.jpg"];

var NomedoFilme = ["Watchmen","Os Croods", "Liga da Justiça", "Falcão e o Soldado Invernal", "Rocketman" ]

var linkdofilme= ["https://www.imdb.com/title/tt0409459/?ref_=fn_al_tt_1","https://www.imdb.com/title/tt2850386/?ref_=nv_sr_srsg_3", "https://www.imdb.com/title/tt2975590/?ref_=nv_sr_srsg_0", "https://www.imdb.com/title/tt2066051/?ref_=nv_sr_srsg_0", ]

for (var i = 0; i < NomedoFilme.length; i++){
    document.write("<img src=" + ListaFilmes[i] + ">")
    document.write("<h2>" + NomedoFilme[i] + "</h2>")
    document.write("<a href = " + linkdofilme[i] + "</a>")
}