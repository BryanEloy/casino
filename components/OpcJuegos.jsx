import React, {useState} from 'react';

const OpcJuegos = ({opc}) => {

    const [juego, setJuego]= useState({
        nombre:'',
        id_empleado:0
    })

    const {nombre, id_empleado}= juego;

    const handleChange= e=>{
        setJuego({
            ...juego, [e.target.name]: e.target.value
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
        xhttp.open('GET', 'https://databasemancasino03.000webhostapp.com/AltaJuego.php?Titulo='+ juego.nombre + '&EmpleadoId=' + juego.id_empleado );
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
   else if(opc==='1' ){
        return(
            <div>
                <h2>-Agregar Juego-</h2>
                <form onSubmit={handleSubmit}>
                <label >Nombre del juego:</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Juego..."
                    name="nombre"
                    id="nombre"
                    value={nombre}
                    onChange={handleChange}/>

                <label >ID empleado:</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="$..."
                    name="id_empleado"
                    id="id_empleado"
                    value={id_empleado}
                    onChange={handleChange}/>

                <button type="submit" className="u-full-width button-primary ">
                Agregar 
                </button>

            </form>
        </div>);

   }else if(opc==='2'){
        return(
            <div>
                <h2>-Modificar Juego-</h2>
                <form onSubmit={handleSubmit}>
                <label >Nombre del juego:</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Juego..."
                    name="nombre"
                    id="nombre"
                    value={nombre}
                    onChange={handleChange}/>
               <label >ID empleado:</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="$..."
                    name="id_empleado"
                    id="id_empleado"
                    value={id_empleado}
                    onChange={handleChange}/>

                <button type="submit" className="u-full-width button-primary ">
                Agregar 
                </button>
            </form>
            </div>
        );
   }else if(opc==='3'){
       return(
           <div>
               <h2>-Buscar Juego-</h2>
           </div>
       )
   }        
}
 
export default OpcJuegos;