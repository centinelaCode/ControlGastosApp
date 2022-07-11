import {formatearFecha, formatearCantidad} from '../helpers'

const Gasto = ({gasto}) => {
  const { nombre, cantidad, categoria, id, fecha } = gasto;
  return (
    <div className="gasto sombra">
      <div className="contenido-gasto">
        {/* Imagen */}
        <div className="descripcion-gasto">
          <p className="categoria">{categoria}</p>
          <p className="nombre-gasto">{nombre}</p>
          <p className="fecha-gasto">
            Agregado el: {''}
            <span>{formatearFecha(fecha)}</span>
          </p>

        </div>        
      </div>
      <p className="cantidad-gasto">{formatearCantidad(cantidad)}</p>
    </div>
  )
}

export default Gasto