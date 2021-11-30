import React, {useState } from 'react';
import OpcClientes from './OpcClientes';


const Cliente = () => {
    const [opc,setOpc]= useState(0);
     
    const handleClick = e=>{
        setOpc(e.target.value)
    }
    
    return ( 
        <div>
            <h2>Menu Cliente</h2>
            <button value="1" onClick={handleClick} className="u-full-width button-primary ">Agregar Cliente</button>
            <button value="2" onClick={handleClick} className="u-full-width button-primary ">Buscar Cliente</button>
            <button value="3" onClick={handleClick} className="u-full-width button-primary ">Clientes Deudores</button>
            <OpcClientes opc={opc}/>
        </div>
     );
}
 
export default Cliente;