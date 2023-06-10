const { User } = require('../models/user-models')
const jwt = require('jsonwebtoken')

async function login(name, password){
    const user = await User.findOne({
        where:{
            name: name,
            password: password
        }
    })

    if(!user){
        throw new Error("Usuario y/o contraseña invalidos.")
    }

    const token = jwt.sign({
        id: user.id,
        name: user.name
    }, 'ClaveUltraSecreta')

    return {
        accessToken: token
    }
}

module.exports = { login }