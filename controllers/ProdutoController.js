const ProdutoController = {
    criarProduto: (req, res)=>{
        res.send("Crianado um Produto");
    },
    deletarProduto: (req, res)=>{
        const {id} = req.params;

        res.send(`Deletando o produto com o id: ${id}`)
    }
}

module.exports = ProdutoController