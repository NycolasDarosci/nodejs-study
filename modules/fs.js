const fs = require('fs');
const path = require('path');

// criar uma pasta
// fs.mkdir(path.join(__dirname, "/test "), (err) => {
//     if (err) return console.log('Erro:', err);
//
//     console.log("pasta /test criado com sucesso!")
// });

const dirPath = path.join(__dirname, "test")

if (!fs.existsSync(dirPath)) {
    fs.mkdir(path.join(__dirname, "test"), (err) => {
        if (err) return console.log(err);
        console.log("arquivo test criado");
    })
}

fs.writeFile(path.join(__dirname, "test", "test.txt"), "hello world", (err) => {
    if (err) return console.log(err);
    console.log("arquivo test criado");
});

fs.appendFile(path.join(__dirname, "test", "test.txt"), "aa hello world2", (err) => {
    if (err) return console.log(err);
    console.log("arquivo test criado");
})

//
// fs.rm(__dirname + "/test", (err) => {
//     if (err) return console.log(err);
//     console.log("Removido com sucesso")
// })

// fs.writeFile(path.join(__dirname + "/test", "test.txt"), "hello test", (err) => {
//     if (err) return console.log(err);
//     console.log("arquivo test criado com sucesso!")
// })
//
// fs.writeFile(path.join(__dirname, "test.js"), "heelo test", (err) => {
//     if (err) console.log('Erro: ', err)
//
//     console.log("arquivo test criado com sucesso!")
//
// });
