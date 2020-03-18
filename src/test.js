const crypto = require("crypto");



const DADOS_CRIPTOGRAFAR = {
    algoritmo: "aes256",
    codificacao : "utf8",
    segredo: "chaves",
    tipo: "hex"
};

function descriptografar(senha) {
    const decipher = crypto.createDecipher(DADOS_CRIPTOGRAFAR.algoritmo, DADOS_CRIPTOGRAFAR.segredo);
    decipher.update(senha, DADOS_CRIPTOGRAFAR.tipo);
    return decipher.final();
};

function criptografar(senha) {
    const cipher = crypto.createCipher(DADOS_CRIPTOGRAFAR.algoritmo, DADOS_CRIPTOGRAFAR.segredo);
    cipher.update(senha);
    return cipher.final(DADOS_CRIPTOGRAFAR.tipo);
};

module.exports = {

    teste(req, res) {
        try{
        let string1 = req.params.decript;
        res.statusCode = 200;
        cripto = criptografar(string1 );
        descripto = descriptografar(cripto);
        res.end(` ${cripto}`)
        } catch(e){
            console.log(e);
        }
    },


}