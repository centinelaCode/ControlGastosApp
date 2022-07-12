import { useState, useEffect } from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';
import {formatearCantidad} from '../helpers'

const ControlPresupuesto = ({ gastos, presupuesto }) => { 

  //states
  const [porcentage, setPorcentage] = useState(0)
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0)

  // calcular 
    useEffect(() =>{

      const totalGastado = gastos.reduce((acc, gasto) => {
        return acc += gasto.cantidad;
      }, 0)

      const totalDisponible = presupuesto - totalGastado;

      // const calculoPorcentage = (gastado/presupuesto)*100;
      const calculoPorcentage = (((presupuesto - totalDisponible) / presupuesto) * 100).toFixed(2);      

      // console.log(totalDisponible, 'disponible');
      setDisponible(totalDisponible);
      // console.log(totalGastado, 'gastado') 
      setGastado(totalGastado);

      setTimeout(() => {
        setPorcentage(calculoPorcentage);
      }, 1500)
    }, [gastos])
  

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <CircularProgressbar 
          value={porcentage}
        />
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