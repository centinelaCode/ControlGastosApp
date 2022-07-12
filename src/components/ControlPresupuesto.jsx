import { useState, useEffect } from 'react'
import {formatearCantidad} from '../helpers'

const ControlPresupuesto = ({ gastos, presupuesto }) => { 

  //states
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0)

  // calcular 
    useEffect(() =>{

      const totalGastado = gastos.reduce((acc, gasto) => {
        return acc += gasto.cantidad;
      }, 0)

      const totalDisponible = presupuesto - totalGastado;
      // console.log(totalDisponible, 'disponible');
      setDisponible(totalDisponible);

      // console.log(totalGastado, 'gastado') 
      setGastado(totalGastado);
    }, [gastos])
  

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
          <span>Disponible: </span>{formatearCantidad(disponible)}
        </p>
        <p>
          <span>Gastado: </span>{formatearCantidad(gastado)}
        </p>
      </div>
    </div>
  ) 
}

export default ControlPresupuesto