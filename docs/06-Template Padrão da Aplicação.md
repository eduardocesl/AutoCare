# Template Padrão da Aplicação

Layout padrão das aplicações web e mobile que serão utilizado em todas as páginas com a definição de identidade visual, aspectos de responsividade e iconografia.

![Template Padrão](https://github.com/user-attachments/assets/7ec94cbd-4be7-46d2-8439-01125cc429b9)


CSS Padrão da aplicação

/* Reseta margens e padding do corpo */
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

/* Contêiner principal */
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Cabeçalho */
.app-header {
  display: flex;
  justify-content: space-between; /* Logo à esquerda e título centralizado */
  align-items: center;
  background-color: #333;
  color: white;
  padding: 10px 20px;
}

.app-logo {
  width: 200px; /* Ajusta o tamanho do logo */
  height: auto;
}

/* Navegação */
.app-navbar ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 20px; /* Espaçamento entre os itens do menu */
}

.app-navbar ul li a {
  color:#E01B1B;
  text-decoration: none;
  font-weight: bold;
  padding: 10px;
}

.app-navbar ul li a:hover {
  background-color: #444;
  border-radius: 5px;
}

/* Conteúdo principal */
.app-main {
  flex: 1;
  padding: 20px;
  background-color: #f9f9f9;
}

/* Rodapé */
.app-footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 10px;
  margin-top: auto;
  position: relative;
  display: flex;
  justify-content: center;
}

.footer-logo {
  position: absolute;
  bottom: 10px;
  right: 20px;
  width: 50px;
  height: auto;
}

/* Espaçamento entre logo e título */
.header-content {
  display: flex;
  align-items: center;
  gap: 15px;
}



> **Links Úteis**:
>
> - [CSS Website Layout (W3Schools)](https://www.w3schools.com/css/css_website_layout.asp)
> - [Website Page Layouts](http://www.cellbiol.com/bioinformatics_web_development/chapter-3-your-first-web-page-learning-html-and-css/website-page-layouts/)
> - [Perfect Liquid Layout](https://matthewjamestaylor.com/perfect-liquid-layouts)
> - [How and Why Icons Improve Your Web Design](https://usabilla.com/blog/how-and-why-icons-improve-you-web-design/)
