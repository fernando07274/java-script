function clicar() {
    var strnum = document.getElementById('number')
    var res = document.getElementById('res')
    var num = Number(strnum.value) ** 2
    res.innerHTML = `o numero ${strnum.value} ao quadrado é <strong>${num}</strong>`
}