function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora =  data.getHours()
    msg.innerHTML = `agora são ${hora} horas.`
    if(hora <= 12){
        img.src = 'imagens/foto-manha.jpg'
        document.body.style.background = '#E2AD9D'
    }else if(hora > 12 && hora <= 18){
        img.src = 'imagens/foto-tarde.jpg'
        document.body.style.background = '#A36D6F'
    }else{
        img.src = 'imagens/foto-noite.jpg'
        document.body.style.background = '#606060'
    }
}