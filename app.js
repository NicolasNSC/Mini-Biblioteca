const livros = require("./database")


// pegar o input
//Se sim, mostrar as categorias disponiveis e perguntar qual categoria ela escolhe
//Senão, mostrar todos os livros em ordem crescente pela quantidade de páginas

const readline = require("readline-sync")

const entradaInicial = readline.question("Deseja buscar um livro? (S/N)")

if (entradaInicial.toLocaleUpperCase() === "S") {
    console.log("Essas são as categorias disponiveis: ");
    console.log("Segunda Guerra e Drama", "/Autodescobrimento e Drama", "/Super Herói e Aventura", "/Segunda Guerra e Drama", "/Investigação e Suspense", "/Romance", "/Suspense", "/Ação", "/Romance e Drama", "/Aventura e Suspense", "/Romance e Drama", "/Drama");

    const entradaCategoria = readline.question("Qual categoria você escolhe:")

    
    const retorno = livros.filter(livros => livros.categoria === entradaCategoria)
    
    if (livros.categoria != entradaCategoria) {
        console.log("Desculpe, no momento não possuímos esta opção!");
    } else {
        console.table(retorno)
    }

} else {
    const livrosOrdenados = livros.sort((a, b) => a.paginas - b.paginas)
    console.log("Essas são todos os livros disponiveis:")
    console.table(livrosOrdenados);
}

