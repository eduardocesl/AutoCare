# Programação de Funcionalidades

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.
<br><br><br>

---

# Programação e Teste de Funcionalidade: <img src=https://github.com/user-attachments/assets/04836943-414b-4c19-8506-c6db35370a23 height = 50>

## **Tela de Login (RF-02: Autenticação de Usuário)** <img src=https://github.com/user-attachments/assets/04836943-414b-4c19-8506-c6db35370a23 height = 20>

**Descrição do Requisito**
<br><br>
Este requisito assegura que a aplicação AutoCare permita ao usuário realizar login para uma experiência personalizada e segura. Após o login, o sistema fornece uma interface individualizada que possibilita o acesso a funcionalidades específicas de cada conta.

Prioridade: **Alta**

### Especificação Funcional  
- **Validação de Login**: O sistema valida o login utilizando um formulário com campos de email e senha.
- **Autenticação JWT**: Ao submeter credenciais válidas, o sistema gera um token de autenticação (JWT), armazenado com segurança no `localStorage` do navegador.
- **Sessão Contínua**: O token permite autenticação nas requisições enquanto o usuário estiver logado, garantindo uma experiência contínua.

## Artefatos de Código <img src=https://github.com/user-attachments/assets/04836943-414b-4c19-8506-c6db35370a23 height = 20>

**Login Front-end (`Login.jsx`)**  
   - Localização: `src/pages/login/Login.jsx`
   - Descrição: Componente que exibe o formulário de login com campos para email e senha, além de um botão de login.
   
<h3 align="center">Capturas de Tela</h3>

<div align="center">
  <img src="https://github.com/user-attachments/assets/cce12ac7-aea1-4674-80a6-82f46de945ee" alt="Captura de tela 1" width="80%" />
  <img src="https://github.com/user-attachments/assets/795e0d77-f09f-426e-bfff-48fc2d84fd76" alt="Captura de tela 2" width="80%" />
  <img src="https://github.com/user-attachments/assets/53650ecd-d547-4305-95c0-7bffb09acbd5" alt="Captura de tela 3" width="80%" />
</div>


<h3> Estruturas de Dados Utilizadas  </h3>

- **Token JWT**: Token de autenticação que garante a segurança das sessões de usuário.
- **Local Storage**: Utilizado para armazenar o token JWT do usuário logado no navegador.
- **Banco de Dados (MongoDB)**: Armazena informações de email e senha dos usuários (senha protegida com hash).

### Teste do Requisito RF-02 <img src=https://github.com/user-attachments/assets/04836943-414b-4c19-8506-c6db35370a23 height = 20>
Para verificar o funcionamento do login, siga estas etapas:

`1.` Acesse a tela de login em /login.


`2.` Insira credenciais válidas (exemplo: email válido e senha).


`3.` Após o login, verifique o token JWT gerado no localStorage (ele estará visível nas ferramentas de desenvolvedor do navegador).
<br><br>
<h3 align="center">Testes de Login</h3>
<div align="center">


> Importante: As mensagens: "Usuário não encontrado" e "Senha incorreta" são apenas para ilustração da autenticação desenvolvida pelo grupo, e serão substituídas pela mensagem "Usuário ou senha incorretos".
  
  
<h3>Erro: Sem dados</h3>


  <img src="https://github.com/user-attachments/assets/019c44e0-bdb1-4656-915e-dbbf98860dfe" alt="Erro - Sem dados" width="80%" />
<br><br>
<h3>Erro: Senha incorreta</h3>

  <img src="https://github.com/user-attachments/assets/a803d6ef-5dfa-46dc-8124-aecb88be292c" alt="Erro - Senha incorreta" width="80%" />
<br><br>
<h3>Erro: Usuário não encontrado</h3>


  <img src="https://github.com/user-attachments/assets/e118703c-a3e4-4538-a3db-dc69f2a016bb" alt="Erro - Usuário não encontrado" width="80%" />
<br><br>  
<h3>Sucesso: Login realizado e redirecionamento</h3>


  <img src="https://github.com/user-attachments/assets/292e5742-620a-468a-86ce-c092b38b3d14" alt="Sucesso - Login e redirecionamento" width="80%" />

  





</div>

---
<br><br><br>




<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="4-Metodologia.md"> Metodologia</a>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="5-Arquitetura da Solução.md"> Arquitetura da Solução</a>

Para cada requisito funcional, pode ser entregue um artefato desse tipo

> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)
