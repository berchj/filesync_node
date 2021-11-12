const fs = require('fs')
const crearArchivoMultiplicar = async (numero,listar,hasta) => {
    try {
        let salida = ''
        for (let e = 1; e <= hasta; e++) {
            salida += `${numero} x ${e} = ${numero * e} \n`
        }
        if(listar) console.log(salida)
        await fs.writeFileSync(`./output/tabla-${numero}.txt`, salida)
        return `tabla-${numero}.txt`
    } catch (err) {
        console.error(err.message)
    }
}
module.exports = { crearArchivoMultiplicar }