import React from 'react'// importar siempre react//
import '../utils/css/Footer.estilos.css'
import Ana from '../utils/images/imagen3.jpeg'

const Footer = () => {
	return (
		<div className="Container_Footer">
		<div className="Container_Texto">
         <h1> este es el componente de la cabecera</h1>
        <p> es esta sección mostraré la cabeza de la imagen </p>
       </div> 
        <img src={Ana} alt="hola esta es Ana"/>
        </div>
		)	
};
export default Footer