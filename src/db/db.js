const mongoose = require('mongoose')
//Recebe um endereço no Mongo
const conect = process.env.MONGODB_URL;
//Faz a conexão com o banco 
mongoose.connect(conect, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
})