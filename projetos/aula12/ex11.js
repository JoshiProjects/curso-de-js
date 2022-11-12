var idade = 18
console.log(`Sua idade é ${idade} anos`)

if(idade < 16){
    console.log('Não vota')
   
} else{
    if(idade < 18 || idade > 65){
        console.log('Voto facultativo')
    } else{
        console.log('Obrigado a votar')
    }
}