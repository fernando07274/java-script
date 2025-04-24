const num = document.getElementById('number')
const res = document.getElementById('res')
const boxzinha = document.getElementById('boxzinha')
let listadenumeros = []

function result() {

    if(num.value.length == 0){
        alert('you need to enter a number to do this')
    } else if(Number(num.value) > 100) {
        alert('enter a number less than 100')
    } else if(Number(num.value) == 0) {
        alert('type a number greater than 0')
    } else if(listadenumeros.includes(Number(num.value))){
        alert('enter with other number')
    } else{
        let op = document.createElement('option')
        op.text = `element ${Number(num.value)} is added to list`
        op.value = `number`
        res.appendChild(op)
        listadenumeros.push(Number(num.value))
    }
}

function finish() {
    let soma = 0
    let box = document.createElement('p')
    for( let c = 0; c > listadenumeros.length; c++){
        soma += Number(listadenumeros)[c]
    }
    boxzinha.innerHTML = ``
    box.textContent = `sua lista tem ${listadenumeros.length} numeros`
    box.textContent += `the sum of the numbers in your list is ${soma}`
    boxzinha.appendChild(box)
}