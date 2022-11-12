function testar(){
    var result = document.getElementById('res')
    var pais = document.getElementById('pais_origem')
    var pais_o = String(pais.value)
    result.innerHTML = `Seu país de orígem é <strong>${pais_o}</strong><br>`
 
    if(pais_o == 'Brasil'){
     result.innerHTML += `Você é Brasileiro`
    } else{
     result.innerHTML += `Você é estrangeiro`
    }
 }
 
 