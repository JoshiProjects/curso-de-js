var p1 = window.document.getElementsByTagName('p')[0]
window.document.write('Está escrito o seguinte: ' + p1.innerText)

/*podemos fazer assim tbm  window.document.write(p1.innerText)*/ 
/* 
var d = document.getElementsByClassName('msg')
var d = document.getElementById('msg')
var d = document.getElementsByName('msg')
var d = document.getElementById('msg')   
pra trocar oq está escrito: d.innerText = "cu"


var d = document.querySelector('div#msg') a "# é usada nesse exemplo pois se trata de uma div que possui ID
e não uma classe, caso fosse uma "class", usariamos o "."
*/

var d = document.querySelector('div#msg')
