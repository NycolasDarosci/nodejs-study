const mongoose = require('mongoose');

const url = `mongodb+srv://${process.env.MONGOOSE_USERNAME}:${process.env.MONGOOSE_PASSWORD}@nodestudy.kbak1.mongodb.net/?retryWrites=true&w=majority&appName=NodeStudy`

const databaseConnection = async () => {
    await mongoose.connect(url)
        .then(console.log("Conexão efetuada com sucesso!"))
        .catch(err => {
            console.log('Ocorreu um erro ao realizar a conexão! Erro: ', err)
        });
}

module.exports = databaseConnection;