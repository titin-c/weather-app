import React, { useState } from "react";
import converDegreesEnVientos from "../helpers/converDegreesEnVientos";
import convertKelvinCelsius from "../helpers/convertirKelvinCelsius";
import convertTimestamp from "../helpers/convertTimeStamp";
import fechaHoy from "../helpers/fechaHoy";
import horaActual from "../helpers/horaActual";
import { CloudsDisplay } from "./CloudsDisplay";
import { CoordsDisplay } from "./CoordsDisplay"
import { HumidityDisplay } from "./HumidityDisplay";
import { MenuDisplay } from "./MenuDisplay";
import { PrincipalDisplay } from "./PrincipalDisplay"
import { WindDisplay } from "./WindDisplay";

export const WeatherScreen = ({ coord, timezone, city, sys, weather, main, wind, clouds, visibility }) => {

    const horaActuala = horaActual();
    const sunset = convertTimestamp(sys.sunset);
    const sunrise = convertTimestamp(sys.sunrise);

    const [activeIndex, setActiveIndex] = useState(0);


    const updateIndex = (newIndex) => {
        newIndex = newIndex;
        setActiveIndex(newIndex);
    };

    return (
        <div>
            <div className="container">

                <div className='adorno'></div>
                {/* Calculamos si es de día o de noche con la hora actual y el anochecer o amanecer */}
                <div className={horaActuala > sunset && horaActuala < sunrise ? `principal-display noche` : `principal-display`}>
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
                    <div className="menu-marker" >
                        <div className="carousel">
                            <div
                                className="inner"
                                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                            >

                                <div className="carousel-item">
                                    <PrincipalDisplay
                                        icon={weather[0]['icon']}
                                        description={weather[0]['description']}
                                        temp={main.temp}
                                        max={main.temp_max}
                                        min={main.temp_min}
                                    />
                                </div>
                                <div className="carousel-item">
                                    <WindDisplay 
                                    speed={wind.speed}
                                    deg={wind.deg}/>
                                </div>
                                <div className="carousel-item">
                                    <HumidityDisplay 
                                    humidity={main.humidity}
                                    press={main.pressure}
                                    feels_like={main.feels_like}/>
                                </div>
                                <div className="carousel-item">
                                    <CloudsDisplay 
                                    clouds={clouds.all}
                                    visibility={visibility}
                                    press={main.pressure}/>
                                </div>

                            </div>
                        </div>
                        <div
                            className="marker"
                            style={{ left: `calc(${100 / 4 * activeIndex}% + 15px)` }}
                        >
                        </div>
                        <div className="menu-container">
                            <ul className="navbar-marker menu">

                                <li className="menu-item menu-temp">
                                    <button
                                        className={`${activeIndex === 0 ? "active" : ""}`}
                                        onClick={() => {
                                            updateIndex(0);
                                        }}>
                                        <div className="menu-item-icon"><span className="material-symbols-outlined">
                                            device_thermostat
                                        </span>
                                        </div>
                                        <div className="menu-item-data">{convertKelvinCelsius(main.temp)}º </div>
                                        <div className="menu-item-leyenda">Home</div>
                                    </button>

                                </li>
                                <li className="menu-item menu-viento">
                                    <button
                                        className={`${activeIndex === 1 ? "active" : ""}`}
                                        onClick={() => {
                                            updateIndex(1);
                                        }}>
                                        <div className="menu-item-icon"><span className="material-symbols-outlined">
                                            air
                                        </span></div>
                                        <div className="menu-item-data">{parseInt(wind.speed)} m/s </div>
                                        <div className="menu-item-leyenda">Viento</div>
                                    </button>

                                </li>
                                <li className="menu-item menu-humedad">
                                    <button
                                        className={`${activeIndex === 2 ? "active" : ""}`}
                                        onClick={() => {
                                            updateIndex(2);
                                        }}>
                                        <div className="menu-item-icon"><span className="material-symbols-outlined">humidity_mid</span></div>
                                        <div className="menu-item-data">{main.humidity}%</div>
                                        <div className="menu-item-leyenda">Humedad</div>
                                    </button>
                                </li>
                                <li className="menu-item menu-proba-lluvia">
                                    <button
                                        className={`${activeIndex === 3 ? "active" : ""}`}
                                        onClick={() => {
                                            updateIndex(3);
                                        }}>
                                        <div className="menu-item-icon"><span className="material-symbols-outlined">cloud</span></div>
                                        <div className="menu-item-data">{clouds.all}%</div>
                                        <div className="menu-item-leyenda">Nubes</div>
                                    </button>
                                </li>

                            </ul>

                        </div>
                    </div>

                </div>
            </div>
            <div className="footer">Realizado por <a href="https://titin-c.github.io/curriculum/"> Titín Colomer</a></div>
        </div>
    )
}
