import './App.css'
import Counter from './Componentes/Counter'

import Usuario from './Componentes/Usuario'

function App() {

  let atributos: { nombre: string; edad: number };

  atributos = {
    nombre: "Tomi",
    edad: 25,
  };


  return (
    <>
      <h3>React + TypeScript</h3> 
      <Counter></Counter>
      <hr />
      <Usuario></Usuario>  
      <hr />
      <p>Nombre: {atributos.nombre}</p>
      <p>Edad: {atributos.edad}</p>
    </>
  )
}

export default App
