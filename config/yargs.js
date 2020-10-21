const descripcion = {
    demand: true,
    alias: 'd'
};

const completado = {
    demand: true,
    alias: 'c',
    default: true
}

const argv = require('yargs')
    .command('crear', 'Crear tareas por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualizar estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra las tareas ingresadas', {
        descripcion
    })
    .command('listar', 'Listado de tareas por hacer')
    .help()
    .argv;

module.exports = {
    argv
}
