# Formulário (MySQL)

[![Static Badge](https://img.shields.io/badge/Licen%C3%A7a-MIT-green)](https://github.com/renatogomesf/Formulario/blob/main/LICENSE)

## Sobre o projeto

https://renatogomesf.github.io/Formulario-MySQL/

Formulário desenvolvido com o objetivo de demonstrar habilidades no consumo de API com **Axios**, criação de API com **Node.js**, manipulação de banco de dados com **MySQL** e, obviamente, a realização de um **CRUD** (Create, Read, Update, Delete) completo. O formulário é totalmente responsivo, se adaptando a vários tamanhos de telas.

O projeto consiste em um formulário onde é possível cadastrar pessoas utilizando o nome, sobrenome, data de nascimento, telefone e e-mail e realizar a consulta de todos os cadastros já feitos ou fazer buscas por filtro com o uso de id, nome ou sobrenome. 

## Layout mobile

![mobile 1](https://raw.githubusercontent.com/renatogomesf/imagens-projetos/main/imagens/formul%C3%A1rio/mobile-1.png) ![mobile 2](https://raw.githubusercontent.com/renatogomesf/imagens-projetos/main/imagens/formul%C3%A1rio/mobile-2.png)

## Layout web

![web 1](https://raw.githubusercontent.com/renatogomesf/imagens-projetos/main/imagens/formul%C3%A1rio/web-1.png) ![web 2](https://raw.githubusercontent.com/renatogomesf/imagens-projetos/main/imagens/formul%C3%A1rio/web-2.png)

## Tecnologias
Essas são as tecnologías utilizadas no projeto:

* React.js
* Styled Component
* JavaScript
* Node.js
* MySQL

## Bibliotecas
Essas são as bibliotecas utilizadas no projeto:

### React.js:
* [React Icons](https://react-icons.github.io/react-icons/)
* [React Router DOM](https://www.npmjs.com/package/react-router-dom)
* [Axios](https://axios-http.com/ptbr/docs/intro)

### Node.js:
* [Express + cors](https://expressjs.com/pt-br/)
* [Nodemon](https://nodemon.io/)

## Como rodar o projeto

1) Baixe o [MySQL](https://dev.mysql.com/downloads/installer/) e faça a [instalação](https://www.youtube.com/watch?v=adIIAEc3Q04&list=PLx4x_zx8csUgQUjExcssR3utb3JIX6Kra&ab_channel=CFBCursos) do MySQL Workbench (lembre-se que a porta, usuário e senhas definidos na instalação serão usados na api (no arquivo .env) para estabelecer uma conexão);
2) Crie crie um banco de dados com o nome que preferir (lembre-se que esse nome será usado dentro da api (no arquivo .env) para realizar a conexão);
3) Após criar o banco de dados, selecione-o, abra uma Query crie a seguinte tabela:

```
   CREATE TABLE `cadastros` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) NOT NULL,
  `sobrenome` varchar(45) NOT NULL,
  `data_nascimento` varchar(15) NOT NULL,
  `telefone` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
```

4) Após crirar o banco de dados e a tabela, clone o repositório [Api-formulario](https://github.com/renatogomesf/Api-formulario);
5) Com o repositório em sua máquina, abra a pasta "Api-formulario-main" (pasta raiz do repositório) no terminal, digite `npm install` e tecle enter para a instalação das dependências;
6) Após a instalação das dependências, abra o repositório no seu editor de código e mude o nome do arquivo `.env.CONFIG` para `.env`;
7) Dentro do arquivo `.env`, preencha as variáveis de ambiente com os dados definidos na instalação do MySQL e o nome do banco de dados. **OBS: a porta padrão da api é a 3000. não mude!**;
8) Após o preencher as variáveis, abra a pasta raiz do repositório no terminal e rode o servidor com o comando `npm run server`;
9) Por fim, com o servidor rodando, já é possível utilizar o [Formulário](https://renatogomesf.github.io/Formulario/) por completo.

## Autor

Renato Gomes Ferreira

https://www.linkedin.com/in/renato-gomes-22b759236/
