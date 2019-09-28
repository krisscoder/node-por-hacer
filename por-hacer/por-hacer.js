const fs = require('fs');

let listadoPorHacer = [];

const cargarDB = () => {
    //se fija si hay algo en el JSON, 
    try {
        //carga JSON en la variable listadoPorHacer
        listadoPorHacer = require('../db/data.json');
    } catch (error) { //si esta vacio, lo setea como array vacio
        listadoPorHacer = [];
    }
}

const guardarDB = () => {
    //convierte un objeto a JASON
    let data = JSON.stringify(listadoPorHacer);

    //guarda JSON file
    fs.writeFile('db/data.json', data, (err) => {
        if (err)
            return (console.log(err));
        else {
            return (console.log(`DB guardada`))
        }
    });
}

const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    }
    listadoPorHacer.push(porHacer);
    guardarDB(listadoPorHacer);
    return porHacer;
}

const getListado = () => {
    cargarDB();
    return (listadoPorHacer);
}

const actualizar = (descripcion, completado) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    })
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return ('Tarea actualizada.');
    } else {
        return ('No se actualizo.')
    }
}

const borrar = (descripcion) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    })
    if (index >= 0) {
        listadoPorHacer.splice(index, 1)
        guardarDB();
        return ('Tarea borrada');
    } else {
        return ('No se pudo borrar.')
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}