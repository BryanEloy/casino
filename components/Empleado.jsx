import React, { useState} from 'react';
import OpcEmpleados from './OpcEmpleados';

const Empleado = () => {
    const [opc,setOpc]= useState(0);
     
    const handleClick = e=>{
        setOpc(e.target.value)
    }

    return (  
        <div>
            <h2>Menu Empleado</h2>
            <button value="1" onClick={handleClick} className="u-full-width button-primary ">Agregar Empleado</button>
            <button value="2" onClick={handleClick} className="u-full-width button-primary ">Modificar Empleado</button>
            <button value="3" onClick={handleClick} className="u-full-width button-primary ">Buscar Empleado</button>
            <OpcEmpleados opc={opc}/>
        </div>
    );
}
 
export default Empleado;