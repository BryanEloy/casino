import React, {useState} from 'react';

const OpcAlmacen = ({opc}) => {
    const [agregar,setAgregar]= useState({
        producto:'',
        id:0,
        tipo:'',
        precio:0,
        precio_venta: 0,
        cantidad: 0
    })
    const {producto, id, tipo, precio, precio_venta, cantidad} =agregar
    const handleChange= e=>{
        setAgregar({
            ...agregar, [e.target.name]: e.target.value
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
        xhttp.open('GET', 'https://databasemancasino03.000webhostapp.com/AltaAlmacen.php?Id_Prov='+ agregar.id + '&TipoProd=' + agregar.tipo + '&PrecioProv=' + agregar.precio + '&PrecioVenta=' + agregar.precio_venta + '&NomProd=' + agregar.producto+ '&Cantidad=' + agregar.cantidad);
        xhttp.send();

    };

    const handleSubmit= e=>{
        e.preventDefault();
        AltaDatos();

    }

    if(opc===0) return null;
    if(opc==='1'){
        return(
            <div>
                <h2>-Agregar Producto-</h2>
                <form onSubmit={handleSubmit}>
                <label >Nombre del producto:</label>
                <input
                    type="text"
                    className="u-full-width"
                    name="producto"
                    id="producto"
                    placeholder="Producto..."
                    value={producto}
                    onChange={handleChange}/>

                <label >Tipo de producto:</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="..."
                    name="tipo"
                    id="tipo"
                    value={tipo}
                    onChange={handleChange}/>

                <label >Precio de compra:</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="$..."
                    name="precio"
                    id="precio"
                    value={precio}
                    onChange={handleChange}/>

                <label >Precio de venta:</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="$..."
                    name="precio_venta"
                    id="precio_venta"
                    value={precio_venta}
                    onChange={handleChange}/>

                <label >Cantidad:</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="0..."
                    name="cantidad"
                    id="cantidad"
                    value={cantidad}
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
                <h2>-Modificar Producto-</h2>
                <form onSubmit={handleSubmit}>
                <label >Nombre del producto:</label>
                <input
                    type="text"
                    className="u-full-width"
                    name="producto"
                    id="producto"
                    placeholder="Producto..."
                    value={producto}
                    onChange={handleChange}/>

                <label >ID:</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="0..."
                    name="id"
                    id="id"
                    value={id}
                    onChange={handleChange}/>

                <label >Tipo de producto:</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="..."
                    name="tipo"
                    id="tipo"
                    value={tipo}
                    onChange={handleChange}/>

                <label >Precio de compra:</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="$..."
                    name="precio"
                    id="precio"
                    value={precio}
                    onChange={handleChange}/>

                <label >Precio de venta:</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="$..."
                    name="precio_venta"
                    id="precio_venta"
                    value={precio_venta}
                    onChange={handleChange}/>

                <label >Cantidad:</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="0..."
                    name="cantidad"
                    id="cantidad"
                    value={cantidad}
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
                <h2>-Buscar Producto-</h2>
            </div>
        )
    }
}
 
export default OpcAlmacen;