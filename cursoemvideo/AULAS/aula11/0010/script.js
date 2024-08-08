
function calcular() {
    var txtv = document.getElementById('txtvel') 
    var res = document.getElementById('res')
    var vel = Number(txtv.value)

    res.innerHTML = `<p>Sua velocidade atual é de ${vel}Km/h </p> `

    if (vel > 60) {
        res.innerHTML += `<p>Voce ultrapassou a velocidade permitida. Multado!</p>`
    }

    res.innerHTML += `<p>Dirija sempre com cinto de segurança!</p>`	
}

if (vern == 'brasil') {
    ver.innerHTML += `voce e brasileiro`
} else {
    ver.innerHTML += `voce e estrangeiro`
}