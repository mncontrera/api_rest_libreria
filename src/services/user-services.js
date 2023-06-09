const { User } = require('../models/user-models')
const jwt = require('jsonwebtoken')

async function getAll(){
    const listUsers = await User.findAll()
    return listUsers;
}

async function getById(id){
    const user = await User.findByPk(id)
    if(!user){
        throw new Error("Usuario no encontrado.")
    }
    return user;
}

async function createUser(name, lastName, email, password){
    const user = new User();
    user.name = name;
    user.lastName = lastName;
    user.email = email;
    user.password = password;

    const userCreated = await user.save()
    return userCreated;
}

async function editUser(id, name, lastName, email){
    const user = await User.findByPk(id)

    if(name){
        user.name = name
    }
    if(lastName){
        user.lastName = lastName;
    }
    if(email){
        user.email = email;
    }

    const userEdited = await user.save()
    return userEdited;
}

async function deleteUser(id){
    const user = await User.findByPk(id)

    await user.destroy()
}

async function login(email, password){
    const user = await User.findOne({
        where:{
            email: email,
            password: password
        }
    })

    if(!user){
        throw new Error("Usuario y/o contraseña invalidos.")
    }

    const token = jwt.sign({
        id: user.id,
        email: user.email,
        name: user.name
    }, 'ClaveUltraSecreta')

    return {
        accessToken: token
    }
}

module.exports = { getAll, getById, createUser, editUser, deleteUser, login }