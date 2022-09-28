function convertKelvinCelsius(kelvin) {
    //convertimos a celsius
    var celsius = kelvin - 273.15;

    //redondeamos
    celsius = parseInt(celsius);

    return celsius;
}

export default convertKelvinCelsius;