const User = require('../models/User');

module.exports = {
    async store(req, res) {
        const {
            nome,
            sobrenome,
            email,
            password
        } = req.body;

        let user = await User.findOne({
            email
        });

        if (!user) {
            user = await User.create({
                nome,
                sobrenome,
                email,
                password,
            });
        }

        return res.json(user);
    },

    async login(req, res) {
        const {
            email,
            password
        } = req.body;

        try {
            const user = await User.findOne({
                email
            });

            if (!user) {
                return res.status(400).json({
                    error: 'Cadastro não encontrado'
                });
            }

            if (password != user.password) {
                return res.status(401).json({
                    error: 'Senha invalida'
                });
            }

            user.password = undefined;

            return res.json(user);

        } catch (error) {
            res.status(400).send({
                error: 'Não foi possível fazer o login'
            });
        }

    },

    async index(req, res) {
        const {
            _id
        } = req.headers;

        const user = await User.findOne({
            _id
        });

        if (!user) {
            return res.status(400).json({
                error: 'Não foi informado usuario'
            });
        }

        return res.json(user);
    }
};