function clicar() {
    var strnum = document.getElementById('number')
    var res = document.getElementById('res')
    var num = Number(strnum.value) ** 0.5
    res.innerHTML = `√${strnum.value}<br>=<br><strong>${num}</strong>`

}