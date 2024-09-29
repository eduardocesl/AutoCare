# Arquitetura da Solução

A arquitetura do Software será feita através dos seguintes termos:

* Camada Clientes:
   *  Desktop: Realizado com as linguagens de Front-End `Javascript`, `HTML5`, `CSS3`;
   *  Mobile: Realizado com a linguagem `React Native`;
* Camada Servidor:  Requisições para a camada de Back-End através da API (Rest). Realização com a linguagem de programação `Node.js`;
* Banco de dados: Consulta ao banco de dados, utilizando o `MongoDB` (NoSQL);


![Arquitetura de Solução](https://github.com/user-attachments/assets/7a43fdbb-164d-4eb8-ada8-271f092da66d)


## Diagrama de Classes

O diagrama de classes ilustra graficamente como será a estrutura do software, e como cada uma das classes da sua estrutura estarão interligadas. Essas classes servem de modelo para materializar os objetos que executarão na memória.


<p align="center">
  <br><br>
  <img src="https://github.com/user-attachments/assets/91ae7d71-dd1a-49b7-ac3f-53872d3ff239" alt="diagrama de classes (2)">
  <br><br>
</p>


## Documentação do Banco de Dados MongoDB

Este documento descreve a estrutura e o esquema do banco de dados não relacional utilizado por nosso projeto, baseado em MongoDB. O MongoDB é um banco de dados NoSQL que armazena dados em documentos JSON (ou BSON, internamente), permitindo uma estrutura flexível e escalável para armazenar e consultar dados.

## Esquema do Banco de Dados

### Collection: Usuários
Armazena as informações dos usuários do sistema.

Estrutura do Documento

```Json
{
  "id":             "ObjectId('66f98b0bcc04dafccf46435b')",
  "name":           "Apollo Lima",
  "email":          "apollo.lima@exemplo.com",
  "senha":          "hash_da_senha",
  "criadoEm":       "2024-09-29T10:00:00Z",
  "atualizadoEm":   "2024-09-29T12:00:00Z"
}

```

#### Descrição dos Campos
> - <strong>id:</strong> Identificador único do usuário gerado automaticamente pelo MongoDB.
> - <strong>name:</strong> Nome completo do usuário.
> - <strong>email:</strong> Endereço de email do usuário.
> - <strong>senha:</strong> Hash da senha do usuário.
> - <strong>createdAt:</strong> Data e hora de criação do usuário.
> - <strong>updatedAt:</strong> Data e hora da última atualização dos dados do usuário.

### Coleção: Veículos
Armazena as informações dos veículos cadastrados pelo usuário.

```Json
{
  "id": "ObjectId('66f98c02cc04dafccf46435d')",
  "placa": "RUO8E21",
  "marca": "Marca do veículo",
  "modelo": "Modelo do veículo",
  "anoFabricacao": 2024,
  "anoModelo": 2025,
  "cor": "Cor do veículo",
  "criadoEm": "2024-09-29T17:18:58.687Z",
  "atualizadoEm": "2024-09-29T17:18:58.687Z",
  "usuarioId": "66f98b0bcc04dafccf46435b"
}

```

#### Descrição dos Campos
> - <strong>id:</strong> Identificador único do usuário gerado automaticamente pelo MongoDB.
> - <strong>placa:</strong> Placa do veículo cadastrado.
> - <strong>marca:</strong> Marca do veículo.
> - <strong>modelo:</strong> Modelo do veículo.
> - <strong>anoFabricacao:</strong> Ano de fabricação do veículo.
> - <strong>anoModelo:</strong> Ano do modelo do veículo.
> - <strong>cor:</strong> Cor do veículo.
> - <strong>criadoEm:</strong> Data e hora da criação do veículo.
> - <strong>atualizadoEm:</strong> Data e hora da última atualização dos dados do veículo.
> - <strong>usuarioId:</strong> ID do usuário associado ao veículo.


### Coleção: motoristas
Armazena as informações dos motoristas cadastrados pelo usuário.

Estrutura do Documento

```Json
{
    "nome": "Nome do Motorista",
    "cnh": "123456789",
    "telefone": "31999999999",
    "dataNascimento": "1997-05-13T00:00:00.000Z",
    "status": "ATIVO",
}
```

#### Descrição dos Campos
> - <strong>nome:</strong> Nome do motorista cadastrado.
> - <strong>cnh:</strong> Número de CNH do motorista cadastrado.
> - <strong>telefone:</strong> Telefone de contato do motorista.
> - <strong>dataNascimento:</strong> Data de nascimento do motorista.
> - <strong>status:</strong> Status atual do motorista (Ativo ou Inativo).


### Boas Práticas

Validação de Dados: Implementar validação de esquema e restrições na aplicação para garantir a consistência dos dados.

Monitoramento e Logs: Utilize ferramentas de monitoramento e logging para acompanhar a saúde do banco de dados e diagnosticar problemas.

Escalabilidade: Considere estratégias de sharding e replicação para lidar com crescimento do banco de dados e alta disponibilidade.


## Tecnologias Utilizadas

O projeto **AutoCare** utiliza uma combinação de tecnologias para implementar uma solução eficaz de gestão de veículos. As principais tecnologias e ferramentas utilizadas são:

- **Node.js**: Usado para o desenvolvimento do backend, proporcionando um ambiente de execução JavaScript eficiente e escalável.
- **Express.js**: Framework para Node.js que estrutura as rotas da API e facilita a criação de endpoints RESTful.
- **Prisma**: ORM (Object-Relational Mapping) utilizado para interagir com o banco de dados MongoDB, facilitando consultas e manipulação de dados.
- **MongoDB Atlas**: Banco de dados NoSQL utilizado para armazenar informações de usuários, veículos e motoristas.
- **JWT (JSON Web Token)**: Utilizado para autenticação e segurança da comunicação entre cliente e servidor.
- **Thunder Client (VS Code)**: Ferramenta para realizar testes de requisições HTTP diretamente no VS Code.
- **VS Code**: IDE principal utilizada para o desenvolvimento, com integração com ferramentas de teste e controle de versão.

### Fluxo de Interação

1. O usuário interage com o sistema por meio de um cliente, enviando uma requisição HTTP (como cadastro de veículo ou login).
2. A requisição é recebida pela API construída em Node.js e Express.js, onde a autenticação é realizada através de JWT.
3. A API utiliza Prisma para interagir com o banco de dados MongoDB Atlas, realizando operações como leitura, criação ou atualização de dados.
4. O sistema processa os dados e retorna a resposta ao cliente, garantindo que o usuário receba a informação solicitada (ex: cadastro de veículo, obtenção de dados ou atualização de registros).

Essa arquitetura garante que a interação entre o cliente e o sistema seja eficiente, segura e escalável.


<p align="center">
  <br><br>
  <img src="https://github.com/user-attachments/assets/d1198503-b0ca-4af8-8c17-003e79810b71" alt="Fluxo">
  <br><br>
</p>


## Hospedagem

Explique como a hospedagem e o lançamento da plataforma foi feita.

> **Links Úteis**:
>
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando Seu Site No Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)

## Qualidade de Software

Conceituar qualidade de fato é uma tarefa complexa, mas ela pode ser vista como um método gerencial que através de procedimentos disseminados por toda a organização, busca garantir um produto final que satisfaça às expectativas dos stakeholders.

No contexto de desenvolvimento de software, qualidade pode ser entendida como um conjunto de características a serem satisfeitas, de modo que o produto de software atenda às necessidades de seus usuários. Entretanto, tal nível de satisfação nem sempre é alcançado de forma espontânea, devendo ser continuamente construído. Assim, a qualidade do produto depende fortemente do seu respectivo processo de desenvolvimento.

A norma internacional ISO/IEC 25010, que é uma atualização da ISO/IEC 9126, define oito características e 30 subcaracterísticas de qualidade para produtos de software.
Com base nessas características e nas respectivas sub-características, identifique as sub-características que sua equipe utilizará como base para nortear o desenvolvimento do projeto de software considerando-se alguns aspectos simples de qualidade. Justifique as subcaracterísticas escolhidas pelo time e elenque as métricas que permitirão a equipe avaliar os objetos de interesse.

> **Links Úteis**:
>
> - [ISO/IEC 25010:2011 - Systems and software engineering — Systems and software Quality Requirements and Evaluation (SQuaRE) — System and software quality models](https://www.iso.org/standard/35733.html/)
> - [Análise sobre a ISO 9126 – NBR 13596](https://www.tiespecialistas.com.br/analise-sobre-iso-9126-nbr-13596/)
> - [Qualidade de Software - Engenharia de Software 29](https://www.devmedia.com.br/qualidade-de-software-engenharia-de-software-29/18209/)
