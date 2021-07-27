### CSP-Test

- Primeiramente, clone o repositorio do github do projeto.
  No terminal digite `git clone https://github.com/FabricioGonzalez/CSP-Test.git`, ou faça o download do código pelo github. Descompacte o arquivo. Abra um powershell ou CMD ou qualquer terminal de linha de comando disponível em sua máquina e navegue até a pasta onde o código foi descompactado. Então, prossiga para o próximo passo descrito abaixo

- O App está configurado para receber um arquivo .env na raiz. O arquivo já existe, e foi pré-configurado. caso queira pode editá-lo.

- O arquivo recebe as sequintes opções. Caso seja utilizado em localhost.

| Nome                                           |        Valor        |
| ---------------------------------------------- | :-----------------: |
| Usuário do banco de dados                      |     MYSQL_USER      |
| Senha do banco de dados                        | MYSQL_ROOT_PASSWORD |
| Nome do Banco de dados                         |   MYSQL_DATABASE    |
| Porta onde o Banco de dados está rodando       |  MYSQL_LOCAL_PORT   |
| Ip ou local onde o banco de dados está rodando |    DATABASE_HOST    |
| Porta onde o servidor node está rodando        |   NODE_LOCAL_PORT   |

O local onde o banco está rodando aponta para o ip. seja um cluster hospedados em algum servidor cloud como o AWS RDS ou o localhost.

- Para instalar, utilize o docker. digite `docker-compose build` no terminal dentro da pasta local do app para fazer o build da imagem, em sequida rode o comando `docker-compose up`. E então teste o código.

- Ou rode o comando `npm start` ou `yarn start` no terminal dentro da pasta local do app.
  Após feito o arquivo .env ou editado o existente, teste o app.

- Faça uma requisição à `url-do-app/api-docs` para ter acesso à documentação da API.
