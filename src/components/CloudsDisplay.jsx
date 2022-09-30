import React from 'react'
import convertKelvinCelsius from '../helpers/convertirKelvinCelsius'
import fechaHoy from '../helpers/fechaHoy'

export const CloudsDisplay = ({clouds, visibility, press}) => {
  return (
    <div >

            <span className="material-symbols-outlined icono-grande">
            cloud
            </span>

            <div className='temp'>
                {clouds}
                <span className='temp-symbol'>%</span>
            </div>
            <div className='description'>Nubes</div>
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
                        className="material-symbols-outlined"
                    >
                        visibility
                    </span>
                    <span className='dato'>{visibility / 1000}</span>
                    <span className='symbol-leyenda'> Km</span>
                </div>

            </div>

        </div>
  )
}
