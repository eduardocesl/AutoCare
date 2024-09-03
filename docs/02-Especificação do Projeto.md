# Especificações do Projeto <img src=https://github.com/user-attachments/assets/04836943-414b-4c19-8506-c6db35370a23 height = 50>

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

Pedro Paulo tem 26 anos, é arquiteto recém-formado e autônomo. Pensa em se desenvolver profissionalmente através de um mestrado fora do país, pois adora viajar, é solteiro e sempre quis fazer um intercâmbio. Está buscando uma agência que o ajude a encontrar universidades na Europa que aceitem alunos estrangeiros.

Enumere e detalhe as personas da sua solução. Para tanto, baseie-se tanto nos documentos disponibilizados na disciplina e/ou nos seguintes links:

> **Links Úteis**:
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Mapa de Stalkeholders](https://www.racecomunicacao.com.br/blog/como-fazer-o-mapeamento-de-stakeholders/)
>
Lembre-se que você deve ser enumerar e descrever precisamente e personalizada todos os clientes ideais que sua solução almeja.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

As tabelas a seguir, apresentam os requisitos funcionais e não funcionais da aplicação, além da definição de seu nível de prioridade classificados em: alta, média ou baixa prioridade:

### Requisitos Funcionais

| Código (ID)  | Descrição                                                                                                       | Prioridade |
|---------|----------------------------------------------------------------------------------------------------------------|------------|
| **RF-01** | A aplicação deve permitir que o usuário faça um cadastro com login e senha.                                    | Alta       |
| **RF-02** | A aplicação deve permitir login e logout para uma experiência personalizada e individualizada pelo usuário.    | Alta       |
| **RF-03** | A aplicação deve permitir o gerenciamento de perfis (permitir que os usuários atualizem suas informações de endereço, número de telefone, foto, etc.). | Baixa      |
| **RF-04** | A aplicação deve permitir que o usuário opte pelo “Dark Mode” ou “Light Mode”.                                 | Baixa      |
| **RF-05** | O sistema deve permitir que os usuários registrem e acompanhem todas as manutenções realizadas nos veículos, incluindo data, tipo de serviço, quilometragem, e custos envolvidos. | Alta       |
| **RF-06** | O sistema deve permitir que os usuários adicionem e gerenciem múltiplos veículos em uma única conta.            | Média      |
| **RF-07** | A aplicação deve conter um cadastro de motoristas, com informações pessoais e históricos de conduções anteriores. | Baixa      |
| **RF-08** | O sistema deve permitir o registro de abastecimentos com informações de data, quantidade de Lts e tipo de combustível. | Média      |
| **RF-09** | O sistema deve calcular o custo médio do veículo, usando informações como consumo, manutenção e afins.         | Baixa      |


### Requisitos não Funcionais

| Código (ID) | Descrição                                                                                                                                                           | Prioridade |
|-------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------|
| **RNF-01**  | O sistema deve oferecer uma interface intuitiva e fácil de usar, com navegação clara e acessível, permitindo que usuários de diferentes níveis de conhecimento tecnológico possam utilizar o aplicativo sem dificuldades. | Alta       |
| **RNF-02**  | A aplicação deve ser responsiva e adequada a qualquer sistema de acesso (Desktop, Smartphone ou Tablet).                                                             | Alta       |
| **RNF-03**  | O sistema deve garantir fácil manutenibilidade.                                                                                                                     | Média      |
| **RNF-04**  | O sistema deve garantir que todas as informações dos usuários, incluindo dados de veículos, sejam protegidas.                                                        | Alta       |
| **RNF-05**  | O sistema deve ser capaz de processar e armazenar os dados, garantindo que o tempo de resposta seja rápido mesmo com grandes volumes de dados.                        | Alta       |
| **RNF-06**  | O sistema deve ser altamente disponível, com um tempo de inatividade mínimo, garantindo que os usuários possam acessar e utilizar o aplicativo a qualquer momento, com backups regulares para evitar perda de dados. | Alta       |


## Restrições

Os fatores apresentados na tabela a seguir tratam dos processos que restringem o desenvolvimento da plataforma:

| Código (ID)       | Descrição                                                                                                                     |
|----------|--------------------------------------------------------------------------------------------------------------------------------|
| **RE-01** | A Etapa 1 da aplicação tem como prazo de entrega a data: 01/09/2024.                                                          |
| **RE-02** | A equipe não pode contratar, nem delegar funções a terceiros.                                                                 |
| **RE-03** | Algumas funcionalidades do aplicativo, como o armazenamento em nuvem de documentos e a sincronização de dados, exigirão uma conexão ativa com a internet. |
| **RE-04** | O desenvolvimento do aplicativo deve estar em conformidade com as regulamentações de privacidade e proteção de dados - LGPD (Lei Geral de Proteção de Dados) no Brasil. |


## Matriz de Rastreabilidade

|            | RF-01 | RF-02 | RF-03 | RF-04 | RF-05 | RF-06 | RF-07 | RF-08 | RF-09 | RNF-01 | RNF-02 | RNF-03 | RNF-04 | RNF-05 | RNF-06 |
|------------|-------|-------|-------|-------|-------|-------|-------|-------|-------|--------|--------|--------|--------|--------|--------|
| **RF-01**  |       | ✔️    |       |       |       |       |       |       |       | ✔️     | ✔️     |        | ✔️     |        |        |
| **RF-02**  |       |       | ✔️    |       | ✔️    | ✔️    | ✔️    | ✔️    | ✔️    | ✔️     | ✔️     |        |        |        | ✔️     |
| **RF-03**  |       |       |       |       |       |       |       |       |       | ✔️     | ✔️     |        | ✔️     | ✔️     |        |
| **RF-04**  |       |       |       |       |       |       |       |       |       | ✔️     |        |        |        |        |        |
| **RF-05**  |       |       |       |       |       |       |       |       | ✔️    | ✔️     |        |        | ✔️     | ✔️     | ✔️     |
| **RF-06**  |       |       |       |       |       |       | ✔️    |       | ✔️    | ✔️     | ✔️     |        | ✔️     | ✔️     |        |
| **RF-07**  |       |       |       |       |       |       |       |       |       | ✔️     | ✔️     |        |        | ✔️     | ✔️     |
| **RF-08**  |       |       |       |       |       |       |       |       |       | ✔️     | ✔️     |        | ✔️     | ✔️     |        |
| **RF-09**  |       |       |       |       |       |       |       |       |       | ✔️     |        |        |        | ✔️     | ✔️     |
| **RNF-01** |       |       |       |       |       |       |       |       |       |        |        |        |        |        |        |
| **RNF-02** |       |       |       |       |       |       |       |       |       | ✔️     |        |        |        |        |        |
| **RNF-03** |       |       |       |       |       |       |       |       |       |        |        |        |        |        | ✔️     |
| **RNF-04** |       |       |       |       |       |       |       |       |       |        |        |        |        |        |        |
| **RNF-05** |       |       |       |       |       |       |       |       |       |        |        |        |        |        |        |
| **RNF-06** |       |       |       |       |       |       |       |       |       |        |        | ✔️     |        |        |        |
| **EDUARDO**| ✔️    | ✔️    | ✔️    | ✔️    | ✔️    |       |       |       |       | ✔️     | ✔️     | ✔️     | ✔️     | ✔️     | ✔️     |
| **LAÍS**   |       |       |       |       |       |       |       |       |       |        |        |        |        |        |        |
| **LUCAS**  |       |       |       |       |       |       |       |       |       |        |        |        |        |        |        |
| **MARCO A.**|       |       |       |       |       |       |       |       |       |        |        |        |        |        |        |
| **MATHEUS**|       |       |       |       |       | ✔️    | ✔️    | ✔️    | ✔️    |        |        |        |        |        |        |


## Indicadores de Desempenho

| **INDICADOR**                | **OBJETIVOS**                                         | **DESCRIÇÃO**                                           | **CÁLCULO**                             | **FONTE DADOS**                              | **PERSPECTIVA**                              |
|------------------------------|-------------------------------------------------------|---------------------------------------------------------|-----------------------------------------|----------------------------------------------|----------------------------------------------|
| Número de downloads realizados | Medir o nível de interesse gerado pelo aplicativo    | Quantidade de downloads realizados na loja eletrônica  | Somatório total de downloads            | Loja eletrônica                              | Nível de satisfação                          |
| Número de usuários ativos    | Avaliar a adesão e uso contínuo do aplicativo         | Número de usuários que utilizam o aplicativo regularmente | Contagem de usuários ativos             | Banco de dados da aplicação                  | Engajamento                                  |
| Nota média do aplicativo     | Analisar a satisfação geral dos usuários              | Média das notas atribuídas pelos usuários nas lojas eletrônicas | Média das notas                           | Loja eletrônica                              | Aprimoramento                                |
| Taxa de retenção de usuários | Verificar a fidelidade dos usuários                    | Percentual de usuários que continuam a usar o aplicativo após um período definido | Percentual de usuários retidos            | Banco de dados da aplicação                  | Retenção                                     |
| Reclamações                  | Verificar quais os principais pontos negativos do aplicativo | Entender e atuar sobre as reclamações apresentadas pelos usuários | Quantidade e qualidade das reclamações | Loja eletrônica e canais de comunicação do AutoCare | Aprimorar os pontos negativos da aplicação   |
| Elogios                      | Verificar quais os principais pontos positivos do aplicativo | Entender e potencializar as qualidades da aplicação apresentadas pelos usuários | Quantidade e qualidade dos elogios      | Loja eletrônica e canais de comunicação do AutoCare | Potencializar as funcionalidades valorizadas pelos usuários |
| Periodicidade de acessos     | Analisar o tempo de inatividade dos usuários           | Entender os padrões de acesso da aplicação             | Média de tempo entre acessos do usuário | Banco de dados da aplicação                  | Aprimoramento e melhoria de engajamento da aplicação |
| Taxa de erro de funcionalidades | Medir a confiabilidade das funcionalidades do aplicativo | Percentual de erros reportados em funcionalidades do aplicativo | Percentual de erros                      | Banco de dados da aplicação                  | Qualidade e confiabilidade                    |


## Diagrama de Casos de Uso

O diagrama de casos de uso é o próximo passo após a elicitação de requisitos, que utiliza um modelo gráfico e uma tabela com as descrições sucintas dos casos de uso e dos atores. Ele contempla a fronteira do sistema e o detalhamento dos requisitos funcionais com a indicação dos atores, casos de uso e seus relacionamentos. 

As referências abaixo irão auxiliá-lo na geração do artefato “Diagrama de Casos de Uso”.

> **Links Úteis**:
> - [Criando Casos de Uso](https://www.ibm.com/docs/pt-br/elm/6.0?topic=requirements-creating-use-cases)
> - [Como Criar Diagrama de Caso de Uso: Tutorial Passo a Passo](https://gitmind.com/pt/fazer-diagrama-de-caso-uso.html/)
> - [Lucidchart](https://www.lucidchart.com/)
> - [Astah](https://astah.net/)
> - [Diagrams](https://app.diagrams.net/)


# Gerenciamento de Projeto <img src=https://github.com/user-attachments/assets/04836943-414b-4c19-8506-c6db35370a23 height = 50>

De acordo com o PMBoK v6 as dez áreas que constituem os pilares para gerenciar projetos, e que caracterizam a multidisciplinaridade envolvida, são: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes Interessadas. Para desenvolver projetos um profissional deve se preocupar em gerenciar todas essas dez áreas. Elas se complementam e se relacionam, de tal forma que não se deve apenas examinar uma área de forma estanque. É preciso considerar, por exemplo, que as áreas de Escopo, Cronograma e Custos estão muito relacionadas. Assim, se eu amplio o escopo de um projeto eu posso afetar seu cronograma e seus custos.

## Gerenciamento de Tempo

Com diagramas bem organizados que permitem gerenciar o tempo nos projetos, o gerente de projetos agenda e coordena tarefas dentro de um projeto para estimar o tempo necessário de conclusão.

![Diagrama de rede simplificado notação francesa (método francês)](img/02-diagrama-rede-simplificado.png)

O gráfico de Gantt ou diagrama de Gantt também é uma ferramenta visual utilizada para controlar e gerenciar o cronograma de atividades de um projeto. Com ele, é possível listar tudo que precisa ser feito para colocar o projeto em prática, dividir em atividades e estimar o tempo necessário para executá-las.

![Gráfico de Gantt](img/02-grafico-gantt.png)

## Gerenciamento de Equipe

O gerenciamento adequado de tarefas contribuirá para que o projeto alcance altos níveis de produtividade. Por isso, é fundamental que ocorra a gestão de tarefas e de pessoas, de modo que os times envolvidos no projeto possam ser facilmente gerenciados. 

![Simple Project Timeline](img/02-project-timeline.png)

