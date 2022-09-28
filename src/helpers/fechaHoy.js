function fechaHoy() {
    // Creamos array con los meses del año
const meses = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
// Creamos array con los días de la semana
const dias_semana = ['Domingo', 'Lunes', 'martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
// Creamos el objeto fecha instanciándolo con la clase Date
const fecha = new Date();
// Construimos el formato de salida
const date = dias_semana[fecha.getDay()] + ', ' + fecha.getDate() + ' de ' + meses[fecha.getMonth()] ;
// + ' de ' + fecha.getUTCFullYear()

return date;
}

export default fechaHoy;