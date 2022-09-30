import React from 'react'
import convertKelvinCelsius from '../helpers/convertirKelvinCelsius'
import fechaHoy from '../helpers/fechaHoy'

export const HumidityDisplay = ({humidity, press, feels_like}) => {
  return (
    <div >

            <span className="material-symbols-outlined icono-grande">
            humidity_mid
            </span>

            <div className='temp'>
                {humidity}
                <span className='temp-symbol'>%</span>
            </div>
            <div className='description'>Humedad</div>
            <div className='fecha'>{fechaHoy()}</div>
            <div className='temp-mix-max-container'>
                <div className='temp-max'>
                    <span
                        className="material-symbols-outlined"
                    >
                        compress
                    </span>
                    <span className='dato'>{press / 100}</span>
                    <span className='symbol-leyenda'> bar</span>
                </div>
                <div className='temp-min'>
                    <span
                        className="symbol-leyenda"
                    >
                        Sens. Term.
                    </span>
                    <span  className='dato'>{convertKelvinCelsius(feels_like)}º</span>
                </div>

            </div>

        </div>
  )
}
