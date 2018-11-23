# bootcamp-modulo1
Lessons of Bootcamp Module 1

```bash
echo "# bootcamp-modulo1" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/fredericomf/bootcamp-modulo1.git
git push -u origin master
```

# Iniciando o projeto

## Comandos

Para iniciar um projeto nodejs devemos rodar, na pasta do projeto, o comando:

```bash
yarn init -y
```
_Note que a opção -y serve para aceitar os valores padrões de inicialização do projeto_

Após instalar o 'nodemon', devemos adicionar os scripts no package.json:

```javascript
"scripts" : {
    "start": "nodemon index.js"
}
```
_Lembrando que o nodemon deve ser instalado como DEVELOPMENT MODE (yarn add nodemon -D)_
