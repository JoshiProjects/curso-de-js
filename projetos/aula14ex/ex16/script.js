


const contagem = ()=>{

let inicio = document.getElementById('inicio')
let fim = document.getElementById('fim')
let intervaloDaContagem = document.getElementById('intervaloDaContagem')
let res = document.getElementById('mostrarContagem')

        

    if(inicio.value.length == 0 || fim.value.lenght == 0 || intervaloDaContagem == 0){

        window.alert("ERRO!!! faltam dados")

    } else{

        let i = Number(inicio.value)
        let f = Number(fim.value)
        let ic = Number(intervaloDaContagem.value)

        res.innerHTML = ` contando... <br>`
        if(ic <= 0){
            window.alert('Impossível contar, considerar intervalo da contagem com 1')
            ic = 1
        }

        if( i < f){
 
        for(let c = i ; c <= f ; c += ic ){

       res.innerHTML+= ` ${c}  &#9888;` 
             }
        } else{
            for(let c = i; c >= f; c -= ic){
                res.innerHTML+=`${c} &#9888;`
            }
        }
    res.innerHTML+= `&#128681;`
    }
}