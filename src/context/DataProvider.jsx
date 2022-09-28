import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export const DataProvider = (props) => {

    // estado para saber si esta cargado
    const [loading, setLoading] = useState(false);
    //estado carga de datos
    const [data, setData] = useState([]);

    

     const fetchWeatherData = async () => {
         setLoading(true);
         //const req = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=-0.3773900&lon=39.4697500&lang=sp&exclude=alerts&appid=ccdc985a760a041a2a6c62674597b2ce`);
         const resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=2509954&appid=ccdc985a760a041a2a6c62674597b2ce`);
         const info = await resp.json();
         
         setData(info);
         setLoading(false);
     }
    /* async function fetchWeatherData() {
        await fetch(`https://api.openweathermap.org/data/2.5/weather?id=2509954&appid=ccdc985a760a041a2a6c62674597b2ce`)
            .then(response => response.json())
            .then(response => {
                setData(response.result);
                console.log(response.result);
    })
            .catch(err => console.error(err));
    } */


    
    useEffect(() => {
        fetchWeatherData();
    }, []);


    



    //para guardar local storage primero comprobamos
    

    //Exporto los valores para pasarselos a todos los hijos con provider
    const value = {
        datos: [data, setData],
        loading: [loading, setLoading]
    }

    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )

}

