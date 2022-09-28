export const getWeatherData = async () =>{
    const longitud= -0.3773900;
    const latitud=  39.4697500;
    const lenguaje= "sp";
    const unidades = "metric";
    const key = "ccdc985a760a041a2a6c62674597b2ce";

    const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${ latitud }&lon=${ longitud }&lang=${ lenguaje }&units=${unidades}&appid=${key}`;
    
    const resp = await fetch(url);
    //Desestructuración de data para que solo muestre lo que necesito
    const {data} = await resp.json();

    const datos = data.map( coord =>{
        return{
            lon: coord.lon,
            lat: coord.lat

        }
    })

    return datos;
  }
 