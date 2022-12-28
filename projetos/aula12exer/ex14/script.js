function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')

    var agr = new Date()
    //var hora = agr.getHours()
    var hora = 8

    msg.innerHTML=`Agora são ${hora} horas`

    
if(hora > 0 && hora < 12){

    img.src ='InTheMorning.png'
    document.body.style.background="#faedcd"
    document.body.style.color="Black"

} else if(hora >= 12 && hora <= 18){

    img.src ='InTheAfternoon.png'
    document.body.style.background="#e85d04"
} else{

    img.src ='InTheNight.png'
    document.body.style.background="#370617"
}

}


