var agora = new Date()
var horas = agora.getHours()
if(horas <= 12){
    hr = 'AM'
} else{
    hr = 'PM'
}
if(hr == 'PM'){
    horas -= 12
}
console.log(`agora sao ${horas.toFixed(2)} ${hr}`)
if(horas < 12){
    console.log('bom dia dog')
} else if(horas <= 18){
    console.log('boa tarde rpzd')
} else{
    console.log('boa noite cariani do reiqueijao ligth')
}