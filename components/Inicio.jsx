import React, { } from 'react';

const Inicio = ({setOpc}) => {
    const handleClick = e=>{
        setOpc(e.target.value)
    }
    return ( 
        <div>
            <h1>Menu Principal</h1>
            <label >Informacion y registro de Clientes</label>
            <button value="1" onClick={handleClick} className="u-full-width button-primary ">Clientes</button>

            <label >Venta de productos y fichas</label>
            <button value="2" onClick={handleClick} className="u-full-width button-primary ">Ventas</button>

            <label >Informacion y configuracion de empleados</label>
            <button value="3" onClick={handleClick} className="u-full-width button-primary ">Empleados</button>

            <label >Informacion y configuracion de juegos</label>
            <button value="4" onClick={handleClick} className="u-full-width button-primary ">Juegos</button>

            <label >Informacion y configuracion de productos</label>
            <button value="5" onClick={handleClick} className="u-full-width button-primary ">Almacen</button>
        </div>
     );
}
 
export default Inicio;