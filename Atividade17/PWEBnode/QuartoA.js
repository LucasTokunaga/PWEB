const fs = require('fs');
fs.readFile('file.txt', (err, data) => {
 if (err) throw err;
 const registros = data.toString().split('\n');
   registros.forEach((registro) => {
   console.log(registro);
   console.log('aqui');
 });
});
 
for (var i=1; i<=10; i++)
   console.log("segunda parte="+i);