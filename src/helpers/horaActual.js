function horaActual() {

// Creamos el objeto fecha instanciándolo con la clase Date
const fecha = new Date();
// Construimos el formato de salida
const hora = fecha.getHours() + ':' + fecha.getMinutes();
// + ' de ' + fecha.getUTCFullYear()

return hora;
}

export default horaActual;