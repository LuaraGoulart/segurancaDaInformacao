const mongoose = require('mongoose')

const conect = process.env.MONGODB_URL;

mongoose.connect(conect, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
})