// Importaciones
const { argv } = require('./config/yargs');
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors/safe');



// Obtenemos el comando ingresado
let comando = argv._[0];

switch ( comando ) {
    case 'crear':
        let tarea = porHacer.crear( argv.descripcion );
        console.log( tarea );
        break;
    case 'listar':
        let listado = porHacer.getListado();

        for (const tarea of listado) {
            console.log(colors.green('======= Por hacer ======'));
            console.log( tarea.descripcion );
            console.log('Estado', tarea.completado );
            console.log(colors.green('========================='));
        }
        
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar( argv.descripcion, argv.completado );
        break;
    case 'borrar':
        let borrado = porHacer.borrar( argv.descripcion );
        console.log(borrado);
        break;
    default:
        break;
}