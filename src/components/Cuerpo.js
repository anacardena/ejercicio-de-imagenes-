import React from 'react'// importar siempre react//
import '../utils/css/Cuerpo.estilos.css'
import Ana from '../utils/images/imagen2.jpeg'
function Cuerpo() {
	return (
		<div className="Container_Cuerpo">
		<h1> este  es el componente cuerpo </h1>
		<img src={Ana} alt="hola esta es Ana"/>
        </div>
		)	
};
export default Cuerpo