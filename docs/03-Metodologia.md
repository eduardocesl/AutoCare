
# Metodologia

A equipe utiliza a metodologia Scrum para o gerenciamento do projeto. Utilizamos o  Whastapp para comunicação diária do Grupo. Para as reuniões semanais, será utilizado o Teams.

## Relação de Ambientes de Trabalho

Os artefatos do projeto são desenvolvidos a partir das plataformas e a relação dos ambientes com seu respectivo propósito é apresentada na tabela que se segue:

|Ambiente de Trabalho	|Plataforma	|Link de Acesso|
| --------------------| ----------| -------------|
|Repositório	         | Github    | [Github](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-2-e4-proj-dad-t3-autocare)   |
|Documentos do Projeto|	GitHubDocs|[GithubDocs](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-2-e4-proj-dad-t3-autocare/tree/main/docs)|


## Controle de Versão

A ferramenta de controle de versão adotada no projeto foi o
[Git](https://git-scm.com/), sendo que o [Github](https://github.com)
foi utilizado para hospedagem do repositório.

O projeto segue a seguinte convenção para o nome de branches:

- `main`: versão estável já testada do software
- `marco`: branch específica para atualizações do Marco
- `Eduardo`: branch específica para atualizações do Eduardo
- `Lucas`: branch específica para atualizações do Lucas
- `lais`: branch específica para atualizações da Lais
- `mateus`: branch específica para atualizações do Mateus

Conforme o membro do grupo decide a funcionalidade que irá implementar, ele faz o commit para sua branch e, posteriormente, será adicionada a branch mains após o git merge.

## Gerenciamento de Projeto

### Divisão de Papéis

Apresente a divisão de papéis entre os membros do grupo.

A equipe utiliza metodologias ágeis, tendo escolhido o Scrum como base para definição do processo de desenvolvimento. A equipe está organizada da seguinte maneira:
- Scrum Master: Marco Antonio Gil;
- Product Owner: Carlos Eduardo;
- Equipe de Desenvolvimento: Laís Oliveira, Lucas Soares, Matheus Soares;
- Equipe de Design: Laís Oliveira.

### Processo

Utilizamos o modelo KANBAN do GITHUB Projects para fazer o gerenciamento de tarefas, conforme figura abaixo
 
![image](https://github.com/user-attachments/assets/d65ec691-f83a-4a6e-b782-a1a92a95c643)


### Ferramentas

As ferramentas empregadas no projeto são:

- [Visual Studio Code](https://code.visualstudio.com/Download): Ferramenta utilizada para a confecção de códigos.
- Ferramentas de comunicação
- [Microsoft Teams](https://teams.microsoft.com/): Ferramenta utilizada para realizar as reuniões de equipe, assim como as reuniões semanais em conjunto com o coordenador do projeto.
- [WhatsApp](https://web.whatsapp.com/): Ferramenta utilizada para comunicação interna entre os membros da equipe.
- [Figma](https://www.figma.com/): Ferramentas de desenho de tela (_wireframing_)

O editor de código foi escolhido porque ele possui uma integração com o sistema de versão. As ferramentas de comunicação utilizadas possuem integração semelhante e por isso foram selecionadas. Por fim, para criar diagramas utilizamos essa ferramenta por melhor captar as necessidades da nossa solução.
<br><br>

# <img src=https://github.com/user-attachments/assets/04836943-414b-4c19-8506-c6db35370a23 height = 40> Plano de Testes de Usabilidade


O teste de usabilidade permite avaliar a qualidade da interface com o usuário da aplicação interativa. O Plano de Testes de Software é gerado a partir da especificação do sistema e consiste em casos de testes que deverão ser executados quando a implementação estiver parcial ou totalmente pronta.

O teste busca entender quais dificuldades o usuário encontra na execução das tarefas corriqueiras do AutoCare, além de identificar os pontos positivos a serem destacados. A execução de testes permite que a equipe colete dados necessários para o contínuo aprimoramento da aplicação.

### Objetivos Gerais <img src=https://github.com/user-attachments/assets/04836943-414b-4c19-8506-c6db35370a23 height = 20>

    1. Identificar as dificuldades encontradas pelo usuário na execução das tarefas;
    2. Identificar os pontos positivos da aplicação;
    3. Levantar dados sobre os perfis de usuário atraídos pela aplicação;
    4. Identificar o tempo gasto para a realização de cada tarefa.

### Objetivos Específicos <img src=https://github.com/user-attachments/assets/04836943-414b-4c19-8506-c6db35370a23 height = 20>

    1. Identificar os caminhos buscados pelo usuário para a realização de cada tarefa;
    2. Permitir mais controle e facilitar a realização de cada tarefa para melhorar a experiência do usuário com a aplicação;
    3. Identificar as taxas de sucesso na realização de cada tarefa (nas diferentes etapas de desenvolvimento da aplicação);
    4. Identificar o modelo mental dos usuários.

### Casos de Teste (Performance/Tarefas) <img src=https://github.com/user-attachments/assets/04836943-414b-4c19-8506-c6db35370a23 height = 20>

    TC-01: Cadastrar novo usuário;
    TC-02: Logar no AutoCare;
    TC-03: Cadastrar novo motorista;
    TC-04: Cadastrar novo veículo;

### Pesquisa de satisfação <img src=https://github.com/user-attachments/assets/04836943-414b-4c19-8506-c6db35370a23 height = 20>

Para a pesquisa de satisfação, a equipe desenvolveu um questionário separado em duas etapas que será apresentado ao usuário após a execução das tarefas:

**Parte 1**

    1. Quantos anos você tem?
    2. Qual sua ocupação atual?
    3. Como você conheceu o AutoCare?
    4. Alguma função da aplicação te agradou? Se sim, qual(is)?
    5. Alguma função da aplicação te desagradou? Se sim, qual(is)?
    6. Sentiu falta de alguma função que não encontrou na aplicação? Se sim, qual(is)?
    7. Sentiu falta de alguma informação que não encontrou na aplicação? Se sim, qual(is)?

**Parte 2**

Responda às questões a seguir de acordo com a classificação abaixo:

| Opções | 1 | 2 | 3 | 4 | 5 |
| ----------------- | ----------------- | ----------------- | ----------------- | ----------------- | ----------------- |
| Respostas  | Discordo Totalmente| Discordo | Indiferente | Concordo | Concordo Totalmente |


    1. Achei o sistema fácil de utilizar.
    2. A interface do sistema é agradável.
    3. As informações apresentadas são suficientes.
    4. Encontrei facilmente todas as informações que precisei.
    5. Me senti confiante no uso da aplicação.
    6. A navegação pela aplicação é intuitiva.
    7. Eu recomendaria o AutoCare para mais pessoas.


