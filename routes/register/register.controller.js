const { registerUser } = require('./../../models/auth/auth.model');

async function httpRegister(req, res) {
    const user = {
        email: req.body.email,
        password: req.body.password,
    };
    const newUser = await registerUser(user);
    return res.json(newUser);
}

module.exports = { httpRegister };
