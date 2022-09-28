import convertTimestamp from "../helpers/convertTimeStamp";
import horaActual from "../helpers/horaActual";
import { CoordsDisplay } from "./CoordsDisplay"
import { MenuDisplay } from "./MenuDisplay";
import { PrincipalDisplay } from "./PrincipalDisplay"

export const WeatherScreen = ({ coord, timezone, city, sys, weather, main, wind, clouds }) => {

    const horaActuala = horaActual();
    const sunset = convertTimestamp(sys.sunset) ;
    const sunrise = convertTimestamp(sys.sunrise) ;
    console.log(sunrise)
    console.log(horaActuala)
    console.log(sunset)

    return (
        <div>
            <div className="container">

                <div className='adorno'></div>
                <div className={horaActuala > sunset && horaActuala < sunrise ? `principal-display noche`  : `principal-display`}>
                    <div className="top-menu">
                        <CoordsDisplay
                            lon={coord.lon}
                            lat={coord.lat}

                            country={sys.country}
                            sunrise={sys.sunrise}
                            sunset={sys.sunset}

                            timezone={timezone}
                            city={city}
                        />
                        <MenuDisplay />
                    </div>
                    <PrincipalDisplay
                        icon={weather[0]['icon']}
                        description={weather[0]['description']}
                        temp={main.temp}
                        max={main.temp_max}
                        min={main.temp_min}
                    />
                </div>
                <div className="menu-container">
                    <div className="menu">
                        <div className="menu-item menu-viento">
                            <button>
                                <div className="menu-item-icon"><span className="material-symbols-outlined">
                                    air
                                </span></div>
                                <div className="menu-item-data">{wind.speed} m/s </div>
                                <div className="menu-item-leyenda">Viento</div>
                            </button>
                        </div>
                        <div className="menu-item menu-humedad">
                            <button>
                                <div className="menu-item-icon"><span className="material-symbols-outlined">humidity_mid</span></div>
                                <div className="menu-item-data">{main.humidity}%</div>
                                <div className="menu-item-leyenda">Humedad</div>
                            </button>
                        </div>
                        <div className="menu-item menu-proba-lluvia">
                            <button>
                                <div className="menu-item-icon"><span className="material-symbols-outlined">cloud</span></div>
                                <div className="menu-item-data">{clouds.all}%</div>
                                <div className="menu-item-leyenda">Nubes</div>
                            </button>

                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">Realizado por <a href="https://titin-c.github.io/curriculum/"> Titín Colomer</a></div>
        </div>
    )
}
