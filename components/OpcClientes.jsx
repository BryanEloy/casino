import React, { useState } from 'react';

const OpcClientes = ({opc}) => {

    const [resp, setResp]= useState({});
    const [cliente, setCliente]= useState({
        id: 0,
        nombre:'',
        alias:'Cliente',
        entrada:'',
        gasto: 0,
        ganado: 0, 
        salida:'',
        saldo:0
    })

    const {id, nombre,entrada}= cliente;

    const handleChange= e=>{
        setCliente({
            ...cliente, [e.target.name]: e.target.value
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
        xhttp.open('GET', 'https://databasemancasino03.000webhostapp.com/AltaClientes.php?Nom='+ cliente.nombre + '&Alias='+ cliente.alias + '&Dinero_gastado=' + cliente.gasto + '&Dinero_ganado=' + cliente.ganado + '&HEntrada=' + cliente.entrada  + '&HSalida=' + cliente.salida);
        xhttp.send();

    };
    const handleSubmit= e=>{
        e.preventDefault();
        AltaDatos();
    }

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
            xhttp.open('GET', 'https://databasemancasino03.000webhostapp.com/ConsultaCliente.php?Id='+ cliente.id);
            xhttp.send();
          };
        btnBusqueda();
    }
     
    if(opc===0) return null;
    if(opc==='1'){
        return(
            <div>
                <h2>-Agregar Cliente-</h2>
            <form onSubmit={handleSubmit}> 
                <label >Nombre del cliente:</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Cliente..."
                    name="nombre"
                    id="nombre"
                    value={nombre}
                    onChange={handleChange}/>
                <label >Hora de entrada:</label>
                <input
                    type="time"
                    className="u-full-width"
                    placeholder="hrs..."
                    name="entrada"
                    id="entrada"
                    value={entrada}
                    onChange={handleChange}/>
                <button type="submit" className="u-full-width button-primary ">
                Agregar 
                </button>
            </form>
            </div>);

    }else if(opc==='2'){
        return(
        <div>
            <h2>-Buscar Cliente-</h2>
            <form onSubmit={handleSearch} >
            <label >ID del cliente:</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Cliente..."
                    name="id"
                    id="id"
                    value={id}
                    onChange={handleChange}/>
            <label >Nombre:</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="..."
                    value={resp.Nombre}
                    />
            <label >Hora de entrada:</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder=""
                    value={resp.Hentrada}
                    />
            <label >Saldo:</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Cliente..."
                    value={resp.Balance}/>
            <button type="submit" className="u-full-width button-primary ">
                Buscar
            </button>
            </form>
        </div>);

    }else if(opc==='3'){
        return(
            <div>
                <h2>-Clientes Deudores-</h2>
            </div>
        );
    }
     
}
 
export default OpcClientes;