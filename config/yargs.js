const argv = require('yargs')
                .option('b',{
                    alias:'base',
                    type:'number',
                    description:'Numero el cual se imprimira la tabla',
                    demandOption:true,
                })
                .option('l',{
                    alias:'listar',
                    type:'boolean',
                    default:false,
                    description:'Si se manda el argumento mostrara por consola la tabla impresa de la base'
                })
                .option('h',{
                    alias:'hasta',
                    type:'number',
                    description:'Numero limite de iteracion con la base',
                    demandOption:true,
                })
                .check((argv,options) => {
                    if(isNaN(argv.b) || isNaN(argv.h)) throw 'La base y/o el limite tiene que ser un numero.'
                    return true
                })
                .argv
module.exports = argv