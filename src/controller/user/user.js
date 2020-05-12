const User = require('../../models/User');

const createUser = async (req, res) => {
    // Criando novo usuario
    try {
        const user = new User(req.body)
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({ user, token })
    } catch (error) {
        res.status(400).send(error)
    }
};

const loginUser = async (req, res) => {
    //Login com usuário cadastrado
    try {
        const { email, password } = req.body
        const user = await User.findByCredentials(email, password)
        if (!user) {
            return res.status(401).send({ error: 'Login failed! Check authentication credentials' })
        }
        const token = await user.generateAuthToken()
        res.send({ user, token })
    } catch (error) {
        res.status(400).send(error)
    }

}

const logoutUser = async (req, res) => {
    // Desconectando o usuário
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token != req.token
        })
        await req.user.save()
        res.send()
    } catch (error) {
        res.status(500).send(error)
    }
}

const logoutAllUser = async (req, res) => {
    // Desconectando o usuário de todas telas
    try {
        req.user.tokens.splice(0, req.user.tokens.length)
        await req.user.save()
        res.send()
    } catch (error) {
        res.status(500).send(error)
    }
}

const meUser = async (req, res) => {
    // Ver o perfil do usuário logado
    res.send(req.user)
}

module.exports = {
    createUser,
    loginUser ,
    meUser ,
    logoutUser ,
    logoutAllUser  
}