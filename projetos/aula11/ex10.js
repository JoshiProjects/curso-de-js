function Consulta(){
    var velocidade = window.document.getElementById('vel')
    var velo = Number(velocidade.value)
    var res_consul = window.document.getElementById('status')
    
    res_consul.innerHTML=(`sua velocidade foi ${velo} KM/h<br>`)

    if(velo > 90){
      
    res_consul.innerHTML +=(`<p>Você ultrapassou o limite de velocidade.<strong>MULTADO</strong></p>`)
    } else {
    
    res_consul.innerHTML +=(`Você está dentro do limite de velocidade`)
    }
}