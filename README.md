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

# Dependências utilizadas

## NODEMON

Monitora alterações no código fonte e atualiza o servidor.

Para saber mais: https://nodemon.io

_Lembrando que o nodemon deve ser instalado como DEVELOPMENT MODE (yarn add nodemon -D)_

## EXPRESS

Framework web rápido, flexível e minimalista para Node.js.

Para saber mais: https://expressjs.com/pt-br/

## NUNJUCKS

É uma TEMPLATE ENGINE, para renderizar conteúdos HTML com JS.

Para saber mais: https://mozilla.github.io/nunjucks/

## ESLINT

Serve para garantir que todos os programadores envolvidos no projeto utilizem uma mesma guia de estilos.

Para saber mais: https://eslint.org

_Lembrando que o eslint deve ser instalado como DEVELOPMENT MODE (yarn add nodemon -D)_

_NOTA: Depois de instalador não esquecer de rodar o comando:_

```bash
npx eslint --init
```

How would you like to configure ESLint?
\> Use a popular style guide

Witch style guide do you want to follow?
\> Standard (https://github.com/standard/standard)

What format do you want your config file to be in?
\> JSON

Would you like to install them now with npm?
\> Y

**_DEPOIS, APAGAR O ARQUIVO 'package-lock.json' E RODAR O COMANDO YARN NA RAIZ DO PROJETO. ISSO GARANTE USAR SÓ O YARN_**

_NOTA: Ao retornarmos para um arquivo .js notaremos que os erros na nossa styleguide são marcados com linhas vermelhas (Isso depois de instalada a extenção do ESLint_

# Extenções VSCODE utilizadas

## Nunjucks

A Nunjucks syntax definition. (ronnidc)

## EDITOR CONFIG

Uma extenção que serve para padronizar a formatação de códigos fontes.

EditorConfig for VSCode. (EditorConfig)

Depois de instalada a extenção, criar um arquivo '.editorconfig' na raiz do projeto com o seguinte conteúdo:

```javascript
root = true

[*]
indent_style = space
indent_size = 2
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
```

## ESLINT

Integrates ESLint Javascript into VS Code. (Dirk Baeumer)

Serve para garantir que todos os programadores envolvidos no projeto utilizem uma mesma guia de estilos.

_NOTA: Abrir o user settings (JSON) 'Ctrl + Shift + P' > setting > Preferences: Open Settings (JSON):_

Adicionar:

**"prettier.eslintIntegration": true,**
**"editor.formatOnSave": true,**

_Com isso, toda vez que salvarmos um arquivo ele formatará seguindo o styleguide definido na inicialização do ESLint _

[Vide dependências](#Dependências-utilizadas)

## PRETTIER

A VS Code plugin for prettier/prettier. (Esben Petersen)

Automatiza algumas formatações do ESLINT
