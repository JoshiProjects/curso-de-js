//um array, ou vetor, ou uma variável composta,  é uma variável que tem varios elementos, cada elemento tem seu valor e uma chave de identificação.
let num = [5, 8, 2, 9, 3]

// ------------------------- testes ----------------------------------------------------------//
/*
organiza o elementos de forma crescente)
console.log(`o nosso vetor é o ${num}`)
// como criar um novo elemento, um novo espaço dentro da array, podemos usar o push ou colocar a posição e o valor(adiciona automaticamente um novo elemento depois do ultimo)


num.sort()
num[5]= 82
// or
num.push(87)
console.log(num)
console.log(num.length)
console.log()
*/
//c significa "contador"

//forma tradicional para exibição de variáveis compostas

for(let c = 0; c < num.length; c++){
    console.log(`o elemento do indice ${c} é igual a ${num[c]}`)
}

console.log('//-------------------------------------------------------------------------------//')

// essa é uma estrutura de repetição utilizada para variáveis compostas(como arrays e objetos)
for(let c in num){ //a gente se lê como, para cada contador (variável "c") dentro de num(variável composta)
    console.log(`o elemento do indice ${c} é igual a ${num[c]}`)
}