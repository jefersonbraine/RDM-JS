//var corpo = window.document.body
var p1 = window.document.getElementsByTagName('p')[1]

window.document.write(`Esta escrito assim: ${p1.innerText} <br>`) // vem sem o negrito, não pega a formatação


document.write(p1.innerHTML)// o innerHTML aparece com o negrito, pega a formatação, aparece até nos alerts
//corpo.style.background = 'green'
//p1.style.color = 'blue' muda a cor do texto do primeiro parágrado para azul