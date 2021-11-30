import React, {useState} from 'react';

const OpcEmpleados = ({opc}) => {

    const [resp, setResp]= useState({});
    const [empleado, setEmpleado]= useState({
        id:0,
        nombre:'',
        edad:0,
        telefono: 0,
        domicilio: '', 
        entrada:'',
        salida:'',
        salario:0
    })

    const {id, nombre, edad, telefono, domicilio, entrada, salida, salario}= empleado;

    const handleChange= e=>{
        setEmpleado({
            ...empleado, [e.target.name]: e.target.value
        });
    }

    const AltaDatos = () => {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
               // Typical action to be performed when the document is ready:
              console.log(xhttp.responseText);
            }
        };
        xhttp.open('GET', 'https://databasemancasino03.000webhostapp.com/AltaEmpleados.php?Nom='+ empleado.nombre + '&Edad=' + empleado.edad + '&Domicilio=' + empleado.domicilio + '&HEntrada=' + empleado.entrada + '&HSalida=' + empleado.salida + '&Tel=' + empleado.telefono  + '&Salario=' + empleado.salario);
        xhttp.send();

    };

    const handleSearch= e=>{
        e.preventDefault();
        const btnBusqueda = () =>{
            const xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
              if (this.readyState === 4 && this.status === 200) {
                //var temp = JSON.parse(xhttp.responseText)[0];
                setResp(JSON.parse(xhttp.responseText)[0]);
               
              }
            };
            xhttp.open('GET', 'https://databasemancasino03.000webhostapp.com/ConsultaEmpleado.php?Id='+ empleado.id);
            xhttp.send();
          };
        btnBusqueda();
        console.log(resp);
    }

    const handleSubmit= e=>{
        e.preventDefault();
        AltaDatos();

    }
    
    if(opc===0) return null;
    if(opc==='1'){
        return(
            <div>
                <h2>-Agregar Empleado-</h2>
                    <form onSubmit={handleSubmit}>
                    <label >Nombre del empleado:</label>
                    <input
                        type="text"
                        className="u-full-width"
                        placeholder="Nombre empleado.."
                        name="nombre"
                        id="nombre"
                        value={nombre}
                        onChange={handleChange}/>
                    <label >Edad:</label>
                    <input
                        type="number"
                        className="u-full-width"
                        placeholder="..."
                        name="edad"
                        id="edad"
                        value={edad}
                        onChange={handleChange}/>
                    <label >Telefono:</label>
                    <input
                        type="number"
                        className="u-full-width"
                        placeholder="33...."
                        name="telefono"
                        id="telefono"
                        value={telefono}
                        onChange={handleChange}/>
                    <label >Domicilio:</label>
                    <input
                        type="text"
                        className="u-full-width"
                        placeholder="Direccion..."
                        name="domicilio"
                        id="domicilio"
                        value={domicilio}
                        onChange={handleChange}/>
                    <label >Hora de entrada :</label>
                    <input
                        type="time"
                        className="u-full-width"
                        placeholder="hrs"
                        name="entrada"
                        id="entrada"
                        value={entrada}
                        onChange={handleChange}/>
                    <label >Hora de salida :</label>
                    <input
                        type="time"
                        className="u-full-width"
                        placeholder="hrs"
                        name="salida"
                        id="salida"
                        value={salida}
                        onChange={handleChange}/>
                    <label >Salario:</label>
                    <input
                        type="number"
                        className="u-full-width"
                        placeholder="$.."
                        name="salario"
                        id="salario"
                        value={salario}
                        onChange={handleChange}/>
                    <button type="submit" className="u-full-width button-primary ">
                    Agregar 
                    </button>
                </form>
            </div>
        );

    }else if(opc==='2'){
        return(
            <div>
                <h2>-Modificar Empleado-</h2>
                <form onSubmit={handleSubmit}>
                <label >Nombre del empleado:</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Nombre empleado.."
                    name="nombre"
                    id="nombre"
                    value={nombre}
                    onChange={handleChange}/>
                 <button type="submit" className="u-full-width button-primary ">
                Modificar
                </button>
                </form>
            </div>
        );
    }else if(opc==='3'){
        return(
            <div>
                <h2>-Buscar Empleado-</h2>
                <form onSubmit={handleSearch}>
                <label >ID del empleado:</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="..."
                    name="id"
                    id="id"
                    value={id}
                    onChange={handleChange}/>
                <label >Nombre del empleado:</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Nombre empleado.."
                    value={resp.Nombre}
                    />
                <label >Edad:</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="..."
                    value={resp.Edad}
                    />
                <label >Telefono:</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="33...."
                    value={resp.Tel}
                    />
                <label >Domicilio:</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Direccion..."
                    name="domicilio"
                    id="domicilio"
                    value={resp.Domicilio}
                    />
                <label >Hora de entrada :</label>
                <input
                    type="time"
                    className="u-full-width"
                    placeholder="hrs"
                    name="entrada"
                    id="entrada"
                    value={resp.HEntrada}
                    />
                <label >Hora de salida :</label>
                <input
                    type="time"
                    className="u-full-width"
                    placeholder="hrs"
                    name="salida"
                    id="salida"
                    value={resp.HSalida}
                    />
                <label >Salario:</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="$.."
                    name="salario"
                    id="salario"
                    value={resp.Salario}
                    />
                <button type="submit" className="u-full-width button-primary ">
                Buscar 
                </button>
            </form>
            </div>
        )
    }
}
 
export default OpcEmpleados;