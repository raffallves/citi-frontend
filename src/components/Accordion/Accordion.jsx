import './Accordion.css'
import { useState } from 'react';

export default function Accordion({ id }) {
    const [clicked, setClicked] = useState('0');

    function handleToggle() {
        setClicked(id);
    }

    return (
        <>
            <button className='accordion-button' onClick={handleToggle}>
                Ver
            </button>
            <div className={`accordion-info-wrapper ${clicked === id ? ' open' : ''}`}>

            </div>
        </>
    )
}