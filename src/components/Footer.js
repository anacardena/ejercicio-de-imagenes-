import React from 'react'// importar siempre react//
import '../utils/css/Footer.estilos.css'
import Ana from '../utils/images/imagen3.jpeg'

const Footer = () => {
	return (
		<div className="Container_Footer">
		<h1> este es el componente footer </h1> 
        <img src={Ana} alt="hola esta es Ana"/>
        </div>
		)	
};
export default Footer