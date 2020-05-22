# Projeto BBB Kudos

----

### Instalação do projeto

#### 1. Instalando o BackEnd
Antes de tudo, instale e rode o servidor do Backend, acessando [esse link!](https://github.com/tiagorccabral/bbbkudos-back)

Siga as instruções do repositório para rodar o servidor. **Após isso**, continue esse tutorial.

#### 2. Instalando o FrontEnd
```
$ git clone https://github.com/tiagorccabral/bbbkudos-front.git
$ cd bbbkudos-front
$ yarn install
```

#### 3. Rodando o projeto

```
$ yarn start
```

**Obs:** Note que o arquivo *src/utils/globals.js* contém as configurações do servidor de backend. Caso esteja rodando o backend em uma porta diferente da 3000, altere a seguinte linha desse arquivo:

`const endpointUrl = "http://localhost:3000";`