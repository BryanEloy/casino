import React, {useState} from 'react';
import OpcAlmacen from './OpcAlmacen';

const Almacen = () => {
    const [opc,setOpc]= useState(0);
     
    const handleClick = e=>{
        setOpc(e.target.value)
    }
    return ( 
        <div>
            <h2>Menu Almacen</h2>
            <button value="1" onClick={handleClick} className="u-full-width button-primary ">Agregar Producto</button>
            <button value="2" onClick={handleClick} className="u-full-width button-primary ">Modificar Producto</button>
            <button value="3" onClick={handleClick} className="u-full-width button-primary ">Buscar Producto</button>
            <OpcAlmacen opc={opc}/>
        </div>
     );
}
 
export default Almacen;