import React from 'react'// importar siempre react//
import '../utils/css/Cuerpo.estilos.css'
import Ana from '../utils/images/imagen2.jpeg'
function Cuerpo() {
	return (
		<div className="Container_Cuerpo">
		<div className="Container_Texto">
         <h1> este es el componente de la cuerpoS</h1>
        <p> es esta sección mostraré la cabeza de la imagen </p>
       </div>
		<img src={Ana} alt="hola esta es Ana"/>
        </div>
		)	
};
export default Cuerpo