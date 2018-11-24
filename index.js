// Criando um servidor HTTP (Aula 3 do Módulo 1)

/*
 * NOTA_ESTUDO: Quando instalarmos dependências, podemos importar para uso utilizando o 'require'.
 * O http é nativo do NODE.
 */
// >>>>> O BLOCO ABAIXO FOI SUBSTITUÍDO PELO USO DO EXPRESS
// const http = require('http');
// // Serve para manipular o I/O
// http.createServer((req, res) => {
//     console.log(req);
//     return res.end('Hello World');
// }).listen(3000); // listen: porta que deve ser escutada

const express = require('express')
const nunjucks = require('nunjucks')

const app = express()

// NOTA_ESTUDO: O parâmetro 'watch' tem comportamento similar ao nodemon
nunjucks.configure('views', {
  autoescape: true,
  express: app,
  watch: true
})

// NOTA_ESTUDO: Opção definida para que o express saiba lidar com dados provenientes de formulários (Isso é meio que padrão usar).
app.use(express.urlencoded({ extended: false }))

// NOTA_ESTUDO: O set do express serve para definir configurações globais. Abaixo definimos a extenção do nunjucks
app.set('view engine', 'njk')

// /**
//  * NOTA_ESTUDO: Os middlewares(ou interceptadores) podem parar o fluxo de uma requisição. Para que o fluxo
//  * não seja interrompido implementamos o next.
//  */
// const logMiddleware = (req, res, next) => {
//     console.log(
//         `HOST: ${req.headers.host} | URL: ${req.url} | METHOD: ${req.method}`
//     );

//     req.appName = "GoNode"; // NOTA_ESTUDO: Podemos definir valores ao req que serão recebidas nos outros endpoints (desde que o middleware esteja sendo usado)

//     return next(); // Passa para o próximo middleware da requisição
// }

// // NOTA_ESTUDO: Se quisermos, podemos fazer com que todas as requisições passem pelo nosso Middleware:
// app.use(logMiddleware);

// CONFIGURAÇÃO DE UMA ROTA DO SERVIDOR (Antes usando um Middleware de exemplo)

// app.get('/', logMiddleware, (req, res) => {
//     return res.send(`Bem vindo ao ${req.appName}`);
// });

const users = ['Frederico', 'Alice', 'Newton']

app.get('/', (req, res) => {
  return res.render('list', { users })
})

app.get('/new', (req, res) => {
  return res.render('new')
})

// ESCUTA O MÉTODO POST
app.post('/create', (req, res) => {
  users.push(req.body.user)
  return res.redirect('/')
})

// app.get('/login', (req, res) => {
//     return res.send('Login');
// });

// // PEGANDO PARÂMETROS PASSADOS NA URL (http://localhost:3000/nome/Frederico) (Utilizando o ':' o parâmetro recebido é armazenado na variável nomeada após os dois pontos)
// app.get('/nome/:name', (req, res) => {
//     return res.send(`Bem-vindo, ${req.params.name}`); // Note que aqui usei req.params não .query
// });

// // PEGANDO PARÂMETROS PASSADOS POR QUERY STRING (http://localhost:3000/query_ex/?name=Frederico)
// app.get('/query_ex', (req, res) => {

//     // JÁ EXEMPLIFICANDO O RETORNO JSON
//     return res.json({
//         message: `Bem-vindo, ${req.query.name}`
//     }); // Note que aqui usei req.query não .params
// });

// ESCUTANDO REQUISIÇÕES NA PORTA 3000
app.listen(3000)
