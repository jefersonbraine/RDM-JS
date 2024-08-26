function moveon() {
    // Exibe uma caixa de diálogo modal para faze uma pergunta ao usuário
    var answer = confirm ('deseja sair?')
    // se ele clicou no botão OK, redireciona o usuário para outro site
    if (answer) window.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"

}
// executa a função definida acima a cada 10 milisegundos
setTimeout(moveon, 10);