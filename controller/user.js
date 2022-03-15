const userModel = require('../Model/user');
const argon2 = require('argon2');
const user = require('../Model/user');

exports.signup = async (req, res, next) => {
    try {
        const hash = await argon2.hash(req.body.password, {
            type: argon2.argon2id,
            memoryCost: 2 ** 16,
            parallelism: 1
        })
        const user = new user({
            email: req.body.email,
            password: hash
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error });
    }
    user.save()
    .then(() => res.status(201).json({ message: 'User registered' }))
    .catch(error => res.status(400).json({ error }))
    

};

exports.login = (req, res, next) => {};