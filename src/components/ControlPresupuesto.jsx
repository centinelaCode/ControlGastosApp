import {formatearCantidad} from '../helpers'

<<<<<<< HEAD
const ControlPresupuesto = ({presupuesto}) => { 
  

=======
const ControlPresupuesto = ({ gastos, presupuesto }) => { 

    
  
>>>>>>> 316fddfe3f2cebbc8156fbde0fb8177e83475740

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <p>Grafica Aqui</p>
      </div>
      <div className="contenido-presupuesto">
        <p>
          <span>Presupuesto: </span>{formatearCantidad(presupuesto)}
        </p>
        <p>
          <span>Disponible: </span>{formatearCantidad(0)}
        </p>
        <p>
          <span>Gastado: </span>{formatearCantidad(gastado)}
        </p>
      </div>
    </div>
  ) 
}

export default ControlPresupuesto