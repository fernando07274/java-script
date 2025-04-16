function clicar(){
    let inicio = document.getElementById('txta')
    let fim = document.getElementById('txtb')
    let passo = document.getElementById('txtc')
    let res = document.getElementById('resposta')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert('preencha corretamente todos os campos')
    } else if(passo.value <= 0){
        res.innerText = 'passo nao pode ser menor ou igual a 0'
    } else{
        res.innerHTML = 'contando: '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(i < f){
            for(let c = i; c <= f; c += p){
            res.innerHTML += `${c} 👉 `
        }
        res.innerHTML += `🏁`
        } else{
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} 👉 `
            }
            res.innerHTML += `🏁`
        }
    }
}
