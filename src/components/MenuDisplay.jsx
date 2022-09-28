import React from 'react'
import useToggle from '../hooks/useToggle';
import '../../src/menu.css'
export const MenuDisplay = () => {

    const { toggled, setToggle } = useToggle(false);

    return (
        <div className={toggled ? "menu-lat-display active" : "menu-lat-display"}>
            <button
                className='btn-menu-lat'
                onClick={() => setToggle(!toggled)}
            >
                <span class="material-symbols-outlined menu">
                    menu
                </span>
                <span class="material-symbols-outlined cerrar">
                    close
                </span>
                </button>
                <div className='menu-lat'>
<div className='menu-lat-container'>
    <div className='menu-lat-header'>
        menú principal
    </div>
    <div>
        <ul>
            <li><span class="material-symbols-outlined">arrow_right_alt</span> Opción uno</li>
            <li><span class="material-symbols-outlined">arrow_right_alt</span> Opción tres</li>
            <li><span class="material-symbols-outlined">arrow_right_alt</span> Opción 4</li>
            <li><span class="material-symbols-outlined">arrow_right_alt</span> Opción cinco</li>
            <li><span class="material-symbols-outlined">arrow_right_alt</span> Opción seis</li>
            <li><span class="material-symbols-outlined">arrow_right_alt</span> Opción VII</li>
            </ul>
    </div>
    <div className='menu-lat-footer'>
    <span class="material-symbols-outlined">
history
</span>
<span class="material-symbols-outlined">
timeline
</span>
<span class="material-symbols-outlined">
circle_notifications
</span>
<span class="material-symbols-outlined">
settings
</span>
    </div>
</div>
                </div>
            
        </div>
    )
}
