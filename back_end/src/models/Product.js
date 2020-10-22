const mongoose = require('mongoose');

const ProductsSchema = new mongoose.Schema({
    imagem: String,
    nome: String,
    descricao: String,
    preco: Number,
    tipos: [String],
}, {
    toJSON: {
        virtuals: true,
    }
});

ProductsSchema.virtual('imagem_url').get(function() {
    return `http://localhost:3333/files/${this.imagem}`
})

module.exports = mongoose.model('Product', ProductsSchema);