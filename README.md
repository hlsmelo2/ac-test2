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

Após clonar o repositório deve-se e abrir o **diretório raiz do projeto (default: "ac-teste2")**

Neste serão encontrados outros 2 diretórios: **/back** e **/front**, neste diretórios de encontram todos os arquivos referentes a cada projeto e estes podem ser explorados da forma que forma desejada

___

Estando no **diretório raiz (/)** deve ser executado o comando a seguir:

```sh
docker-compose up -d && ./back/scripts/migrate.sh
```

Este comando instala todas as dependências das camadas de **frontend** e **backend**, e constrói todo o ambiente necessário para a execução de todas camadas e módulos do projeto. Finalizada esta etapa, o projeto já estará sendo executado e pode ser acessado através dos endereços a seguir:

**Frontend** - http://localhost:300
---
**Backend (API)** - http://localhost:8000
---

Apesar do projeto já poder ser acessado nesta etapa, não é aconselhado fazê-lo, pois neste estágio o projeto ainda não possui nenhum dado armazenado

Porém, se desejar criar tudo do zero, comece criando usuários em **http://localhost:3000/register**

Mas se não for o caso querer criar o dados manualmente, podemos resolver isso com o comando a seguir:

```sh
./back/scripts/migrate.sh --seed
```
___

Este comando pode ser executado também, estando no diretório **/back** da seguinte forma:

```sh
composer migrate --seed
```

Agora sim!
--
Já podemos acessar o projeto com alguns dados inseridos. Utilize o login e senha a seguir para logar na aplicação:

Login: admin@admin.com
--
Password: password
--
