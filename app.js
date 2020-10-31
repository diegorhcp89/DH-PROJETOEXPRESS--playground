const express = require("express");
const rotasProdutos = require('./rotas/rotasProduto')
let app = express();

console.log(app);

app.get("/", (req, res) => res.end("Olá mundo!"));
app.get("/contatos", (req, res) => res.end("Pagina contatos"));

app.use('./produtos', rotasProdutos);

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));

/*
app.get("/", (req, res) => res.end("Olá mundo!"));
app.get("/contatos", (req, res) => res.end(["Contato1", "Contato2"]));
app.get('/produtos/:id?', (req, res)=>{
    let {id} = req.params;
    res.send("Eu tenho um produto com o id: ", + id)
})
//criado um servidor


/*
app.get('/produtos/:id', function (req, res){
    let idProduto = req.params.id;
})


const express = require('express')
const router = express.Router();

//rota rais dos produtos / Inicio
router.get('/', (req, res)=>{
    //codigo
});
// Rota que exibe o detalhe de um produto
router.get('/detalhe/:id',(req, res)=>{
    // código
});

module.exports = router;

const rotasProdutos = require('./routes/produtos');

app.use('/produtos, rotasProdutos');

/*
app.get('/home', function (req, res){
    res.send("Olá, estamos na página home")
})

var produto = {
    tipoProduto: null,
    preco: null,
    quantidade: null
}

app.get('/produto/adicionar', function (req, res){
    res.send(produto)
})

const express = require('express');
const app = express();

let produto = {
  tipoProduto: null,
  preco: null,
  quantidade: null
}

tipoProduto = "living"
preco = 1245
quantidade = 300

post.get("/produto/criar", (req, res) => res.end(produto));

const express = require('express');
const app = express();

app.get('/series', function (req, res){
    res.send(series)
})

*/
