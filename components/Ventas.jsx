import React, { useState } from 'react';
import OpcVentas from './OpcVentas';

const Ventas = () => {
   const [opc,setOpc]= useState(0)

   const handleClick = e=>{
    setOpc(e.target.value)
}
    return ( 
        <div>
            <h2>Menu Ventas</h2>
            <button value="1" onClick={handleClick} className="u-full-width button-primary botonColor">Vender Producto</button>
            <button value="2" onClick={handleClick} className="u-full-width button-primary botonColor">Vender Fichas</button>
            <OpcVentas opc={opc}/>
        </div>
     );
}
 
export default Ventas;