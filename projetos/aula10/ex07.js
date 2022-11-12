
    function Somar(){
 
        var num1 = window.document.getElementById('Num1')
        var num2 = window.document.querySelector('input#Num2')
        var res = window.document.getElementById('result') 
    
        var n1 = Number(num1.value) /* Aqui observamos um exemplo de manipulação de dados*/
        var n2 = Number(num2.value)
        var s = n1 + n2
        res.innerText= 'A Soma entre ' + n1 +' e ' + n2 + ' é igual a ' + s
    
        }
    