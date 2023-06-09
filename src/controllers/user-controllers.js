const userService = require('../services/user-services')

async function getAllUsers(req, res){
    const users = await userService.getAll();
    res.status(200).send(users)
}

async function getUserById(req, res, next){
    const { id } = req.params;
    try{
        const user = await userService.getById(id);
        res.status(200).send(user)
    }catch(error){
        next(error)
    }
}

async function createUser(req, res){
    const { name, lastName, email, password } = req.body;
    const user = await userService.createUser(name, lastName, email, password);
    res.status(201).send(user)
}

async function editUser(req, res){
    const { id } = req.params;
    const { name, lastName, email } = req.body;
    const user = await userService.editUser(id, name, lastName, email);
    res.status(201).send(user)
}

async function deleteUser(req, res){
    const { id } = req.params;

    await userService.deleteUser(id);
    
    res.status(200).send(`Usuario con id ${id} eliminado correctamente.`)
}

async function login(req, res, next){
    const { email, password } = req.body

    try{
        const result = await userService.login(email, password)
        res.status(200).send(result)
    }catch(error){
        next(error)
    }
}


module.exports = { getAllUsers, getUserById, createUser, editUser, deleteUser, login }