function converDegreesEnVientos(deg) {
    let viento = deg;

    if (viento < 22 || viento >= 337 ) {
        viento = 'N';
        
    } else if (viento >= 22 && viento < 68) {
        viento = 'NE';

    } else if (viento >= 68 && viento < 113) {
        viento = 'E';

    } else if (viento >= 113 && viento < 158) {
        viento = 'SE';

    } else if (viento >= 158 && viento < 203) {
        viento = 'S';

    } else if (viento >= 203 && viento < 248) {
        viento = 'SO';

    } else if (viento >= 248 && viento < 293) {
        viento = 'O';

    } else if (viento >= 293 && viento < 337) {
        viento = 'NO';

    } 
    
    return viento;
    
}

export default converDegreesEnVientos;