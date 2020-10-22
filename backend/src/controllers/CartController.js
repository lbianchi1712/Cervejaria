const Cart = require('../models/Cart');
const User = require('../models/User');
const Product = require('../models/Product');

module.exports = {
    async store(req, res) {
        const { user_id } = req.body;
        const { product_id } = req.params;

        var cod_product = product_id.toString();
        var tamanho_product = cod_product.length;
        
        if (tamanho_product < 24) {
            return res.status(400).json({ error: 'Produto não encontrado' });
        }

        const product = await Product.findById(product_id);

        if(!product) {
            return res.status(400).json({ error: 'Produto não encontrado' });
        }

        var cod_user = user_id.toString();
        var tamanho_user = cod_user.length;

        if (tamanho_user < 24) {
            return res.status(400).json({ error: 'Produto não encontrado' });
        }

        const user = await User.findById(user_id);
        
        if(!user) {
            return res.status(400).json({ error: 'Usuário inexistente' });
        }
        
        const cart = await Cart.create({
            user: user_id,
            product: product_id,
        });
        await cart.populate('product').populate('user').execPopulate();

        return res.json(cart);
    },

    async show(req, res) {
        const { user_id } = req.headers;

        const cart = await Cart.find({ user: user_id }).populate('product');

        return res.json(cart);
    },

    async delete(req, res) {
        const { _id } = req.body;

        if(_id === undefined) {
            return res.status(400).json({ error: 'Compra não encontrada' });
        }

        const cart_id = await Cart.findById({ _id: _id });

        if (!cart_id) {
            return res.status(400).json({ error: 'Compra não encontrada' });
        } else {
            const cart = await cart_id.deleteOne();
    
            return res.json(cart);
        }
    }
}