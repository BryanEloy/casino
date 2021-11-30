import React,{useState} from 'react';

const OpcVentas = ({opc}) => {

    const [producto, setProducto]= useState({
        nombre:'',
        precio: 0,
        cantidad: 0, 
        info:''
    })

    const [fichas, setFichas]= useState({
        cantidad_ficha:0,
        precio_ficha: 0,
        id: 0
    })

    const {nombre, precio, cantidad, info}= producto;
    const {cantidad_ficha, precio_ficha, id}= fichas;

    const handleChange= e=>{
        setProducto({
            ...producto, [e.target.name]: e.target.value
        });
    }
    const handleChange_ficha= e=>{
        setFichas({
            ...fichas, [e.target.name]: e.target.value
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
        xhttp.open('GET', 'https://databasemancasino03.000webhostapp.com/VentaFichas.php?ClienteId='+ fichas.id + '&Cantidad='+fichas.cantidad_ficha);
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
            xhttp.open('GET', 'https://databasemancasino03.000webhostapp.com/ConsultaCliente.php?Id='+ cliente.id);
            xhttp.send();
          };
        btnBusqueda();
        
    }

    const handleSubmit= e=>{
        e.preventDefault();
        AltaDatos();
    }

    if(opc===0) return null;
    if(opc==='1'){
        return(
        <div>
            <h2>-Venta de Producto-</h2>
            <form onSubmit={handleSubmit}>
                    <label >Nombre del producto:</label>
                    <input
                        type="text"
                        className="u-full-width"
                        placeholder="Producto..."
                        name="nombre"
                        id="nombre"
                        value={nombre}
                        onChange={handleChange}/>

                    <label >Precio:</label>
                    <input
                        type="number"
                        className="u-full-width"
                        placeholder="$..."
                        name="precio"
                        id="precio"
                        value={precio}
                        onChange={handleChange}/>
                    <label >Cantidad:</label>
                    <input
                        type="number"
                        className="u-full-width"
                        placeholder="..."
                        name="cantidad"
                        id="cantidad"
                        value={cantidad}
                        onChange={handleChange}/>
                    <label >Informacion de venta:</label>
                    <input
                        type="text"
                        className="u-full-width"
                        placeholder="..."
                        name="info"
                        id="info"
                        value={info}
                        onChange={handleChange}/>
                    <button type="submit" className="u-full-width button-primary ">
                    Vender
                    </button>
                </form>
            </div>);

    }else if(opc==='2'){
        return(
        <div>
            <h2>-Venta de Fichas-</h2>
            <form onSubmit={handleSubmit}>
            <label >Cantidad:</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="..."
                    name="cantidad_ficha"
                    id="cantidad_ficha"
                    value={cantidad_ficha}
                    onChange={handleChange_ficha}/>

                <label >Precio:</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="$..."
                    name="precio_ficha"
                    id="precio_ficha"
                    value={precio_ficha}
                    onChange={handleChange_ficha}/>
                <label >ID del cliente:</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="..."
                    name="id"
                    id="id"
                    value={id}
                    onChange={handleChange_ficha}/>
                <button type="submit" className="u-full-width button-primary ">
                Vender
                </button>
        </form>
        </div>);        
    }
}
 
export default OpcVentas;