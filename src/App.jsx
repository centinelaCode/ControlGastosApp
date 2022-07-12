import { useState, useEffect } from 'react';
import Header from './components/Header';
import ListadoGastos from './components/ListadoGastos'
import Modal from './components/Modal';
import { generarId } from './helpers'
import IconoNuevoGasto from './img/nuevo-gasto.svg';


function App() {

  const [gastos, setGastos] = useState([])

  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false)

  const [gastoEditar, setGastoEditar] = useState({})

  useEffect(() =>{
    // verificamos si el obejto tiene informacion
    if(Object.keys(gastoEditar).length > 0) {
      // si tiene un objeto a editar mostranmos el modal 
      setModal(true);
      setTimeout(() => {
        setAnimarModal(true);
      }, 500) 
    }

  }, [gastoEditar])

  const handleNuevoGasto =() => {
    setModal(true);
    setGastoEditar({});

    setTimeout(() => {
      setAnimarModal(true);
    }, 500)    
  }

  const guardarGasto = gasto => {
    console.log(gasto)
    
    if(gasto.id) {
      // Se actualiza

      // se recorren con map y solo se cambia el gasto actualizado pero los demas gastos si se pasan
      const gastosActualizados = gastos.map(gastoState => gastoState.id === gasto.id ? gasto : gastoState)      
      setGastos(gastosActualizados);
    } else {
      // se guarda un Nuevo Gasto
      gasto.id = generarId();
      gasto.fecha = Date.now();
      setGastos([...gastos, gasto]);
    }
    
    // para cerrar el modal con animacion
    setAnimarModal(false);      
    setTimeout(() => {
      setModal(false);
    },500);
  }

  return (
    <div className={modal ? 'fijar' : ''}>
      <Header
        gastos={gastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />

      {isValidPresupuesto && (
        <>
          <main>
            <ListadoGastos 
              gastos={gastos}
              setGastoEditar={setGastoEditar}
            />
          </main>

          <div className="nuevo-gasto">
            <img 
              src={IconoNuevoGasto} 
              alt="Icono nuevo gasto" 
              onClick={handleNuevoGasto}
            />
          </div>
        </>

      )}

      {modal && (
        <Modal 
          setModal={setModal}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
          guardarGasto={guardarGasto}
          gastoEditar={gastoEditar}
        />
      )}

    </div>
  )
}

export default App
