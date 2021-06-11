import React from 'react'// importar siempre react//
import '../utils/css/Footer.estilos.css'
import Ana from '../utils/images/imagen3.jpeg'

const Footer = () => {
	return (
		<div className="Container_Footer">
		<div className="Container_Texto">
         <h1> este es el componente inferior</h1>
       <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente laboriosam amet ipsa distinctio sit beatae quisquam voluptas itaque sequi nam eos, nulla saepe nihil cum ea a fuga accusantium laborum</p>
       </div> 
        <img src={Ana} alt="hola esta es Ana"/>
        </div>
		)	
};
export default Footer