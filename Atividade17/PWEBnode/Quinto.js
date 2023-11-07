var eventos = require('events');
var EmissorEventos = eventos.EventEmitter;
var ee = new EmissorEventos();
// definido o evento dados que quando for emitido a função recebida
//como argumento será mostrada
ee.on('dados', function(fecha){ 
  console.log(fecha);
});
// emitindo o evento
setInterval(function(){
  ee.emit('dados', Date.now());
}, 500);