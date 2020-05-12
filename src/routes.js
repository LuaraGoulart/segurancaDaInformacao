const express        = require('express')
const auth           = require('./middleware/auth')
const userRoutes     = require('./controller/user/user')

const router = express.Router()

//Rotas do usuário
router.get('/users/me', auth, userRoutes.meUser )
router.post('/user', userRoutes.createUser);
router.post('/user/login',userRoutes.loginUser );
router.post('/users/me/logout', auth, userRoutes.logoutUser )
router.post('/users/me/logoutall', auth, userRoutes.logoutAllUser )



module.exports = router