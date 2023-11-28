# Java + Spring Boot e TypeScript + React

O jogo foi feito com linguagens diferentes, TypeScript com React para o front end e Java com Spring Boot para o back end e as APIs

# Instalação

## É de extrema importância que o passo a passo seja seguido fielmente para que o jogo possa ser executado corretamente.

1 - Clonar o repositório do front end (de preferência no vscode), utilizando o seguinte comando no terminal: git clone https://github.com/patrickburin/jogo-adivinhar-imagem.git

2 - Baixar todas as dependências do projeto utilizando o comando "yarn" no terminal

3 - Iniciar o server com o comando "yarn dev". Automaticamente abrirá uma nova guia com o endereço: http://localhost:5173/. Caso não abra, basta digitar no campo da url e abrir a página, o projeto já estará na tela inicial

## Não clique em jogar ainda, primeiro deve "rodar" o projeto no back end para as requisições funcionarem corretamente.

4 - Baixar o arquivo RedesS, enviado em anexo. Acessar a IDE Eclipse e seguir o seguinte passo a passo.
File -> Import -> Maven -> Existing Maven Projects -> Selecionar a pasta redes -> Marcar a caixa do /pom.xml -> Finish, após isso esperar de terminar de importar a pasta.

5 - Após terminar de importar iniciar o aplicativo RedesSApplication e aguardar 10 segundos.

6 - Ir até a aba aberta no navegador onde o jogo está, e clicar em "Jogar".

7 - Divirta-se!

# Observações

- Caso o jogo trave ou apresente algum problema, basta reiniciar o Java, sem necessidades de reinicar a parte do front end

- Foi utilizado Java para fazer o back end e Spring Boot para a integração com o front, que por sua vez foi feito com TypeScript e React. A comunicação foi feita através de Sockets, como era o objetivo do trabalho.
