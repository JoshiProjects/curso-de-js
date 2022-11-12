        var a = window.document.getElementById('area') 

        // adição dos envents Listeners (usado para não poluirmos o html com os eventos)

        a.addEventListener('click', clicar)
        a.addEventListener('mouseenter', entrar)
        a.addEventListener('mouseout', sair)

        function clicar(){
          a.innerText = 'clicado'
          a.style.background = 'red'
        }

        function entrar(){
          a.innerText = 'entrou'
        }

        function sair(){
          a.innerText = 'saiu'
        }
