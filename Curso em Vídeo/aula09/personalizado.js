var botao = document.getElementById('botaoEnviar'); 
        function showtime(){
            document.getElementById('showTIme').innerHTML = new Date().toUTCString('-3');
        }
        showtime();
        setInterval(function(){
            showtime();
        }, 1000);

        /******************************************************** */
        botao.addEventListener("click", enviarConteudo);
        function enviarConteudo(){
            document.getElementById('formu').style.display = "none";
            document.getElementById('conteudo').innerHTML = "Usuario criado com sucesso!";
        }

