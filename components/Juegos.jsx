import React, { useState } from 'react';
import OpcJuegos from './OpcJuegos';

const Juegos = () => {
    const [opc,setOpc]= useState(0);
     
    const handleClick = e=>{
        setOpc(e.target.value)
    }
    return ( 
        <div>
            <h2>Menu Juegos</h2>
            <button value="1" onClick={handleClick} className="u-full-width button-primary ">Agregar Juego</button>
            <button value="2" onClick={handleClick} className="u-full-width button-primary ">Modificar Juego</button>
            <button value="3" onClick={handleClick} className="u-full-width button-primary ">Buscar Juego</button>
            <OpcJuegos opc={opc}/>
        </div>
     );
}
 
export default Juegos;