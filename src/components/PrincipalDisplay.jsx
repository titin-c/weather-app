import React from 'react';
import convertKelvinCelsius from '../helpers/convertirKelvinCelsius';
import fechaHoy from '../helpers/fechaHoy';


export const PrincipalDisplay = ({ icon, description, temp, min, max }) => {

    return (
        <div >
            <img
                src={`http://openweathermap.org/img/wn/${icon}@4x.png`}
                alt={description} />

            <div className='temp'>
                {convertKelvinCelsius(temp)}
                <span className='temp-symbol'>o</span>
            </div>
            <div className='description'>{description}</div>
            <div className='fecha'>{fechaHoy()}</div>
            <div className='temp-mix-max-container'>
                <div className='temp-max'>
                    <span className="material-symbols-outlined">
                        vertical_align_top
                    </span>
                    <span>{convertKelvinCelsius(max)}º</span>
                </div>
                <div className='temp-min'>
                    <span className="material-symbols-outlined">
                        vertical_align_bottom
                    </span>
                    <span>{convertKelvinCelsius(min)}º</span>
                </div>

            </div>

        </div>
    )
}
