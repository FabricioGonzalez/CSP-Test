# servelessChallenge-FabricioGonzalez

Serveless Challenge

### EndPoints

- #### **_GET employees/find_**

        Retorna todos os registros existentes de funcionarios no banco de dados.

  #### **URL:**

  > https://qv0xyv8t35.execute-api.us-east-2.amazonaws.com/dev/employees/find

  &nbsp;

  #### **Métodos HTTP:**

  > Metodos Aceitos:
  >
  > - **_GET_**

  &nbsp;

  #### **Estrutura da Requisição**:

  A requisição feita a URL não requer corpo algum, apenas
  ser Feita como GET.

      #### **Informaçoes Adicionais:**

          * Formato da Resposta: Json

          * Requer Autenticação: Não

      &nbsp;

- #### **_GET employees/find_one/:id_**

        Retorna um registros existentes de funcionarios no banco de dados.

  #### **URL:**

  > https://qv0xyv8t35.execute-api.us-east-2.amazonaws.com/dev/employees/find_one/id

  &nbsp;

  #### **Métodos HTTP:**

  > Metodos Aceitos:
  >
  > - **_GET_**

  &nbsp;

  #### **Parâmetros:**

  | Nome | Obrigatório |          Descrição           |     Tipo     |
  | ---- | :---------: | :--------------------------: | :----------: |
  | id   |  **_Sim_**  | Código Identificado do aluno | **_String_** |

  #### **Estrutura da Requisição**:

  A requisição recebe em sua URL codigo identificador
  do funcionário, e consulta a base de
  dados para checar a existência,
  caso haja um registro
  condizente, o registro é retornado.

  #### **Informaçoes Adicionais:**

      * Formato da Resposta: Json

      * Parâmetros Obrigatórios: id

      * Requer Autenticação: Não

  &nbsp;

- #### **_POST employee/create_**

        Cadastra um funcionario no banco de dados.

  #### **URL:**

  > https://qv0xyv8t35.execute-api.us-east-2.amazonaws.com/dev/employees/create

  #### **Métodos HTTP:**

  > Metodos Aceitos:
  >
  > - **_POST_**

  #### **Estrutura da Requisição:**

        A requisição feita a URL deve ser um
        Objeto JSON contendo os parâmetros.
        O objeto JSON é enviado no corpo da requisição,
        e tratado pela API e enviado ao banco
        de dados.

  #### **Exemplo do corpo da requisição:**

  `{ "nome":"Ana Belle", "age": 20, "position":"manager" }`

  #### **Parâmetros:**

  | Nome     | Obrigatório |      Descrição       |     Tipo      |
  | -------- | :---------: | :------------------: | :-----------: |
  | name     |  **_sim_**  | nome do funcionario  | **_String_**  |
  | age      |  **_sim_**  | idade do funcionário | **_Inteiro_** |
  | position |  **_sim_**  | Cargo do funcionario | **_String_**  |

  &nbsp;

  #### **Informaçoes Adicionais:**

        * Formato da Resposta: Json

        * Requer Autenticação: Não

- #### DELETE **employees/delete/:id**

        Deleta um registro de funcionário do banco de dados.
        De acordo com o identificador fornecido à URL.

  #### **URL:**

  > https://qv0xyv8t35.execute-api.us-east-2.amazonaws.com/dev/employees/delete/id

  #### **Métodos HTTP:**

  > Métodos Aceitos
  >
  > - **_DELETE_**

  #### **Estrutura da Requisição:**

        A requisição recebe em sua URl codigo identificador
        do funcionário, e consulta a base de
        dados para checar a existência,
        caso haja um registro
        condizente, o registro é deletado.

  #### **Parâmetros:**

  | Nome | Obrigatório |          Descrição           |     Tipo     |
  | ---- | :---------: | :--------------------------: | :----------: |
  | id   |  **_Sim_**  | Código Identificado do aluno | **_String_** |

  #### **Informações Adicionais:**

        * Formato da Resposta: Json

        * Parâmetros Obrigatório: id

        * Requer Autenticação: Não

        Retorna todos os alunos aprovados do banco de dados.

- #### PUT **employees/update/:id**

        Deleta um registro de funcionário do banco de dados.
        De acordo com o identificador fornecido à URL.

  #### **URL:**

  > https://qv0xyv8t35.execute-api.us-east-2.amazonaws.com/dev/employees/update/id

  #### **Métodos HTTP:**

  > Métodos Aceitos
  >
  > - **_PUT_**

  #### **Estrutura da Requisição:**

        A requisição recebe em sua URl codigo identificador
        do funcionário, e consulta a base de
        dados para checar a existência,
        caso haja um registro
        condizente, o registro é atualizado com o corpo da requisição.

  #### **Exemplo do corpo da requisição:**

  `{ "nome":"Ana Belle", "age": 20, "position":"manager" }`

  #### **Parâmetros:**

  | Nome     | Obrigatório |      Descrição       |     Tipo      |
  | -------- | :---------: | :------------------: | :-----------: |
  | name     |  **_sim_**  | nome do funcionario  | **_String_**  |
  | age      |  **_sim_**  | idade do funcionário | **_Inteiro_** |
  | position |  **_sim_**  | Cargo do funcionario | **_String_**  |

  &nbsp;

  #### **Informações Adicionais:**

          * Formato da Resposta: Json

          * Parâmetros Obrigatório: id

          * Requer Autenticação: Não
