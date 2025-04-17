function calculate(){
    const num = document.getElementById('txtnum')
    const resp = document.getElementById('seltab')
    if(num.value.length == 0){ // verifica se o cliente digitou algum numero
        alert('type a number to start')
    } else{
        const num = Number(txtnum.value) 
        resp.innerHTML = ''
        let c = 1
        while(c <= 10){
            let item = document.createElement('option') // cria um elemento na parte HTML do site porem nao mostra
            item.text = `${num} x ${c} = ${num * c}`
            item.value = `tab${c}`
            resp.appendChild(item) // mostra na tela o elemento criado anteriormente
            c++ // contagem
        }
    }

}