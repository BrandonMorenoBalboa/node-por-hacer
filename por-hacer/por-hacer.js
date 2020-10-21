const { rejects } = require('assert');
const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify( listadoPorHacer );

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo guardar en la base de datos');

        //console.log('Registro guardado en la base de datos');
    });
}

const cargarDB = () => {

    try {
        // Trae la informacion existentes en data.json y los asigna listadoPorHacer
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }

}

const crear = ( descripcion ) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push( porHacer )

    guardarDB();

    return porHacer;
}

const getListado = () => {
    cargarDB();
    //listadoPorHacer = require('../db/data.json');
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();

    let index = listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion );

    // Validamos que tarea nos devuelva un valor correcto
   if ( index >= 0 ) {
        listadoPorHacer[index].completado = completado
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = ( descripcion ) => {

    cargarDB();

    let index = listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion );

    if( index >= 0 ) {
        listadoPorHacer.splice(index, 1 );
        guardarDB();
        return true;
    } else {
        return false;
    }

}


module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}