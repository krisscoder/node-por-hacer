const opts = {
    descipcion: {
        demand: true,
        alias: 'd'
    },
    completado: {
        default: true,
        alias: 'c'
    }
}
const argv = require('yargs')
    //define argumentos (comandos) para la linea de comando
    .command('actualizar', 'Actualizar estado', {
        descipcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea'
        },
        completado: {
            default: true,
            alias: 'c',
            desc: 'Marca como completado o pendienete.'
        }
    })
    .command('crear', 'Crea una tarea', {
        descipcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea'
        }
    })
    .command('borrar', 'Borrar una tarea', {
        descipcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea'
        }
    })
    .help()
    .argv;

//meto argv en el objeto general Module
module.exports = {
    argv
}