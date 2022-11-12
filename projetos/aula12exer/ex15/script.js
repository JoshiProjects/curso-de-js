function verificar(){
//  window.alert('DEU CERTO!!!!!!') verificando se a function e evento deram certo 
var DataAgr = new Date() // agr is a abrevition of now and data is date
var yearNow = DataAgr.getFullYear()


var yearBorn = document.getElementById('yearBorn')
var BtnRadio = document.getElementsByName('resSex')
var result = document.getElementById('result')

var YB = Number(yearBorn.value) // YB é igual a abreviação de YearBorn
var Genero = ''

var resAge = yearNow - YB
// -------------------------------------------------------------
result.innerHTML= `A sua idade equivale a ${resAge} Anos<br>`


//---------------------------------verifica button radio of sex--------------------------------------------------------//
if(BtnRadio[0].checked){
    Genero = 'Masculino'
} else{
    Genero = 'Feminino'
}



if(yearBorn.value.length == 0 || yearBorn.value > yearNow){
    window.alert('Verifique os dados e tente novamente')
    yearBorn.value=("") // limpou/resetou o input
}

if(resAge <= 12  && Genero == 'Masculino'){
    result.innerHTML += '<img src="./img/ChildM.png" alt="boy_child"><br>'

} else if(resAge  <= 26 && Genero == 'Masculino'){
    result.innerHTML += '<img src="./img/youngboy.png" alt="young boy   "><br>'

} else if(resAge > 26 && resAge < 65 && Genero == 'Masculino'){
    result.innerHTML += '<img src="./img/AdultM.png" alt="adult man"<br>'

} else if(resAge >= 65 && Genero == 'Masculino'){
    result.innerHTML += '<img src="./img/OldM.png" alt="old man"<br>'

//----------------------------------condições femininas---------------------------------------------

} else if(resAge <= 12 && Genero == 'Feminino'){
    result.innerHTML += '<img src="./img/ChildGirl.png" alt="girl_child"><br>'

} else if(resAge  <= 26 && Genero == 'Feminino'){
    result.innerHTML += '<img src="./img/youngF.png" alt="young girl "><br>'

} else if(resAge > 26 && resAge < 65 && Genero == 'Feminino'){
    result.innerHTML += '<img src="./img/AdultF.png" alt="adult woman"<br>'

} else if(resAge >= 65 && Genero == 'Feminino'){
    result.innerHTML += '<img src="./img/OldF.png" alt="old woman"<br>'
}






result.innerHTML += `Seu Sexo é ${Genero}`


}