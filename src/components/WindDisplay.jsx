import React from 'react'
import converDegreesEnVientos from '../helpers/converDegreesEnVientos'
import fechaHoy from '../helpers/fechaHoy'

export const WindDisplay = ({ speed, deg }) => {
    return (
        <div >

            <span className="material-symbols-outlined icono-grande">
                air
            </span>

            <div className='temp'>
                {parseInt(speed)}
                <span className='temp-symbol'>m/s</span>
            </div>
            <div className='description'>Viento</div>
            <div className='fecha'>{fechaHoy()}</div>
            <div className='temp-mix-max-container'>
                <div className='temp-max'>
                    <span
                        className="material-symbols-outlined"
                        style={{ transform: `rotate(${deg}deg)` }}
                    >
                        arrow_upward
                    </span>
                    <span>{deg}</span>
                    <span>º</span>
                </div>
                <div className='temp-min'>
                    <span
                        className="material-symbols-outlined"
                        style={{ transform: `rotate(${deg}deg)` }}
                    >
                        arrow_upward
                    </span>
                    <span>{converDegreesEnVientos(deg)}º</span>
                </div>

            </div>

        </div>
    )
}
