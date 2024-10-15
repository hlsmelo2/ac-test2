# Adriano Cobuccio - Full Stack Test

## Ferramentas utilizadas

* Nuxt
* Laravel
* MySQL
* Redis
* Pug
* Sass
* Axios
* Docker
* Cypress

## Contexto

Uma mini carteira digital onde um usuário pode adicionar saldo e fazer tranferências para outros usuários

## Execução

Após clonar o repositório deve-se mudar a **branch** para **master** e abrir o **diretório raiz**

Neste serão encontrados outros 2 diretórios: **back** e **front**

___

No diretório **front** deve ser executado o comando a seguir:

```sh
yarn install
```
ou
```sh
npm install
```
Uma vez executado esse comando serão instaladas todas as dependências da camada de **frontend**

___

A seguir faremos a instalação das dependências do **backend**, para isso deve-se executar o código abaixo no diretório **back**:
```sh
composer install
```


Após instalar as dependências do **backend** é necessário retornar ao diretório raiz e executar o seguinte comando:
```sh
docker-compose up -d
```

Este comando constrói todo o ambiente necessário para a execução de todas camadas e módulos do projeto. Finalizada esta etapa, o projeto já estará sendo executado e pode ser acessado através do endereços a seguir:

Frontend - http://localhost:300
---
Backend (API) - http://localhost:8000
---

Apesar do projeto já poder ser acessado nesta etapa, não é aconselhado fazê-lo, pois neste estágio o projeto ainda não possui nenhum dado armazenado. Vamos resolver isso com o comando a seguir, que deve ser executado novamente no diretório **back**:

```sh
composer migrate
```

Agora sim!
--
Já podemos acessar o projeto com alguns dados inseridos. Utilize o login e senha a seguir para logar na aplicação: 

Login: admin@admin.com
--
Password: password
--

