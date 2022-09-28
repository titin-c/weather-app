
import '../coords.css';
//esta funcion convierte a hora local unix stamp
import convertTimestamp from '../helpers/convertTimeStamp'
import useToggle from '../hooks/useToggle';
export const CoordsDisplay = ({ lon, lat, timezone, city, country, sunrise, sunset }) => {

    const { toggled, setToggle } = useToggle(false);

    //timezone viene en segundos lo paso a horas
    const timeZone = (timezone / 60) / 60


    return (
        <div>
            <button 
            className='ppal-city'
            onClick={() => setToggle(!toggled)}
            >
                <span className="material-symbols-outlined">location_on</span>
                <span className='ppal-city-name'>{city}</span>
            </button>
            <div className={toggled ? "coords-display active" : "coords-display"}>
                <div className='coords-header'>
                    <span><span class="material-symbols-outlined">language</span> {city}, {country} - UTC + {timeZone}</span> 
                    <button
                    onClick={() => setToggle(!toggled)}
                    >x</button>
                    </div>
                <div className='coords-container'>
                    <div className="display-title">
                    
Coordenadas</div>
                    <div><b>Longitud:</b> {lon}</div>
                    <div><b>Latitud:</b> {lat}</div>
                </div>
                <div className='sunset-rise-container'>
                    
                    <div><b>sunrise:</b> {convertTimestamp(sunrise)}</div>
                    <div><b>sunset:</b> {convertTimestamp(sunset)} </div>
                </div>
            </div>
        </div>
    )

}