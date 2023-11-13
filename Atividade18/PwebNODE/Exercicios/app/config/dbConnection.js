var sql = require ('mssql/msnodesqlv8');
module.exports = function(){

 const config = {
 user: 'BD2211026',
 password: '123123',
 database: 'BD', //Na FATEC, utilizar o database BD ou LP8
 server: 'Apolo', //Na FATEC, utilizar o ip: 192.168.1.6 no nome do servidor
 driver: 'msnodesqlv8',
 }
 return sql.connect(config);
} 
