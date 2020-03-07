# Star Wars API

Uma API RESTful simples que disponibiliza dados de filmes do Star Wars.

## Conteúdo

- Instalação
- Modo de uso

## Instalação

### Requisitos

- [NodeJS](https://nodejs.org/pt-br/)
- [Yarn](https://yarnpkg.com/pt-BR/)

### Clone

Clone este repositório em sua máquina local usando `https://github.com/fernandohfs/star-wars-api.git`

### Configuração

Dentro da pasta raiz do projeto execute o comando abaixo para instalar as dependências:

```
$ yarn install
```

## Modo de uso

Após instalar as dependências, execute o projeto em ambiente de desenvolvimento usando o comando abaixo na pasta raiz do projeto:

```
$ yarn dev
```

Após isso, o projeto estará rodando no endereço [http://localhost:3333](http://localhost:3333).

- Para listar as informações de todos os filmes, acesse: [http://localhost:3333/films](http://localhost:3333/films).
- Para listar as informações de um filme específico, acesse informando o id do filme: [http://localhost:3333/films/1](http://localhost:3000/films/1)
