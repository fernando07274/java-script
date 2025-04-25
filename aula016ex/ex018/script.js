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
        op.text = `${Number(num.value)}`
        res.appendChild(op)
        listadenumeros.push(Number(num.value))
    }
}

function finish() {
    let soma = 0
    for(let c = 0; c < listadenumeros.length; c++) {
        soma += listadenumeros[c]
    }
    let menornum = Math.min(...listadenumeros)
    let maiornum = Math.max(...listadenumeros)
    let media = soma / listadenumeros.length
    let box0 = document.createElement('p')
    let box1 = document.createElement('p')
    let box2 = document.createElement('p')
    let box3 = document.createElement('p')
    let box4 = document.createElement('p')
    boxzinha.innerHTML = ``
    box0.textContent = `your list have ${listadenumeros.length} nnumbers`
    box1.textContent = `sum of numbers${soma}`
    box2.textContent = `smallest number:${menornum}`
    box3.textContent = `greater number:${maiornum}`
    box4.textContent = `media:${media}`
    boxzinha.appendChild(box0)
    boxzinha.appendChild(box1)
    boxzinha.appendChild(box2)
    boxzinha.appendChild(box3)
    boxzinha.appendChild(box4)
}