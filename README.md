# CursoJS

Curso de JavaScript - CursoemVideo(Gustavo Guanabara)

---

## Módulo A: Conhecendo o JavaScript

---

### Aula 01 - O que o JavaScript é capaz de fazer?

Nesta aula, o professor explica as capacidades do JavaScript na programação. Ele começa explicando a diferença entre cliente e servidor: o cliente é aquele que utiliza um navegador web para acessar a infraestrutura da internet (nuvem), enquanto o servidor é responsável por armazenar e fornecer os arquivos solicitados pelo cliente. Dessa forma, quando o cliente procura um arquivo, o servidor envia uma cópia para que o cliente possa visualizá-lo ou até mesmo modificá-lo em sua própria máquina (computador).  
<br>
O professor também faz uma comparação entre as três tecnologias fundamentais da web: *HTML*, *CSS* e JavaScript. Ele as compara a profissionais trabalhando na criação de um jornal, com o *HTML* sendo o jornalista responsável pelo conteúdo textual, imagens e vídeos. O *CSS* sendo o designer, responsável pela aparência visual, como cores, tamanhos e disposição dos elementos. E o JavaScript como o programador, encarregado da estruturação e segurança do jornal para que ele possa ser entregue adequadamente.  
<br>
É importante notar que sites populares como [Google](https://www.google.com.br/ "Google"), [YouTube](https://www.youtube.com/ "YouTube"), [LinkedIn](https://www.linkedin.com/ "LinkedIn"), [Netflix](https://www.netflix.com/br/ "Netflix"), [Facebook](https://pt-br.facebook.com/ "Facebook") e [Amazon](https://www.amazon.com.br/ "Amazon") usam o JavaScript em sua infraestrutura, mostrando a ampla adoção e importância dessa tecnologia na web.  
<br>
Também utilizamos comandos no console do navegador para fazer alterações na página inicial do Google.  

---

### Aula 02 - Como chegamos até aqui?

Perguntas iniciais:
1. Sabe a diferença entre um cliente e um servidor para a Internet?
2. Para que serve HTML, CSS e JavaScript?
3. Cite 4 sites que fazem uso do JavaScript.

Nesta aula, aprendemos sobre a história resumida do JavaScript. Durante a Guerra Fria, em 1970, o presidente dos EUA criou uma agência de pesquisa tecnológica, DARPA, que desenvolveu a rede Arpanet para garantir a segurança dos dados dos servidores em caso de eventuais ataques. Com o passar do tempo, a rede cresceu com a entrada de faculdades, como o MIT e a Universidade da Califórnia, e pequenas redes, mudando de nome e se tornando a Internet.  
<br>
Em 1993, foi criado o *HTML* e o protocolo *HTTP*, que se juntaram ao *TCP/IP* e à *WWW*, e para que essas tecnologias funcionassem, foi criado um navegador chamado Mosaic. Em 1994, a Netscape criou um navegador baseado no Mosaic, que se tornou o navegador mais popular da época.  
<br>
Em 1995, foi criado o JavaScript, cujo nome foi uma jogada de marketing, pois a palavra "Java" estava em alta na época, devido ao Java ser considerado a linguagem do futuro. Em 1997, a Netscape procurou a *ECMA*, uma empresa de padronização, e surgiu o ECMAScript.  
<br>
Por volta de 2002, a Netscape faliu, e um grupo dentro dela criou a fundação Mozilla, que hoje é conhecida pelo navegador Firefox. Em 2008, foi criado o Google Chrome, que se tornou muito popular e com o tempo foi se modernizando, surgindo o seu motor interno chamado V8 em 2009.  
<br>
Um grupo pegou o código do motor interno do Google, que era um código aberto, e modificou-o para que não fosse necessário utilizar um navegador, criando o Node.js em 2010.  
<br> 
Linha do Tempo  

![Linha do Tempo](/aula02/linhadotempo.png)

---

### Aula 03 - Dando os primeiros Passos.

Perguntas iniciais:
1. Sabe que empresa criou o JavaScript?
2. Java e JavaScript possuem alguma relação?
3. O que ECMAscript tem a ver com JavaScript?
4. Sabia que o programa WhatApp desktop é criado em JavaScript?

Durante a aula, o professor fez uma comparação interessante. Assistir vídeos de pessoas tocando violão não te torna um músico habilidoso, assim como assistir vídeos de manobras de bicicleta não vai te ensinar a realizá-las sem se machucar. O mesmo princípio se aplica à programação: é preciso praticar e colocar a mão na massa para realmente aprender. Existem diversas maneiras de aprender, como listado abaixo:
<br>
- Ver vídeos.
- Praticar o que foi mostrado nos vídeos.
- Ler conteúdo, documentação e manuais. exemplo:
    - JavaScript: O Guia Definitivo.
    - JavaScript - Guia do Programador.
    - [Guia JavaScript - MDN Web Docs.](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
    - [ECMA](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/)
- Anotações com caderno ou bloco de notas.
- Interações com pessoas, conversar sobre oque foi ensinado.
- Pensar em projetos próprios, resolver problemas do dia a dia, aplicar a ferramente de programação para resolver o problema.

Programas instalados:
- [Google Chrome](https://www.google.com/intl/pt-BR/chrome/)
- [Visual Studio Code](https://code.visualstudio.com/download)
- [Node.js](https://nodejs.org/en/download)

---
### Aula 04 - Criando o seu primeiro script

Perguntas iniciais:
1. Que livros/documentos nós recomendamos?
2. Para aprender JS, precisamos saber inglês?
3. Que dicas nós demos para quem quer estudar?
4. Quais programas nós intalamos no computador?

Nessa aula desenvolvemos os primeiros scripts feitos em JavaScript.  
<br>
Criamos uma pasta chamada "CursoJS" que contém um arquivo HTML denominado "ex001.html" para inserir um script de maneira simples em uma página HTML. Durante a aula, o professor explicou de forma básica os elementos HTML, como as tags "head" (cabeçalho) e "body" (corpo). Além disso, utilizamos as tags `<h1>` para título e `<p>` para parágrafos. Também incluímos uma seção `<style></style>` para colorir o corpo do documento e formatar sua fonte. No final da tag `<body>`, adicionamos uma seção `<script></script>` para inserir os seguintes códigos:

Para exibir uma mensagem no navegador:
<br>
`window.alert('Minha primeira mensagem!');`

Para exibir uma caixa de confirmação:
<br>
`window.confirm('Está gostando de JS?');`

Para permitir que o usuário digite seu nome:
<br>
`window.prompt('Qual é o seu nome?');`

---
## Módulo B: Comandos Básicos do JavaScript

---

### Aula 05

---

#### Siglas:

<abbr title="Linguagem de Marcação de HiperTexto - HyperText Markup Language">HTML<abbr>

<abbr title="Folha de Estilo em Cascatas - Cascading Style Sheets">CSS</abbr>

<abbr title="Instituto de Tecnologia de Massachusetts - Massachusetts Institute of Technology">MIT</abbr>

<abbr title="Protocolo de Transferência de Hipertexto - Hypertext Transfer Protocol">HTTP</abbr>

<abbr title="Protocolo de Controle de Transmissão - Transmission Control Protocol / Protocolo de Internet - Internet Protocol">TCP/IP</abbr>

<abbr title="Rede Mundial de Computadores - World Wide Web">WWW</abbr>

<abbr title="Associação Européia dos Fabricantes de Computadores - European Computer Manufacturers Association">ECMA</abbr>

