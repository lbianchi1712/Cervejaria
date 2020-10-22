const Product = require('../models/Product');

module.exports = {
    async index(req, res) {
        const products = await Product.find();

        return res.json(products);
    },

    async store(req, res) {
        const { filename } = req.file;
        const { nome, descricao, preco, tipos } = req.body;

        const product = await Product.create({
          imagem: filename,
          nome,
          descricao,
          preco,
          tipos: tipos.split(',').map(tipo => tipo.trim()), 
        });

        return res.json(product);
    },

    async delete(req, res) {
        const { _id } = req.headers;

        const product = await Product.findOneAndDelete(_id);

        return res.json(product);
    }
};