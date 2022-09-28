import { useState, useEffect } from 'react';
import { getWeatherData } from '../helpers/getWeatherData';


export const useFetchData = () => {
    
    const [state, setState] = useState({
        data:[],
        loading: true
    });


   
   /*

    Esto hace que cuando se cargue el componente por primera vez, lance la petición 
    para cargar las imagenes

    coge los gifs getGif y los pone en setImages

    Usamos useEffects de react para que no renderice la página 
    cada vez que note un cambio
    
    */ 
    useEffect(() => {
        
        getWeatherData(  )
         .then( data => {

            setTimeout( ()=>{

             setState({
                 data: data,
                 loading: false
             });
            },3000);

         })
            
           


    }, []);


    


    return state;
}