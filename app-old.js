
const http = require('http');

http.createServer( ( req, res ) => {

    // res.writeHead(200, { 'Content-Type': 'text/plain' })
    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    // res.writeHead(200, { 'Content-Type': 'application/csv' });

    res.write( 'Hola Mundo' );
    // res.write( 'id, nombre\n' );
    // res.write( '1, Paola\n' );
    // res.write( '2, Majo\n' );
    // res.write( '3, Erick\n' );
    // res.write( '4, Enrique\n' );
    res.end();

})
.listen( 8080 );

console.log('Escuchando en el puerto', 8080);