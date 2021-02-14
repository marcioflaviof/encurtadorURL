# encurtadorURL

 1. Clone o repositório e vá até o mesmo com cd encurtadorURL ou pela interface

 2. Agora instale o yarn devido a minha escolha de gerenciador de pacotes

        npm install --global yarn

      
 3. Depois rode o yarn, simplesmente digitando yarn no terminal para que assim ele baixe os pacotes necessários para o programa rodar

        yarn


 4. Antes de iniciar o programa devemos configurar o postgres, logo neste tutorial presumirei que possue o postgres instalado:
       1. Primeiro crie uma database com o nome encurtador no seu postgres
       2. No Ubuntu 20.04 é possivel se fazer isso com "sudo su - postgres", coloque sua senha, depois no terminal digite "psql"
          e depois "CREATE DATABASE encurtador;", lembre-se do ";" é importante no postgres.

              sudo su - postgres
              psql
              CREATE DATABASE encurtador;

          
 5. Será necessário antes de inicializar criar um arquivo chamado .env, siga o exemplo do .env.example

            touch .env


 6. Há alguns jeitos de inicializar o programa:
      1. digitando tsc e depois node dist/server.js para assim compilar o programa e executá-lo em forma de produção (ganho de performance)

             tsc
             node dist/server.js

      
      2. através do yarn e nodemon em 2 terminais, um com "yarn watch" e o outro com "yarn dev" (sem as aspas) , assim um terminal irá ficar
         compilando o programa quando o mesmo for alterado e o outro executando.

             yarn watch

             yarn dev
   
 
 7. Caso queira rodar alguns testes digite:
      
            yarn test
 
 8. Documentação do Postman -> https://documenter.getpostman.com/view/7519945/TWDRtLFi

 9. O servidor online no heroku -> https://encurtador-url-ts.herokuapp.com/
 
 Atualmente essa é a versão que está online no heroku, contudo criei uma versão em que o backend está em container, ou seja a versão docker, que está no link abaixo
 
    https://github.com/marcioflaviof/encurtadorURL-docker
 
