import React from 'react'
import '../utils/css/Todo.estilos.css'
import Ana from '../utils/images/imagen1.jpeg'

function Todo () {
    return (
        <div className="Container_Cabecera">
        <div className="Container_Texto">
         <h1> lorem</h1>
        <p> es esta sección mostraré la cabeza de la imagen </p>
       </div>
       <img src={Ana} alt="hola esta es Ana"/>
        </div>

    )
}

export default Todo