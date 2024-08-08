
var area = document.getElementById('area')
area.addEventListener('click', clicar)
area.addEventListener('mouseenter', entrar)
area.addEventListener('mouseout', sair)

function clicar() {
     area.innerText = 'Clicou!'
     area.style.background = 'rgb(223, 110, 128)'
     
}

function entrar() {
    area.innerText = 'Entrou!'
    area.style.background = 'rgb(0, 118, 113)'
    
}

function sair() {
    area.innerText = 'Saiu!'
    area.style.background = 'rgb(151, 139, 161)'
    
}