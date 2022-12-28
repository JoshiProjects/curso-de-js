let numero = document.getElementById('num1')
let resultado = document.getElementById('ResultadoTabuada') 

const calcular = ()=>{
    let number1 = Number(numero.value)
    
    if(numero.value.length == 0){
        window.alert('ERRO!!! Digite um número')

    } else {
        resultado.innerHTML = `<option>Tabuada do ${number1} calculada!!</option>`

        for(let num2 = 1; num2 <= 10; num2 += 1){
            let resMult = number1 * num2
        resultado.innerHTML += `<option value="${resMult}">${number1} x ${num2} = ${resMult}</option>`
        }
    }
}