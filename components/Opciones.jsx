import React from 'react';
import Cliente from './Cliente';
import Ventas from './Ventas';
import Empleado from './Empleado';
import Juegos from './Juegos';
import Almacen from './Almacen';

const Opciones = ({opc}) => {
    
    if(opc===0){
        return (<div className="fondo"></div>);
    }else if(opc==='1'){
        return (<div><Cliente/></div>);
    }else if(opc==='2'){
        return (<div><Ventas/></div>);
    }else if(opc==='3'){
        return (<div><Empleado/></div>);
    }else if(opc==='4'){
        return (<div><Juegos/></div>);
    }else if(opc==='5'){
        return (<div><Almacen/></div>);
    }
}
 
export default Opciones;