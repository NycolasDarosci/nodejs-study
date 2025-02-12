const path = require('path');

// nome do arquivo atual
console.log(path.basename(__filename))

// nome diretorio atual
console.log(path.dirname(__filename))

// extensao do arquivo atual
console.log(path.extname(__filename))

// cria objeto path
/*
{
  root: 'C:\\',
  dir: 'C:\\Users\\PICHAU\\Desktop\\projetos\\node-study\\modules',
  base: 'path.js',
  ext: '.js',
  name: 'path'
}

*/
console.log(path.parse(__filename))

// adicionar caminhos de arquivos
// modules/path.js/test/test.html
console.log(path.join(__filename, "test", "test.html"))