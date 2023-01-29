const userSchema = require('./auth.mongo');

async function registerUser(user) {
    const newUser = new userSchema(user);
    await newUser.save();
    return newUser;
}

module.exports = { registerUser };
