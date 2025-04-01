function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var nasc = document.getElementById('txtano')
    var res = document.getElementById('res')

    var anoNascimento = Number(nasc.value)

    if(nasc.value.length == 0 || anoNascimento < 1950 || anoNascimento > ano){
        alert('[ERRO] Preencha os campos corretamente')
    } else {
        var sex = document.getElementsByName('sexo')
        var idade = ano - anoNascimento
        var genero = ''

        
        if(sex[0].checked){
            genero = 'Homem'
        } else if(sex[1].checked){
            genero = 'Mulher'
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Gênero: ${genero}, Idade: ${idade}`
    }

    if(idade <= 10){
        res.innerHTML += '<br>criança'
    }else if(idade <= 18){
        res.innerHTML += '<br>adolescente'
    }else if(idade <= 35){
        res.innerHTML += '<br>adulto'
    }
    
}
