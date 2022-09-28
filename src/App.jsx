import { useEffect, useState } from "react";
import { WeatherScreen } from "./components/WeatherScreen";
import datos from "./data/datos";

import '../src/styles/App.css';


function App() {

  const apiUrl = "https://api.openweathermap.org/data/2.5/weather?id=2509954&appid=ccdc985a760a041a2a6c62674597b2ce";

  
  const [data, setData] = useState(datos);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async ()=>{
      var datos = await fetch(apiUrl).then(res => {
        return res.json();
      });
      //console.log(data);
      
      setData(datos);
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
<>
{!loading  ?  <WeatherScreen 
                  timezone={data.timezone}
                  city={data.name}
                  sys={data.sys} 
                  coord={data.coord}

                  weather={data.weather}
                  main={data.main}

                  wind={data.wind}
                  sun

                  clouds={data.clouds}
               /> 
               : ("Cargando...") }


</>
       
  )
}

export default App;
