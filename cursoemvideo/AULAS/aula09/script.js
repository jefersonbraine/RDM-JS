//var corpo = window.document.body
var p1 = window.document.getElementsByTagName('p')[1]

window.document.write(`Esta escrito assim: ${p1.innerText} <br>`) // vem sem o negrito, não pega a formatação


//document.write(p1.innerHTML)// o innerHTML aparece com o negrito, pega a formatação, aparece até nos alerts
//corpo.style.background = 'green'
//p1.style.color = 'blue' muda a cor do texto do primeiro parágrado para azul

/*
var d = document.getElementById('msg')
d.style.background = 'green'
d.innerHTML = 'Estou aguardando...'
// window.document.getElementById('msg').innerText = 'Olá'
*/

/*
var d = document.getElementsByName('msg')[0]
d.innerText = 'Estou aguardando... com name'
*/

//var d = document.querySelector('div#msg')//id
//var d = document.querySelector('div.msg')//class